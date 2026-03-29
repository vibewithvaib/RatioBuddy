import React from 'react';
import { motion } from 'motion/react';
import { Subtopic, LearnerState } from '../../types';
import { Star, Trophy, Lock, Zap } from 'lucide-react';

interface ProgressOverviewProps {
  subtopics: Subtopic[];
  learnerState: LearnerState;
}

export function ProgressOverview({ subtopics, learnerState }: ProgressOverviewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {subtopics.slice(0, 4).map((s, idx) => {
        const rawMastery = learnerState.mastery[s.id] || 0.15;
        const mastery = Math.max(0, (rawMastery - 0.15) / 0.85);
        const isMastered = mastery >= 0.85;
        const isUnlocked = idx === 0 || (subtopics[idx - 1] && (Math.max(0, ((learnerState.mastery[subtopics[idx - 1].id] || 0.15) - 0.15) / 0.85)) >= 0.85);

        return (
          <motion.div 
            key={s.id} 
            whileHover={isUnlocked ? { y: -5 } : {}}
            className={`p-6 rounded-[24px] border-2 transition-all relative overflow-hidden ${
              isMastered 
                ? 'bg-success/10 border-success/20 shadow-success/5' 
                : isUnlocked 
                  ? 'bg-white border-gray-100 shadow-sm' 
                  : 'bg-gray-50 border-gray-100 opacity-60'
            }`}
          >
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isMastered ? 'bg-success text-white' : isUnlocked ? 'bg-primary text-white' : 'bg-gray-300 text-white'
              }`}>
                {isMastered ? <Trophy size={20} /> : isUnlocked ? <Zap size={20} /> : <Lock size={20} />}
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-primary/40 uppercase">
                {Math.round(mastery * 100)}%
              </div>
            </div>
            
            <h4 className={`font-bold text-sm mb-3 relative z-10 ${isMastered ? 'text-success' : 'text-primary'}`}>
              {s.name}
            </h4>
            
            <div className="flex gap-1 mb-4 relative z-10">
              {[1, 2, 3].map(i => (
                <Star 
                  key={i} 
                  size={12} 
                  className={mastery >= (i * 0.3) ? "text-accent fill-accent" : "text-gray-200"} 
                />
              ))}
            </div>

            <div className="w-full h-2 bg-background rounded-full relative z-10 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${mastery * 100}%` }}
                className={`h-full ${isMastered ? 'bg-success' : 'bg-primary'}`}
              />
            </div>

            {isMastered && (
              <div className="absolute -right-2 -bottom-2 opacity-10">
                <Trophy size={64} className="text-success" />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
