import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { therapists } from '../data/therapists';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TherapistCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % therapists.length);
    }, 4000); // Changed to 4 seconds for better viewing

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + therapists.length) % therapists.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % therapists.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  const handleIndicatorClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const currentTherapist = therapists[currentIndex];

  return (
    <div className="px-4 pb-3 flex-shrink-0">
      {/* Section Title */}
      <div className="relative mb-3">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/40 to-white/30" />
          <div className="px-3 py-1 bg-white/95 rounded-full border border-white shadow-md">
            <h2 className="text-[11px] font-bold text-green-800 tracking-wider uppercase">
              Our Physiotherapists
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/40 to-white/30" />
        </div>
        <p className="text-center text-[9px] text-white/90 mt-1.5 font-medium">Expert Care, Better Recovery</p>
      </div>

      {/* Main Carousel Card */}
      <div className="relative">
        {/* Card Container */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
            >
              <div className="bg-white/95 rounded-2xl shadow-lg border border-white p-4 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-100/30 rounded-full -translate-y-12 translate-x-12" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-green-100/30 rounded-full translate-y-10 -translate-x-10" />

                <div className="relative flex items-center gap-3">
                  {/* Photo */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-green-500 to-green-600 border-2 border-white ring-2 ring-green-200">
                    <img
                      src={currentTherapist.image}
                      alt={currentTherapist.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          const initials = currentTherapist.name
                            .split(' ')
                            .filter(n => !n.startsWith('Dr'))
                            .map(n => n[0])
                            .join('');
                          target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-white text-2xl font-bold">${initials}</div>`;
                        }
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-extrabold text-slate-800 text-base mb-1 leading-tight">
                      {currentTherapist.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="px-2 py-0.5 bg-green-100 rounded-full">
                        <p className="text-[10px] text-green-700 font-bold">{currentTherapist.qualification}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600 mb-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      <p className="text-[10px] font-medium">{currentTherapist.experience}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <p className="text-[10px] text-green-600 font-semibold truncate">{currentTherapist.specialization}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {therapists.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`transition-all duration-300 ${index === currentIndex
                ? 'w-7 h-2 bg-white rounded-full shadow-md'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70 rounded-full'
                }`}
              aria-label={`View ${therapists[index].name}`}
            />
          ))}
        </div>

        {/* Progress indicator (optional) */}
        {!isPaused && (
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
              key={currentIndex}
            />
          </div>
        )}
      </div>
    </div>
  );
}
