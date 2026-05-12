"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { experiences } from "@/lib/data";

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number];

export function Experience() {
    const [active, setActive] = useState(0);
    const exp = experiences[active];

    return (
        <section id="experience" className="py-32 px-6 bg-foreground/2">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Experience
                    </h2>
                    <p className="text-foreground/70 text-lg max-w-xl">
                        My professional journey in software development.
                    </p>
                </motion.div>

                {/* Mobile / Tablet — Timeline */}
                <div className="md:hidden relative">
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease }}
                        className="absolute left-3 top-0 bottom-0 w-px bg-foreground/10 origin-top"
                    />

                    <div className="space-y-8">
                        {experiences.map((e, i) => (
                            <motion.div
                                key={e.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                                className="relative pl-10"
                            >
                                {/* Dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                                    className="absolute left-3 top-5 w-2.5 h-2.5 rounded-full bg-accent -translate-x-1/2 ring-4 ring-background"
                                />

                                <div className="p-5 bg-background border border-foreground/5 rounded-2xl">
                                    <span className="text-xs font-mono text-foreground/60">
                                        {e.period}
                                    </span>
                                    <h3 className="text-lg font-bold mt-1">{e.role}</h3>
                                    <p className="text-accent text-sm font-medium mt-0.5">
                                        {e.company}
                                    </p>
                                    <ul className="mt-4 space-y-3">
                                        {e.description.map((item, j) => (
                                            <li
                                                key={j}
                                                className="flex gap-2 text-sm text-foreground/80 leading-relaxed"
                                            >
                                                <span className="text-accent mt-1 shrink-0 text-xs">
                                                    ▹
                                                </span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Desktop — Tab selector */}
                <div className="hidden md:flex gap-0">
                    {/* Tab list */}
                    <div className="relative flex flex-col shrink-0 border-l-2 border-foreground/10">
                        <motion.div
                            className="absolute -left-0.5 w-0.5 bg-accent"
                            animate={{ top: `${active * 64}px` }}
                            transition={{ duration: 0.3, ease }}
                            style={{ height: "64px" }}
                        />
                        {experiences.map((e, i) => (
                            <button
                                key={e.id}
                                onClick={() => setActive(i)}
                                className={`px-6 h-16 text-left whitespace-nowrap text-sm font-medium transition-colors duration-200
                                    ${active === i ? "text-accent" : "text-foreground/65 hover:text-foreground hover:bg-foreground/5"}`}
                            >
                                {e.role}
                            </button>
                        ))}
                    </div>

                    {/* Content panel */}
                    <div className="pl-12 flex-1 min-h-80">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, x: 16 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -16 }}
                                transition={{ duration: 0.25, ease }}
                            >
                                <div className="mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-accent font-medium">
                                            {exp.company}
                                        </span>
                                        <span className="text-foreground/20">·</span>
                                        <span className="text-sm text-foreground/60 font-mono">
                                            {exp.period}
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-4">
                                    {exp.description.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: i * 0.07, ease }}
                                            className="flex gap-3 text-foreground/80 leading-relaxed"
                                        >
                                            <span className="text-accent mt-1.5 shrink-0 text-xs">
                                                ▹
                                            </span>
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-2 mt-10">
                                    {experiences.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActive(i)}
                                            className={`h-px transition-all duration-300 ${
                                                i === active
                                                    ? "w-8 bg-accent"
                                                    : "w-4 bg-foreground/20 hover:bg-foreground/40"
                                            }`}
                                        />
                                    ))}
                                    <span className="text-xs text-foreground/60 ml-2 font-mono">
                                        {String(active + 1).padStart(2, "0")} /{" "}
                                        {String(experiences.length).padStart(2, "0")}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
