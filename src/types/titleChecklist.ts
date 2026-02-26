export interface ChecklistSection {
  title: string;
  items: string[];
}

export type CommonMistake = [mistake: string, consequence: string, avoid: string];

export interface ChecklistCardProps {
  title: string;
  items: string[];
}
