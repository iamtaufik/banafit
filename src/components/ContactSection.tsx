'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Award, Users } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const nominationSchema = z.object({
  nominatorName: z.string().min(2, 'Nama wajib diisi'),
  organization: z.string().min(2, 'Organisasi wajib diisi'),
  email: z.string().email('Email tidak valid'),
  awardName: z.string().min(2, 'Nama award wajib diisi'),
  message: z.string().min(10, 'Pesan minimal 10 karakter'),
});

type NominationFormData = z.infer<typeof nominationSchema>;

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NominationFormData>();

  const onSubmit = (data: NominationFormData) => {
    console.log('Nomination data:', data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Hubungi Kami
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Hubungi tim kami, nominasikan Banafit untuk penghargaan internasional, atau minta informasi teknis.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
        >
          <motion.div
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-8 hover:shadow-lg transition-shadow"
            variants={itemVariants}
          >
            <Mail className="text-blue-500 mb-4" size={32} />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Email
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              contact@banafit.id
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Respons dalam 24 jam
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-8 hover:shadow-lg transition-shadow"
            variants={itemVariants}
          >
            <Phone className="text-green-500 mb-4" size={32} />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Telepon
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              +62 274 XXXXXX
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Senin - Jumat, 09:00 - 17:00
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-8 hover:shadow-lg transition-shadow"
            variants={itemVariants}
          >
            <MapPin className="text-red-500 mb-4" size={32} />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Lokasi
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Gunungkidul, Yogyakarta
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Pusat Inovasi & Showroom
            </p>
          </motion.div>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16" variants={containerVariants}>
          {/* Press Kit Section */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-800 p-8"
            variants={itemVariants}
          >
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Download className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Untuk Nominator Nikkei
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Paket dokumentasi lengkap
                </p>
              </div>
            </div>

            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Percepat nominasi Banafit ke penghargaan dan kompetisi internasional. Paket pers komprehensif kami mencakup spesifikasi teknis, dokumentasi penelitian, dan data dampak.
            </p>

            <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 mb-6">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                Dokumen yang Disertakan:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700 dark:text-slate-300">
                  <span className="text-blue-500 mr-3">📄</span>
                  <span>Data Teknis & Spesifikasi Produk</span>
                </li>
                <li className="flex items-start text-slate-700 dark:text-slate-300">
                  <span className="text-blue-500 mr-3">📊</span>
                  <span>Penelitian Ilmiah & Sertifikasi Keamanan</span>
                </li>
                <li className="flex items-start text-slate-700 dark:text-slate-300">
                  <span className="text-blue-500 mr-3">🌍</span>
                  <span>Analisis Dampak Lingkungan</span>
                </li>
                <li className="flex items-start text-slate-700 dark:text-slate-300">
                  <span className="text-blue-500 mr-3">🎓</span>
                  <span>Panduan Kurikulum Modul Pendidikan</span>
                </li>
                <li className="flex items-start text-slate-700 dark:text-slate-300">
                  <span className="text-blue-500 mr-3">📸</span>
                  <span>Aset Brand & Fotografi Resolusi Tinggi</span>
                </li>
                <li className="flex items-start text-slate-700 dark:text-slate-300">
                  <span className="text-blue-500 mr-3">📑</span>
                  <span>Rilis Pers & Media Kit</span>
                </li>
              </ul>
            </div>

            <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all hover:shadow-lg flex items-center justify-center">
              <Download className="mr-2" size={20} />
              Unduh Press Kit (PDF)
            </button>

            <p className="text-xs text-slate-600 dark:text-slate-400 mt-4 text-center">
              Ukuran file: 24 MB | Diperbarui: Mei 2026
            </p>
          </motion.div>

          {/* Nomination Form */}
          <motion.div
            className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8"
            variants={itemVariants}
          >
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <Award className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Kirim Nominasi
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Nominasikan Banafit untuk penghargaan
                </p>
              </div>
            </div>

            {submitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="text-5xl mb-4">✓</div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Terima Kasih!
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Nominasi Anda telah diterima. Tim kami akan menghubungi Anda segera.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Nominator Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Nama Nominator
                  </label>
                  <input
                    type="text"
                    {...register('nominatorName')}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white"
                    placeholder="Nama Lengkap"
                  />
                  {errors.nominatorName && (
                    <p className="text-red-500 text-sm mt-1">{errors.nominatorName.message}</p>
                  )}
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Organisasi / Institusi
                  </label>
                  <input
                    type="text"
                    {...register('organization')}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white"
                    placeholder="Nama Organisasi"
                  />
                  {errors.organization && (
                    <p className="text-red-500 text-sm mt-1">{errors.organization.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white"
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Award Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Nama Award / Kompetisi
                  </label>
                  <input
                    type="text"
                    {...register('awardName')}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white"
                    placeholder="Mis. Nikkei Global CSR Award 2026"
                  />
                  {errors.awardName && (
                    <p className="text-red-500 text-sm mt-1">{errors.awardName.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Pesan / Catatan Nominasi
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white"
                    placeholder="Jelaskan alasan nominasi Anda..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold rounded-lg transition-all mt-6"
                >
                  Kirim Nominasi
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* Social Proof / Partnerships */}
        <motion.div
          className="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-8"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Didukung Oleh & Mitra
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-6">
            Banafit diakui dan didukung oleh organisasi lingkungan, pendidikan, dan inovasi berkelanjutan terkemuka.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['ERI Korlantas Polri', 'Indonesian Ministry of Education', 'Nikkei Inc.', 'Sustainable Brands'].map(
              (partner, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-6 bg-white dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-600"
                  variants={itemVariants}
                >
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {partner}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Ada pertanyaan? Tim kami siap membantu.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all hover:shadow-xl">
            Jadwalkan Konsultasi
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
