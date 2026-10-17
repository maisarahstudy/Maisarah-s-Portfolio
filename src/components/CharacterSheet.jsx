import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Award, Code2, Heart, Zap, Briefcase, GraduationCap, User } from 'lucide-react';
import { playHoverSound } from '../utils/sound';
import Grimoire from './Grimoire';

export default function CharacterSheet({ isDark }) {
  const stats = [
    { name: 'Spatio-Temporal AI & ML (XGBoost)', value: 92, max: 100 },
    { name: 'Netcentric Arch & Web Security (CSRF, SQLi)', value: 95, max: 100 },
    { name: 'Full-Stack Engineering (React, FastAPI, Laravel)', value: 90, max: 100 },
    { name: 'Relational & Scalable DBs (Postgres, MySQL)', value: 88, max: 100 },
  ];

  const workExperience = [
    {
      company: 'Jabatan Teknologi Digital Dan Inovasi Negeri Sabah (JTDI)',
      role: 'Industrial Training / Software Engineering Intern',
      period: 'September 2025 – December 2025',
      location: 'Kota Kinabalu, Sabah',
      desc: 'Developed and modernized secure, data-driven government web applications using core PHP and MySQL, upgrading legacy architectures to support high-volume administrative data.',
      highlights: [
        'Hardened application security implementing CSRF protection and SQL prepared statements.',
        'Engineered automated PDF reporting pipelines, slashing manual preparation time by 40%.',
        'Collaborated with supervisors to design status tracking dashboards, resulting in a 25% improvement in administrative processing speed.',
      ],
    },
  ];

  const education = [
    {
      institution: 'Gamuda AI Academy',
      degree: 'Full-Stack AI Coding Bootcamp Alumna',
      period: 'May 2026',
      location: 'Kota Kinabalu, Sabah',
      note: 'Intensive engineering training specializing in modern web stacks, Python FastAPI, and Google Cloud AI integrations.',
    },
    {
      institution: 'Universiti Teknologi MARA (UiTM)',
      degree: 'Bachelor of Computer Science (Hons.) Netcentric Computing',
      period: 'October 2022',
      location: 'Jasin, Melaka',
      note: 'CGPA: 3.25 · Dean’s List Academic Achievement Award recipient.',
    },
    {
      institution: 'Universiti Teknologi MARA (UiTM)',
      degree: 'Diploma in Applied Science',
      period: 'October 2019',
      location: 'Kota Samarahan, Sarawak',
      note: 'CGPA: 3.45 · Dean’s List Academic Achievement Award recipient.',
    },
  ];

  const perks = [
    { title: "Dean's List Academic Award", desc: "Recognized for continuous academic excellence across Netcentric Computing & Applied Science at UiTM." },
    { title: "BKNS Sabah State Scholar", desc: "Prestigious Sabah State Government Scholarship Recipient (2019 – 2026)." },
    { title: "Polyglot Language Proficiency", desc: "Native in English & Malay, certified in Japanese (JLPT N4)." },
    { title: "Certified Network Specialist", desc: "CCNAv7: Introduction to Networks Certified with deep routing & protocol knowledge." },
  ];

  return (
    <section className={`py-14 border-b relative z-10 font-serif transition-colors duration-500 ${
      isDark ? 'border-rose-950/60' : 'border-stone-300/80'
    }`}>
      
      {/* ✦ SECTION I: GRAND TITLE BANNER ✦ */}
      <div className="flex flex-col items-center text-center mb-14 pb-8 border-b border-rose-500/20">
        <div className="flex items-center gap-3 text-xs font-mono tracking-[0.3em] uppercase text-rose-500 mb-2.5 font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>// SECTION I · HEROIC CODEX</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-normal tracking-[0.2em] uppercase ${
          isDark ? 'text-white drop-shadow-[0_0_25px_rgba(251,113,133,0.3)]' : 'text-stone-900 font-bold'
        }`}>
          CHARACTER PROFILE & STATUS
        </h2>
        <p className={`mt-3 text-xs sm:text-sm font-mono tracking-widest uppercase max-w-xl leading-relaxed ${
          isDark ? 'text-rose-200/70' : 'text-stone-600'
        }`}>
          Biography, Professional Experience, Vitals & Academic Accreditations
        </p>

        <div className="flex items-center gap-4 mt-6 opacity-60">
          <div className={`w-20 h-[1px] ${isDark ? 'bg-gradient-to-r from-transparent to-rose-400' : 'bg-gradient-to-r from-transparent to-rose-700'}`} />
          <span className="text-xs text-rose-500">✦</span>
          <div className={`w-20 h-[1px] ${isDark ? 'bg-gradient-to-l from-transparent to-rose-400' : 'bg-gradient-to-l from-transparent to-rose-700'}`} />
        </div>
      </div>

      {/* ✦ 1. UNIFIED GLASSMORPHIC DOSSIER TABLETS (MAGIC CIRCLE SHINES THROUGH!) ✦ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        
        {/* Left Column: Avatar & Vitals Codex Tablet */}
        <div className={`lg:col-span-5 rounded-2xl border-2 p-8 relative overflow-hidden backdrop-blur-md transition-all duration-500 ${
          isDark
            ? 'border-[#c49a6c]/60 bg-[#12080f]/80 shadow-[0_0_40px_rgba(244,63,94,0.18)]'
            : 'border-[#b88e60]/60 bg-white/80 shadow-[0_8px_30px_rgba(184,142,96,0.12)]'
        }`}>
          <span className={`absolute top-3 left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
          <span className={`absolute top-3 right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
          <span className={`absolute bottom-3 left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
          <span className={`absolute bottom-3 right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>

          <div className={`absolute inset-3 border rounded-xl pointer-events-none ${
            isDark ? 'border-[#c49a6c]/25' : 'border-[#b88e60]/20'
          }`} />

          <div className="mt-4 flex flex-col items-center text-center relative z-10">
            <div className="relative w-40 h-40 flex items-center justify-center mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className={`absolute inset-0 rounded-full border-2 border-dashed ${
                  isDark ? 'border-[#c49a6c]/50' : 'border-[#b88e60]/50'
                }`}
              />
              <div className={`w-32 h-32 rounded-full border-2 flex items-center justify-center ${
                isDark
                  ? 'border-rose-400/60 bg-gradient-to-b from-rose-950/80 to-black shadow-[0_0_25px_rgba(244,63,94,0.35)]'
                  : 'border-rose-600/70 bg-gradient-to-b from-rose-50 to-white shadow-md'
              }`}>
                <Shield className="w-16 h-16 stroke-1 text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]" />
              </div>
            </div>

            <h3 className={`text-2xl font-bold tracking-wide ${isDark ? 'text-white' : 'text-stone-900'}`}>
              Nur Fatihah Maisarah
            </h3>
            <p className={`text-sm font-mono font-semibold mt-1 ${isDark ? 'text-rose-200' : 'text-rose-800'}`}>
              Binti Salto @ Suharto
            </p>
            <span className={`mt-3.5 px-4 py-1.5 rounded-full text-xs font-mono border font-semibold ${
              isDark
                ? 'border-rose-500/40 bg-rose-900/40 text-rose-200 shadow-sm'
                : 'border-rose-300 bg-rose-50 text-rose-950 shadow-xs'
            }`}>
              Full-Stack Developer & AI Engineer
            </span>
          </div>

          <div className="mt-8 space-y-4 font-mono text-xs sm:text-sm relative z-10">
            <div>
              <div className={`flex justify-between font-semibold mb-1.5 ${isDark ? 'text-rose-200' : 'text-stone-800'}`}>
                <span className="flex items-center gap-2"><Heart className="w-4 h-4 text-rose-500 fill-current" /> VITALITY</span>
                <span className="font-bold">100 / 100</span>
              </div>
              <div className={`h-2.5 w-full rounded-full overflow-hidden border ${isDark ? 'bg-rose-950 border-rose-900/60' : 'bg-stone-200 border-stone-300'}`}>
                <div className="h-full bg-rose-500 rounded-full w-full shadow-[0_0_10px_rgba(244,63,94,0.9)]" />
              </div>
            </div>

            <div>
              <div className={`flex justify-between font-semibold mb-1.5 ${isDark ? 'text-rose-200' : 'text-stone-800'}`}>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-cyan-400 fill-current" /> MANA (COMPUTE CAPACITY)</span>
                <span className="font-bold">98 / 100</span>
              </div>
              <div className={`h-2.5 w-full rounded-full overflow-hidden border ${isDark ? 'bg-rose-950 border-rose-900/60' : 'bg-stone-200 border-stone-300'}`}>
                <div className="h-full bg-gradient-to-r from-rose-500 to-cyan-400 rounded-full w-[98%] shadow-[0_0_10px_rgba(6,182,212,0.7)]" />
              </div>
            </div>
          </div>

          <div className={`mt-8 pt-5 border-t font-mono text-xs sm:text-sm space-y-2 relative z-10 ${
            isDark ? 'border-[#c49a6c]/30 text-stone-300' : 'border-[#b88e60]/30 text-stone-700'
          }`}>
            <p className="flex justify-between"><span>BASE REALM:</span> <span className="font-bold text-rose-500">Kota Kinabalu, Sabah</span></p>
            <p className="flex justify-between"><span>CREDENTIALS:</span> <span className="font-bold text-rose-500">UiTM & Gamuda AI Alumna</span></p>
          </div>
        </div>

        {/* Right Column: About Me Bio & Capabilities */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className={`rounded-2xl border-2 p-8 backdrop-blur-md transition-all duration-500 relative overflow-hidden ${
            isDark
              ? 'border-[#c49a6c]/60 bg-[#12080f]/80 shadow-[0_0_40px_rgba(244,63,94,0.18)]'
              : 'border-[#b88e60]/60 bg-white/80 shadow-[0_8px_30px_rgba(184,142,96,0.12)]'
          }`}>
            <span className={`absolute top-3 left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
            <span className={`absolute top-3 right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
            <div className={`absolute inset-3 border rounded-xl pointer-events-none ${
              isDark ? 'border-[#c49a6c]/25' : 'border-[#b88e60]/20'
            }`} />

            <h4 className={`text-sm font-mono uppercase tracking-widest mb-4 flex items-center gap-2.5 font-bold relative z-10 ${
              isDark ? 'text-rose-200' : 'text-stone-900'
            }`}>
              <User className="w-4 h-4 text-rose-500" /> Technomancer Biography (About Me)
            </h4>

            <div className={`space-y-4 text-sm sm:text-base leading-relaxed relative z-10 font-sans font-normal ${
              isDark ? 'text-rose-100/85' : 'text-stone-700'
            }`}>
              <p>
                I am a Computer Science graduate specializing in Netcentric Computing from Universiti Teknologi MARA (UiTM), complemented by intensive full-stack AI engineering training as a Gamuda AI Academy alumnus. 
              </p>
              <p>
                With hands-on public sector experience developing secure, data-driven web applications using core PHP, Laravel, and MySQL in Kota Kinabalu, I bridge the gap between robust database architecture and intelligent machine learning systems. I am an adaptable developer eager to apply foundational software engineering and database design principles within collaborative development teams.
              </p>
            </div>
          </div>

          <div className={`rounded-2xl border-2 p-8 backdrop-blur-md transition-all duration-500 relative overflow-hidden ${
            isDark
              ? 'border-[#c49a6c]/60 bg-[#12080f]/80 shadow-[0_0_40px_rgba(244,63,94,0.18)]'
              : 'border-[#b88e60]/60 bg-white/80 shadow-[0_8px_30px_rgba(184,142,96,0.12)]'
          }`}>
            <span className={`absolute top-3 left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
            <span className={`absolute top-3 right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
            <div className={`absolute inset-3 border rounded-xl pointer-events-none ${
              isDark ? 'border-[#c49a6c]/25' : 'border-[#b88e60]/20'
            }`} />

            <h4 className={`text-sm font-mono uppercase tracking-widest mb-6 flex items-center gap-2.5 font-bold relative z-10 ${
              isDark ? 'text-rose-200' : 'text-stone-900'
            }`}>
              <Code2 className="w-4 h-4 text-rose-500" /> Core Combat Capabilities
            </h4>
            <div className="space-y-4 relative z-10">
              {stats.map((stat) => (
                <div key={stat.name} className="font-mono text-xs sm:text-sm">
                  <div className={`flex justify-between mb-2 font-semibold ${isDark ? 'text-rose-100' : 'text-stone-800'}`}>
                    <span>{stat.name}</span>
                    <span className="font-bold text-rose-500 text-sm">{stat.value} / {stat.max}</span>
                  </div>
                  <div className={`h-3 w-full rounded-full overflow-hidden border ${
                    isDark ? 'bg-rose-950 border-rose-900/60' : 'bg-stone-200 border-stone-300'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`h-full rounded-full ${
                        isDark
                          ? 'bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.6)]'
                          : 'bg-gradient-to-r from-rose-700 via-rose-600 to-rose-500'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ✦ 2. WORK EXPERIENCE & EDUCATION CHRONICLES ✦ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        
        {/* Work Experience */}
        <div className={`rounded-2xl border-2 p-8 backdrop-blur-md relative overflow-hidden transition-all duration-500 ${
          isDark
            ? 'border-[#c49a6c]/60 bg-[#12080f]/80 shadow-[0_0_40px_rgba(244,63,94,0.18)]'
            : 'border-[#b88e60]/60 bg-white/80 shadow-[0_8px_30px_rgba(184,142,96,0.12)]'
        }`}>
          <span className={`absolute top-3 left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
          <span className={`absolute top-3 right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
          <div className={`absolute inset-3 border rounded-xl pointer-events-none ${
            isDark ? 'border-[#c49a6c]/25' : 'border-[#b88e60]/20'
          }`} />

          <h4 className={`text-sm font-mono uppercase tracking-widest mb-6 flex items-center gap-2.5 font-bold relative z-10 ${
            isDark ? 'text-rose-200' : 'text-stone-900'
          }`}>
            <Briefcase className="w-4 h-4 text-rose-500" /> Professional Experience (Guild Quests)
          </h4>

          <div className="space-y-6 relative z-10">
            {workExperience.map((work) => (
              <div key={work.company} className="space-y-2 font-sans">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs">
                  <span className="text-rose-500 font-bold uppercase tracking-wider">{work.period}</span>
                  <span className={isDark ? 'text-rose-300/70 font-semibold' : 'text-stone-600 font-semibold'}>{work.location}</span>
                </div>
                <h5 className={`text-base font-bold tracking-wide font-serif ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {work.role}
                </h5>
                <p className="text-xs font-mono text-rose-400 font-semibold">{work.company}</p>
                <p className={`text-xs sm:text-sm leading-relaxed pt-1 ${isDark ? 'text-rose-100/85' : 'text-stone-700'}`}>
                  {work.desc}
                </p>
                <ul className="space-y-2 pt-2">
                  {work.highlights.map((h, i) => (
                    <li key={i} className={`text-xs flex items-start gap-2.5 ${isDark ? 'text-rose-200/80' : 'text-stone-600'}`}>
                      <span className="text-rose-500 font-bold shrink-0 mt-0.5">✦</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Training */}
        <div className={`rounded-2xl border-2 p-8 backdrop-blur-md relative overflow-hidden transition-all duration-500 ${
          isDark
            ? 'border-[#c49a6c]/60 bg-[#12080f]/80 shadow-[0_0_40px_rgba(244,63,94,0.18)]'
            : 'border-[#b88e60]/60 bg-white/80 shadow-[0_8px_30px_rgba(184,142,96,0.12)]'
        }`}>
          <span className={`absolute top-3 left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
          <span className={`absolute top-3 right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
          <div className={`absolute inset-3 border rounded-xl pointer-events-none ${
            isDark ? 'border-[#c49a6c]/25' : 'border-[#b88e60]/20'
          }`} />

          <h4 className={`text-sm font-mono uppercase tracking-widest mb-6 flex items-center gap-2.5 font-bold relative z-10 ${
            isDark ? 'text-rose-200' : 'text-stone-900'
          }`}>
            <GraduationCap className="w-4 h-4 text-rose-500" /> Education & Training (Academy Scrolls)
          </h4>

          <div className="space-y-5 relative z-10 font-sans">
            {education.map((edu) => (
              <div key={edu.degree} className="space-y-1.5 border-b border-rose-500/15 pb-4 last:border-none last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs">
                  <span className="text-rose-500 font-bold uppercase tracking-wider">{edu.period}</span>
                  <span className={isDark ? 'text-rose-300/70 font-semibold' : 'text-stone-600 font-semibold'}>{edu.location}</span>
                </div>
                <h5 className={`text-sm sm:text-base font-bold tracking-wide font-serif ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {edu.degree}
                </h5>
                <p className="text-xs font-mono text-rose-400 font-semibold">{edu.institution}</p>
                <p className={`text-xs italic pt-0.5 ${isDark ? 'text-rose-100/75' : 'text-stone-600'}`}>
                  {edu.note}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ✦ 3. PASSIVE PERKS & GRIMOIRE ✦ */}
      <div className="space-y-12">
        <div className={`rounded-2xl border-2 p-8 backdrop-blur-md transition-all duration-500 relative overflow-hidden ${
          isDark
            ? 'border-[#c49a6c]/60 bg-[#12080f]/80 shadow-[0_0_40px_rgba(244,63,94,0.18)]'
            : 'border-[#b88e60]/60 bg-white/80 shadow-[0_8px_30px_rgba(184,142,96,0.12)]'
        }`}>
          <span className={`absolute top-3 left-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
          <span className={`absolute top-3 right-4 text-xs ${isDark ? 'text-[#c49a6c]' : 'text-[#b88e60]'}`}>✦</span>
          <div className={`absolute inset-3 border rounded-xl pointer-events-none ${
            isDark ? 'border-[#c49a6c]/25' : 'border-[#b88e60]/20'
          }`} />

          <h4 className={`text-sm font-mono uppercase tracking-widest mb-5 flex items-center gap-2.5 font-bold relative z-10 ${
            isDark ? 'text-rose-200' : 'text-stone-900'
          }`}>
            <Award className="w-4 h-4 text-rose-500" /> Sacred Decrees & Academic Accolades
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            {perks.map((perk) => (
              <div
                key={perk.title}
                onMouseEnter={playHoverSound}
                className={`p-4 rounded-xl border transition-all ${
                  isDark
                    ? 'border-rose-900/50 bg-rose-950/30 hover:border-rose-400/80 shadow-xs'
                    : 'border-stone-200 bg-rose-50/50 hover:border-rose-400 shadow-xs'
                }`}
              >
                <p className={`text-sm font-bold ${isDark ? 'text-rose-200' : 'text-stone-900'}`}>{perk.title}</p>
                <p className={`text-xs mt-1.5 leading-relaxed font-normal ${isDark ? 'text-rose-100/80' : 'text-stone-600'}`}>{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-rose-500/20">
          <Grimoire isDark={isDark} />
        </div>
      </div>

    </section>
  );
}