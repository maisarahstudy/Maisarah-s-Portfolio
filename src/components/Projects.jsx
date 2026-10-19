import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, CheckCircle2, Lock, RefreshCw } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/sound';

export default function Projects({ isDark, onOpenPage }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const questArchive = [
    {
      id: '01',
      rank: '✦ CREATIVE MASTER CRAFT ✦',
      badge: 'FANTASY WEB ENGINE',
      title: 'Chronicles of Maisarah - Arcane RPG Portfolio Engine',
      category: 'Creative Engineering & Game UI Systems',
      year: '2026',
      lore: 'An immersive, high-fantasy web engine reimagining the developer portfolio as an ancient JRPG codex. Features a native Web Audio API acoustic synthesizer, real-time light/dark vellum contrast parity, and an interactive 3D illuminated Grimoire.',
      deliverables: [
        'Zero-dependency Web Audio API synthesizer generating physical parchment rustles & resonant bells.',
        'Interactive 5-folio leather-bound spellbook with tactile dog-ear page turning physics.',
        'Accessible dual-theme parity (Velvet Noir & Royal Ivory) with custom alchemical astrolabe cursor.',
      ],
      stack: ['React (Vite)', 'Tailwind CSS', 'Framer Motion', 'Web Audio API', 'Lucide Icons'],
      actionType: 'lore',
      actionLabel: 'Read Design Lore',
    },
    {
      id: '02',
      rank: '✦ MYTHIC S-RANK QUEST ✦',
      badge: 'SURVEILLANCE ENGINE',
      title: 'AiEDESWatch - AI Dengue Outbreak Prediction Platform',
      category: 'Machine Learning & Geospatial Telemetry',
      year: '2026',
      lore: 'Engineered a full-stack predictive surveillance engine utilizing XGBoost to forecast dengue hotspots with a 14-day to 2-month lead time based on environmental and spatiotemporal variables.',
      deliverables: [
        'Interactive geospatial risk heatmaps powered by Leaflet.js and React.',
        'Scalable Python (FastAPI) & Supabase backend architecture.',
        'Automated WhatsApp/SMS community emergency alert notification network.',
      ],
      stack: ['React (Vite)', 'Tailwind CSS', 'FastAPI', 'XGBoost', 'Supabase (PostgreSQL)', 'Leaflet.js'],
      link: 'https://github.com',
      actionLabel: 'Inspect Source',
    },
    {
      id: '03',
      rank: '✦ PHOENIX PROTOCOL // FYP REBUILD ✦',
      badge: 'FROM SCRATCH RECONSTRUCTION',
      title: 'DailyDose - Medication Adherence System (v2.0 Phoenix Edition)',
      category: 'Full-Stack Architecture & System Rebuilding',
      year: '2025 – PRESENT',
      lore: 'The brutally honest truth? My original Final Year Project (FYP) at UiTM almost failed because it was a brittle, tightly-coupled monolith that barely survived the final presentation. Instead of sweeping it under the rug, I am currently rebuilding DailyDose entirely from scratch. Using everything I’ve learned since, I am architecting v2.0 with a decoupled modern stack, bulletproof asynchronous event handling, and high-performance clean code that actually meets my standards.',
      deliverables: [
        'Post-Mortem Analysis: Diagnosed race conditions, bloated controllers, and fragile state management in v1.0.',
        'Architecture Overhaul: Transitioning to clean, modular separation of concerns and deterministic database indexing.',
        'Obsessive Refactoring: Rewriting backend scheduling daemons to guarantee 100% reminder precision under heavy stress.',
      ],
      stack: ['React', 'Laravel / FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Redis', 'Docker'],
      link: 'https://github.com',
      actionLabel: 'Inspect Phoenix Blueprint',
      isOngoing: true,
    },
    {
      id: '04',
      rank: '✦ PUBLIC SECTOR GUILD QUEST ✦',
      badge: 'GOVERNMENT INFRASTRUCTURE',
      title: 'Sabah State Digital Innovation Modernization',
      category: 'High-Volume Enterprise Portal',
      year: '2025',
      lore: 'Commissioned industrial modernization for the Sabah State Digital Innovation Department (JTDIN). Transformed legacy public sector databases into scalable administrative portals.',
      deliverables: [
        'Hardened database access with SQL prepared statements & CSRF defenses.',
        'Automated batch PDF reporting, reducing manual staff preparation by 40%.',
        'Designed status monitoring dashboards, accelerating workflow speed by 25%.',
      ],
      stack: ['Core PHP', 'MySQL', 'Prepared Statements', 'PDF Engine', 'Dashboard UI'],
      actionType: 'nda',
      actionLabel: 'View NDA Status',
    },
  ];

  const handleAction = (quest) => {
    playClickSound();
    if (quest.actionType === 'lore') {
      onOpenPage('lore');
    } else if (quest.actionType === 'nda') {
      onOpenPage('nda');
    } else if (quest.link) {
      window.open(quest.link, '_blank');
    }
  };

  return (
    <section className="py-8 sm:py-16 relative z-10 font-serif">
      
      {/* ✦ SECTION III: GRAND TITLE BANNER ✦ */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-14 pb-6 sm:pb-8 border-b border-rose-500/20 px-2">
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono tracking-widest sm:tracking-[0.3em] uppercase text-rose-500 mb-2 font-bold">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>// SECTION III · QUEST ARCHIVES</span>
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
        </div>
        <h2 className={`text-xl sm:text-3xl md:text-5xl font-normal tracking-[0.12em] sm:tracking-[0.2em] uppercase ${
          isDark ? 'text-white drop-shadow-[0_0_25px_rgba(251,113,133,0.3)]' : 'text-stone-900 font-bold'
        }`}>
          LEGENDARY ARTIFACTS & MISSIONS
        </h2>
        <p className={`mt-2 sm:mt-3 text-[11px] sm:text-sm font-mono tracking-wider sm:tracking-widest uppercase max-w-xl leading-relaxed ${
          isDark ? 'text-rose-200/70' : 'text-stone-600'
        }`}>
          Completed Public Sector Platforms, AI Dengue Surveillance & Active Engineering Refactors
        </p>

        <div className="flex items-center gap-4 mt-4 sm:mt-6 opacity-60">
          <div className={`w-12 sm:w-20 h-[1px] ${isDark ? 'bg-gradient-to-r from-transparent to-rose-400' : 'bg-gradient-to-r from-transparent to-rose-700'}`} />
          <span className="text-xs text-rose-500">✦</span>
          <div className={`w-12 sm:w-20 h-[1px] ${isDark ? 'bg-gradient-to-l from-transparent to-rose-400' : 'bg-gradient-to-l from-transparent to-rose-700'}`} />
        </div>
      </div>

      {/* ✦ MYTHIC QUEST CARDS ✦ */}
      <div className="space-y-6 sm:space-y-8">
        {questArchive.map((quest, index) => (
          <motion.div
            key={quest.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            onMouseEnter={() => {
              setHoveredIndex(index);
              playHoverSound();
            }}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group relative rounded-2xl border-2 p-4 sm:p-7 md:p-10 transition-all duration-300 overflow-hidden ${
              isDark
                ? 'border-[#c49a6c]/60 bg-gradient-to-br from-[#180e15] via-[#10070e] to-[#080306] shadow-[0_0_40px_rgba(244,63,94,0.12)] hover:border-rose-400 hover:shadow-[0_0_50px_rgba(244,63,94,0.25)]'
                : 'border-[#b88e60]/60 bg-white/95 shadow-[0_8px_30px_rgba(184,142,96,0.12)] hover:border-rose-600'
            }`}
          >
            <span className={`absolute top-2.5 left-3 sm:top-3 sm:left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
            <span className={`absolute top-2.5 right-3 sm:top-3 sm:right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
            <span className={`absolute bottom-2.5 left-3 sm:bottom-3 sm:left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
            <span className={`absolute bottom-2.5 right-3 sm:bottom-3 sm:right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>

            <div className={`absolute inset-2 sm:inset-3 border rounded-xl pointer-events-none ${
              isDark ? 'border-[#c49a6c]/20' : 'border-[#b88e60]/20'
            }`} />

            {/* Header Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b pb-3.5 mb-4 sm:mb-6 border-rose-500/20 font-mono text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-rose-500 font-bold text-xs sm:text-sm tracking-wider shrink-0">
                  [{quest.id}]
                </span>
                <span className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase flex items-center gap-1.5 ${
                  quest.isOngoing
                    ? isDark
                      ? 'border-amber-500/40 bg-amber-500/10 text-amber-300'
                      : 'border-amber-600/40 bg-amber-50 text-amber-900'
                    : isDark
                    ? 'border-rose-500/30 bg-rose-500/10 text-rose-400'
                    : 'border-rose-300 bg-rose-50 text-rose-900'
                }`}>
                  {quest.isOngoing && <RefreshCw className="w-3 h-3 animate-spin shrink-0" />}
                  <span className="truncate">{quest.rank}</span>
                </span>
                <span className={`hidden md:inline px-2 py-0.5 rounded border text-[11px] font-semibold ${
                  isDark ? 'border-rose-900/50 text-rose-300' : 'border-stone-300 text-stone-700'
                }`}>
                  {quest.badge}
                </span>
              </div>

              <div className={`text-[11px] sm:text-xs font-semibold tracking-widest uppercase ${isDark ? 'text-rose-400' : 'text-stone-700'}`}>
                {quest.year}
              </div>
            </div>

            {/* Title & Action Button (Decoupled layout prevents mobile collision) */}
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <h3 className={`text-base sm:text-xl md:text-2xl font-bold tracking-tight transition-colors leading-snug ${
                  isDark ? 'text-white group-hover:text-rose-200' : 'text-stone-900 group-hover:text-rose-900'
                }`}>
                  {quest.title}
                </h3>
                <button
                  onClick={() => handleAction(quest)}
                  className={`self-start sm:self-auto shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[11px] sm:text-xs font-mono tracking-wider uppercase transition-all active:scale-95 ${
                    quest.actionType === 'nda'
                      ? 'border-rose-500/50 bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white'
                      : 'border-rose-500/30 hover:border-rose-400 hover:bg-rose-500/20 text-rose-500'
                  }`}
                  aria-label={quest.actionLabel}
                >
                  {quest.actionType === 'nda' && <Lock className="w-3 h-3 shrink-0" />}
                  <span>{quest.actionLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                </button>
              </div>

              <p className={`text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3 leading-relaxed ${
                isDark ? 'text-rose-100/85' : 'text-stone-700'
              }`}>
                {quest.lore}
              </p>
            </div>

            {/* Deliverables */}
            <div className={`p-3.5 sm:p-5 rounded-xl border mb-4 sm:mb-6 space-y-2 ${
              isDark ? 'border-rose-950/60 bg-rose-950/20' : 'border-stone-200 bg-rose-50/40 shadow-xs'
            }`}>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest sm:tracking-[0.25em] text-rose-500 font-bold uppercase block mb-1">
                ✦ MISSION OBJECTIVES & DELIVERABLES ✦
              </span>
              {quest.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className={`leading-snug ${isDark ? 'text-rose-100/90' : 'text-stone-800'}`}>{item}</span>
                </div>
              ))}
            </div>

            {/* Socketed Runes */}
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-rose-500 font-bold uppercase block mb-2">
                SOCKETED TECH RUNES:
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {quest.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-[11px] sm:text-xs font-mono px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-lg border font-semibold transition-all ${
                      isDark
                        ? 'border-[#c49a6c]/40 bg-[#1e1019] text-rose-200 shadow-sm'
                        : 'border-[#b88e60]/40 bg-white text-stone-900 shadow-xs'
                    }`}
                  >
                    ✦ {tech}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}