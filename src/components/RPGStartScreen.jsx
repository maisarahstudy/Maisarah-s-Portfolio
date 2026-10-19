import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkle, Award } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/sound';
import MagicSigil from './MagicSigil';

export default function RPGStartScreen({ onSelectOption, isDark }) {
  const [hoveredOption, setHoveredOption] = useState(0);

  const menuOptions = [
    {
      id: 'about',
      label: 'ABOUT ME',
      action: () => {
        playClickSound();
        onSelectOption('about');
      },
    },
    {
      id: 'projects',
      label: 'PROJECTS',
      action: () => {
        playClickSound();
        onSelectOption('projects');
      },
    },
    {
      id: 'lore',
      label: 'DESIGN LORE',
      action: () => {
        playClickSound();
        onSelectOption('lore');
      },
    },
    {
      id: 'contact',
      label: 'CONTACT',
      action: () => {
        playClickSound();
        onSelectOption('contact');
      },
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      action: () => {
        playClickSound();
        window.open('https://www.linkedin.com/in/nur-fatihah-maisarah-salto', '_blank');
      },
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.8 }}
      className={`fixed inset-0 z-40 flex flex-col justify-between p-3 sm:p-6 md:p-8 select-none overflow-y-auto sm:overflow-hidden transition-colors duration-700 font-serif ${
        isDark ? 'bg-[#080608] text-rose-50' : 'bg-[#faf8f6] text-stone-900'
      }`}
    >
      <MagicSigil isDark={isDark} />

      {/* Top Header info (adjusted right-padding so it doesn't collide with fixed sound/theme buttons) */}
      <div className={`relative z-10 flex items-center justify-between font-mono text-[10px] sm:text-xs tracking-widest sm:tracking-[0.25em] uppercase pr-20 sm:pr-36 ${
        isDark ? 'text-rose-400/70' : 'text-stone-600'
      }`}>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Sparkle className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${isDark ? 'text-rose-500 animate-pulse' : 'text-rose-700'}`} />
          <span className="truncate">CHRONICLES OF MAISARAH // 2026</span>
        </div>
      </div>

      {/* Main Center Title & Actions */}
      <div className="relative z-10 max-w-3xl mx-auto w-full my-auto py-6 sm:py-0 flex flex-col items-center text-center">
        {/* Subtle Decorative Divider */}
        <div className="flex items-center gap-2 sm:gap-3 mb-2.5 sm:mb-4 opacity-75">
          <div className={`w-8 sm:w-20 h-[1px] ${isDark ? 'bg-gradient-to-r from-transparent via-rose-400/50 to-rose-400' : 'bg-gradient-to-r from-transparent via-rose-700/40 to-rose-700'}`} />
          <span className={`text-[10px] sm:text-xs ${isDark ? 'text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]' : 'text-rose-700'}`}>✦</span>
          <div className={`w-8 sm:w-20 h-[1px] ${isDark ? 'bg-gradient-to-l from-transparent via-rose-400/50 to-rose-400' : 'bg-gradient-to-l from-transparent via-rose-700/40 to-rose-700'}`} />
        </div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg sm:text-2xl md:text-4xl font-normal tracking-[0.14em] sm:tracking-[0.2em] uppercase leading-tight sm:leading-snug px-2"
        >
          <span className={`block transition-all duration-500 ${
            isDark ? 'text-white drop-shadow-[0_0_25px_rgba(251,113,133,0.4)]' : 'text-stone-900 drop-shadow-[0_0_15px_rgba(225,29,72,0.12)]'
          }`}>
            NUR FATIHAH MAISARAH
          </span>
          <span className={`block mt-1 text-base sm:text-xl md:text-3xl transition-all duration-500 ${
            isDark ? 'text-rose-200/90 drop-shadow-[0_0_20px_rgba(251,113,133,0.3)]' : 'text-stone-800'
          }`}>
            BINTI SALTO @ SUHARTO
          </span>
        </motion.h1>

        {/* Subtitles */}
        <p className={`mt-2.5 sm:mt-3 text-[11px] sm:text-sm font-mono tracking-[0.16em] sm:tracking-[0.28em] uppercase font-medium px-2 ${
          isDark ? 'text-rose-300 drop-shadow-[0_0_10px_rgba(244,63,94,0.4)]' : 'text-rose-800'
        }`}>
          FULL-STACK SOFTWARE ENGINEER // APPLIED AI
        </p>

        <p className={`mt-1 text-[9px] sm:text-xs font-mono tracking-[0.1em] sm:tracking-[0.18em] uppercase font-medium max-w-lg px-3 ${
          isDark ? 'text-rose-200/75' : 'text-stone-600'
        }`}>
          ALUMNA OF UiTM (NETCENTRIC COMPUTING) & GAMUDA AI ACADEMY
        </p>

        <div className={`w-24 sm:w-32 h-[1px] my-3.5 sm:my-5 ${
          isDark ? 'bg-gradient-to-r from-transparent via-rose-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-rose-700/30 to-transparent'
        }`} />

        {/* RPG Selection Menu */}
        <div className="w-full max-w-[280px] xs:max-w-xs sm:max-w-md space-y-1.5 sm:space-y-2 font-serif">
          {menuOptions.map((option, index) => {
            const isSelected = hoveredOption === index;

            return (
              <button
                key={option.id}
                onClick={option.action}
                onTouchStart={() => setHoveredOption(index)}
                onMouseEnter={() => {
                  setHoveredOption(index);
                  playHoverSound();
                }}
                className={`w-full group cursor-pointer relative py-2 sm:py-2.5 px-4 sm:px-6 rounded-sm border transition-all duration-200 flex items-center justify-center active:scale-[0.98] ${
                  isSelected
                    ? isDark
                      ? 'border-rose-400 bg-rose-950/60 text-white shadow-[0_0_20px_rgba(244,63,94,0.35)] translate-y-[-1px]'
                      : 'border-rose-600 bg-rose-500/[0.1] text-rose-950 shadow-[0_0_20px_rgba(225,29,72,0.2)] translate-y-[-1px]'
                    : isDark
                    ? 'border-rose-950/50 bg-rose-950/20 text-rose-200/70 hover:text-white hover:border-rose-800/80'
                    : 'border-stone-300/70 bg-stone-900/[0.02] text-stone-700 hover:text-stone-950 hover:border-rose-700/50'
                }`}
              >
                <span className={`absolute left-3 sm:left-4 text-xs transition-all duration-200 ${
                  isSelected ? (isDark ? 'opacity-100 scale-110 text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]' : 'opacity-100 scale-110 text-rose-700 font-bold') : 'opacity-0 scale-75'
                }`}>
                  ✦
                </span>

                <span className="text-xs sm:text-base tracking-[0.2em] sm:tracking-[0.24em] font-normal uppercase">
                  {option.label}
                </span>

                <span className={`absolute right-3 sm:right-4 text-xs transition-all duration-200 ${
                  isSelected ? (isDark ? 'opacity-100 scale-110 text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]' : 'opacity-100 scale-110 text-rose-700 font-bold') : 'opacity-0 scale-75'
                }`}>
                  ✦
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Info */}
      <div className={`relative z-10 flex flex-col sm:flex-row items-center justify-between font-mono text-[10px] sm:text-[11px] border-t pt-2.5 sm:pt-3 gap-1.5 sm:gap-2 tracking-wider uppercase transition-colors text-center sm:text-left ${
        isDark ? 'border-rose-950/60 text-rose-400/60' : 'border-stone-200 text-stone-600'
      }`}>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <span className={`flex items-center gap-1 font-semibold ${isDark ? 'text-rose-400' : 'text-rose-800'}`}>
            <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-500 shrink-0" /> Dean's List (UiTM)
          </span>
          <span className="hidden xs:inline">•</span>
          <span>BKNS Scholar (2019-2026)</span>
        </div>
        <span>KOTA KINABALU, SABAH, MY</span>
      </div>
    </motion.div>
  );
}