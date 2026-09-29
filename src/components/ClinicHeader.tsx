import { MapPin, Clock } from 'lucide-react';
import { clinic } from '../data/clinic';
import StatusBadge from './StatusBadge';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ClinicHeader() {
  const [displayHours, setDisplayHours] = useState({
    open: clinic.openingHours.open,
    close: clinic.openingHours.close
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem('clinicSettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setDisplayHours({
        open: settings.openTime,
        close: settings.closeTime
      });
    }
  }, []);

  return (
    <div className="relative text-center px-4 pt-2 pb-2">
      {/* Hero Tagline at Top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-2"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full shadow-sm border border-white/30">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          <p className="text-xs font-bold text-white italic">
            Move Better. Live Better.
          </p>
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </div>
        <p className="text-[10px] text-white/90 mt-1.5 font-medium">
          Personalized care for a stronger, pain-free you.
        </p>
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex justify-center mb-2"
      >
        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl relative border-4 border-white/50">
          <img
            src="/logo.png"
            alt="Pain Clinic Logo"
            className="w-16 h-16 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.parentElement) {
                target.parentElement.innerHTML = `
                  <svg class="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                `;
              }
            }}
          />
        </div>
      </motion.div>

      {/* Clinic Name */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-extrabold text-white mb-1 tracking-tight"
      >
        {clinic.name}
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-sm text-white/90 font-medium mb-2"
      >
        {clinic.tagline}
      </motion.p>

      {/* Status Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-center gap-3 flex-wrap px-2"
      >
        {/* Status Badge */}
        <StatusBadge />

        {/* Time */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 rounded-full shadow-sm border border-white">
          <Clock className="w-3.5 h-3.5 text-green-600" />
          <span className="text-xs font-medium text-slate-800">
            {displayHours.open} - {displayHours.close}
          </span>
        </div>

        {/* Location */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 rounded-full shadow-sm border border-white">
          <MapPin className="w-3.5 h-3.5 text-green-600" />
          <span className="text-xs font-medium text-slate-800">{clinic.location}</span>
        </div>
      </motion.div>
    </div>
  );
}
