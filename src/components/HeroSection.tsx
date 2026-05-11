'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
    },
  }),
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      delay: 1.5,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90" />

      {/* Animated Background Circles */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl animate-pulse" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          custom={0}
          variants={textVariants}
        >
          Banafit:
        </motion.h1>

        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 bg-clip-text text-transparent mb-8 leading-tight"
          custom={1}
          variants={textVariants}
        >
          Energizing Sustainable Innovation
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-2xl mb-10 leading-relaxed"
          custom={2}
          variants={textVariants}
        >
          Revolutionizing Physical Education Through Circular Economy Solutions
        </motion.p>

        {/* Additional context */}
        <motion.p
          className="text-base sm:text-lg text-slate-400 max-w-xl mb-12"
          custom={3}
          variants={textVariants}
        >
          From waste tires to educational excellence. Sustainable sports equipment, furniture, and curriculum modules.
        </motion.p>

        {/* CTA Button */}
        <motion.div custom={4} variants={textVariants}>
          <Link
            href="/solutions"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 font-bold rounded-full text-lg transition-all hover:shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-105"
          >
            Explore Our Solutions
            <ChevronDown className="ml-2 rotate-270" size={24} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      >
        <ChevronDown className="text-yellow-400" size={32} />
      </motion.div>
    </section>
  );
}
