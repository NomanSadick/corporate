import { FaGlobe, FaHeadphones, FaHotel, FaClock } from 'react-icons/fa';
import { Feature } from '../types/features';


export const features: Feature[] = [
  {
    title: 'Local & International',
    desc: 'Seamless travel management for both domestic and global destinations — from flights and hotels to visa support.',
    icon: FaGlobe,
    color: 'bg-cyan-100 ring-4 ring-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    title: '24/7 Support',
    desc: 'Round-the-clock assistance for rebookings, emergencies, and on-trip changes — whenever your team needs it.',
    icon: FaHeadphones,
    color: 'bg-indigo-100 ring-4 ring-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    title: 'Hotel Booking',
    desc: 'Seamless travel management for both domestic and global destinations — from flights and hotels to visa support.',
    icon: FaHotel,
    color: 'bg-pink-100 ring-4 ring-pink-50',
    iconColor: 'text-pink-600',
  },
  {
    title: 'Real-time Alerts',
    desc: 'Round-the-clock assistance for rebookings, emergencies, and on-trip changes — whenever your team needs it.',
    icon: FaClock,
    color: 'bg-red-100 ring-4 ring-red-50',
    iconColor: 'text-red-600',
  },
];

