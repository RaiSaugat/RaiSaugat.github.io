'use client';

import { motion } from 'framer-motion';
import { AnimatedLetters, AnimatedText } from './AnimatedText';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <AnimatedLetters text="Saugat Rai" delay={0.1} />
        </h1>

        <AnimatedText delay={0.4} className="text-2xl md:text-3xl lg:text-4xl text-muted mb-8">
          Senior Software Engineer
        </AnimatedText>

        <AnimatedText delay={0.6}>
          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            7+ years building interactive user interfaces and scalable web applications.
            Passionate about creating beautiful, performant experiences.
          </p>
        </AnimatedText>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-12 flex flex-wrap gap-4"
        >
          {/*
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </motion.a>
          */}
          <motion.a
            href="#contact"
            className="px-8 py-4 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-foreground/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
