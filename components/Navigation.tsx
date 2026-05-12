"use client";

import { navItems } from "@/lib/data";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Navigation() {
    const [hidden, setHidden] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
            setMobileMenuOpen(false);
        } else {
            setHidden(false);
        }
    });

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5"
        >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Image src="/logo.webp" alt="Logo" width={40} height={40} />
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.href}
                            href={item.href}
                            className="text-sm text-muted hover:text-foreground transition-colors"
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            {item.label}
                        </motion.a>
                    ))}

                    {mounted && (
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <SunIcon className="w-5 h-5" />
                            ) : (
                                <MoonIcon className="w-5 h-5" />
                            )}
                        </motion.button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    {mounted && (
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <SunIcon className="w-5 h-5" />
                            ) : (
                                <MoonIcon className="w-5 h-5" />
                            )}
                        </motion.button>
                    )}

                    <motion.button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2"
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <motion.span
                                animate={
                                    mobileMenuOpen
                                        ? { rotate: 45, y: 8 }
                                        : { rotate: 0, y: 0 }
                                }
                                className="w-full h-0.5 bg-foreground origin-left"
                            />
                            <motion.span
                                animate={
                                    mobileMenuOpen
                                        ? { opacity: 0 }
                                        : { opacity: 1 }
                                }
                                className="w-full h-0.5 bg-foreground"
                            />
                            <motion.span
                                animate={
                                    mobileMenuOpen
                                        ? { rotate: -45, y: -8 }
                                        : { rotate: 0, y: 0 }
                                }
                                className="w-full h-0.5 bg-foreground origin-left"
                            />
                        </div>
                    </motion.button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={
                    mobileMenuOpen
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                }
                className="md:hidden overflow-hidden bg-background border-t border-foreground/5"
            >
                <div className="px-6 py-4 flex flex-col gap-4">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-lg text-muted hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </motion.div>
        </motion.header>
    );
}

function SunIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
        </svg>
    );
}

function MoonIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
        </svg>
    );
}
