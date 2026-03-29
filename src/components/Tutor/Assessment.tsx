import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question, Bug } from '../../types';
import { HelpCircle, CheckCircle2, XCircle, ArrowRight, RotateCcw, AlertTriangle, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import { BUG_LIBRARY } from '../../data/bugs';

interface AssessmentProps {
  question: Question;
  onResult: (isCorrect: boolean, hintsUsed: number, attempts: number, studentAnswer: string) => void;
}

export function Assessment({ question, onResult }: AssessmentProps) {
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const [showFeedback, setShowFeedback] = React.useState(false);
  const [hintsUsed, setHintsUsed] = React.useState(0);
  const [attempts, setAttempts] = React.useState(1);
  const [isRemedial, setIsRemedial] = React.useState(false);
  const [remedialAnswer, setRemedialAnswer] = React.useState('');
  const [detectedBug, setDetectedBug] = React.useState<Bug | null>(null);
  const [remedialHintUsed, setRemedialHintUsed] = React.useState(false);
  const [currentRemedialImageIdx, setCurrentRemedialImageIdx] = React.useState(0);

  const handleOptionClick = (option: string) => {
    if (showFeedback) return;
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    setShowFeedback(true);

    if (selectedOption === question.correct_answer) {
      import('canvas-confetti').then(confetti => {
        confetti.default({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6C63FF', '#4DA8DA', '#FFD166']
        });
      });
    }

    if (selectedOption !== question.correct_answer && question.bug_map) {
      const bugId = question.bug_map[selectedOption];
      if (bugId) {
        const bug = BUG_LIBRARY.find(b => b.bug_id === bugId);
        if (bug) setDetectedBug(bug);
      }
    }
  };

  const handleNext = () => {
    const isCorrect = selectedOption === question.correct_answer;
    if (!isCorrect) {
      setIsRemedial(true);
      return;
    }
    onResult(isCorrect, hintsUsed, attempts, selectedOption || '');
    // Reset local state for next question
    setSelectedOption(null);
    setShowFeedback(false);
    setHintsUsed(0);
    setAttempts(1);
    setIsRemedial(false);
    setRemedialAnswer('');
    setDetectedBug(null);
    setRemedialHintUsed(false);
    setCurrentRemedialImageIdx(0);
  };

  const handleHint = () => {
    if (hintsUsed < 3) {
      setHintsUsed(prev => prev + 1);
    } else if (hintsUsed === 3) {
      setIsRemedial(true);
    }
  };

  const handleRemedialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (remedialAnswer.trim().toLowerCase() === question.remedial.scaffolded_answer.toLowerCase()) {
      import('canvas-confetti').then(confetti => {
        confetti.default({
          particleCount: 50,
          spread: 50,
          origin: { y: 0.8 },
          colors: ['#008080', '#FF6600']
        });
      });
      setIsRemedial(false);
      setShowFeedback(false);
      setSelectedOption(null);
      setAttempts(prev => prev + 1);
      setHintsUsed(0); // Reset hints so they can use them again if needed
      setCurrentRemedialImageIdx(0);
    } else {
      // If they fail the remedial, increment attempts and show a hint
      setAttempts(prev => prev + 1);
      setRemedialHintUsed(true);
    }
  };

  const getHintText = () => {
    if (hintsUsed === 1) return question.hints.general;
    if (hintsUsed === 2) return question.hints.strategic;
    if (hintsUsed === 3) return question.hints.bottom_out;
    return null;
  };

  if (isRemedial && question.remedial) {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-2xl mx-auto space-y-6"
      >
        {question.remedial.remedial_images && question.remedial.remedial_images.length > 0 && (
          <div className="relative group">
            <div className="aspect-video rounded-[2.5rem] overflow-hidden border-8 border-secondary/20 shadow-2xl bg-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentRemedialImageIdx}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  src={question.remedial.remedial_images[currentRemedialImageIdx]}
                  alt={`Remedial visual ${currentRemedialImageIdx + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>

            {question.remedial.remedial_images.length > 1 && (
              <>
                <div className="absolute inset-y-0 left-4 flex items-center">
                  <button
                    onClick={() => setCurrentRemedialImageIdx(prev => (prev - 1 + question.remedial.remedial_images!.length) % question.remedial.remedial_images!.length)}
                    className="p-3 bg-white/90 hover:bg-white text-primary rounded-full shadow-xl transition-all hover:scale-110 active:scale-95 border-2 border-secondary/20"
                  >
                    <ChevronLeft size={24} strokeWidth={3} />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-4 flex items-center">
                  <button
                    onClick={() => setCurrentRemedialImageIdx(prev => (prev + 1) % question.remedial.remedial_images!.length)}
                    className="p-3 bg-white/90 hover:bg-white text-primary rounded-full shadow-xl transition-all hover:scale-110 active:scale-95 border-2 border-secondary/20"
                  >
                    <ChevronRight size={24} strokeWidth={3} />
                  </button>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 bg-black/20 backdrop-blur-md rounded-full">
                  {question.remedial.remedial_images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentRemedialImageIdx(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === currentRemedialImageIdx ? 'bg-secondary w-8' : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="bg-secondary/10 p-8 rounded-[2rem] border-4 border-secondary shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
              <Lightbulb size={24} strokeWidth={3} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-3">Step-by-Step Help</h3>
              
              {detectedBug && (
                <div className="mb-6 p-4 bg-error/10 border-2 border-error/20 rounded-2xl">
                  <h4 className="text-error font-bold text-xs mb-1 flex items-center gap-2">
                    <AlertTriangle size={14} /> What happened?
                  </h4>
                  <p className="text-primary text-sm font-semibold leading-relaxed">{detectedBug.feedback}</p>
                </div>
              )}

              <p className="text-lg text-primary/80 font-medium leading-relaxed mb-6">{question.remedial.text}</p>
              
              <div className="bg-white/50 p-6 rounded-2xl border-2 border-secondary/20 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-lg font-bold text-primary">{question.remedial.scaffolded_question}</p>
                  <button 
                    onClick={() => setRemedialHintUsed(true)}
                    className="text-xs font-bold text-secondary hover:underline flex items-center gap-1"
                  >
                    <HelpCircle size={14} /> Need a hint?
                  </button>
                </div>

                {remedialHintUsed && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-3 bg-secondary/10 rounded-xl text-xs font-bold text-primary border border-secondary/20"
                  >
                    Hint: {question.hints.strategic}
                  </motion.div>
                )}

                <form onSubmit={handleRemedialSubmit} className="flex gap-3">
                  <input 
                    type="text" 
                    value={remedialAnswer}
                    onChange={(e) => setRemedialAnswer(e.target.value)}
                    placeholder="Type your answer here..."
                    className="flex-1 px-6 py-4 bg-white border-2 border-secondary/30 rounded-2xl focus:outline-none focus:ring-4 focus:ring-secondary/20 font-bold text-primary"
                  />
                  <button type="submit" className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-secondary transition-all shadow-lg">
                    Check
                  </button>
                </form>
              </div>

              <div className="flex items-center gap-2 text-primary/60 text-sm font-semibold">
                <AlertTriangle size={16} />
                <span>Completing this step will help you master the concept!</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="bg-white p-10 rounded-[2rem] border-2 border-gray-100 shadow-xl relative">
        <div className="absolute -top-4 left-8 px-4 py-1 bg-accent text-primary text-[10px] font-bold rounded-full uppercase shadow-lg">
          Knowledge Check
        </div>
        <p className="text-xl font-bold text-primary leading-relaxed mb-8">
          {question.text}
        </p>

        <div className="grid grid-cols-1 gap-4">
          {question.options?.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(option)}
              disabled={showFeedback}
              className={`w-full text-left px-8 py-5 rounded-[1.5rem] border-4 transition-all flex items-center justify-between group transform hover:scale-[1.02] active:scale-[0.98] ${
                selectedOption === option
                  ? showFeedback
                    ? option === question.correct_answer
                      ? 'bg-success/5 border-success text-success'
                      : 'bg-error/5 border-error text-error'
                    : 'bg-primary/5 border-primary text-primary shadow-xl shadow-primary/10'
                  : 'bg-white border-gray-100 hover:border-primary text-gray-600'
              }`}
            >
              <span className="font-bold text-lg">{option}</span>
              {showFeedback && option === question.correct_answer && <CheckCircle2 className="text-success" size={24} strokeWidth={3} />}
              {showFeedback && selectedOption === option && option !== question.correct_answer && <XCircle className="text-error" size={24} strokeWidth={3} />}
            </button>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex gap-3">
            <button
              onClick={handleHint}
              disabled={showFeedback || hintsUsed >= 3}
              className="flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary disabled:opacity-30 transition-all bg-secondary/10 px-4 py-2 rounded-xl"
            >
              <HelpCircle size={20} />
              {hintsUsed === 0 ? "I need a hint!" : "Next hint"}
            </button>
          </div>

          {!showFeedback ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className="px-8 py-3 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-secondary disabled:opacity-50 transition-all"
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-secondary flex items-center gap-2 transition-all"
            >
              {selectedOption === question.correct_answer ? "Continue" : "Get Help"}
              <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {hintsUsed > 0 && hintsUsed <= 3 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-3"
          >
            <div className="bg-secondary/5 p-4 rounded-2xl border border-secondary/20 text-sm text-primary flex gap-3">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 text-white">
                {hintsUsed}
              </div>
              <p>{getHintText()}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-[2rem] border-2 ${
            selectedOption === question.correct_answer 
              ? 'bg-success/5 border-success/20 text-success' 
              : 'bg-error/5 border-error/20 text-error'
          }`}
        >
          <h4 className="font-bold mb-2 flex items-center gap-2 uppercase text-xs">
            {selectedOption === question.correct_answer ? 'Excellent!' : 'Not quite right'}
          </h4>
          <p className="text-sm font-medium leading-relaxed">
            {selectedOption === question.correct_answer 
              ? question.explanation 
              : detectedBug 
                ? detectedBug.feedback 
                : `The correct answer is ${question.correct_answer}. ${question.explanation}`}
          </p>
          
          {detectedBug && detectedBug.remediation && (
            <div className="mt-4 p-4 bg-white/50 rounded-2xl border border-error/20 text-xs text-error flex gap-3 items-start">
              <Lightbulb size={16} className="shrink-0 mt-0.5" />
              <div>
                <span className="font-bold uppercase block mb-1">Quick Fix:</span>
                {detectedBug.remediation}
              </div>
            </div>
          )}

          {selectedOption !== question.correct_answer && (
            <div className="mt-6 flex gap-3">
              <button 
                onClick={() => {
                  setShowFeedback(false);
                  setSelectedOption(null);
                  setAttempts(prev => prev + 1);
                }}
                className="flex items-center gap-2 text-xs font-bold text-error hover:underline bg-error/10 px-4 py-2 rounded-xl"
              >
                <RotateCcw size={14} />
                Try Again
              </button>
              {(question.remedial || (detectedBug && detectedBug.severity === 'high')) && (
                <button 
                  onClick={() => setIsRemedial(true)}
                  className="flex items-center gap-2 text-xs font-bold text-secondary hover:underline bg-secondary/10 px-4 py-2 rounded-xl"
                >
                  <Lightbulb size={14} />
                  Get Help
                </button>
              )}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
