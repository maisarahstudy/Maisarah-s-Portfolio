import React from 'react';
import { motion } from 'framer-motion';

export default function MagicSigil({ isDark }) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center opacity-25">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className={`w-[700px] h-[700px] rounded-full border flex items-center justify-center transition-colors duration-700 ${
          isDark ? 'border-rose-500/20' : 'border-rose-900/[0.08]'
        }`}
      >
        <div className={`w-[620px] h-[620px] rounded-full border border-dashed transition-colors duration-700 ${
          isDark ? 'border-rose-400/25' : 'border-rose-900/[0.1]'
        }`} />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className={`absolute w-[480px] h-[480px] rounded-full border transition-colors duration-700 ${
          isDark ? 'border-rose-300/15' : 'border-rose-800/[0.08]'
        }`}
      >
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${
          isDark ? 'bg-rose-500/60 shadow-[0_0_8px_rgba(244,63,94,0.6)]' : 'bg-rose-600/40'
        }`} />
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${
          isDark ? 'bg-rose-500/60 shadow-[0_0_8px_rgba(244,63,94,0.6)]' : 'bg-rose-600/40'
        }`} />
      </motion.div>

      <div className={`absolute w-[600px] h-[600px] rounded-full blur-[190px] transition-colors duration-700 ${
        isDark ? 'bg-rose-950/20' : 'bg-rose-200/30'
      }`} />
    </div>
  );
}