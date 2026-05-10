'use client';

import { motion } from 'motion/react';
import { skills } from '@/lib/data';

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Tools</h2>
          <p className="text-muted text-lg max-w-xl">
            Technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: groupIndex * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="p-6 bg-foreground/[0.02] border border-foreground/5 rounded-2xl"
            >
              <h3 className="text-lg font-semibold mb-4 text-accent">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1.5 text-sm bg-foreground/5 text-foreground/80 rounded-full hover:bg-foreground/10 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
