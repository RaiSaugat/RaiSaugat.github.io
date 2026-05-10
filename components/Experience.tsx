'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-foreground/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-muted text-lg max-w-xl">
            My professional journey in software development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-foreground/10 origin-top hidden md:block"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                  className={`absolute top-2 w-3 h-3 bg-accent rounded-full hidden md:block ${
                    index % 2 === 0 ? '-right-1.5' : '-left-1.5'
                  }`}
                />

                <div className="p-6 bg-background border border-foreground/5 rounded-2xl hover:border-foreground/10 transition-colors">
                  <span className="text-sm text-accent font-medium">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{exp.role}</h3>
                  <p className="text-muted mt-1">{exp.company}</p>
                  
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted flex items-center gap-2">
                        <span className="text-accent">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
