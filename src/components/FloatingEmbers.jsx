import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingEmbers({ isDark }) {
  // 22 faint, delicate magical embers
  const embers = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    x: Math.random() * 100, // percentage across screen
    size: Math.random() * 3 + 2, // 2px to 5px (delicate & small)
    duration: Math.random() * 9 + 8, // 8s to 17s (slow & serene float)
    delay: Math.random() * 6,
  }));

  return (
    // z-[45] allows it to float over the start screen background, pointer-events-none ensures zero click interference!
    <div className="pointer-events-none fixed inset-0 z-[45] overflow-hidden">
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          initial={{
            y: '105vh',
            x: `${ember.x}vw`,
            opacity: 0,
          }}
          animate={{
            y: '-5vh',
            x: `${ember.x + (Math.random() * 6 - 3)}vw`,
            // Faint, gentle fade-in and fade-out so it's subtle and relaxing
            opacity: [0, 0.25, 0.45, 0],
          }}
          transition={{
            duration: ember.duration,
            repeat: Infinity,
            delay: ember.delay,
            ease: 'easeInOut',
          }}
          className={`absolute rounded-full blur-[0.6px] ${
            isDark
              ? 'bg-rose-300 shadow-[0_0_8px_rgba(251,113,133,0.5)]'
              : 'bg-rose-700 shadow-[0_0_6px_rgba(225,29,72,0.35)]'
          }`}
          style={{
            width: ember.size,
            height: ember.size,
          }}
        />
      ))}
    </div>
  );
}