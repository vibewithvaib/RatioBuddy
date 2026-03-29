import { Bug } from '../types';

export const BUG_LIBRARY: Bug[] = [
  {
    bug_id: "B1",
    skill_id: "S2",
    subtopic_id: "CQ1",
    error_pattern: "12:4 → 12:4",
    misconception: "Student thinks ratio does not need simplification",
    detection_rule: "GCD(a,b) > 1 AND answer unchanged",
    feedback: "We need to simplify ratios to their simplest form.",
    hint_level: {
      level_1: "Can both numbers be divided by the same number?",
      level_2: "Try dividing both by 4",
      level_3: "12 ÷ 4 = 3 and 4 ÷ 4 = 1"
    },
    remediation: "Use visual grouping (12 apples into groups of 4)",
    severity: "high"
  },
  {
    bug_id: "B2",
    error_pattern: "12:4 → 3:4",
    misconception: "Student divides only numerator",
    detection_rule: "only one term reduced",
    feedback: "Both parts of a ratio must be divided equally.",
    remediation: "Use balance analogy (like weighing scale)",
    severity: "high"
  },
  {
    bug_id: "B3",
    skill_id: "S3",
    subtopic_id: "CQ2",
    error_pattern: "4:7 → 6:10",
    misconception: "Student multiplies terms differently",
    detection_rule: "a/b ≠ c/d",
    feedback: "Both parts must be multiplied by SAME number.",
    remediation: "Show scaling (zooming image analogy)",
    severity: "high"
  },
  {
    bug_id: "B4",
    error_pattern: "4:7 → 5:8",
    misconception: "Student adds same number instead of multiplying",
    detection_rule: "difference constant but ratio not preserved",
    feedback: "Ratios grow by multiplication, not addition.",
    severity: "medium"
  },
  {
    bug_id: "B5",
    skill_id: "S7",
    subtopic_id: "CQ3",
    error_pattern: "2/5 → 2%",
    misconception: "Student ignores 'per hundred'",
    detection_rule: "fraction directly converted to %",
    feedback: "Percent means 'out of 100'.",
    remediation: "Convert to denominator 100",
    severity: "high"
  },
  {
    bug_id: "B6",
    error_pattern: "0.8 → 0.8%",
    misconception: "Student thinks decimal = percent",
    detection_rule: "decimal not multiplied by 100",
    feedback: "To convert decimal to %, multiply by 100.",
    severity: "medium"
  },
  {
    bug_id: "B7",
    skill_id: "S10",
    subtopic_id: "CQ4",
    error_pattern: "15% of 80 → 15",
    misconception: "Student thinks % is direct value",
    detection_rule: "output equals percentage value",
    feedback: "You need to take 15% OF 80, not just 15.",
    severity: "high"
  },
  {
    bug_id: "B8",
    error_pattern: "20% of 50 → 50 ÷ 20",
    misconception: "Incorrect operation selection",
    detection_rule: "output equals total divided by percentage",
    feedback: "Wait! To find a percentage of a number, we multiply, not divide.",
    remediation: "Think: 20% OF 50 means (20/100) * 50.",
    severity: "medium"
  },
  {
    bug_id: "B9",
    skill_id: "S11",
    subtopic_id: "CQ6",
    error_pattern: "60/460 × 100",
    misconception: "Uses new value instead of original",
    detection_rule: "denominator == new value",
    feedback: "Always divide by the ORIGINAL value, not the new one.",
    remediation: "Before-after comparison: The base for % change is always the 'Before' value.",
    severity: "high"
  },
  {
    bug_id: "B10",
    skill_id: "S17",
    subtopic_id: "CQ7",
    error_pattern: "Profit% = Profit / SP",
    misconception: "Confusion between CP and SP",
    detection_rule: "denominator == SP",
    feedback: "Profit % is always based on the Cost Price (CP).",
    remediation: "Think: You calculate gain or loss on what YOU spent (CP).",
    severity: "high"
  },
  {
    bug_id: "B11",
    error_pattern: "SP < CP but marked as profit",
    misconception: "Concept confusion",
    detection_rule: "SP < CP AND result is 'Profit'",
    feedback: "If you sell for less than you paid, is it really a profit?",
    remediation: "SP > CP is Profit. CP > SP is Loss.",
    severity: "high"
  },
  {
    bug_id: "B12",
    skill_id: "S19",
    subtopic_id: "CQ8",
    error_pattern: "SI = P × R × T",
    misconception: "Ignores percentage conversion",
    detection_rule: "division by 100 missing",
    feedback: "Rate is a percentage, so don't forget to divide by 100!",
    remediation: "SI = (P * R * T) / 100. The 100 is for the % in Rate.",
    severity: "high"
  },
  {
    bug_id: "B13",
    error_pattern: "SI = P × R",
    misconception: "Time factor ignored",
    detection_rule: "T is missing in calculation",
    feedback: "Interest depends on how LONG you keep the money. Don't forget the time (T)!",
    remediation: "SI = (P * R * T) / 100. Multiply by the number of years.",
    severity: "medium"
  },
  {
    bug_id: "B14",
    error_pattern: "Confusing Profit with Profit %",
    misconception: "Student thinks the profit amount is the profit percentage.",
    detection_rule: "Incorrect answer matches the absolute profit value when asked for percentage.",
    feedback: "Wait! You found the profit amount in Rupees, but I asked for the profit percentage.",
    remediation: "To find Profit %, use: (Profit / CP) * 100. Don't forget to divide by CP!",
    severity: "medium"
  },
  {
    bug_id: "B15",
    error_pattern: "Incorrectly calculating Amount (A = P - I)",
    misconception: "Student subtracts interest from principal instead of adding it.",
    detection_rule: "Incorrect answer equals P - I.",
    feedback: "Almost! But when you pay back a loan, you pay the original amount PLUS the interest.",
    remediation: "Amount = Principal + Interest. Think of it as 'Total to pay back'.",
    severity: "high"
  },
  {
    bug_id: "B16",
    error_pattern: "Using T in months without dividing by 12",
    misconception: "Student uses the number of months directly as T in the SI formula (PRT/100) without converting to years.",
    detection_rule: "Incorrect answer is 12 times larger than the correct answer (if T was in months).",
    feedback: "Check your time! In the formula SI = PRT/100, T must be in years. If you have months, divide by 12.",
    remediation: "T = (Number of months) / 12. For example, 6 months = 6/12 = 0.5 years.",
    severity: "high"
  }
];
