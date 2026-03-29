/**
 * Bayesian Knowledge Tracing (BKT) Implementation
 * Standard parameters for Grade 7 Math
 */
export const BKT_PARAMS: Record<string, { P_L0: number; P_T: number; P_G: number; P_S: number }> = {
  KC1: { P_L0: 0.15, P_T: 0.15, P_G: 0.20, P_S: 0.10 },
  KC2: { P_L0: 0.15, P_T: 0.15, P_G: 0.20, P_S: 0.10 },
  KC3: { P_L0: 0.15, P_T: 0.15, P_G: 0.20, P_S: 0.10 },
  KC4: { P_L0: 0.15, P_T: 0.15, P_G: 0.20, P_S: 0.10 },
  KC5: { P_L0: 0.15, P_T: 0.15, P_G: 0.20, P_S: 0.10 },
  KC6: { P_L0: 0.15, P_T: 0.15, P_G: 0.20, P_S: 0.10 },
  KC7: { P_L0: 0.15, P_T: 0.15, P_G: 0.20, P_S: 0.10 },
  KC8: { P_L0: 0.15, P_T: 0.15, P_G: 0.20, P_S: 0.10 },
};

export function updateMastery(kcId: string, pL: number, isCorrect: boolean, hintsUsed: number, attempts: number = 1): number {
  const params = BKT_PARAMS[kcId] || BKT_PARAMS.KC1;
  
  // If hints were used or multiple attempts were needed, we treat it as an incorrect attempt 
  // for the initial knowledge update, but we can also use a penalty.
  // Standard BKT often treats any assistance as "incorrect" for estimating unassisted mastery.
  // We'll apply a penalty for each attempt > 1.
  const attemptPenalty = Math.max(0, (attempts - 1) * 0.1);
  const effectiveCorrect = isCorrect && hintsUsed === 0 && attempts === 1;
  
  let pL_given_obs: number;

  if (effectiveCorrect) {
    pL_given_obs = (pL * (1 - params.P_S)) / 
                   (pL * (1 - params.P_S) + (1 - pL) * params.P_G);
  } else {
    // If they eventually got it right after attempts, we give some credit but less than a first-try correct.
    const pL_incorrect = (pL * params.P_S) / 
                         (pL * params.P_S + (1 - pL) * (1 - params.P_G));
    
    if (isCorrect) {
      // Partial credit for correct answer after hints/attempts
      pL_given_obs = pL + (pL_incorrect - pL) * (1 - attemptPenalty);
    } else {
      pL_given_obs = pL_incorrect;
    }
  }

  const pL_new = pL_given_obs + (1 - pL_given_obs) * params.P_T;
  return Math.min(Math.max(pL_new, 0.0), 0.99);
}

export const MASTERY_THRESHOLDS = {
  REMEDIAL: 0.3,
  GUIDED: 0.6,
  STANDARD: 0.8,
  MASTERED: 1.0
};

export function getInstructionalAction(pL: number): 'REMEDIAL' | 'GUIDED' | 'STANDARD' | 'ADVANCE' {
  if (pL < MASTERY_THRESHOLDS.REMEDIAL) return 'REMEDIAL';
  if (pL < MASTERY_THRESHOLDS.GUIDED) return 'GUIDED';
  if (pL < MASTERY_THRESHOLDS.STANDARD) return 'STANDARD';
  return 'ADVANCE';
}
