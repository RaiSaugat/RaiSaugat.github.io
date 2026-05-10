'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const textVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
      delay,
    },
  }),
};

export function AnimatedText({ children, className = '', delay = 0 }: AnimatedTextProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={delay}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface AnimatedLettersProps {
  text: string;
  className?: string;
  delay?: number;
}

const letterVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
      delay: i * 0.03,
    },
  }),
};

export function AnimatedLetters({ text, className = '', delay = 0 }: AnimatedLettersProps) {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          custom={i + delay * 30}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
