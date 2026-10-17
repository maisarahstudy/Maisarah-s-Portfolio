import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ParchmentScroll({ children, isDark }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-6">
      {/* ✦ TOP SCROLL ROLLER / FINIAL ✦ */}
      <div className="flex items-center justify-center relative z-20 -mb-3">
        <div className={`w-36 sm:w-48 h-6 rounded-full border-2 shadow-lg flex items-center justify-between px-2 ${
          isDark
            ? 'border-[#c49a6c] bg-gradient-to-r from-[#1c0f16] via-[#3d2331] to-[#1c0f16]'
            : 'border-[#8f6438] bg-gradient-to-r from-[#d4beaa] via-[#f2e6dc] to-[#d4beaa]'
        }`}>
          <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-inner" />
          <span className="text-[10px] font-mono tracking-widest text-rose-500 font-bold">✦ ROLL.I ✦</span>
          <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-inner" />
        </div>
      </div>

      {/* ✦ THE MAIN CONTINUOUS MANUSCRIPT BODY ✦ */}
      <div className={`relative rounded-xl border-2 p-6 sm:p-14 shadow-2xl backdrop-blur-md overflow-hidden transition-colors duration-500 ${
        isDark
          ? 'border-[#c49a6c]/60 bg-[#140a12]/80 text-rose-50 shadow-[0_0_80px_rgba(244,63,94,0.18)]'
          : 'border-[#8f6438]/70 bg-[#faf6f0]/85 text-stone-950 shadow-2xl'
      }`}>
        {/* Decorative Corner Runes */}
        <span className={`absolute top-4 left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#8f6438]'}`}>✦</span>
        <span className={`absolute top-4 right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#8f6438]'}`}>✦</span>
        <span className={`absolute bottom-4 left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#8f6438]'}`}>✦</span>
        <span className={`absolute bottom-4 right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#8f6438]'}`}>✦</span>

        {/* Inner Border Framing */}
        <div className={`absolute inset-4 border rounded-lg pointer-events-none ${
          isDark ? 'border-[#c49a6c]/20' : 'border-[#8f6438]/20'
        }`} />

        {/* Scroll Content */}
        <div className="relative z-10 space-y-16">
          {children}
        </div>
      </div>

      {/* ✦ BOTTOM SCROLL ROLLER / FINIAL ✦ */}
      <div className="flex items-center justify-center relative z-20 -mt-3">
        <div className={`w-36 sm:w-48 h-6 rounded-full border-2 shadow-lg flex items-center justify-between px-2 ${
          isDark
            ? 'border-[#c49a6c] bg-gradient-to-r from-[#1c0f16] via-[#3d2331] to-[#1c0f16]'
            : 'border-[#8f6438] bg-gradient-to-r from-[#d4beaa] via-[#f2e6dc] to-[#d4beaa]'
        }`}>
          <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-inner" />
          <span className="text-[10px] font-mono tracking-widest text-rose-500 font-bold">✦ END.I ✦</span>
          <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-inner" />
        </div>
      </div>
    </div>
  );
}