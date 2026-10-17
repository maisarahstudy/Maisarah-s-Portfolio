import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkle } from 'lucide-react';

export default function Hero() {
  return (
    <header className="border-b border-rose-950/40 pb-16 pt-8">
      {/* 1. Chic Editorial Top Metadata */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between text-xs tracking-[0.2em] uppercase font-mono text-rose-300/60 mb-12"
      >
        <div className="flex items-center gap-2">
          <Sparkle className="w-3.5 h-3.5 text-rose-400" />
          <span>PORTFOLIO ✦ 2026</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]" />
          <span>AVAILABLE FOR SELECT ROLES</span>
        </div>
      </motion.div>

      {/* 2. Sensual, Editorial Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.1]">
          Crafting digital products with{' '}
          <span className="font-serif italic text-rose-300 font-normal">allure</span>, poise & precision.
        </h1>
      </motion.div>

      {/* 3. Bio & Action Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
      >
        <p className="md:col-span-2 text-rose-100/70 text-base sm:text-lg leading-relaxed font-light">
          Hey, I'm <span className="text-white font-medium">[Your Name]</span>. A developer bridging the gap between tactile aesthetics and robust technical architecture. I build interfaces that feel fluid, intentional, and intoxicatingly smooth.
        </p>

        {/* Action Button */}
        <div className="flex md:justify-end">
          <a
            href="mailto:your@email.com"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-rose-500/30 bg-rose-950/20 backdrop-blur-md text-xs tracking-wider uppercase font-mono text-rose-200 hover:text-white hover:border-rose-400 hover:bg-rose-900/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,113,133,0.15)]"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-4 h-4 text-rose-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </motion.div>
    </header>
  );
}