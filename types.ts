export type TabType = 'cursos' | 'tarot';

export interface Course {
  id: number;
  title: string;
  description: string;
  price: string;
  imageIcon: 'moon' | 'sun' | 'heart';
  gradient: string;
  tag?: string;
  tagColor?: string;
  features: string[];
}

export interface TarotReading {
  id: number;
  title: string;
  description: string;
  price: string;
  deliveryTime: string;
  icon: 'scroll' | 'sun' | 'zap';
  highlight?: boolean;
}