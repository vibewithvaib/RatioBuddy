export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Bug {
  bug_id: string;
  skill_id?: string;
  subtopic_id?: string;
  error_pattern: string;
  misconception: string;
  detection_rule: string;
  feedback: string;
  hint_level?: {
    level_1: string;
    level_2: string;
    level_3: string;
  };
  remediation?: string;
  severity: 'low' | 'medium' | 'high';
}

export interface Subtopic {
  id: string;
  name: string;
}

export interface Question {
  question_id: string;
  question_type: 'MCQ' | 'FIB' | 'short_answer' | 'word_problem';
  difficulty: Difficulty;
  text: string;
  options?: string[];
  correct_answer: string;
  bug_map?: Record<string, string>;
  hints: {
    general: string;
    strategic: string;
    bottom_out: string;
  };
  solution?: string;
  explanation: string;
  remedial: {
    text: string;
    scaffolded_question: string;
    scaffolded_answer: string;
    remedial_images?: string[];
  };
}

export interface Topic {
  topic_id: string;
  title: string;
  subtopics: string[];
  // Instructional fields (maintained for app logic)
  hook: string;
  exploration: string;
  exploration_images?: string[];
  explanation: string;
  video_url?: string;
  real_life_example: string;
  story_example: string;
  material: {
    worked_example: {
      problem: string;
      solution: string;
    };
    summary: string[];
  };
  quick_check?: {
    question: string;
    options: string[];
    correct_answer: string;
  };
  questions: Question[];
}

export interface KnowledgeComponent {
  kc_id: string;
  name: string;
  prerequisite?: string | string[];
  topics: Topic[];
}

export interface ChapterInfo {
  id: string;
  name: string;
  description: string;
}

export interface ChapterData {
  subject: string;
  class: string;
  chapter: ChapterInfo;
  knowledge_components: KnowledgeComponent[];
}

export interface Interaction {
  question_id: string;
  question_type: string;
  difficulty: Difficulty;
  student_answer?: string;
  correct_answer: string;
  is_correct: boolean;
  time_taken_sec: number;
  hints_used: number;
  attempts: number;
  kc: string; // kc_id
  subtopic: string; // subtopic name
  timestamp: string;
}

export interface LearnerState {
  mastery: Record<string, number>; // kc_id -> P(L)
  interactions: Interaction[];
  consecutive_errors: number;
}

export interface SessionData {
  session_id: string;
  timestamp_start: string;
  timestamp_end?: string;
  student: {
    student_id: string;
    grade: string;
    current_kc: string;
  };
  chapter: {
    chapter_id: string;
    chapter_name: string;
  };
  topic: {
    topic_id: string;
    topic_name: string;
  };
  session_summary: {
    total_questions_attempted: number;
    correct_answers: number;
    incorrect_answers: number;
    accuracy: number;
    time_spent_seconds: number;
    final_mastery_probability: number;
    mastery_status: string;
  };
  interactions: Interaction[];
  learning_actions: {
    remedial_triggered: boolean;
    remedial_topic: string;
    extra_practice_given: boolean;
    difficulty_adjustment: string;
    next_recommended_topic: string;
    next_kc_unlock_status: string;
  };
  misconceptions_detected: {
    type: string;
    description: string;
  }[];
  engagement_metrics: {
    avg_time_per_question: number;
    hint_dependency_ratio: number;
    retry_rate: number;
    focus_score: number;
  };
  system_decision: {
    confidence: number;
    action_taken: string;
    reason: string;
  };
}
