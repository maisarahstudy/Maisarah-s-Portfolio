import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowLeft, Lock, CheckCircle2, Sparkles } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function JtdinNdaPage({ onBack, isDark }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="py-6 sm:py-12 max-w-4xl mx-auto font-serif"
    >
      {/* Top Back Navigation */}
      <div className="flex items-center justify-between pb-4 sm:pb-6 mb-6 sm:mb-10 border-b border-rose-500/20 font-mono text-xs gap-2">
        <button
          onClick={() => {
            playClickSound();
            onBack();
          }}
          onMouseEnter={playHoverSound}
          className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all active:scale-95 shrink-0 ${
            isDark
              ? 'border-rose-500/30 bg-rose-950/60 text-rose-200 hover:border-rose-400 hover:text-white shadow-[0_0_15px_rgba(244,63,94,0.2)]'
              : 'border-stone-300 bg-white/95 text-stone-900 hover:border-rose-600 shadow-sm'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5 text-rose-500 transition-transform group-hover:-translate-x-1" />
          <span className="text-[11px] sm:text-xs">BACK</span>
        </button>

        <span className="text-rose-500 font-bold tracking-wider sm:tracking-widest uppercase flex items-center gap-1.5 text-[10px] sm:text-xs truncate">
          <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          <span>CLASSIFICATION: CONFIDENTIAL</span>
        </span>
      </div>

      {/* ✦ GRAND SECTION HEADER ✦ */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-rose-500/20 px-2">
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono tracking-widest sm:tracking-[0.3em] uppercase text-rose-500 mb-2 font-bold">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>// CLASSIFIED GUILD DOSSIER</span>
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
        </div>
        <h1 className={`text-xl sm:text-3xl md:text-5xl font-normal tracking-[0.12em] sm:tracking-[0.18em] uppercase ${
          isDark ? 'text-white drop-shadow-[0_0_25px_rgba(251,113,133,0.3)]' : 'text-stone-900 font-bold'
        }`}>
          RESTRICTED TRANSMISSION
        </h1>
        <p className={`mt-2 sm:mt-3 text-[11px] sm:text-sm font-mono tracking-wider sm:tracking-widest uppercase max-w-xl leading-relaxed ${
          isDark ? 'text-rose-200/70' : 'text-stone-600'
        }`}>
          Sabah State Digital Innovation Department (JTDIN) Modernization
        </p>

        <div className="flex items-center gap-4 mt-4 sm:mt-6 opacity-60">
          <div className={`w-12 sm:w-20 h-[1px] ${isDark ? 'bg-gradient-to-r from-transparent to-rose-400' : 'bg-gradient-to-r from-transparent to-rose-700'}`} />
          <span className="text-xs text-rose-500">✦</span>
          <div className={`w-12 sm:w-20 h-[1px] ${isDark ? 'bg-gradient-to-l from-transparent to-rose-400' : 'bg-gradient-to-l from-transparent to-rose-700'}`} />
        </div>
      </div>

      {/* ✦ THE SEALED COVENANT TABLET ✦ */}
      <div className={`rounded-2xl border-2 p-4 sm:p-8 md:p-12 relative overflow-hidden backdrop-blur-md transition-all ${
        isDark
          ? 'border-[#c49a6c]/60 bg-gradient-to-br from-[#1a0f16] via-[#12080f] to-[#080306] shadow-[0_0_50px_rgba(244,63,94,0.18)]'
          : 'border-[#b88e60]/70 bg-white/95 shadow-xl'
      }`}>
        <span className={`absolute top-2.5 left-3 sm:top-3 sm:left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
        <span className={`absolute top-2.5 right-3 sm:top-3 sm:right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
        <span className={`absolute bottom-2.5 left-3 sm:bottom-3 sm:left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
        <span className={`absolute bottom-2.5 right-3 sm:bottom-3 sm:right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>

        <div className={`absolute inset-2 sm:inset-3 border rounded-xl pointer-events-none ${
          isDark ? 'border-[#c49a6c]/25' : 'border-[#b88e60]/20'
        }`} />

        <div className="relative z-10 space-y-6 sm:space-y-8">
          
          {/* Red Wax Seal Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3.5 sm:p-5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-500">
            <ShieldAlert className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-[0.25em] uppercase block">
                NON-DISCLOSURE AGREEMENT (NDA) ACTIVE
              </span>
              <p className="text-xs sm:text-sm font-sans mt-0.5 leading-relaxed text-inherit opacity-90">
                Source code repositories, architectural network schematics, and live public sector administrative databases are legally protected under official government non-disclosure protocols.
              </p>
            </div>
          </div>

          {/* Statement */}
          <div>
            <h3 className={`text-lg sm:text-2xl font-bold tracking-wide mb-2 sm:mb-3 ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}>
              Why Source Code Cannot Be Publicly Displayed
            </h3>
            <p className={`text-xs sm:text-base leading-relaxed ${isDark ? 'text-rose-100/80' : 'text-stone-700'}`}>
              During my industrial tenure at <span className="font-semibold text-rose-500">Jabatan Teknologi Digital Dan Inovasi Negeri Sabah</span>, I worked on modernization frameworks processing sensitive public sector workflows. To maintain strict integrity and honor state data protection statutes, the internal repositories cannot be hosted on public Git mirrors.
            </p>
          </div>

          {/* What IS Safe to Disclose */}
          <div className={`p-4 sm:p-6 rounded-xl border space-y-3 sm:space-y-4 ${
            isDark ? 'border-rose-950/70 bg-rose-950/20' : 'border-stone-200 bg-rose-50/40 shadow-xs'
          }`}>
            <span className="text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-[0.25em] text-rose-500 font-bold uppercase block">
              ✦ DISCLOSED CONTRIBUTIONS & VERIFIED IMPACT ✦
            </span>
            
            <div className="space-y-2.5 sm:space-y-3 font-sans text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className={isDark ? 'text-rose-100/90' : 'text-stone-800'}>
                  <strong>40% Reduction in PDF Generation Time:</strong> Engineered automated batch PDF reporting modules to replace manual document compilation.
                </span>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className={isDark ? 'text-rose-100/90' : 'text-stone-800'}>
                  <strong>25% Workflow Acceleration:</strong> Collaborated with department supervisors to design real-time monitoring status dashboards.
                </span>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className={isDark ? 'text-rose-100/90' : 'text-stone-800'}>
                  <strong>Security Hardening:</strong> Implemented CSRF token guards and SQL prepared statements to modernize legacy core PHP entry points against attack vectors.
                </span>
              </div>
            </div>
          </div>

          {/* Redacted Items Box */}
          <div className={`p-3.5 sm:p-5 rounded-xl border font-mono text-[11px] sm:text-xs space-y-1.5 sm:space-y-2 ${
            isDark ? 'border-rose-900/40 bg-black/40 text-stone-400' : 'border-stone-200 bg-stone-100 text-stone-600'
          }`}>
            <span className="text-rose-500 font-bold block mb-1">RESTRICTED ACCESS ARTIFACTS:</span>
            <p className="flex flex-wrap items-center gap-1.5">
              <span>• Internal Database Schemas:</span> 
              <span className="bg-rose-500/20 text-rose-400 px-1.5 py-0.5 rounded text-[10px]">[REDACTED BY STATUTE]</span>
            </p>
            <p className="flex flex-wrap items-center gap-1.5">
              <span>• Private API Endpoints:</span> 
              <span className="bg-rose-500/20 text-rose-400 px-1.5 py-0.5 rounded text-[10px]">[CONFIDENTIAL]</span>
            </p>
            <p className="flex flex-wrap items-center gap-1.5">
              <span>• Administrative User Data:</span> 
              <span className="bg-rose-500/20 text-rose-400 px-1.5 py-0.5 rounded text-[10px]">[PROTECTED UNDER STATE NDA]</span>
            </p>
          </div>

          {/* Return Button */}
          <div className="pt-4 sm:pt-6 border-t border-rose-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[10px] sm:text-xs font-mono text-rose-500/80 uppercase text-center sm:text-left">
              SEAL VALIDATED · KOTA KINABALU, SABAH
            </span>

            <button
              onClick={() => {
                playClickSound();
                onBack();
              }}
              onMouseEnter={playHoverSound}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider border transition-all active:scale-95 ${
                isDark
                  ? 'border-[#c49a6c] bg-rose-950/60 text-rose-200 hover:border-rose-300 hover:text-white shadow-[0_0_20px_rgba(244,63,94,0.35)]'
                  : 'border-[#b88e60] bg-white text-stone-900 hover:bg-rose-50 hover:border-rose-600 hover:text-rose-950 shadow-md hover:shadow-[0_0_20px_rgba(225,29,72,0.2)]'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5 text-rose-500" />
              <span>RETURN TO MAIN REALM</span>
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
}