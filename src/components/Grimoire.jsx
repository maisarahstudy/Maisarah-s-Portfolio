import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Lock, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { playHoverSound, playPageFlipSound, playBookOpenSound, playBookCloseSound } from '../utils/sound';

const SigilLanguages = ({ isDark }) => (
  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
    <circle cx="60" cy="60" r="54" stroke={isDark ? '#f43f5e' : '#b88e60'} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
    <circle cx="60" cy="60" r="46" stroke={isDark ? '#c49a6c' : '#8a5d30'} strokeWidth="1.2" opacity="0.8" />
    <polygon points="60,18 73,88 23,45 97,45 47,88" stroke={isDark ? '#fb7185' : '#be123c'} strokeWidth="1" />
    <circle cx="60" cy="60" r="14" stroke={isDark ? '#c49a6c' : '#8a5d30'} strokeWidth="1" />
    <circle cx="60" cy="18" r="3" fill={isDark ? '#f43f5e' : '#be123c'} />
    <circle cx="73" cy="88" r="3" fill={isDark ? '#f43f5e' : '#be123c'} />
    <circle cx="23" cy="45" r="3" fill={isDark ? '#f43f5e' : '#be123c'} />
    <circle cx="97" cy="45" r="3" fill={isDark ? '#f43f5e' : '#be123c'} />
    <circle cx="47" cy="88" r="3" fill={isDark ? '#f43f5e' : '#be123c'} />
    <text x="60" y="64" textAnchor="middle" fontSize="10" fill={isDark ? '#f43f5e' : '#be123c'} fontFamily="serif">✦</text>
  </svg>
);

const SigilWeb = ({ isDark }) => (
  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
    <circle cx="60" cy="60" r="54" stroke={isDark ? '#f43f5e' : '#b88e60'} strokeWidth="1" opacity="0.6" />
    <polygon points="60,16 98,38 98,82 60,104 22,82 22,38" stroke={isDark ? '#c49a6c' : '#8a5d30'} strokeWidth="1.2" />
    <polygon points="60,28 87,44 87,76 60,92 33,76 33,44" stroke={isDark ? '#fb7185' : '#be123c'} strokeWidth="1" strokeDasharray="2 2" />
    <line x1="60" y1="16" x2="60" y2="104" stroke={isDark ? '#c49a6c' : '#8a5d30'} strokeWidth="0.8" opacity="0.5" />
    <line x1="22" y1="38" x2="98" y2="82" stroke={isDark ? '#c49a6c' : '#8a5d30'} strokeWidth="0.8" opacity="0.5" />
    <line x1="22" y1="82" x2="98" y2="38" stroke={isDark ? '#c49a6c' : '#8a5d30'} strokeWidth="0.8" opacity="0.5" />
    <circle cx="60" cy="60" r="10" fill={isDark ? '#f43f5e' : '#be123c'} fillOpacity="0.2" stroke={isDark ? '#f43f5e' : '#be123c'} strokeWidth="1" />
    <text x="60" y="64" textAnchor="middle" fontSize="10" fill={isDark ? '#f43f5e' : '#be123c'} fontFamily="serif">✦</text>
  </svg>
);

const SigilVaults = ({ isDark }) => (
  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
    <circle cx="60" cy="60" r="54" stroke={isDark ? '#c49a6c' : '#8a5d30'} strokeWidth="1.2" />
    <circle cx="60" cy="60" r="48" stroke={isDark ? '#f43f5e' : '#b88e60'} strokeWidth="0.8" strokeDasharray="4 2" />
    <rect x="36" y="36" width="48" height="48" stroke={isDark ? '#fb7185' : '#be123c'} strokeWidth="1.2" transform="rotate(45 60 60)" />
    <rect x="42" y="42" width="36" height="36" stroke={isDark ? '#c49a6c' : '#8a5d30'} strokeWidth="1" />
    <circle cx="60" cy="60" r="8" fill={isDark ? '#f43f5e' : '#be123c'} fillOpacity="0.25" stroke={isDark ? '#f43f5e' : '#be123c'} strokeWidth="1.2" />
    <line x1="60" y1="6" x2="60" y2="114" stroke={isDark ? '#c49a6c' : '#8a5d30'} strokeWidth="0.5" opacity="0.4" />
    <line x1="6" y1="60" x2="114" y2="60" stroke={isDark ? '#c49a6c' : '#8a5d30'} strokeWidth="0.5" opacity="0.4" />
  </svg>
);

