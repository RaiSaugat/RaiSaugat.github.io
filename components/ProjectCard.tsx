'use client';

import { motion } from 'motion/react';
import { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -8 }}
      className="group relative bg-foreground/[0.02] border border-foreground/5 rounded-2xl p-6 md:p-8 hover:border-foreground/10 transition-colors"
    >
      {/* Project number */}
      <span className="text-sm text-muted/50 font-mono">
        {String(index + 1).padStart(2, '0')}
      </span>

      <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-3 group-hover:text-accent transition-colors">
        {project.title}
      </h3>

      <p className="text-muted leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm bg-foreground/5 text-muted rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover arrow */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 17L17 7M17 7H7M17 7v10"
          />
        </svg>
      </motion.div>
    </motion.article>
  );
}
