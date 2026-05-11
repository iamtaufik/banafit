'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

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

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white -mt-16 pt-16 lg:-mt-16 lg:pt-16">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.18),transparent_30%)]" /> */}
       <div className="absolute right-0 top-0 h-full w-full lg:w-[62%]">
          <Image
            src="/assets/background-kids-class.png"
            alt="Kids Background"
            fill
            priority
            className="object-cover object-center opacity-90"
            sizes="100vw"
          />

          {/* soft blur */}
          <div className="absolute inset-0 backdrop-blur-[2px]" />

          {/* gradient blending */}
          <div className="absolute inset-0 bg-gradient-to-l from-slate-950/10 via-slate-950/45 to-slate-950" />

          {/* top shading */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20" />
        </div>
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 items-stretch lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          className="relative order-1 flex items-center px-6 py-16 sm:px-8 lg:order-1 lg:px-12 xl:px-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-2xl">
            <motion.div
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/80 backdrop-blur"
              custom={0}
              variants={textVariants}
            >
              <Sparkles size={14} className="text-cyan-300" />
              Energizing Sustainable Innovation
            </motion.div>

            <motion.h1
              className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
              custom={1}
              variants={textVariants}
            >
              Banafit
            </motion.h1>

            <motion.h2
              className="mt-4 text-2xl font-semibold leading-tight text-cyan-100 sm:text-3xl lg:text-4xl"
              custom={2}
              variants={textVariants}
            >
              Solusi Olahraga Modular Berkelanjutan
            </motion.h2>

            <motion.p
              className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg"
              custom={3}
              variants={textVariants}
            >
              Merevolusi Pendidikan Jasmani melalui ekosistem ekonomi sirkular dari limbah ban bekas.
            </motion.p>

            <motion.p
              className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base"
              custom={4}
              variants={textVariants}
            >
              Dari limbah ban menjadi keunggulan pendidikan. Peralatan olahraga berkelanjutan, furniture daur ulang, dan modul kurikulum inovatif.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap gap-4" custom={5} variants={textVariants}>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-yellow-400 to-orange-500 px-7 py-3.5 text-sm font-bold text-slate-950 transition-transform hover:scale-105 hover:from-yellow-300 hover:to-orange-400"
              >
                Jelajahi Solusi Kami
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="relative order-2 min-h-[420px] overflow-hidden lg:-mt-10 lg:min-h-[700px] lg:rounded-bl-[3rem]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <Image
            src="/assets/background-hero.png"
            alt="Visual hero Banafit"
            fill
            priority
            className="object-contain object-bottom scale-98"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          {/* <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/25 to-transparent lg:bg-linear-to-r lg:from-slate-950/35 lg:via-slate-950/10 lg:to-transparent" /> */}
          {/* <div className="absolute inset-0 border-b border-white/10 lg:border-b-0 lg:border-r" /> */}
        </motion.div>
      </div>
      
    </section>
  );
}
