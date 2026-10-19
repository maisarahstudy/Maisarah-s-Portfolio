import React from 'react';

export default function ParchmentScroll({ children, isDark }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-3 sm:my-6">
      {/* Top Roll Indicator */}
      <div className="flex items-center justify-center relative z-20 -mb-2.5 sm:-mb-3">
        <div className={`w-32 sm:w-48 h-5 sm:h-6 rounded-full border-2 shadow-lg flex items-center justify-between px-2 ${
          isDark
            ? 'border-[#c49a6c] bg-gradient-to-r from-[#1c0f16] via-[#3d2331] to-[#1c0f16]'
            : 'border-[#8f6438] bg-gradient-to-r from-[#d4beaa] via-[#f2e6dc] to-[#d4beaa]'
        }`}>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 shadow-inner shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-rose-500 font-bold">✦ ROLL.I ✦</span>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 shadow-inner shrink-0" />
        </div>
      </div>

      {/* Main Parchment Body */}
      <div className={`relative rounded-xl border-2 p-3.5 sm:p-8 md:p-14 shadow-2xl backdrop-blur-xl overflow-hidden transition-colors duration-500 ${
        isDark
          ? 'border-[#c49a6c]/60 bg-[#140a12]/80 text-rose-50 shadow-[0_0_80px_rgba(244,63,94,0.18)]'
          : 'border-[#8f6438]/70 bg-[#faf6f0]/85 text-stone-950 shadow-2xl'
      }`}>
        {/* Responsive Corner Sigils */}
        <span className={`absolute top-2.5 left-2.5 sm:top-4 sm:left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#8f6438]'}`}>✦</span>
        <span className={`absolute top-2.5 right-2.5 sm:top-4 sm:right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#8f6438]'}`}>✦</span>
        <span className={`absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#8f6438]'}`}>✦</span>
        <span className={`absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#8f6438]'}`}>✦</span>

        {/* Inner Border Frame */}
        <div className={`absolute inset-2 sm:inset-4 border rounded-lg pointer-events-none ${
          isDark ? 'border-[#c49a6c]/20' : 'border-[#8f6438]/20'
        }`} />

        {/* Content Children */}
        <div className="relative z-10 space-y-10 sm:space-y-16">
          {children}
        </div>
      </div>

      {/* Bottom Roll Indicator */}
      <div className="flex items-center justify-center relative z-20 -mt-2.5 sm:-mt-3">
        <div className={`w-32 sm:w-48 h-5 sm:h-6 rounded-full border-2 shadow-lg flex items-center justify-between px-2 ${
          isDark
            ? 'border-[#c49a6c] bg-gradient-to-r from-[#1c0f16] via-[#3d2331] to-[#1c0f16]'
            : 'border-[#8f6438] bg-gradient-to-r from-[#d4beaa] via-[#f2e6dc] to-[#d4beaa]'
        }`}>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 shadow-inner shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-rose-500 font-bold">✦ END.I ✦</span>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 shadow-inner shrink-0" />
        </div>
      </div>
    </div>
  );
}