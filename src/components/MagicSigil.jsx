import React from 'react';
import { motion } from 'framer-motion';

export default function MagicSigil({ isDark }) {
  return (
    <div 
      className={`fixed inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center transition-opacity duration-700 ${
        isDark ? 'opacity-40' : 'opacity-35'
      } [mask-image:radial-gradient(ellipse_at_center,transparent_18%,black_58%)]`}
    >
      {/* 1. Large Outer Star-Astrolabe Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className={`w-[680px] h-[680px] sm:w-[780px] sm:h-[780px] rounded-full border-2 flex items-center justify-center relative transition-colors duration-700 ${
          isDark ? 'border-rose-500/30 shadow-[0_0_50px_rgba(244,63,94,0.15)]' : 'border-rose-900/20'
        }`}
      >
        {/* Dashed Inscription Ring */}
        <div className={`w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] rounded-full border border-dashed transition-colors duration-700 ${
          isDark ? 'border-rose-400/35' : 'border-rose-800/25'
        }`} />

        {/* 4 Cardinal Rune Nodes */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${isDark ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]' : 'bg-rose-700'}`} />
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full ${isDark ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]' : 'bg-rose-700'}`} />
        <div className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${isDark ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]' : 'bg-rose-700'}`} />
        <div className={`absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${isDark ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]' : 'bg-rose-700'}`} />
      </motion.div>

      {/* 2. Counter-Rotating Middle Alchemical Sigil */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}
        className={`absolute w-[460px] h-[460px] sm:w-[540px] sm:h-[540px] rounded-full border transition-colors duration-700 ${
          isDark ? 'border-rose-300/25 shadow-[0_0_30px_rgba(251,113,133,0.15)]' : 'border-rose-800/20'
        }`}
      >
        {/* Subtle Inscribed Square */}
        <div className={`absolute inset-7 border rotate-45 pointer-events-none transition-colors ${
          isDark ? 'border-rose-500/20' : 'border-rose-900/15'
        }`} />

        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${
          isDark ? 'bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.8)]' : 'bg-rose-600/60'
        }`} />
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${
          isDark ? 'bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.8)]' : 'bg-rose-600/60'
        }`} />
      </motion.div>

      {/* 3. Ambient Mana Core Glow */}
      <div className={`absolute w-[500px] h-[500px] rounded-full blur-[160px] transition-colors duration-700 pointer-events-none ${
        isDark ? 'bg-rose-950/30' : 'bg-rose-200/40'
      }`} />
    </div>
  );
}