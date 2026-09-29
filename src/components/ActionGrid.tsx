import { Globe, Calendar, Phone, Mail, MapPin, Instagram, Share2 } from 'lucide-react';
import { clinic } from '../data/clinic';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ActionGrid() {
  const [showToast, setShowToast] = useState(false);

  const handleWebsite = () => {
    window.open(clinic.website, '_blank');
  };

  const handleAppointment = () => {
    window.location.href = `tel:+919740809295`;
  };

  const handleDirections = () => {
    window.open(clinic.mapUrl, '_blank');
  };

  const handleInstagram = () => {
    window.open(clinic.instagramUrl, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${clinic.email}`;
  };

  const handleShare = async () => {
    const shareData = {
      title: clinic.name,
      text: `${clinic.name}\n${clinic.tagline}\n${clinic.location}`,
      url: clinic.shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(clinic.shareUrl);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="px-3 pb-1 flex-shrink-0"
      >
        {/* Top 3 Primary Actions */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          {/* Website */}
          <motion.button
            variants={item}
            onClick={handleWebsite}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/95 rounded-2xl p-4 shadow-lg hover:shadow-2xl active:scale-[0.98] transition-all flex flex-col items-center justify-between min-h-[125px] border border-white group relative overflow-hidden backdrop-blur-sm"
          >
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/10 rounded-full -translate-y-10 translate-x-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-300/10 rounded-full translate-y-8 -translate-x-8" />

            {/* Decorative corner icon */}
            <div className="absolute top-2 right-2 opacity-20">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              </svg>
            </div>

            {/* Icon Circle */}
            <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-2 group-hover:scale-110 transition-transform">
              <Globe className="w-7 h-7 text-white" />
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-center w-full">
              <p className="text-[13px] font-extrabold text-blue-900 mb-0.5 tracking-tight">WEBSITE</p>
              <p className="text-[9px] text-blue-600 font-semibold mt-1.5">spinephysio.in</p>
            </div>
          </motion.button>

          {/* Book Appointment */}
          <motion.button
            variants={item}
            onClick={handleAppointment}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/95 rounded-2xl p-4 shadow-lg hover:shadow-2xl active:scale-[0.98] transition-all flex flex-col items-center justify-between min-h-[125px] border border-white group relative overflow-hidden backdrop-blur-sm"
          >
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-200/10 rounded-full -translate-y-10 translate-x-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-300/10 rounded-full translate-y-8 -translate-x-8" />

            {/* Decorative corner icon */}
            <div className="absolute top-2 right-2 opacity-20">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Icon Circle with Phone Badge */}
            <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg mb-2 group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7 text-white" />
              {/* Phone Badge */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-green-50">
                <Phone className="w-3.5 h-3.5 text-green-600" />
              </div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-center w-full">
              <p className="text-[12px] font-extrabold text-green-900 mb-0.5 tracking-tight leading-tight">BOOK APPOINTMENT</p>
              <p className="text-[10px] text-green-700 font-semibold">By Phone Call</p>
            </div>
          </motion.button>

          {/* Directions */}
          <motion.button
            variants={item}
            onClick={handleDirections}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/95 rounded-2xl p-4 shadow-lg hover:shadow-2xl active:scale-[0.98] transition-all flex flex-col items-center justify-between min-h-[125px] border border-white group relative overflow-hidden backdrop-blur-sm"
          >
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-red-200/10 rounded-full -translate-y-10 translate-x-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-red-300/10 rounded-full translate-y-8 -translate-x-8" />

            {/* Decorative corner icon */}
            <div className="absolute top-2 right-2 opacity-20">
              <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Icon Circle */}
            <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg mb-2 group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7 text-white" />
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-center w-full">
              <p className="text-[13px] font-extrabold text-red-900 mb-0.5 tracking-tight">DIRECTIONS</p>
              <p className="text-[10px] text-red-700 leading-relaxed">Find Us on Map</p>
            </div>
          </motion.button>
        </div>

        {/* Social Media Icons Row */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4 mb-1"
        >
          <button
            onClick={handleInstagram}
            className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl active:scale-90 transition-all hover:scale-105"
          >
            <Instagram className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={handleEmail}
            className="w-12 h-12 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl active:scale-90 transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={handleShare}
            className="w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl active:scale-90 transition-all hover:scale-105"
          >
            <Share2 className="w-5 h-5 text-white" />
          </button>
        </motion.div>
      </motion.div>

      {/* Toast notification */}
      {showToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-navy text-white px-4 py-2 rounded-lg shadow-lg text-sm animate-fade-in z-50">
          Clinic link copied!
        </div>
      )}
    </>
  );
}
