import { useState, useEffect } from 'react';
import { isClinicOpen } from '../utils/isOpen';

export default function StatusBadge() {
  const [open, setOpen] = useState(isClinicOpen());

  useEffect(() => {
    // Update status every minute
    const interval = setInterval(() => {
      setOpen(isClinicOpen());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full shadow-md border ${open
      ? 'bg-white/90 border-white'
      : 'bg-white/90 border-white'
      }`}>
      <div className={`w-2 h-2 rounded-full ${open ? 'bg-green-600 animate-pulse' : 'bg-slate-400'
        }`} />
      <span className={`text-xs font-bold uppercase tracking-wide ${open ? 'text-green-700' : 'text-slate-600'
        }`}>
        {open ? 'Open Now' : 'Closed'}
      </span>
    </div>
  );
}