const SigilAlchemy = ({ isDark }) => (
  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
    <circle cx="60" cy="60" r="54" stroke={isDark ? '#f43f5e' : '#b88e60'} strokeWidth="1" opacity="0.6" />
    <circle cx="60" cy="60" r="38" stroke={isDark ? '#c49a6c' : '#8a5d30'} strokeWidth="1" />
    <path d="M60 22 A 38 38 0 0 1 98 60 A 19 19 0 0 1 79 79 A 9.5 9.5 0 0 1 69.5 69.5" stroke={isDark ? '#fb7185' : '#be123c'} strokeWidth="1.2" />
    <line x1="30" y1="60" x2="90" y2="60" stroke={isDark ? '#c49a6c' : '#8a5d30'} strokeWidth="1" />
    <circle cx="40" cy="60" r="3" fill={isDark ? '#f43f5e' : '#be123c'} />
    <circle cx="60" cy="60" r="3" fill={isDark ? '#c49a6c' : '#8a5d30'} />
    <circle cx="80" cy="60" r="3" fill={isDark ? '#f43f5e' : '#be123c'} />
    <path d="M40 60 Q 60 35 80 60" stroke={isDark ? '#fb7185' : '#be123c'} strokeWidth="0.8" strokeDasharray="2 2" />
  </svg>
);

const SigilTongues = ({ isDark }) => (
  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
    <circle cx="60" cy="60" r="54" stroke={isDark ? '#f43f5e' : '#b88e60'} strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
    <circle cx="60" cy="46" r="26" stroke={isDark ? '#c49a6c' : '#8a5d30'} strokeWidth="1.2" />
    <circle cx="48" cy="68" r="26" stroke={isDark ? '#fb7185' : '#be123c'} strokeWidth="1.2" />
    <circle cx="72" cy="68" r="26" stroke={isDark ? '#c49a6c' : '#8a5d30'} strokeWidth="1.2" />
    <circle cx="60" cy="60" r="6" fill={isDark ? '#f43f5e' : '#be123c'} fillOpacity="0.3" stroke={isDark ? '#f43f5e' : '#be123c'} strokeWidth="1" />
    <text x="60" y="63" textAnchor="middle" fontSize="8" fill={isDark ? '#f43f5e' : '#be123c'} fontFamily="serif">✦</text>
  </svg>
);

