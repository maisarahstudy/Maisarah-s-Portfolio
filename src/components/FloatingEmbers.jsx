import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingEmbers({ isDark }) {
  const embers = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 3.5 + 1.8,
    duration: Math.random() * 8 + 7,
    delay: Math.random() * 8,
    sway: Math.random() * 8 - 4,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-[45] overflow-hidden">
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          initial={{ y: '105vh', x: `${ember.x}vw`, opacity: 0 }}
          animate={{
            y: '-5vh',
            x: `${ember.x + ember.sway}vw`,
            opacity: [0, 0.35, 0.6, 0],
          }}
          transition={{
            duration: ember.duration,
            repeat: Infinity,
            delay: ember.delay,
            ease: 'easeInOut',
          }}
          className={`absolute rounded-full blur-[0.5px] ${
            isDark
              ? 'bg-rose-300 shadow-[0_0_10px_rgba(251,113,133,0.65)]'
              : 'bg-rose-700 shadow-[0_0_8px_rgba(225,29,72,0.45)]'
          }`}
          style={{ width: ember.size, height: ember.size }}
        />
      ))}
    </div>
  );
}