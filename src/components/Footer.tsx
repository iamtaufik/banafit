'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 dark:bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4">Banafit</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Mengubah limbah ban menjadi solusi pendidikan berkelanjutan untuk masa depan yang lebih baik.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-slate-400 hover:text-white transition-colors">
                  Solusi
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-slate-400 hover:text-white transition-colors">
                  Dampak
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Informasi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/the-issue" className="text-slate-400 hover:text-white transition-colors">
                  Isu Limbah
                </Link>
              </li>
              <li>
                <Link href="/scientific-approach" className="text-slate-400 hover:text-white transition-colors">
                  Riset & Keamanan
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-slate-400 hover:text-white transition-colors">
                  Pengalaman
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Hubungi Kami</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p>contact@banafit.id</p>
              <p>+62 274 XXXXXX</p>
              <p className="text-xs">Gunungkidul, Yogyakarta</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
          variants={itemVariants}
        >
          {/* Copyright */}
          <div className="text-sm text-slate-400">
            <p>
              © {currentYear} Banafit.
            </p>
          </div>

          {/* Created By */}
          <div className="text-sm text-slate-400 text-center sm:text-right">
            <p>
              Dibuat oleh{' '}
              <a
                href="https://www.linkedin.com/in/iamtaufik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
              >
                iamtaufik
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