export default function Grimoire({ isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredDogEar, setHoveredDogEar] = useState(null);

  const folios = [
    {
      pageLeft: '1', pageRight: '2', chapter: 'FOLIO I', latinTitle: 'De Dialectis Primis',
      category: 'PRIMARY SCRIPT LANGUAGES', subtitle: 'Core Syntax & Logic Invocations',
      folioLore: 'The foundational dialects used to summon backend structures, algorithmic logic, and asynchronous data streams.',
      scholarsNote: 'Each language forms a distinct linguistic conduit. Mastered through production implementations and formal CS foundations.',
      Sigil: SigilLanguages,
      skills: [
        { num: '01', name: 'PHP', rank: 'MASTER CRAFT', desc: 'Core PHP & Object-Oriented backend architectures with strict typing.' },
        { num: '02', name: 'Python', rank: 'ADVANCED ML', desc: 'FastAPI predictive microservices, mathematical modeling & inference scripts.' },
        { num: '03', name: 'JavaScript (ES6+)', rank: 'NATIVE FLUENCY', desc: 'Modern asynchronous web applications, event loops & React ecosystem.' },
        { num: '04', name: 'Java & C++', rank: 'FOUNDATIONAL', desc: 'Data structures, algorithm complexity analysis & memory paradigms.' },
        { num: '05', name: 'Dart', rank: 'MOBILE RUNES', desc: 'Cross-platform reactive client architectures and widget orchestration.' },
      ],
    },
    {
      pageLeft: '3', pageRight: '4', chapter: 'FOLIO II', latinTitle: 'De Machinis Telariis',
      category: 'WEB ENGINES & FRAMEWORKS', subtitle: 'Front-to-Back Orchestration',
      folioLore: 'High-throughput frameworks forging responsive interfaces, deterministic state pipelines, and fortified middleware defenses.',
      scholarsNote: 'Architecture optimized for latency reduction, zero-runtime overhead, and seamless modular scalability.',
      Sigil: SigilWeb,
      skills: [
        { num: '01', name: 'React.js (Vite)', rank: 'PRIMARY ENGINE', desc: 'Component lifecycles, custom hooks, virtual DOM reconciliations.' },
        { num: '02', name: 'FastAPI', rank: 'HIGH THROUGHPUT', desc: 'Asynchronous Python endpoints, auto-generated OpenAPI & low-latency execution.' },
        { num: '03', name: 'Tailwind CSS', rank: 'FLUID WEAVE', desc: 'Utility-first styling systems, responsive tokens & dark mode switching.' },
        { num: '04', name: 'Laravel (MVC)', rank: 'SECURE CORE', desc: 'Eloquent ORM persistence, authentication middleware & route dispatch.' },
        { num: '05', name: 'Bootstrap & jQuery', rank: 'LEGACY BASTION', desc: 'Rapid UI templating, DOM manipulation & enterprise maintenance.' },
      ],
    },
    {
      pageLeft: '5', pageRight: '6', chapter: 'FOLIO III', latinTitle: 'De Thesauris Datorum',
      category: 'DATA VAULTS & MOBILE SEALS', subtitle: 'Persistence & Cross-Platform Engines',
      folioLore: 'Transactional data repositories and client-side runtimes preserving state across distributed networks.',
      scholarsNote: 'Schema normalization balanced with indexing strategies to ensure ACID compliance and resilient querying under high loads.',
      Sigil: SigilVaults,
      skills: [
        { num: '01', name: 'PostgreSQL & Supabase', rank: 'RELATIONAL REIGN', desc: 'Row-level security policies, spatiotemporal indexing & realtime events.' },
        { num: '02', name: 'MySQL & SQL', rank: 'TRANSACTIONAL', desc: 'Prepared statements, normalized relational schemas & query optimization.' },
        { num: '03', name: 'Firebase & MongoDB', rank: 'DOCUMENT STORE', desc: 'NoSQL collections, cloud synchronizations & document listeners.' },
        { num: '04', name: 'Flutter & Android Studio', rank: 'MOBILE CORE', desc: 'Multiplatform rendering, hardware sensors & native device APIs.' },
      ],
    },
    {
      pageLeft: '7', pageRight: '8', chapter: 'FOLIO IV', latinTitle: 'De Alchimia Visualis',
      category: 'VISUAL ALCHEMY & LINEAGE', subtitle: 'Design Craftsmanship & Git Lineage',
      folioLore: 'The visual translation of ideas into precise spatial tokens, together with deterministic version control lineage.',
      scholarsNote: 'Visual tokens designed with accessibility contrast ratios and human-centric micro-interactions in mind.',
      Sigil: SigilAlchemy,
      skills: [
        { num: '01', name: 'Figma & Canva', rank: 'INTERFACE ALCHEMY', desc: 'Design tokens, high-fidelity wireframes & component design systems.' },
        { num: '02', name: 'Clip Studio Paint & Photoshop', rank: 'DIGITAL CRAFT', desc: 'Graphic assets, raster editing, textures & visual detailing.' },
        { num: '03', name: 'Adobe Premiere & CapCut', rank: 'TEMPORAL MOTION', desc: 'Technical project demonstrations & motion video showcases.' },
        { num: '04', name: 'Git & GitHub Lineage', rank: 'CODE COMMITS', desc: 'Atomic commits, branch merging, rebasing & CI/CD deployment.' },
      ],
    },
    {
      pageLeft: '9', pageRight: '10', chapter: 'FOLIO V', latinTitle: 'De Linguis et Virtutibus',
      category: 'HUMAN TONGUES & VIRTUES', subtitle: 'Spoken Lexicons & Collaborative Instincts',
      folioLore: 'The bridges of human collaboration, cross-border cultural understanding, and disciplined analytical problem solving.',
      scholarsNote: 'Language is the primary protocol. Verified through formal JLPT accreditation and academic Dean’s List records.',
      Sigil: SigilTongues,
      skills: [
        { num: '01', name: 'Japanese (JLPT N4 Certified)', rank: 'EASTERN CIPHER', desc: 'Syntactic grammar, kanji comprehension & cross-cultural communication.' },
        { num: '02', name: 'English & Malay', rank: 'NATIVE PROFICIENCY', desc: 'Bilingual technical writing, articulate documentation & leadership.' },
        { num: '03', name: 'Analytical Thinking & Problem Solving', rank: 'VITAL ESSENCE', desc: 'Deconstructing complex software bugs into predictable root causes.' },
        { num: '04', name: 'Attention to Detail & Adaptability', rank: 'CRAFT DISCIPLINE', desc: 'Obsessive micro-interaction polish & rapid mastery of new tech.' },
      ],
    },
  ];

  const handleOpenBook = () => {
    playBookOpenSound();
    setIsOpen(true);
  };

  const handleCloseBook = () => {
    playBookCloseSound();
    setIsOpen(false);
  };

  const handleNextPage = () => {
    if (currentPage < folios.length - 1) {
      playPageFlipSound();
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      playPageFlipSound();
      setCurrentPage((prev) => prev - 1);
    }
  };

  const page = folios[currentPage];
  const SigilComponent = page.Sigil;

  return (
    <div className="w-full pt-4 sm:pt-8 pb-10 sm:pb-16 font-serif">
      {/* ✦ SECTION BANNER ✦ */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-14 pb-6 sm:pb-8 border-b border-rose-500/20 px-2">
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono tracking-widest sm:tracking-[0.3em] uppercase text-rose-500 mb-2 font-bold">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>// SECTION II · THE ARCANE ARCHIVES</span>
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
        </div>
        <h2 className={`text-xl sm:text-3xl md:text-5xl font-normal tracking-[0.12em] sm:tracking-[0.2em] uppercase ${
          isDark ? 'text-white drop-shadow-[0_0_25px_rgba(251,113,133,0.3)]' : 'text-stone-900 font-bold'
        }`}>
          THE TECHNOMANCER'S GRIMOIRE
        </h2>
        <p className={`mt-2 sm:mt-3 text-[11px] sm:text-sm font-mono tracking-wider sm:tracking-widest uppercase max-w-xl leading-relaxed ${
          isDark ? 'text-rose-200/70' : 'text-stone-600'
        }`}>
          A Living Compendium of Programming Languages, Frameworks, Architecture & Human Dialects
        </p>

        <div className="flex items-center gap-4 mt-4 sm:mt-6 opacity-60">
          <div className={`w-12 sm:w-20 h-[1px] ${isDark ? 'bg-gradient-to-r from-transparent to-rose-400' : 'bg-gradient-to-r from-transparent to-rose-700'}`} />
          <span className="text-xs text-rose-500">✦</span>
          <div className={`w-12 sm:w-20 h-[1px] ${isDark ? 'bg-gradient-to-l from-transparent to-rose-400' : 'bg-gradient-to-l from-transparent to-rose-700'}`} />
        </div>
      </div>

      {/* ✦ CLOSED BOOK STATE ✦ */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center p-2 sm:p-8 text-center"
        >
          <div className="relative group max-w-full">
            <div className={`absolute top-2.5 sm:top-3 right-[-6px] sm:right-[-12px] w-full h-[98%] rounded-r-2xl border-r-4 border-b-4 ${
              isDark ? 'bg-[#26191b] border-[#c49a6c]/60 shadow-[0_0_30px_rgba(0,0,0,0.9)]' : 'bg-[#faf4ec] border-[#b88e60]/70 shadow-lg'
            }`} />
            <div className={`absolute top-5 sm:top-6 right-[-3px] sm:right-[-6px] w-full h-[96%] rounded-r-xl border-r-2 ${
              isDark ? 'bg-[#1a1113] border-[#8a6843]/50' : 'bg-[#f4ebe0] border-[#b88e60]/40'
            }`} />

            <motion.button
              onClick={handleOpenBook}
              onMouseEnter={playHoverSound}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`relative w-[280px] xs:w-[320px] sm:w-[420px] md:w-[440px] h-[500px] sm:h-[580px] rounded-r-2xl rounded-l-md border-2 text-left transition-all duration-300 shadow-2xl overflow-hidden active:scale-95 ${
                isDark ? 'border-[#c49a6c]/80 bg-gradient-to-br from-[#1c0f16] via-[#12080f] to-[#080306] shadow-[0_0_55px_rgba(244,63,94,0.25)]' : 'border-[#b88e60] bg-gradient-to-br from-[#ffffff] via-[#fcfbf9] to-[#f7f3ec] shadow-[0_15px_45px_rgba(184,142,96,0.25)]'
              }`}
            >
              <div className={`absolute top-0 bottom-0 left-0 w-8 sm:w-10 border-r-2 flex flex-col justify-around py-8 sm:py-10 items-center z-20 ${
                isDark ? 'bg-gradient-to-r from-black via-[#1a0c14] to-[#12080f] border-[#c49a6c]/60' : 'bg-gradient-to-r from-[#ebe2d8] via-[#f4eee6] to-[#ebe2d8] border-[#b88e60]'
              }`}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`w-5 sm:w-6 h-2 sm:h-2.5 rounded-full border shadow-inner ${isDark ? 'border-rose-400/40 bg-black/50' : 'border-[#b88e60] bg-stone-200'}`} />
                ))}
              </div>

              <div className={`absolute top-1/2 -right-1 -translate-y-1/2 w-7 sm:w-9 h-16 sm:h-20 rounded-l-md border-2 flex items-center justify-center shadow-xl z-20 ${
                isDark ? 'border-[#c49a6c] bg-[#24131d] text-[#e0b584]' : 'border-[#b88e60] bg-[#fbf5ee] text-[#8a5d30]'
              }`}>
                <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 drop-shadow-sm" />
              </div>

              <div className="ml-8 sm:ml-10 h-full flex flex-col justify-between items-center text-center py-6 sm:py-7 px-3 sm:px-5 relative z-10">
                <div className={`absolute inset-2 sm:inset-3 border rounded-xl pointer-events-none ${isDark ? 'border-[#c49a6c]/35' : 'border-[#b88e60]/35'}`} />
                <div className={`absolute inset-3.5 sm:inset-5 border border-dashed rounded-lg pointer-events-none ${isDark ? 'border-[#c49a6c]/20' : 'border-[#b88e60]/20'}`} />

                <span className={`absolute top-3 left-3 sm:top-4 sm:left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
                <span className={`absolute top-3 right-3 sm:top-4 sm:right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
                <span className={`absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
                <span className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>

                <div className="pt-1 sm:pt-2">
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest sm:tracking-[0.35em] uppercase text-rose-500 font-bold block">✦ SACRED CODEX ✦</span>
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-[0.22em] uppercase opacity-60 block mt-0.5">NETCENTRIC ARTIFACT</span>
                </div>

                <div className="flex flex-col items-center my-auto">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                    className={`w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 p-1.5 flex items-center justify-center relative mb-4 sm:mb-6 shadow-inner ${
                      isDark ? 'border-[#c49a6c]/60' : 'border-[#b88e60]/70'
                    }`}
                  >
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-dashed border-rose-500/70" />
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 rotate-45 border absolute ${isDark ? 'border-[#c49a6c]/70' : 'border-[#b88e60]/70'}`} />
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rotate-12 border border-rose-400/40 absolute" />
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border absolute ${isDark ? 'border-[#c49a6c]/50' : 'border-[#b88e60]/50'}`} />
                    <span className="text-xl sm:text-2xl text-rose-500 absolute drop-shadow-[0_0_15px_rgba(244,63,94,0.9)]">✦</span>
                  </motion.div>

                  <h3 className={`text-xl sm:text-3xl tracking-[0.16em] sm:tracking-[0.25em] font-normal uppercase leading-tight ${isDark ? 'text-white' : 'text-stone-900 font-bold'}`}>
                    THE ARCANE GRIMOIRE
                  </h3>
                  <p className="text-[11px] sm:text-xs font-mono tracking-widest sm:tracking-[0.28em] mt-1.5 sm:mt-2 text-rose-500 font-semibold uppercase">5 FOLIOS // SEALED</p>
                </div>

                <div className="pb-1 sm:pb-2">
                  <span className={`inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono tracking-wider sm:tracking-[0.22em] uppercase px-4 sm:px-6 py-2 sm:py-3 rounded-full border transition-all ${
                    isDark ? 'border-[#c49a6c] bg-[#24131d]/90 text-rose-200 group-hover:border-rose-300 group-hover:text-white shadow-[0_0_20px_rgba(244,63,94,0.35)]' : 'border-[#b88e60] bg-white text-stone-900 font-bold group-hover:bg-rose-50 shadow-md'
                  }`}>
                    <span>✦ UNSEAL GRIMOIRE ✦</span>
                  </span>
                </div>
              </div>
            </motion.button>
          </div>
          <p className={`text-[11px] sm:text-xs font-mono tracking-wider sm:tracking-[0.2em] uppercase mt-4 sm:mt-6 ${isDark ? 'text-rose-300/60' : 'text-stone-600'}`}>
            Tap the ancient tome to unseal the folios
          </p>
        </motion.div>
      )}

      {/* ✦ OPEN BOOK STATE ✦ */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`relative w-full max-w-5xl mx-auto rounded-2xl border-2 shadow-2xl backdrop-blur-md overflow-hidden ${
            isDark ? 'border-[#c49a6c]/70 bg-gradient-to-b from-[#140a12] via-[#0e060c] to-[#070306] text-rose-50 shadow-[0_0_70px_rgba(244,63,94,0.22)]' : 'border-[#b88e60] bg-[#faf6f0] text-stone-950 shadow-2xl'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b px-4 sm:px-10 py-3.5 border-rose-500/20 font-mono text-xs tracking-widest uppercase">
            <div className="flex items-center gap-2 text-rose-500 font-bold truncate pr-2">
              <Bookmark className="w-4 h-4 fill-current shrink-0" />
              <span className="truncate">CHRONICLES OF MAISARAH // {page.chapter}</span>
            </div>

            <button
              onClick={handleCloseBook}
              onMouseEnter={playHoverSound}
              className={`shrink-0 flex items-center gap-2 px-3 py-1 rounded-lg border text-xs font-mono transition-all active:scale-95 ${
                isDark ? 'border-rose-900/60 bg-rose-950/40 text-rose-300 hover:border-rose-400 hover:text-white' : 'border-stone-300 bg-white text-stone-800 hover:border-rose-600 hover:text-black shadow-xs'
              }`}
            >
              <span>SEAL CODEX</span>
              <X className="w-4 h-4 text-rose-500 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="relative min-h-[520px] flex flex-col justify-between"
            >
              <div className={`hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 pointer-events-none z-20 ${
                isDark ? 'bg-gradient-to-r from-transparent via-black/45 to-transparent' : 'bg-gradient-to-r from-transparent via-stone-900/[0.07] to-transparent'
              }`} />

              <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
                {/* VERSO (Left Folio) */}
                <div className="p-5 sm:p-10 lg:pr-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-rose-500/15 relative">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-rose-500/80 pb-3 border-b border-rose-500/15 uppercase mb-6">
                      <span>LIBER TECHNOMANCER</span>
                      <span>VERSO</span>
                    </div>

                    <h3 className={`text-xl sm:text-2xl lg:text-3xl font-normal tracking-[0.16em] uppercase leading-tight ${isDark ? 'text-white' : 'text-stone-900 font-bold'}`}>
                      {page.category}
                    </h3>
                    
                    <p className="text-xs font-mono text-rose-500 tracking-[0.2em] uppercase mt-1.5 font-semibold">
                      {page.subtitle}
                    </p>

                    <div className="w-16 h-[1.5px] bg-rose-500/40 my-4" />

                    <p className={`text-xs sm:text-sm leading-relaxed italic ${isDark ? 'text-rose-100/80' : 'text-stone-700'}`}>
                      "{page.folioLore}"
                    </p>

                    {/* ✦ ENLARGED, GLOWING & SLOWLY BLINKING MAGIC SIGIL ✦ */}
                    <motion.div
                      animate={{
                        opacity: [0.72, 0.98, 0.72],
                        scale: [0.98, 1.02, 0.98],
                        filter: isDark
                          ? [
                              'drop-shadow(0 0 10px rgba(244,63,94,0.35))',
                              'drop-shadow(0 0 22px rgba(244,63,94,0.65))',
                              'drop-shadow(0 0 10px rgba(244,63,94,0.35))',
                            ]
                          : [
                              'drop-shadow(0 0 8px rgba(190,18,60,0.2))',
                              'drop-shadow(0 0 16px rgba(190,18,60,0.45))',
                              'drop-shadow(0 0 8px rgba(190,18,60,0.2))',
                            ],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="my-5 sm:my-7 flex justify-center items-center w-36 h-36 sm:w-44 sm:h-44 mx-auto"
                    >
                      <SigilComponent isDark={isDark} />
                    </motion.div>
                  </div>

                  <div className="pt-2">
                    <div className={`p-4 rounded-lg border font-mono text-xs relative mb-6 ${
                      isDark ? 'border-rose-950/70 bg-rose-950/20 text-rose-200/90' : 'border-[#b88e60]/30 bg-rose-50/60 text-stone-800'
                    }`}>
                      <span className="text-[10px] tracking-widest text-rose-500 font-bold block mb-1">// TECHNOMANCER'S MARGINALIA:</span>
                      <span className="italic leading-relaxed">{page.scholarsNote}</span>
                    </div>

                    <div className="flex items-center justify-center pt-2 font-mono text-xs text-rose-500/80">
                      <span className="tracking-widest font-semibold">— {page.pageLeft} —</span>
                    </div>
                  </div>

                  {/* ✦ PREV DOG-EAR (Bottom-Left) ✦ */}
                  {currentPage > 0 && (
                    <motion.button
                      onClick={handlePrevPage}
                      onMouseEnter={() => { setHoveredDogEar('prev'); playHoverSound(); }}
                      onMouseLeave={() => setHoveredDogEar(null)}
                      className="hidden lg:flex absolute bottom-0 left-0 w-16 h-16 z-30 group items-end justify-start focus:outline-none cursor-pointer"
                      aria-label="Turn to Previous Folio"
                    >
                      <AnimatePresence>
                        {hoveredDogEar === 'prev' && (
                          <motion.span
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className={`absolute bottom-12 left-4 px-3 py-1 rounded font-mono text-[10px] tracking-widest uppercase border whitespace-nowrap shadow-xl pointer-events-none ${
                              isDark ? 'bg-black/95 border-rose-500 text-rose-200' : 'bg-white border-[#b88e60] text-stone-900'
                            }`}
                          >
                            ◄ PREV FOLIO
                          </motion.span>
                        )}
                      </AnimatePresence>

                      <svg className="w-14 h-14 transition-transform duration-200 group-hover:scale-110 drop-shadow-md" viewBox="0 0 48 48">
                        {/* Folded corner cutout shadow */}
                        <path d="M0 0 L48 48 L0 48 Z" fill={isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.12)'} />
                        
                        {/* Highlighted folded page triangle flap */}
                        <polygon
                          points="0,0 48,48 48,0"
                          fill={isDark ? '#2a1622' : '#f5ebe0'}
                          stroke={isDark ? '#e0a96d' : '#8a5d30'}
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />

                        {/* Diagonal crease stitch highlight */}
                        <line
                          x1="0"
                          y1="0"
                          x2="48"
                          y2="48"
                          stroke={isDark ? '#f43f5e' : '#be123c'}
                          strokeWidth="1.5"
                          strokeDasharray="3 2"
                        />
                      </svg>
                    </motion.button>
                  )}
                </div>

                {/* RECTO (Right Folio) */}
                <div className="p-5 sm:p-10 lg:pl-14 flex flex-col justify-between relative">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-rose-500/80 pb-3 border-b border-rose-500/15 uppercase mb-6">
                      <span>{page.latinTitle}</span>
                      <span>RECTO</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-rose-500/70 pb-2 mb-4 uppercase">
                      <span>INCANTATION</span>
                      <span>PROFICIENCY</span>
                    </div>

                    <div className="space-y-4">
                      {page.skills.map((skill) => (
                        <div
                          key={skill.name}
                          onMouseEnter={playHoverSound}
                          className="group relative pb-2.5 border-b border-rose-500/10 transition-colors"
                        >
                          <div className="flex items-baseline justify-between gap-3 mb-1">
                            <div className="flex items-baseline gap-2.5">
                              <span className="font-mono text-xs font-bold text-rose-500 shrink-0 whitespace-nowrap select-none">{skill.num}.</span>
                              <span className={`text-sm sm:text-base font-bold tracking-wide group-hover:text-rose-500 transition-colors ${isDark ? 'text-white' : 'text-stone-900'}`}>{skill.name}</span>
                            </div>

                            <div className="hidden sm:block flex-1 border-b border-dotted border-rose-500/30 mx-2" />

                            <span className={`text-[11px] font-mono tracking-wider uppercase font-bold shrink-0 whitespace-nowrap ${isDark ? 'text-rose-400' : 'text-rose-700'}`}>[{skill.rank}]</span>
                          </div>

                          <p className={`text-xs pl-7 leading-relaxed ${isDark ? 'text-rose-100/70' : 'text-stone-600'}`}>{skill.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 font-mono text-xs text-rose-500/80 flex items-center justify-center">
                    <span className="tracking-widest font-semibold">— {page.pageRight} —</span>
                  </div>

                  {/* ✦ NEXT DOG-EAR (Bottom-Right) ✦ */}
                  {currentPage < folios.length - 1 && (
                    <motion.button
                      onClick={handleNextPage}
                      onMouseEnter={() => { setHoveredDogEar('next'); playHoverSound(); }}
                      onMouseLeave={() => setHoveredDogEar(null)}
                      className="hidden lg:flex absolute bottom-0 right-0 w-16 h-16 z-30 group items-end justify-end focus:outline-none cursor-pointer"
                      aria-label="Turn to Next Folio"
                    >
                      <AnimatePresence>
                        {hoveredDogEar === 'next' && (
                          <motion.span
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className={`absolute bottom-full mb-2 right-2 px-3 py-1 rounded font-mono text-[10px] tracking-widest uppercase border whitespace-nowrap shadow-xl pointer-events-none z-50 ${
                              isDark ? 'bg-black/95 border-rose-500 text-rose-200' : 'bg-white border-[#b88e60] text-stone-900'
                            }`}
                          >
                            NEXT FOLIO ►
                          </motion.span>
                        )}
                      </AnimatePresence>

                      <svg className="w-14 h-14 transition-transform duration-200 group-hover:scale-110 drop-shadow-md" viewBox="0 0 48 48">
                        {/* Folded corner cutout shadow */}
                        <path d="M0 48 L48 0 L48 48 Z" fill={isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.12)'} />
                        
                        {/* Highlighted folded page triangle flap */}
                        <polygon
                          points="0,48 48,0 0,0"
                          fill={isDark ? '#2a1622' : '#f5ebe0'}
                          stroke={isDark ? '#e0a96d' : '#8a5d30'}
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />

                        {/* Diagonal crease stitch highlight */}
                        <line
                          x1="0"
                          y1="48"
                          x2="48"
                          y2="0"
                          stroke={isDark ? '#f43f5e' : '#be123c'}
                          strokeWidth="1.5"
                          strokeDasharray="3 2"
                        />
                      </svg>
                    </motion.button>
                  )}
                </div>

              </div>

              {/* ✦ MOBILE COMPACT PAGINATION BAR ✦ */}
              <div className="lg:hidden flex items-center justify-between p-3 border-t border-rose-500/20 bg-black/15 font-mono text-xs">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded border transition-all ${
                    currentPage === 0
                      ? 'opacity-30 border-transparent cursor-not-allowed'
                      : isDark
                      ? 'border-rose-500/40 bg-rose-950/60 text-rose-200 active:bg-rose-900'
                      : 'border-stone-300 bg-white text-stone-800 active:bg-stone-100'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>PREV</span>
                </button>

                <span className="text-[11px] tracking-wider font-semibold text-rose-500">
                  {page.chapter} ({currentPage + 1}/5)
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === folios.length - 1}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded border transition-all ${
                    currentPage === folios.length - 1
                      ? 'opacity-30 border-transparent cursor-not-allowed'
                      : isDark
                      ? 'border-rose-500/40 bg-rose-950/60 text-rose-200 active:bg-rose-900'
                      : 'border-stone-300 bg-white text-stone-800 active:bg-stone-100'
                  }`}
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

        </motion.div>
      )}

    </div>
  );
}