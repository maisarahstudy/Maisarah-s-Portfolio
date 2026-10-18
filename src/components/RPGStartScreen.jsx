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
      className={`fixed inset-0 z-40 flex flex-col justify-between p-4 sm:p-6 md:p-8 select-none overflow-hidden transition-colors duration-700 font-serif ${
        isDark ? 'bg-[#080608] text-rose-50' : 'bg-[#faf8f6] text-stone-900'
      }`}
    >
      <MagicSigil isDark={isDark} />

      <div className={`relative z-10 flex items-center justify-between font-mono text-xs tracking-[0.25em] uppercase pr-36 ${
        isDark ? 'text-rose-400/70' : 'text-stone-600'
      }`}>
        <div className="flex items-center gap-2">
          <Sparkle className={`w-3.5 h-3.5 ${isDark ? 'text-rose-500 animate-pulse' : 'text-rose-700'}`} />
          <span>CHRONICLES OF MAISARAH // 2026</span>
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto w-full my-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-3 sm:mb-4 opacity-75">
          <div className={`w-12 sm:w-20 h-[1px] ${isDark ? 'bg-gradient-to-r from-transparent via-rose-400/50 to-rose-400' : 'bg-gradient-to-r from-transparent via-rose-700/40 to-rose-700'}`} />
          <span className={`text-xs ${isDark ? 'text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]' : 'text-rose-700'}`}>✦</span>
          <div className={`w-12 sm:w-20 h-[1px] ${isDark ? 'bg-gradient-to-l from-transparent via-rose-400/50 to-rose-400' : 'bg-gradient-to-l from-transparent via-rose-700/40 to-rose-700'}`} />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-3xl md:text-4xl font-normal tracking-[0.2em] uppercase leading-snug"
        >
          <span className={`block transition-all duration-500 ${
            isDark ? 'text-white drop-shadow-[0_0_25px_rgba(251,113,133,0.4)]' : 'text-stone-900 drop-shadow-[0_0_15px_rgba(225,29,72,0.12)]'
          }`}>
            NUR FATIHAH MAISARAH
          </span>
          <span className={`block mt-1 transition-all duration-500 ${
            isDark ? 'text-rose-200/90 drop-shadow-[0_0_20px_rgba(251,113,133,0.3)]' : 'text-stone-800'
          }`}>
            BINTI SALTO @ SUHARTO
          </span>
        </motion.h1>

        <p className={`mt-3 text-xs sm:text-sm font-mono tracking-[0.28em] uppercase font-medium ${
          isDark ? 'text-rose-300 drop-shadow-[0_0_10px_rgba(244,63,94,0.4)]' : 'text-rose-800'
        }`}>
          FULL-STACK DEVELOPER & AI ENGINEER
        </p>

        <p className={`mt-1 text-[11px] sm:text-xs font-mono tracking-[0.18em] uppercase font-medium ${
          isDark ? 'text-rose-200/75' : 'text-stone-600'
        }`}>
          ALUMNA OF UiTM (NETCENTRIC COMPUTING) & GAMUDA AI ACADEMY
        </p>

        <div className={`w-32 h-[1px] my-4 sm:my-5 ${
          isDark ? 'bg-gradient-to-r from-transparent via-rose-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-rose-700/30 to-transparent'
        }`} />

        <div className="w-full max-w-sm sm:max-w-md space-y-1.5 sm:space-y-2 font-serif">
          {menuOptions.map((option, index) => {
            const isSelected = hoveredOption === index;

            return (
              <button
                key={option.id}
                onClick={option.action}
                onMouseEnter={() => {
                  setHoveredOption(index);
                  playHoverSound();
                }}
                className={`w-full group cursor-pointer relative py-2 sm:py-2.5 px-6 rounded-sm border transition-all duration-200 flex items-center justify-center ${
                  isSelected
                    ? isDark
                      ? 'border-rose-400 bg-rose-950/50 text-white shadow-[0_0_20px_rgba(244,63,94,0.35)] translate-y-[-1px]'
                      : 'border-rose-600 bg-rose-500/[0.08] text-rose-950 shadow-[0_0_20px_rgba(225,29,72,0.2)] translate-y-[-1px]'
                    : isDark
                    ? 'border-rose-950/50 bg-rose-950/10 text-rose-200/70 hover:text-white hover:border-rose-800/80'
                    : 'border-stone-300/70 bg-stone-900/[0.02] text-stone-700 hover:text-stone-950 hover:border-rose-700/50'
                }`}
              >
                <span className={`absolute left-4 text-xs transition-all duration-200 ${
                  isSelected ? (isDark ? 'opacity-100 scale-110 text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]' : 'opacity-100 scale-110 text-rose-700 font-bold') : 'opacity-0 scale-75'
                }`}>
                  ✦
                </span>

                <span className="text-sm sm:text-base tracking-[0.24em] font-normal uppercase">
                  {option.label}
                </span>

                <span className={`absolute right-4 text-xs transition-all duration-200 ${
                  isSelected ? (isDark ? 'opacity-100 scale-110 text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]' : 'opacity-100 scale-110 text-rose-700 font-bold') : 'opacity-0 scale-75'
                }`}>
                  ✦
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className={`relative z-10 flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] border-t pt-3 gap-2 tracking-wider uppercase transition-colors ${
        isDark ? 'border-rose-950/60 text-rose-400/60' : 'border-stone-200 text-stone-600'
      }`}>
        <div className="flex items-center gap-4">
          <span className={`flex items-center gap-1.5 font-semibold ${isDark ? 'text-rose-400' : 'text-rose-800'}`}>
            <Award className="w-3.5 h-3.5 text-rose-500" /> Dean's List (UiTM)
          </span>
          <span>•</span>
          <span>BKNS Scholar (2019-2026)</span>
        </div>
        <span>KOTA KINABALU, SABAH, MY</span>
      </div>
    </motion.div>
  );
}