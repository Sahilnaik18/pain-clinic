import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  onClick: () => void;
  color?: string;
}

export default function ActionCard({ icon: Icon, title, subtitle, onClick, color = 'from-teal to-primary' }: ActionCardProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative bg-white rounded-xl shadow-md hover:shadow-lg border border-slate-200 p-3 text-left transition-all duration-200 active:scale-95 group overflow-hidden"
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-200`} />

      <div className="relative">
        {/* Icon */}
        <div className={`w-10 h-10 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center mb-2 shadow-sm`}>
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Title */}
        <h3 className="font-bold text-navy text-xs mb-0.5 uppercase tracking-wide">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs text-slate-600 truncate">
          {subtitle}
        </p>

        {/* Arrow */}
        <div className="absolute top-3 right-3 text-slate-400 group-hover:text-teal transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.button>
  );
}
