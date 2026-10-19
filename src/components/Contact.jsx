import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Sparkles, Send, Check } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/sound';

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current text-rose-500 shrink-0" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

export default function Contact({ isDark }) {
  const [copied, setCopied] = useState(false);

  const handleDispatch = () => {
    playClickSound();

    // 1. Copy email address directly to clipboard
    navigator.clipboard.writeText('maisarahsalto.work@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);

    // 2. Open pre-formatted email prompt
    const subject = encodeURIComponent("Summons // Engineering Collaboration");
    const body = encodeURIComponent("Greetings Maisarah,\n\nI explored your portfolio and would like to discuss an engineering opportunity regarding:\n\n");
    window.location.href = `mailto:maisarahsalto.work@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-8 sm:py-16 relative z-10 font-serif">
      
      {/* ✦ SECTION IV: GRAND TITLE BANNER ✦ */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-14 pb-6 sm:pb-8 border-b border-rose-500/20 px-2">
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono tracking-widest sm:tracking-[0.3em] uppercase text-rose-500 mb-2 font-bold">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>// SECTION IV · COMM TRANSMISSION</span>
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
        </div>
        <h2 className={`text-xl sm:text-3xl md:text-5xl font-normal tracking-[0.12em] sm:tracking-[0.2em] uppercase ${
          isDark ? 'text-white drop-shadow-[0_0_25px_rgba(251,113,133,0.3)]' : 'text-stone-900 font-bold'
        }`}>
          INITIATE TRANSMISSION
        </h2>
        <p className={`mt-2 sm:mt-3 text-[11px] sm:text-sm font-mono tracking-wider sm:tracking-widest uppercase max-w-xl leading-relaxed ${
          isDark ? 'text-rose-200/70' : 'text-stone-600'
        }`}>
          Direct Guild Channels Open for Engineering Roles, Inquiries & Collaborations
        </p>

        <div className="flex items-center gap-4 mt-4 sm:mt-6 opacity-60">
          <div className={`w-12 sm:w-20 h-[1px] ${isDark ? 'bg-gradient-to-r from-transparent to-rose-400' : 'bg-gradient-to-r from-transparent to-rose-700'}`} />
          <span className="text-xs text-rose-500">✦</span>
          <div className={`w-12 sm:w-20 h-[1px] ${isDark ? 'bg-gradient-to-l from-transparent to-rose-400' : 'bg-gradient-to-l from-transparent to-rose-700'}`} />
        </div>
      </div>

      {/* ✦ THE ORACLE SANCTUM ALTAR ✦ */}
      <div className={`rounded-2xl border-2 p-4 sm:p-8 md:p-12 relative overflow-hidden backdrop-blur-md transition-all duration-300 ${
        isDark
          ? 'border-[#c49a6c]/60 bg-gradient-to-br from-[#1a0f16] via-[#12080f] to-[#080306] shadow-[0_0_50px_rgba(244,63,94,0.18)]'
          : 'border-[#b88e60]/60 bg-white/95 shadow-[0_8px_30px_rgba(184,142,96,0.12)]'
      }`}>
        <span className={`absolute top-2.5 left-3 sm:top-3 sm:left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
        <span className={`absolute top-2.5 right-3 sm:top-3 sm:right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
        <span className={`absolute bottom-2.5 left-3 sm:bottom-3 sm:left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
        <span className={`absolute bottom-2.5 right-3 sm:bottom-3 sm:right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>

        <div className={`absolute inset-2 sm:inset-3 border rounded-xl pointer-events-none ${
          isDark ? 'border-[#c49a6c]/25' : 'border-[#b88e60]/20'
        }`} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center relative z-10">
          
          {/* Left Column: Transmission Decree */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <span className={`text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-[0.25em] px-3 py-1 rounded-full border font-bold uppercase inline-block ${
              isDark
                ? 'border-rose-500/30 bg-rose-500/10 text-rose-400'
                : 'border-rose-300 bg-rose-50 text-rose-900'
            }`}>
              RECRUITMENT & COMMISSIONS OPEN
            </span>
            <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-stone-900'}`}>
              Dispatch Your Summons
            </h3>
            <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${isDark ? 'text-rose-100/80' : 'text-stone-700'}`}>
              Available for full-time engineering roles, machine learning pipelines, and netcentric web application development. Transmissions are received directly in the Sabah Realm.
            </p>

            {/* Dispatch Button */}
            <div className="pt-2 sm:pt-4 flex flex-col items-start gap-3 w-full">
              <button
                onClick={handleDispatch}
                onMouseEnter={playHoverSound}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs font-mono uppercase tracking-wider sm:tracking-[0.2em] font-bold border transition-all active:scale-95 ${
                  isDark
                    ? 'border-[#c49a6c] bg-rose-950/60 text-white hover:bg-rose-500 hover:text-black shadow-[0_0_20px_rgba(244,63,94,0.4)]'
                    : 'border-[#b88e60] bg-white text-stone-900 hover:bg-rose-50 hover:border-rose-600 hover:text-rose-950 shadow-md hover:shadow-[0_0_20px_rgba(225,29,72,0.2)]'
                }`}
              >
                <Send className="w-4 h-4 text-rose-500 shrink-0" />
                <span>DISPATCH TRANSMISSION</span>
              </button>

              {/* Feedback Notification */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-emerald-500 font-bold"
                  >
                    <Check className="w-4 h-4 shrink-0" />
                    <span>✦ EMAIL COPIED & CLIENT OPENED! ✦</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: 4 Sacred Transceiver Nodes */}
          <div className="lg:col-span-6 space-y-2.5 sm:space-y-3.5 font-mono text-xs">
            
            {/* Node 1: Primary Email */}
            <a
              href="mailto:maisarahsalto.work@gmail.com"
              onMouseEnter={playHoverSound}
              className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border transition-all active:scale-[0.99] ${
                isDark
                  ? 'border-rose-900/50 bg-rose-950/30 text-rose-200 hover:border-rose-400'
                  : 'border-stone-200 bg-rose-50/40 text-stone-900 hover:border-rose-500 shadow-xs'
              }`}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-rose-500/30 flex items-center justify-center shrink-0 bg-rose-500/10">
                <Mail className="w-4 h-4 text-rose-500" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-[9px] sm:text-[10px] text-rose-500 font-bold tracking-widest uppercase">PRIMARY SUMMONS CHANNEL</span>
                <span className="font-semibold text-xs sm:text-sm truncate block">maisarahsalto.work@gmail.com</span>
              </div>
            </a>

            {/* Node 2: Secure Phone */}
            <div
              className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border ${
                isDark ? 'border-rose-900/50 bg-rose-950/30 text-rose-200' : 'border-stone-200 bg-rose-50/40 text-stone-900'
              }`}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-rose-500/30 flex items-center justify-center shrink-0 bg-rose-500/10">
                <Phone className="w-4 h-4 text-rose-500" />
              </div>
              <div>
                <span className="block text-[9px] sm:text-[10px] text-rose-500 font-bold tracking-widest uppercase">DIRECT FREQUENCY</span>
                <span className="font-semibold text-xs sm:text-sm">+60 14-855 4369</span>
              </div>
            </div>

            {/* Node 3: LinkedIn Dossier */}
            <a
              href="https://www.linkedin.com/in/nur-fatihah-maisarah-salto"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHoverSound}
              className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border transition-all active:scale-[0.99] ${
                isDark
                  ? 'border-rose-900/50 bg-rose-950/30 text-rose-200 hover:border-rose-400'
                  : 'border-stone-200 bg-rose-50/40 text-stone-900 hover:border-rose-500 shadow-xs'
              }`}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-rose-500/30 flex items-center justify-center shrink-0 bg-rose-500/10">
                <LinkedinIcon />
              </div>
              <div className="overflow-hidden">
                <span className="block text-[9px] sm:text-[10px] text-rose-500 font-bold tracking-widest uppercase">GUILD DOSSIER LINK</span>
                <span className="font-semibold text-xs sm:text-sm truncate block">linkedin.com/in/nur-fatihah-maisarah-salto</span>
              </div>
            </a>

            {/* Node 4: Base Realm Coordinates */}
            <div
              className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border ${
                isDark ? 'border-rose-900/50 bg-rose-950/30 text-rose-200' : 'border-stone-200 bg-rose-50/40 text-stone-900'
              }`}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-rose-500/30 flex items-center justify-center shrink-0 bg-rose-500/10">
                <MapPin className="w-4 h-4 text-rose-500" />
              </div>
              <div>
                <span className="block text-[9px] sm:text-[10px] text-rose-500 font-bold tracking-widest uppercase">BASE REALM COORDINATES</span>
                <span className="font-semibold text-xs sm:text-sm">Kota Kinabalu, Sabah, Malaysia</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}