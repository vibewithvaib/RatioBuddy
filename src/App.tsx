import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  ChevronRight, 
  ChevronLeft, 
  LayoutDashboard, 
  BookOpen, 
  Trophy,
  AlertCircle,
  Star,
  Calendar,
  User as UserIcon,
  X,
  Lock,
  RotateCcw,
  Lightbulb,
  LogOut,
  LogIn
} from 'lucide-react';
import { COMPARING_QUANTITIES_CONTENT } from './data/content';
import { LearnerState, KnowledgeComponent, Topic, Question, SessionData, Difficulty, Interaction } from './types/index';
import { BUG_LIBRARY } from './data/bugs';
import { updateMastery, getInstructionalAction, BKT_PARAMS, MASTERY_THRESHOLDS } from './lib/bkt';
import { ConceptStage } from './components/Tutor/ConceptStage';
import { Assessment } from './components/Tutor/Assessment';
import { ProgressOverview } from './components/Dashboard/ProgressOverview';
import { getUserState, saveUserState, logInteraction, setupUser, testConnection, clearAllData, subscribeToUserState } from './services/dbService';
import { auth, signIn, logOut, isFirebaseEnabled } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

type AppView = 'dashboard' | 'tutor' | 'summary';
type TutorStage = 'hook' | 'exploration' | 'explanation' | 'story' | 'practice';

// Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean, error: any }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) { return { hasError: true, error }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-red-50 flex items-center justify-center p-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-red-100">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Something went wrong</h2>
            <button onClick={() => window.location.reload()} className="w-full py-3 bg-red-600 text-white rounded-xl font-bold">Refresh Page</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [view, setView] = useState<AppView>('dashboard');
  const [currentSubtopicIdx, setCurrentSubtopicIdx] = useState(0);
  const [currentConceptIdx, setCurrentConceptIdx] = useState(0);
  const [tutorStage, setTutorStage] = useState<TutorStage>('hook');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [lockedDifficulty, setLockedDifficulty] = useState<Difficulty | null>(null);
  
  const [learnerState, setLearnerState] = useState<LearnerState>(() => {
    const initialMastery: Record<string, number> = {};
    COMPARING_QUANTITIES_CONTENT.knowledge_components.forEach(s => {
      initialMastery[s.kc_id] = 0.15; // Force 0.15 as start for 0% visual
    });
    return { mastery: initialMastery, interactions: [], consecutive_errors: 0 };
  });

  const resetLearnerState = () => {
    const initialMastery: Record<string, number> = {};
    COMPARING_QUANTITIES_CONTENT.knowledge_components.forEach(s => {
      initialMastery[s.kc_id] = 0.15;
    });
    setLearnerState({ mastery: initialMastery, interactions: [], consecutive_errors: 0 });
  };

  const getVisualMastery = (p: number) => {
    const base = 0.15;
    if (p <= base) return 0;
    return Math.min(1, (p - base) / (1 - base));
  };

  const totalMastery = Object.values(learnerState.mastery).reduce((a, b) => a + getVisualMastery(b), 0);
  const averageMastery = totalMastery / COMPARING_QUANTITIES_CONTENT.knowledge_components.length;
  
  // Smoother level progression: Level 0-10
  const currentLevel = Math.floor(averageMastery * 10);
  const xpProgress = Math.floor((averageMastery * 10 % 1) * 100);

  const [sessionMetrics, setSessionMetrics] = useState({
    correct: 0,
    wrong: 0,
    hints: 0,
    startTime: Date.now(),
    interactions: [] as Interaction[]
  });

  useEffect(() => {
    if (!isFirebaseEnabled || !auth) {
      const mockUser = { uid: 'mock-user', email: 'mock@example.com', displayName: 'Guest User' };
      setUser(mockUser);
      setupUser(mockUser);
      setIsAuthReady(true);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        await setupUser(firebaseUser);
      } else {
        setUser(null);
      }
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && isAuthReady) {
      const unsubscribe = subscribeToUserState(user.uid, (savedState) => {
        if (savedState) {
          // If savedState.mastery is empty, it means a reset happened
          const isReset = !savedState.mastery || Object.keys(savedState.mastery).length === 0;
          
          if (isReset) {
            resetLearnerState();
          } else {
            setLearnerState(prev => ({
              ...prev,
              mastery: { ...prev.mastery, ...savedState.mastery },
              consecutive_errors: savedState.consecutive_errors || 0
            }));
          }
        }
      });
      return () => unsubscribe();
    }
  }, [user, isAuthReady]);

  useEffect(() => {
    const initApp = async () => {
      await testConnection();
    };
    initApp();
  }, []);

  const currentSubtopic = COMPARING_QUANTITIES_CONTENT.knowledge_components[currentSubtopicIdx];
  const currentConcept = currentSubtopic.topics[currentConceptIdx];
  
  // Adaptation Logic: Determine difficulty based on mastery and recent performance
  const currentMastery = learnerState.mastery[currentSubtopic.kc_id] || 0.15;
  
  const getDifficulty = (mastery: number, consecutiveErrors: number): Difficulty => {
    if (consecutiveErrors >= 2) return 'easy';
    if (mastery < MASTERY_THRESHOLDS.GUIDED) return 'easy';
    if (mastery < MASTERY_THRESHOLDS.STANDARD) return 'medium';
    return 'hard';
  };

  // Stabilize difficulty: only update when stage changes to practice or after an answer
  useEffect(() => {
    if (tutorStage !== 'practice') {
      setLockedDifficulty(null);
    }
  }, [tutorStage]);

  const currentDifficulty = lockedDifficulty || getDifficulty(currentMastery, learnerState.consecutive_errors);

  // Fallback if no questions match the difficulty exactly
  const filteredQuestions = currentConcept.questions.filter(q => q.difficulty === currentDifficulty);
  const availableQuestions = filteredQuestions.length > 0 ? filteredQuestions : currentConcept.questions;
  const staticQuestion = availableQuestions[currentQuestionIdx % availableQuestions.length];
  
  const currentQuestion = staticQuestion;

  const stages: TutorStage[] = ['hook', 'exploration', 'explanation', 'story', 'practice'];
  const currentStageIdx = stages.indexOf(tutorStage);

  const [completedStages, setCompletedStages] = useState<Set<TutorStage>>(new Set(['hook']));
  const [canProceed, setCanProceed] = useState(false);

  useEffect(() => {
    // Reset progression for new concept
    setCompletedStages(new Set(['hook']));
    setCanProceed(false);
    setLearnerState(prev => ({ ...prev, consecutive_errors: 0 }));
  }, [currentConceptIdx, currentSubtopicIdx]);

  useEffect(() => {
    // Logic to enable "Continue" button
    if (tutorStage === 'practice') {
      setCanProceed(true); // Assessment handles its own "Next"
    } else {
      // All other stages require explicit completion via ConceptStage
      setCanProceed(false);
    }
  }, [tutorStage]);

  const handleNextStage = () => {
    if (canProceed && currentStageIdx < stages.length - 1) {
      const nextStage = stages[currentStageIdx + 1];
      setCompletedStages(prev => new Set([...prev, nextStage]));
      
      // Lock difficulty when entering practice
      if (nextStage === 'practice') {
        setLockedDifficulty(getDifficulty(currentMastery, learnerState.consecutive_errors));
      }
      
      setTutorStage(nextStage);
      setCanProceed(false);
    }
  };

  const handlePrevStage = () => {
    if (currentStageIdx > 0) {
      setTutorStage(stages[currentStageIdx - 1]);
      setCanProceed(true);
    }
  };

  const [showResetModal, setShowResetModal] = useState(false);
  const [showStruggleModal, setShowStruggleModal] = useState(false);

  const handleReset = async () => {
    await clearAllData();
    sessionStorage.clear();
    window.location.reload();
  };

  const handleAssessmentResult = async (isCorrect: boolean, hintsUsed: number, attempts: number, studentAnswer: string) => {
    const currentMastery = learnerState.mastery[currentSubtopic.kc_id] || 0.15;
    const newMastery = updateMastery(currentSubtopic.kc_id, currentMastery, isCorrect, hintsUsed, attempts);
    
    const isStruggling = !isCorrect || attempts > 1;
    const newConsecutiveErrors = isStruggling ? learnerState.consecutive_errors + 1 : 0;

    const interaction = {
      question_id: currentQuestion.question_id,
      question_type: currentQuestion.question_type,
      difficulty: currentQuestion.difficulty,
      student_answer: studentAnswer,
      correct_answer: currentQuestion.correct_answer,
      is_correct: isCorrect,
      time_taken_sec: 0,
      hints_used: hintsUsed,
      attempts: attempts,
      kc: currentSubtopic.kc_id,
      subtopic: currentConcept.title,
      timestamp: new Date().toISOString()
    };

    // Update locked difficulty for next question
    const nextDifficulty = getDifficulty(newMastery, newConsecutiveErrors);
    setLockedDifficulty(nextDifficulty);

    const newState = {
      ...learnerState,
      mastery: { ...learnerState.mastery, [currentSubtopic.kc_id]: newMastery },
      interactions: [...learnerState.interactions, interaction],
      consecutive_errors: newConsecutiveErrors
    };

    // Update local state immediately
    setLearnerState(newState);
    setSessionMetrics(prev => ({
      ...prev,
      correct: prev.correct + (isCorrect ? 1 : 0),
      wrong: prev.wrong + (isCorrect ? 0 : 1),
      hints: prev.hints + hintsUsed,
      interactions: [...prev.interactions, interaction]
    }));

    if (user) {
      saveUserState(user.uid, { mastery: newState.mastery, consecutive_errors: newState.consecutive_errors });
      logInteraction(user.uid, interaction);
    }

    // Progression Logic
    if (newConsecutiveErrors >= 3) {
      setShowStruggleModal(true);
      setTutorStage('explanation');
      setCurrentQuestionIdx(0);
      setLearnerState(prev => ({ ...prev, consecutive_errors: 0 }));
      return;
    }

    const isConceptFinished = currentQuestionIdx >= availableQuestions.length - 1;

    if (isConceptFinished) {
      // Only advance if they have at least GUIDED mastery, otherwise loop or remedial
      if (newMastery >= MASTERY_THRESHOLDS.GUIDED) {
        if (currentConceptIdx < currentSubtopic.topics.length - 1) {
          setCurrentConceptIdx(prev => prev + 1);
          setTutorStage('hook');
          setCurrentQuestionIdx(0);
        } else if (currentSubtopicIdx < COMPARING_QUANTITIES_CONTENT.knowledge_components.length - 1) {
          setCurrentSubtopicIdx(prev => prev + 1);
          setCurrentConceptIdx(0);
          setTutorStage('hook');
          setCurrentQuestionIdx(0);
        } else {
          setView('summary');
        }
      } else {
        // Struggling at the end of the concept - send back to explanation
        setTutorStage('explanation');
        setCurrentQuestionIdx(0);
      }
    } else {
      // Not finished yet, go to next question in the current set
      setCurrentQuestionIdx(prev => prev + 1);
    }
  };

  const generateSessionReport = (): SessionData => {
    const endTime = new Date().toISOString();
    const duration = Math.round((Date.now() - sessionMetrics.startTime) / 1000);
    
    return {
      session_id: `sess_${new Date().getTime()}`,
      timestamp_start: new Date(sessionMetrics.startTime).toISOString(),
      timestamp_end: endTime,
      student: {
        student_id: user.uid,
        grade: COMPARING_QUANTITIES_CONTENT.class,
        current_kc: currentSubtopic.kc_id
      },
      chapter: {
        chapter_id: COMPARING_QUANTITIES_CONTENT.chapter.id,
        chapter_name: COMPARING_QUANTITIES_CONTENT.chapter.name
      },
      topic: {
        topic_id: currentConcept.topic_id,
        topic_name: currentConcept.title
      },
      session_summary: {
        total_questions_attempted: sessionMetrics.correct + sessionMetrics.wrong,
        correct_answers: sessionMetrics.correct,
        incorrect_answers: sessionMetrics.wrong,
        accuracy: Number(((sessionMetrics.correct / (sessionMetrics.correct + sessionMetrics.wrong || 1))).toFixed(2)),
        time_spent_seconds: duration,
        final_mastery_probability: Number((learnerState.mastery[currentSubtopic.kc_id] || 0).toFixed(2)),
        mastery_status: getInstructionalAction(learnerState.mastery[currentSubtopic.kc_id] || 0)
      },
      interactions: sessionMetrics.interactions,
      learning_actions: {
        remedial_triggered: sessionMetrics.wrong > 0 || sessionMetrics.interactions.some(i => i.attempts > 1),
        remedial_topic: "Reviewing " + currentConcept.title,
        extra_practice_given: sessionMetrics.wrong > 1 || learnerState.consecutive_errors > 1,
        difficulty_adjustment: learnerState.consecutive_errors >= 2 ? "decreased" : (learnerState.mastery[currentSubtopic.kc_id] > 0.8 ? "increased" : "maintained"),
        next_recommended_topic: currentConceptIdx < currentSubtopic.topics.length - 1 ? currentSubtopic.topics[currentConceptIdx + 1].title : "Next Subtopic",
        next_kc_unlock_status: averageMastery > 0.7 ? "unlocked" : "locked"
      },
      misconceptions_detected: sessionMetrics.interactions
        .filter(i => !i.is_correct && i.student_answer && currentQuestion.bug_map?.[i.student_answer])
        .map(i => {
          const bugId = currentQuestion.bug_map![i.student_answer!];
          const bug = BUG_LIBRARY.find(b => b.bug_id === bugId);
          return {
            type: bug?.misconception || "Unknown",
            description: bug?.feedback || "Incorrect answer"
          };
        }),
      engagement_metrics: {
        avg_time_per_question: Math.round(duration / (sessionMetrics.correct + sessionMetrics.wrong || 1)),
        hint_dependency_ratio: Number((sessionMetrics.hints / (sessionMetrics.correct + sessionMetrics.wrong || 1)).toFixed(2)),
        retry_rate: Number((sessionMetrics.interactions.filter(i => i.attempts > 1).length / (sessionMetrics.interactions.length || 1)).toFixed(2)),
        focus_score: 0.85
      },
      system_decision: {
        confidence: 0.9,
        action_taken: learnerState.consecutive_errors >= 3 ? "triggered_explanation_review" : (learnerState.consecutive_errors >= 2 ? "lowered_difficulty" : "continue_standard_flow"),
        reason: learnerState.consecutive_errors >= 3 
          ? "Student struggled with 3 consecutive questions, triggering a review of the explanation."
          : (learnerState.consecutive_errors >= 2 ? "Student struggled with 2 consecutive questions, lowering difficulty." : "Student is progressing normally.")
      }
    };
  };

  const downloadReport = () => {
    const report = generateSessionReport();
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `session_report_${report.session_id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isAuthReady) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 rounded-[4rem] shadow-2xl max-w-md w-full border-2 border-gray-50 text-center space-y-8"
        >
          <div className="w-24 h-24 bg-primary rounded-[32px] shadow-xl flex items-center justify-center mx-auto transform -rotate-6">
            <GraduationCap className="w-12 h-12 text-white" />
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-primary">Ratio<span className="text-secondary">Buddy</span></h1>
            <p className="text-primary/60 font-semibold">Your personal math tutor for 7th grade!</p>
          </div>
          <button 
            onClick={signIn}
            className="w-full py-5 bg-primary text-white rounded-[24px] font-bold text-xl shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center justify-center gap-3"
          >
            <LogIn size={24} /> Sign in with Google
          </button>
          <p className="text-xs text-primary/40 font-bold uppercase tracking-wider">Start your learning journey today</p>
        </motion.div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-primary font-sans">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-8 py-5 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5 cursor-pointer group" onClick={() => setView('dashboard')}>
            <div className="p-3 bg-primary rounded-[20px] shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Ratio<span className="text-secondary">Buddy</span></h1>
            </div>
          </div>


            <div className="flex items-center gap-8">
              <button 
                onClick={() => setView('dashboard')}
                className={`text-lg font-bold transition-all hover:scale-105 ${view === 'dashboard' ? 'text-primary' : 'text-primary/40 hover:text-primary'}`}
              >
                Dashboard
              </button>
              <div className="flex items-center gap-4 bg-bg px-5 py-3 rounded-[24px] border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-sm shadow-sm overflow-hidden">
                  {user.photoURL ? <img src={user.photoURL} alt="" className="w-full h-full object-cover" /> : <UserIcon size={20} />}
                </div>
                <div className="hidden sm:block">
                  <div className="text-[11px] font-bold text-primary/40 uppercase leading-none mb-1.5">Level {currentLevel}</div>
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-accent shadow-sm" style={{ width: `${xpProgress}%` }} />
                  </div>
                </div>
              </div>
              <button 
                onClick={logOut}
                className="p-3 hover:bg-red-50 rounded-2xl text-primary/40 hover:text-red-500 transition-all active:scale-95"
                title="Sign Out"
              >
                <LogOut size={24} />
              </button>
            </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
            <AnimatePresence mode="wait">
              {view === 'dashboard' && (
                <motion.div key="dashboard" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-10">
                  {/* Hero Section */}
                  <div className="bg-white p-12 rounded-[4rem] shadow-xl border-2 border-gray-50 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full -ml-40 -mb-40 blur-3xl" />
                    
                    <div className="relative z-10 flex-1 space-y-6 text-center md:text-left">
                      <h2 className="text-4xl font-bold text-primary leading-tight">Let’s Master Comparing Quantities!</h2>
                      <p className="text-xl text-primary/60 font-semibold">You’re doing great, keep going 🚀</p>
                      <button 
                        onClick={() => setShowResetModal(true)}
                        className="mt-4 text-sm font-bold text-red-500 hover:text-red-700 transition-colors flex items-center gap-2"
                      >
                        <RotateCcw size={16} /> Reset All Progress
                      </button>
                    </div>

                    <div className="relative z-10 w-56 h-56 bg-primary/10 rounded-full flex items-center justify-center shadow-inner">
                      <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="text-9xl"
                      >
                        🤖
                      </motion.div>
                      <div className="absolute -top-6 -right-6 bg-white p-5 rounded-[24px] shadow-2xl border border-gray-100 max-w-[160px] transform rotate-3">
                        <p className="text-xs font-bold text-primary leading-relaxed">"Awesome job! You're getting better!"</p>
                      </div>
                    </div>
                  </div>

                  {/* Progress Card */}
                  <div className="bg-white p-10 rounded-[4rem] shadow-xl border-2 border-gray-50">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                        <Star className="text-accent fill-accent" /> Your Progress
                      </h3>
                      <div className="text-sm font-bold text-primary uppercase bg-bg px-4 py-2 rounded-full">Level {currentLevel}</div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex justify-between text-base font-bold text-primary/40">
                        <span>XP Progress</span>
                        <span>{xpProgress} / 100 XP</span>
                      </div>
                      <div className="w-full h-6 bg-bg rounded-full overflow-hidden p-1.5 shadow-inner">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${xpProgress}%` }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-sm"
                        />
                      </div>
                      <div className="flex gap-3 pt-4">
                        {[1, 2, 3, 4, 5].map(i => (
                          <div key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${i <= 3 ? 'bg-accent text-primary shadow-md scale-110' : 'bg-bg text-gray-300'}`}>
                            <Star size={20} fill={i <= 3 ? "currentColor" : "none"} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-10">
                    <h3 className="text-2xl font-bold text-primary flex items-center gap-4">
                      <BookOpen className="text-primary" size={32} />
                      Learning Journey
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {COMPARING_QUANTITIES_CONTENT.knowledge_components.map((s, idx) => {
                        const isLocked = idx > 0 && getVisualMastery(learnerState.mastery[COMPARING_QUANTITIES_CONTENT.knowledge_components[idx - 1].kc_id] || 0.15) < MASTERY_THRESHOLDS.STANDARD;
                        const mastery = getVisualMastery(learnerState.mastery[s.kc_id] || 0.15) * 100;
                        
                        // Icons for each topic
                        const icons = ["📊", "⚖️", "🔢", "🏷️", "📈", "📉", "💰", "🏦"];
                        const difficulties = ["Easy", "Easy", "Medium", "Medium", "Medium", "Hard", "Hard", "Hard"];
                        const diffColors = {
                          "Easy": "bg-success/20 text-success",
                          "Medium": "bg-accent/20 text-primary",
                          "Hard": "bg-error/20 text-error"
                        };
                        
                        return (
                          <motion.div 
                            key={s.kc_id} 
                            whileHover={!isLocked ? { scale: 1.03, y: -8 } : {}}
                            className={`bg-white p-10 rounded-[3.5rem] border-2 shadow-sm transition-all group relative overflow-hidden ${
                              isLocked ? 'opacity-75 grayscale bg-gray-50 border-gray-200' : 'hover:shadow-2xl hover:border-primary border-gray-100'
                            }`}
                          >
                            {isLocked && (
                              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/60 backdrop-blur-[3px]">
                                <div className="p-5 bg-white rounded-full shadow-2xl border-2 border-gray-100 mb-4">
                                  <Lock className="text-gray-400" size={36} />
                                </div>
                                <p className="text-base font-bold text-gray-500 uppercase">Locked</p>
                              </div>
                            )}
                            
                            <div className="flex justify-between items-start mb-8 relative z-10">
                              <div className="text-5xl drop-shadow-sm">{icons[idx % icons.length]}</div>
                              <div className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase shadow-sm ${diffColors[difficulties[idx % difficulties.length] as keyof typeof diffColors]}`}>
                                {difficulties[idx % difficulties.length]}
                              </div>
                            </div>

                            <h4 className="text-xl font-bold text-primary mb-3 relative z-10">{s.name}</h4>
                            <p className="text-primary/60 text-sm mb-10 relative z-10 font-semibold leading-relaxed">
                              {s.topics.length} fun concepts to master!
                            </p>

                            <div className="flex items-center justify-between gap-5 relative z-10">
                              <div className="flex-1">
                                <div className="w-full h-3 bg-bg rounded-full overflow-hidden shadow-inner">
                                  <div className="h-full bg-primary shadow-sm" style={{ width: `${mastery}%` }} />
                                </div>
                              </div>
                              <span className="text-sm font-bold text-primary">{Math.round(mastery)}%</span>
                            </div>

                            <button 
                              disabled={isLocked}
                              onClick={() => { setCurrentSubtopicIdx(idx); setCurrentConceptIdx(0); setTutorStage('hook'); setView('tutor'); }} 
                              className={`w-full mt-8 py-5 rounded-[24px] font-bold text-base transition-all flex items-center justify-center gap-3 relative z-10 shadow-lg ${
                                isLocked 
                                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none' 
                                  : 'bg-primary text-white hover:bg-secondary hover:shadow-primary/30 active:scale-95'
                              }`}
                            >
                              {mastery >= MASTERY_THRESHOLDS.STANDARD * 100 ? 'Review' : 'Start Journey'} <ChevronRight size={22} />
                            </button>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {view === 'tutor' && (
                <motion.div key="tutor" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="max-w-4xl mx-auto space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[11px] font-bold text-primary uppercase">
                        <span>{currentSubtopic.name}</span> <ChevronRight size={12} /> <span className="text-primary/40">{currentConcept.title}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-primary">{tutorStage === 'practice' ? "Time to Practice!" : "Learning Journey"}</h2>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col items-end gap-3">
                        <div className="flex items-center gap-4">
                          <span className="text-[11px] font-bold text-primary uppercase">Mastery</span>
                          <div className="w-40 h-3 bg-bg rounded-full overflow-hidden border border-gray-100 shadow-inner">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${getVisualMastery(learnerState.mastery[currentSubtopic.kc_id] || 0.15) * 100}%` }}
                              className="h-full bg-primary shadow-sm"
                            />
                          </div>
                          <span className="text-[11px] font-bold text-primary">{Math.round(getVisualMastery(learnerState.mastery[currentSubtopic.kc_id] || 0.15) * 100)}%</span>
                        </div>
                        <div className="flex gap-3">
                          {stages.map((s, i) => (
                            <div key={s} className={`h-2 rounded-full transition-all shadow-sm ${i <= currentStageIdx ? "w-10 bg-primary" : "w-5 bg-gray-200"}`} />
                          ))}
                        </div>
                      </div>
                      <button 
                        onClick={() => setView('dashboard')}
                        className="p-3 hover:bg-white rounded-2xl text-primary/40 hover:text-primary transition-all hover:shadow-md active:scale-95"
                        title="Exit to Dashboard"
                      >
                        <X size={24} />
                      </button>
                    </div>
                  </div>

                  <div className="min-h-[400px] flex flex-col justify-center">
                    {tutorStage === 'practice' ? (
                      <Assessment key={currentQuestion.question_id} question={currentQuestion} onResult={handleAssessmentResult} />
                    ) : (
                      <ConceptStage concept={currentConcept} stage={tutorStage} onComplete={() => setCanProceed(true)} />
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-8">
                    <button onClick={handlePrevStage} disabled={currentStageIdx === 0} className="flex items-center gap-3 px-8 py-4 rounded-3xl font-bold text-primary/40 hover:bg-white hover:text-primary disabled:opacity-0 transition-all active:scale-95">
                      <ChevronLeft size={24} /> Previous
                    </button>
                    {tutorStage !== 'practice' && (
                      <button 
                        onClick={handleNextStage} 
                        disabled={!canProceed}
                        className={`flex items-center gap-3 px-10 py-4 rounded-3xl font-bold text-xl shadow-xl transition-all ${
                          canProceed 
                            ? "bg-primary text-white shadow-primary/20 hover:scale-105 active:scale-95" 
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        {currentStageIdx === stages.length - 2 ? "Start Practice" : "Continue"} <ChevronRight size={24} />
                      </button>
                    )}
                  </div>
                </motion.div>
              )}

              {view === 'summary' && (
                <motion.div key="summary" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-3xl mx-auto text-center space-y-12 py-16">
                  <div className="w-40 h-40 bg-accent/20 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <Trophy className="w-20 h-20 text-accent fill-accent drop-shadow-lg" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-primary">Chapter Completed!</h2>
                    <p className="text-xl text-primary/60 font-semibold">You've mastered the foundations of Comparing Quantities.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-[3.5rem] border-2 border-gray-50 shadow-xl">
                      <div className="text-4xl font-bold text-primary">{sessionMetrics.correct}</div>
                      <div className="text-[11px] font-bold text-primary/40 uppercase mt-2">Correct</div>
                    </div>
                    <div className="bg-white p-8 rounded-[3.5rem] border-2 border-gray-50 shadow-xl">
                      <div className="text-4xl font-bold text-accent">{sessionMetrics.hints}</div>
                      <div className="text-[11px] font-bold text-primary/40 uppercase mt-2">Hints</div>
                    </div>
                    <div className="bg-white p-8 rounded-[3.5rem] border-2 border-gray-50 shadow-xl">
                      <div className="text-4xl font-bold text-secondary">{Math.round((Date.now() - sessionMetrics.startTime) / 60000)}m</div>
                      <div className="text-[11px] font-bold text-primary/40 uppercase mt-2">Time</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                    <button onClick={() => setView('dashboard')} className="w-full sm:w-auto px-12 py-5 bg-white text-primary border-2 border-gray-100 rounded-[2.5rem] font-bold text-xl shadow-lg hover:bg-gray-50 transition-all active:scale-95">Back to Dashboard</button>
                    <button onClick={downloadReport} className="w-full sm:w-auto px-8 py-5 bg-secondary/10 text-secondary rounded-[2.5rem] font-bold text-xl hover:bg-secondary/20 transition-all flex items-center justify-center gap-2 active:scale-95">
                      <BookOpen size={24} /> Download Report
                    </button>
                    {currentSubtopicIdx < COMPARING_QUANTITIES_CONTENT.knowledge_components.length - 1 && (learnerState.mastery[currentSubtopic.kc_id] || 0) >= MASTERY_THRESHOLDS.STANDARD && (
                      <button 
                        onClick={() => {
                          setCurrentSubtopicIdx(prev => prev + 1);
                          setCurrentConceptIdx(0);
                          setTutorStage('hook');
                          setView('tutor');
                        }} 
                        className="w-full sm:w-auto px-12 py-5 bg-primary text-white rounded-[2.5rem] font-bold text-xl shadow-2xl shadow-primary/30 hover:scale-105 transition-all flex items-center justify-center gap-3 active:scale-95"
                      >
                        Next Module <ChevronRight size={24} />
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </main>

        {/* Custom Modals */}
        <AnimatePresence>
          {showResetModal && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/40 backdrop-blur-sm"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-md w-full border-4 border-error/20"
              >
                <div className="w-20 h-20 bg-error/10 text-error rounded-full flex items-center justify-center mx-auto mb-8">
                  <RotateCcw size={40} />
                </div>
                <h3 className="text-2xl font-bold text-primary text-center mb-4">Reset Progress?</h3>
                <p className="text-primary/60 text-center font-semibold mb-10 leading-relaxed">
                  Are you sure you want to reset all your progress? This cannot be undone and you will start from Level 0.
                </p>
                <div className="flex gap-4">
                  <button onClick={() => setShowResetModal(false)} className="flex-1 py-4 bg-bg text-primary font-bold rounded-2xl hover:bg-gray-100 transition-all">Cancel</button>
                  <button onClick={handleReset} className="flex-1 py-4 bg-error text-white font-bold rounded-2xl hover:bg-red-600 transition-all shadow-lg shadow-error/20">Reset Now</button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {showStruggleModal && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/40 backdrop-blur-sm"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-md w-full border-4 border-accent/20"
              >
                <div className="w-20 h-20 bg-accent/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                  <Lightbulb size={40} />
                </div>
                <h3 className="text-2xl font-bold text-primary text-center mb-4">Let's Review!</h3>
                <p className="text-primary/60 text-center font-semibold mb-10 leading-relaxed">
                  It seems you're finding this a bit tricky. Let's go back to the explanation to clear things up!
                </p>
                <button onClick={() => setShowStruggleModal(false)} className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all shadow-lg">Got it!</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  );
}
