export type TabType = 'violations' | 'fouls' | 'signals' | 'guidelines' | 'ai' | 'settings';

export type RuleCategory = 'All' | 'Equipment & Court' | 'Violations' | 'Fouls' | 'Free Throws & Penalties' | 'Officials & Mechanics';

export interface FibaRule {
  id: string;
  article: string;
  title: string;
  category: RuleCategory;
  summary: string;
  description: string;
  penalty: string;
  signalRef?: string;
  fibaHandbookUrl: string;
  keywords: string[];
}

export interface RefereeSignal {
  id: string;
  name: string;
  category: 'Scoring' | 'Clock' | 'Administrative' | 'Violations' | 'Fouls';
  fibaSignalNumber: string;
  description: string;
  executionSteps: string[];
  iconName: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}
