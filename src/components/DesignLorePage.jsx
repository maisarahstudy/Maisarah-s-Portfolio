import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Gamepad2, Compass, Flame, Heart } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function DesignLorePage({ onBack, isDark }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      icon: Gamepad2,
      title: "An Obsession with Video Games",
      desc: "From the solemn, atmospheric world-building of Elden Ring and Dark Souls to the tactile, responsive mechanics of classic JRPGs, video games have always been where engineering, narrative, and visual artistry collide at the highest level.",
    },
    {
      icon: Compass,
      title: "Breaking the Monotony of Templates",
      desc: "Nearly every developer portfolio on the internet looks identical: the same generic SaaS purple gradient, the same three boring card boxes, the same corporate sterility. I rarely—if ever—saw someone build an uncompromising fantasy game codex. So I decided to build the one I always wished existed.",
    },
    {
      icon: Flame,
      title: "Having Genuine Fun with Engineering",
      desc: "Software doesn't have to be clinical. Crafting a zero-dependency Web Audio acoustic engine, simulating dog-eared parchment physics, and illustrating alchemical sigils was proof that you can take your technical craft deeply seriously while still having authentic, childlike fun.",
    },
    {
      icon: Heart,
      title: "Tactile, Human-Centric Soul",
      desc: "In an era saturated by automated AI templates, building this realm by hand—with deliberate sound weight, authentic manuscript rubrication, and responsive light/dark parity—was a commitment to human craft and individuality.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="py-12 max-w-4xl mx-auto font-serif"
    >
      {/* Top Back Navigation */}
      <div className="flex items-center justify-between pb-6 mb-10 border-b border-rose-500/20 font-mono text-xs">
        <button
          onClick={() => {
            playClickSound();
            onBack();
          }}
          onMouseEnter={playHoverSound}
          className={`cursor-none group flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
            isDark
              ? 'border-rose-500/30 bg-rose-950/60 text-rose-200 hover:border-rose-400 hover:text-white shadow-[0_0_15px_rgba(244,63,94,0.2)]'
              : 'border-stone-300 bg-white/95 text-stone-900 hover:border-rose-600 shadow-sm'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5 text-rose-500 transition-transform group-hover:-translate-x-1" />
          <span>RETURN TO REALM</span>
        </button>

        <span className="text-rose-500 font-bold tracking-widest uppercase">
          CHRONICLES // CREATOR'S LORE
        </span>
      </div>

      {/* ✦ GRAND TITLE BANNER ✦ */}
      <div className="flex flex-col items-center text-center mb-12 pb-8 border-b border-rose-500/20">
        <div className="flex items-center gap-3 text-xs font-mono tracking-[0.3em] uppercase text-rose-500 mb-2.5 font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>// THE CREATIVE MANIFESTO</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-normal tracking-[0.18em] uppercase ${
          isDark ? 'text-white drop-shadow-[0_0_25px_rgba(251,113,133,0.3)]' : 'text-stone-900 font-bold'
        }`}>
          THE DESIGN PHILOSOPHY
        </h1>
        <p className={`mt-3 text-xs sm:text-sm font-mono tracking-widest uppercase max-w-xl leading-relaxed ${
          isDark ? 'text-rose-200/70' : 'text-stone-600'
        }`}>
          Why Build a Boring Resume When You Can Build an Unforgettable Realm?
        </p>

        <div className="flex items-center gap-4 mt-6 opacity-60">
          <div className={`w-20 h-[1px] ${isDark ? 'bg-gradient-to-r from-transparent to-rose-400' : 'bg-gradient-to-r from-transparent to-rose-700'}`} />
          <span className="text-xs text-rose-500">✦</span>
          <div className={`w-20 h-[1px] ${isDark ? 'bg-gradient-to-l from-transparent to-rose-400' : 'bg-gradient-to-l from-transparent to-rose-700'}`} />
        </div>
      </div>

      {/* ✦ THE ILLUMINATED MANIFESTO TABLET ✦ */}
      <div className={`rounded-2xl border-2 p-8 sm:p-12 relative overflow-hidden backdrop-blur-md transition-all ${
        isDark
          ? 'border-[#c49a6c]/60 bg-gradient-to-br from-[#1a0f16] via-[#12080f] to-[#080306] shadow-[0_0_50px_rgba(244,63,94,0.18)]'
          : 'border-[#b88e60]/60 bg-white/95 shadow-xl'
      }`}>
        <span className={`absolute top-3 left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
        <span className={`absolute top-3 right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
        <span className={`absolute bottom-3 left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
        <span className={`absolute bottom-3 right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>

        <div className={`absolute inset-3 border rounded-xl pointer-events-none ${
          isDark ? 'border-[#c49a6c]/25' : 'border-[#b88e60]/20'
        }`} />

        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
          
          {/* Main Hook Quote */}
          <div className="text-center">
            <span className="text-xs font-mono tracking-[0.3em] text-rose-500 uppercase font-bold block mb-2">
              ✦ ARTISAN INTENT & INSPIRATION ✦
            </span>
            <p className={`text-xl sm:text-2xl font-light italic leading-relaxed ${
              isDark ? 'text-white' : 'text-stone-900 font-normal'
            }`}>
              "Most portfolios are built to satisfy an algorithm. This one was built to honor a lifelong love for interactive worlds."
            </p>
            <div className="w-16 h-[1.5px] bg-rose-500/40 mx-auto mt-4" />
          </div>

          {/* 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  onMouseEnter={playHoverSound}
                  className={`p-6 rounded-xl border transition-all ${
                    isDark
                      ? 'border-rose-900/40 bg-rose-950/25 hover:border-rose-400/80 shadow-xs'
                      : 'border-stone-200 bg-rose-50/40 hover:border-rose-500 shadow-xs'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full border border-rose-500/30 flex items-center justify-center mb-4 bg-rose-500/10">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h4 className={`text-base sm:text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    {pillar.title}
                  </h4>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-rose-100/75' : 'text-stone-600'}`}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ✦ MATCHING GILDED GLASS RETURN BUTTON ✦ */}
          <div className="text-center pt-8 border-t border-rose-500/20 font-mono text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className={`tracking-widest uppercase ${isDark ? 'text-rose-300/60' : 'text-stone-600'}`}>
              CRAFTED WITH OBSESSIVE REVERENCE · KOTA KINABALU, SABAH · 2026
            </span>

            <button
              onClick={() => {
                playClickSound();
                onBack();
              }}
              onMouseEnter={playHoverSound}
              className={`cursor-none inline-flex items-center gap-2.5 px-7 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider border transition-all ${
                isDark
                  ? 'border-[#c49a6c] bg-rose-950/60 text-rose-200 hover:border-rose-300 hover:text-white shadow-[0_0_20px_rgba(244,63,94,0.35)]'
                  : 'border-[#b88e60] bg-white text-stone-900 hover:bg-rose-50 hover:border-rose-600 hover:text-rose-950 shadow-md hover:shadow-[0_0_20px_rgba(225,29,72,0.2)]'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5 text-rose-500" />
              <span>RETURN TO REALM</span>
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
}