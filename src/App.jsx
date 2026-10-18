import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RPGLoader from './components/RPGLoader';
import RPGStartScreen from './components/RPGStartScreen';
import MagicSigil from './components/MagicSigil';
import FloatingEmbers from './components/FloatingEmbers';
import CustomCursor from './components/CustomCursor';
import ParchmentScroll from './components/ParchmentScroll';
import CharacterSheet from './components/CharacterSheet';
import Projects from './components/Projects';
import DesignLorePage from './components/DesignLorePage';
import JtdinNdaPage from './components/JtdinNdaPage';
import Contact from './components/Contact';
import { Volume2, VolumeX, Undo2, Sun, Moon } from 'lucide-react';
import { 
  toggleMute, 
  playClickSound, 
  playHoverSound, 
  startAmbientSong, 
  stopAmbientSong,
  initAutostartOnFirstInteraction 
} from './utils/sound';

export default function App() {
  const [gameState, setGameState] = useState('loading');
  const [activeSubPage, setActiveSubPage] = useState(null); // null | 'lore' | 'nda'
  const [muted, setMuted] = useState(false);
  const [theme, setTheme] = useState('dark');

  const isDark = theme === 'dark';

  // ✦ BROWSER UNLOCK: Starts audio on user's first click or tap ✦
  useEffect(() => {
    initAutostartOnFirstInteraction();
  }, []);

  const handleMuteToggle = () => {
    const isNowMuted = toggleMute();
    setMuted(isNowMuted);
    if (!isNowMuted) playClickSound();
  };

  const handleThemeToggle = () => {
    playClickSound();
    setTheme(isDark ? 'light' : 'dark');
  };

  const handleReturnToTitle = () => {
    playClickSound();
    stopAmbientSong(); // Stops BGM when going back to title screen
    setActiveSubPage(null);
    setGameState('start-screen');
  };

  // ✦ ATTEMPT AUTO-START WHEN TITLE SCREEN APPEARS ✦
  const handleLoadingComplete = () => {
    setGameState('start-screen');
    setTimeout(() => {
      // If browser allows it, it plays. If browser blocks it,
      // initAutostartOnFirstInteraction will catch the first click!
      startAmbientSong();
    }, 1000);
  };

  const handleSelectMenuOption = (sectionId) => {
    playClickSound();
    // Ensure BGM plays when user enters game from start screen
    startAmbientSong();

    if (sectionId === 'lore') {
      setActiveSubPage('lore');
      setGameState('in-game');
    } else {
      setActiveSubPage(null);
      setGameState('in-game');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-500 relative overflow-x-hidden font-sans select-none ${
        isDark
          ? 'bg-[#080608] text-rose-50 selection:bg-rose-500/30 selection:text-rose-200'
          : 'bg-[#faf8f6] text-stone-900 selection:bg-rose-200 selection:text-rose-950'
      }`}
    >
      {/* 0. Arcane Astrolabe Custom Cursor */}
      <CustomCursor isDark={isDark} />

      {/* 1. Ambient Rotating Magic Sigil */}
      <MagicSigil isDark={isDark} />

      {/* 2. Layered Floating Magical Embers */}
      <FloatingEmbers isDark={isDark} />

      {/* 3. Fixed Top-Left Return Button */}
      {gameState === 'in-game' && (
        <div className="fixed top-6 left-6 z-50">
          <button
            onClick={activeSubPage ? () => setActiveSubPage(null) : handleReturnToTitle}
            onMouseEnter={playHoverSound}
            aria-label="Return"
            className={`cursor-none group flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono transition-all backdrop-blur-md shadow-md ${
              isDark
                ? 'border-rose-500/30 bg-rose-950/70 text-rose-200 hover:border-rose-400 hover:text-white shadow-[0_0_15px_rgba(244,63,94,0.25)]'
                : 'border-stone-300 bg-white/95 text-stone-900 hover:border-rose-600 hover:text-black shadow-sm'
            }`}
          >
            <Undo2 className="w-3.5 h-3.5 text-rose-500 transition-transform group-hover:-translate-x-1" />
            <span>{activeSubPage ? 'RETURN TO REALM' : 'RETURN TO TITLE'}</span>
          </button>
        </div>
      )}

      {/* 4. Top-Right Global Controls */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-2.5">
        <button
          onClick={handleThemeToggle}
          onMouseEnter={playHoverSound}
          aria-label="Toggle Theme"
          className={`cursor-none flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono transition-all backdrop-blur-md shadow-sm ${
            isDark
              ? 'border-rose-500/30 bg-rose-950/60 text-rose-200 hover:border-rose-400 hover:text-white'
              : 'border-stone-300 bg-white/90 text-stone-900 hover:border-rose-500 hover:text-black shadow-xs'
          }`}
        >
          {isDark ? (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-300" />
              <span>LIGHT MODE</span>
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-rose-700" />
              <span>DARK MODE</span>
            </>
          )}
        </button>

        <button
          onClick={handleMuteToggle}
          onMouseEnter={playHoverSound}
          aria-label="Toggle Audio"
          className={`cursor-none flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono transition-all backdrop-blur-md shadow-sm ${
            isDark
              ? 'border-rose-500/30 bg-rose-950/60 text-rose-200 hover:border-rose-400'
              : 'border-stone-300 bg-white/90 text-stone-900 hover:border-rose-500 shadow-xs'
          }`}
        >
          {muted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-rose-500" />}
          <span className="hidden sm:inline">{muted ? 'MUTE' : 'SOUND'}</span>
        </button>
      </div>

      {/* 5. Game Flow Screens */}
      <AnimatePresence mode="wait">
        {gameState === 'loading' && (
          <RPGLoader key="loader" isDark={isDark} onComplete={handleLoadingComplete} />
        )}

        {gameState === 'start-screen' && (
          <RPGStartScreen
            key="start"
            isDark={isDark}
            onSelectOption={handleSelectMenuOption}
          />
        )}
      </AnimatePresence>

      {/* 6. The In-Game World inside the Master Parchment Scroll (Enlarged to max-w-7xl) */}
      {gameState === 'in-game' && (
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12">
          <AnimatePresence mode="wait">
            {activeSubPage === 'lore' && (
              <DesignLorePage key="lore" isDark={isDark} onBack={() => setActiveSubPage(null)} />
            )}

            {activeSubPage === 'nda' && (
              <JtdinNdaPage key="nda" isDark={isDark} onBack={() => setActiveSubPage(null)} />
            )}

            {!activeSubPage && (
              <motion.div
                key="main-realm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <ParchmentScroll isDark={isDark}>
                  <div id="about">
                    <CharacterSheet isDark={isDark} />
                  </div>

                  <div id="projects">
                    <Projects isDark={isDark} onOpenPage={(page) => setActiveSubPage(page)} />
                  </div>

                  <div id="contact">
                    <Contact isDark={isDark} />
                  </div>
                </ParchmentScroll>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </main>
  );
}