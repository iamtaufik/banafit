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
    <section 
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/hero-background.jpg)',
      }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          custom={0}
          variants={textVariants}
        >
          Banafit:
        </motion.h1>

        <motion.h2
          className="text-3xl sm:text-5xl lg:text-5xl font-bold text-white mb-8 leading-tight drop-shadow-md"
          custom={1}
          variants={textVariants}
        >
          Solusi Olahraga Modular Berkelanjutan
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-white max-w-2xl mb-10 leading-relaxed drop-shadow-md"
          custom={2}
          variants={textVariants}
        >
          Merevolusi Pendidikan Jasmani melalui Ekosistem Ekonomi Sirkular dari Limbah Ban Bekas
        </motion.p>

        {/* Additional context */}
        <motion.p
          className="text-base sm:text-lg text-white/90 max-w-xl mb-12 drop-shadow-md"
          custom={3}
          variants={textVariants}
        >
          Dari limbah ban menjadi keunggulan pendidikan. Peralatan olahraga berkelanjutan, furniture daur ulang, dan modul kurikulum inovatif.
        </motion.p>

        {/* CTA Button */}
        <motion.div custom={4} variants={textVariants}>
          <Link
            href="/solutions"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 font-bold rounded-full text-lg transition-all hover:shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-105"
          >
            Jelajahi Solusi Kami
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
        <ChevronDown className="text-yellow-400 drop-shadow-lg" size={32} />
      </motion.div>
    </section>
  );
}
