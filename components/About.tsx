'use client';

import { motion } from 'motion/react';

const paragraphs = [
  "I'm a Senior Software Engineer with over 7 years of experience building interactive user interfaces and scalable web applications.",
  "My expertise spans the full JavaScript ecosystem, from React and Next.js on the frontend to Node.js and Express on the backend. I'm passionate about creating seamless user experiences with clean, maintainable code.",
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-foreground/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-muted text-lg">
              Building the web, one component at a time.
            </p>
          </motion.div>

          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="text-lg text-muted leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
