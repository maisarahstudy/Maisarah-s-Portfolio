import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function CustomCursor({ isDark }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      setIsHovered(!!target.closest('button, a, input, [role="button"], .cursor-pointer'));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{ x: mouseX, y: mouseY }}
      className="pointer-events-none fixed top-0 left-0 z-[100] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{
          rotate: 360,
          scale: isClicking ? 0.8 : isHovered ? 1.35 : 1,
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 20, ease: 'linear' },
          scale: { duration: 0.2, ease: 'easeOut' },
        }}
        className={`relative w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-300 ${
          isDark
            ? isHovered
              ? 'border-rose-400 bg-rose-950/20 shadow-[0_0_16px_rgba(244,63,94,0.6)]'
              : 'border-rose-400/40 shadow-[0_0_8px_rgba(244,63,94,0.2)]'
            : isHovered
            ? 'border-rose-700 bg-rose-500/10 shadow-[0_0_12px_rgba(225,29,72,0.4)]'
            : 'border-rose-700/40'
        }`}
      >
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full ${isDark ? 'bg-rose-300' : 'bg-rose-700'}`} />
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 rounded-full ${isDark ? 'bg-rose-300' : 'bg-rose-700'}`} />
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isDark ? 'bg-rose-300' : 'bg-rose-700'}`} />
        <div className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1 h-1 rounded-full ${isDark ? 'bg-rose-300' : 'bg-rose-700'}`} />
        <div className={`w-6 h-6 rounded-full border border-dashed transition-colors duration-300 ${isDark ? 'border-rose-400/30' : 'border-rose-700/30'}`} />
      </motion.div>

      <span className={`absolute text-xs select-none transition-all duration-200 ${
        isDark
          ? isHovered ? 'text-white scale-125 drop-shadow-[0_0_8px_rgba(244,63,94,0.9)]' : 'text-rose-300 drop-shadow-[0_0_4px_rgba(244,63,94,0.5)]'
          : isHovered ? 'text-rose-950 scale-125 drop-shadow-[0_0_6px_rgba(225,29,72,0.6)]' : 'text-rose-800'
      }`}>
        ✦
      </span>
    </motion.div>
  );
}