import React from 'react';
import { motion } from 'motion/react';
import { Topic } from '../../types';
import { BookOpen, Lightbulb, PlayCircle, CheckCircle } from 'lucide-react';

interface ConceptStageProps {
  concept: Topic;
  stage: 'hook' | 'exploration' | 'explanation' | 'story' | 'practice';
  onComplete?: () => void;
}

export function ConceptStage({ concept, stage, onComplete }: ConceptStageProps) {
  const [checkAnswer, setCheckAnswer] = React.useState<string | null>(null);
  const [showCheckFeedback, setShowCheckFeedback] = React.useState(false);

  const formatText = (text: string) => {
    // Split by double newlines for paragraphs
    const paragraphs = text.split('\n\n');
    
    return paragraphs.map((para, pIdx) => {
      // Split by **bold** markers
      const parts = para.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={pIdx} className="text-xl text-text-muted leading-relaxed font-semibold mb-6">
          {parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={i} className="text-primary font-bold">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  const renderContent = () => {
    switch (stage) {
      case 'hook':
        return (
          <div className="space-y-6">
            <div className="bg-primary text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl" />
              <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center text-text-dark shrink-0 shadow-xl mb-8 transform -rotate-6">
                <Lightbulb size={36} strokeWidth={2.5} />
              </div>
              <h3 className="font-bold mb-4 text-3xl">Let's Think!</h3>
              <p className="text-white/95 leading-relaxed text-2xl font-semibold">"{concept.hook}"</p>
            </div>
            <div className="bg-white p-10 rounded-[3.5rem] border-2 border-gray-100 shadow-lg">
              <h4 className="font-bold text-text-dark mb-8 flex items-center gap-4 text-xl">
                <BookOpen size={28} className="text-primary" />
                Learning Objectives
              </h4>
              <ul className="grid grid-cols-1 gap-5">
                {concept.subtopics?.map((obj, i) => (
                  <li key={i} className="flex items-center gap-5 text-text-muted bg-bg p-5 rounded-3xl font-semibold transition-all hover:bg-primary/5 hover:translate-x-2">
                    <div className="w-4 h-4 rounded-full bg-primary shrink-0 shadow-sm" />
                    <span className="text-lg">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center pt-4">
              <button 
                onClick={() => onComplete?.()}
                className="px-10 py-4 bg-accent text-text-dark font-bold text-xl rounded-3xl shadow-xl hover:scale-105 transition-all active:scale-95"
              >
                I'm ready to explore!
              </button>
            </div>
          </div>
        );
      case 'exploration':
        return (
          <div className="space-y-8">
            <div className="bg-white p-12 rounded-[4rem] border-2 border-gray-100 shadow-2xl">
              <h3 className="text-3xl font-bold text-text-dark mb-8">Exploration</h3>
              <div className="mb-8">
                {formatText(concept.exploration)}
              </div>
              
              {/* exploration images */}
              {concept.exploration_images && concept.exploration_images.length > 0 && (
                <div className="grid grid-cols-1 gap-6 mb-8">
                  {concept.exploration_images.map((img, index) => (
                    <div key={index} className="rounded-[2rem] overflow-hidden border-2 border-gray-100 shadow-lg">
                      <img 
                        src={img} 
                        alt={`Exploration ${index + 1}`} 
                        className="w-full h-auto object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Video Player */}
            <div className="bg-black rounded-[3.5rem] overflow-hidden border-4 border-primary/20 aspect-video shadow-2xl relative group">
              {concept.video_url ? (
                <video 
                  src={concept.video_url} 
                  controls 
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-primary/5">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner">
                    <PlayCircle size={64} strokeWidth={1.5} />
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">Video Coming Soon!</p>
                    <p className="text-lg text-text-muted font-semibold">We're preparing the lesson for {concept.title}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center pt-4">
              <button 
                onClick={() => onComplete?.()}
                className="px-10 py-4 bg-primary text-white font-bold text-xl rounded-3xl shadow-xl hover:scale-105 transition-all active:scale-95"
              >
                I've explored the model!
              </button>
            </div>
          </div>
        );
      case 'explanation':
        const qc = concept.quick_check || {
          question: "Based on the explanation, what is the most important rule for ratios?",
          options: ["Units must be the same", "Ratios must always be large", "Ratios must have units like cm or kg"],
          correct_answer: "Units must be the same"
        };
        
        return (
          <div className="space-y-10">
            <div className="bg-white p-12 rounded-[4rem] border-4 border-primary/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary/10" />
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-text-dark shadow-xl transform rotate-12">
                <Lightbulb size={40} strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-bold text-text-dark mb-8">The Big Idea</h3>
              <div className="text-2xl text-text-dark leading-relaxed font-bold">
                {formatText(concept.explanation)}
              </div>
            </div>
            
            <div className="bg-primary text-white p-10 rounded-[3.5rem] shadow-2xl border-2 border-white/10">
              <h4 className="font-bold mb-6 flex items-center gap-3 text-2xl text-accent">
                <CheckCircle size={28} /> Quick Check!
              </h4>
              <p className="mb-8 font-bold text-xl leading-relaxed">{qc.question}</p>
              <div className="space-y-4">
                {qc.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCheckAnswer(opt);
                      setShowCheckFeedback(true);
                      if (opt === qc.correct_answer) {
                        onComplete?.();
                      }
                    }}
                    className={`w-full text-left p-6 rounded-3xl font-bold text-lg transition-all border-2 ${
                      checkAnswer === opt
                        ? opt === qc.correct_answer
                          ? "bg-success border-success text-white scale-[1.02] shadow-lg"
                          : "bg-error border-error text-white scale-[0.98]"
                        : "bg-white/10 border-white/20 hover:bg-white/20 hover:translate-x-1"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {showCheckFeedback && (
                <motion.p 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className={`mt-6 text-xl font-bold text-center ${checkAnswer === qc.correct_answer ? "text-accent" : "text-error"}`}
                >
                  {checkAnswer === qc.correct_answer 
                    ? "✨ Awesome! You've got it!" 
                    : "Oops! Not quite. Give it another look! 🧐"}
                </motion.p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-success/10 p-10 rounded-[3.5rem] border-2 border-success/20 shadow-sm hover:shadow-xl transition-all group">
                <h4 className="font-bold text-success mb-4 text-xl flex items-center gap-3">
                  <PlayCircle size={24} className="text-success group-hover:scale-110 transition-transform" />
                  Real-Life!
                </h4>
                <div className="text-text-dark font-semibold text-lg leading-relaxed">
                  {formatText(concept.real_life_example)}
                </div>
              </div>
              <div className="bg-secondary/10 p-10 rounded-[3.5rem] border-2 border-secondary/20 shadow-sm hover:shadow-xl transition-all group">
                <h4 className="font-bold text-secondary mb-4 text-xl flex items-center gap-3">
                  <CheckCircle size={24} className="text-secondary group-hover:scale-110 transition-transform" />
                  Let's Solve!
                </h4>
                <div className="space-y-4">
                  <p className="text-text-dark font-bold text-lg">{concept.material.worked_example.problem}</p>
                  <div className="bg-white/60 p-5 rounded-3xl border border-secondary/20 text-text-dark text-base font-semibold shadow-sm">
                    {formatText(concept.material.worked_example.solution)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'story':
        return (
          <div className="space-y-10">
            <div className="bg-secondary text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden border-2 border-white/10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl" />
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4 relative z-10">
                <BookOpen size={36} className="text-accent" />
                Story Time!
              </h3>
              <div className="text-xl text-white leading-relaxed font-semibold relative z-10">
                {formatText(concept.story_example)}
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3.5rem] border-2 border-gray-100 shadow-lg">
              <h4 className="font-bold text-text-dark mb-8 flex items-center gap-4 text-xl">
                <CheckCircle size={28} className="text-success" />
                Quick Recap
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {concept.material.summary.map((point, i) => (
                  <div key={i} className="flex items-center gap-5 bg-bg p-6 rounded-3xl font-bold text-text-dark hover:bg-primary/5 transition-all border border-transparent hover:border-primary/20 shadow-sm">
                    <div className="w-5 h-5 rounded-full bg-primary shrink-0 shadow-sm" />
                    <span className="text-lg">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <button 
                onClick={() => onComplete?.()}
                className="px-10 py-4 bg-accent text-text-dark font-bold text-xl rounded-3xl shadow-xl hover:scale-105 transition-all active:scale-95"
              >
                I'm ready for practice!
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl mx-auto"
    >
      {renderContent()}
    </motion.div>
  );
}
