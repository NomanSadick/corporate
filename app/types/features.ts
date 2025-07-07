import { IconType } from 'react-icons';

export interface Feature {
  title: string;
  desc: string;
  icon: IconType;
  color: string;      // background color (e.g., 'bg-cyan-100')
  iconColor: string;  // icon color (e.g., 'text-cyan-600')
}


