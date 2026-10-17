import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';
import { playLoadingCompleteSound } from '../utils/sound';

const fantasyLore = [
  "Attuning Netcentric Architecture...",
  "Calibrating XGBoost Spatio-Temporal Vectors...",
  "Binding Sabah Digital Realm Archives...",
  "Consulting the Sacred Japanese Lexicon [N4]...",
  "Awakening the Technomancer..."
];

export default function RPGLoader({ onComplete, isDark }) {
  const [progress, setProgress] = useState(0);
  const [loreIndex, setLoreIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          playLoadingCompleteSound();
          setTimeout(onComplete, 850);
          return 100;
        }
        return prev + 1;
      });
    }, 28);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setLoreIndex((prev) => (prev < fantasyLore.length - 1 ? prev + 1 : prev));
    }, 650);

    return () => clearInterval(textTimer);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className={`fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden font-serif transition-colors duration-700 ${
        isDark ? 'bg-[#080608] text-rose-50' : 'bg-[#faf8f6] text-stone-900'
      }`}
    >
      {isDark && (
        <div className="pointer-events-none fixed inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.85)] z-0" />
      )}

      <div
        className={`pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] transition-colors duration-700 ${
          isDark ? 'bg-rose-950/25' : 'bg-rose-200/40'
        }`}
      />

      {/* Top Header */}
      <div
        className={`relative z-10 flex items-center justify-between font-mono text-xs tracking-[0.25em] uppercase ${
          isDark ? 'text-rose-400/70' : 'text-stone-600'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <Sparkle className={`w-3.5 h-3.5 ${isDark ? 'text-rose-500 animate-pulse' : 'text-rose-700'}`} />
          <span>CHRONICLES OF MAISARAH// INITIALIZING</span>
        </div>
        <span>KOTA KINABALU // 2026</span>
      </div>

      {/* Center: Talisman & Synchronized Loading Line */}
      <div className="relative z-10 max-w-xl mx-auto w-full my-auto flex flex-col items-center text-center">
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className={`w-16 h-16 rounded-full border p-1 flex items-center justify-center mb-6 relative transition-colors ${
            isDark ? 'border-rose-500/30' : 'border-rose-700/30'
          }`}
        >
          <div className={`w-12 h-12 rounded-full border border-dashed ${
            isDark ? 'border-rose-400/50' : 'border-rose-600/40'
          }`} />
          <span className={`absolute text-xs ${isDark ? 'text-rose-400 drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]' : 'text-rose-700'}`}>✦</span>
        </motion.div>

        <h2 className="text-xl sm:text-2xl tracking-[0.28em] font-normal uppercase mb-2">
          Awakening Realm
        </h2>

        <p className={`font-mono text-xs tracking-[0.18em] uppercase h-5 transition-colors ${
          isDark ? 'text-rose-300/80' : 'text-stone-600'
        }`}>
          {fantasyLore[loreIndex]}
        </p>

        {/* ✦ 100% SYNCHRONIZED LOADING BAR: The star is physically locked inside the bar's tip! ✦ */}
        <div className="w-full max-w-md mt-8 relative">
          {/* Base Track Line */}
          <div className={`w-full h-[2px] ${
            isDark ? 'bg-rose-950/80' : 'bg-stone-300'
          }`} />

          {/* Advancing Filament */}
          <div
            className={`absolute top-0 left-0 h-[2px] ${
              isDark
                ? 'bg-gradient-to-r from-transparent via-rose-400 to-rose-300 shadow-[0_0_14px_rgba(244,63,94,0.9)]'
                : 'bg-gradient-to-r from-transparent via-rose-600 to-rose-700 shadow-[0_0_10px_rgba(225,29,72,0.5)]'
            }`}
            style={{ width: `${progress}%` }}
          >
            {/* The star is anchored directly to the right edge of the bar (100% same speed!) */}
            <span
              className={`absolute right-[-5px] -top-[7px] text-xs leading-none select-none ${
                isDark ? 'text-rose-300 drop-shadow-[0_0_8px_rgba(244,63,94,0.9)]' : 'text-rose-800'
              }`}
            >
              ✦
            </span>
          </div>
        </div>

        {/* Numerical Counter */}
        <div className={`mt-5 font-mono text-xs tracking-[0.3em] font-semibold ${
          isDark ? 'text-rose-400/80' : 'text-stone-600'
        }`}>
          [ {progress}% ]
        </div>

      </div>

      {/* Footer */}
      <div
        className={`relative z-10 flex items-center justify-between font-mono text-xs border-t pt-4 tracking-wider uppercase transition-colors ${
          isDark ? 'border-rose-950/60 text-rose-400/50' : 'border-stone-300 text-stone-500'
        }`}
      >
        <span>SYS.STATUS // RITUAL IN PROGRESS</span>
        <span>ARCHIVES OF MAISARAH</span>
      </div>
    </motion.div>
  );
}