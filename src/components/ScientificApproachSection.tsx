'use client';

import { motion } from 'framer-motion';
import { Shield, Beaker, CheckCircle, Users } from 'lucide-react';

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

const experts = [
  {
    name: 'Dr. Yudan',
    title: 'Spesialis Ilmu Material',
    credentials: 'PhD dalam Teknik Polimer',
    expertise: 'Teknologi lapisan penghalang & perlakuan permukaan',
    bio: 'Ahli terkemuka dalam transformasi material berkelanjutan dengan 15+ tahun penelitian dalam ilmu material ban.',
    icon: Beaker,
  },
  {
    name: 'Dr. Thotik',
    title: 'Ahli Lingkungan & Keselamatan',
    credentials: 'PhD dalam Teknik Lingkungan',
    expertise: 'Emisi nol volatil & standar keselamatan anak',
    bio: 'Pelopor pemrosesan material aman dengan penekanan pada perlindungan anak dan kepatuhan lingkungan.',
    icon: Shield,
  },
];

export function ScientificApproachSection() {
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
          <div className="flex items-center justify-center mb-4">
            <Beaker className="text-blue-500 mr-3" size={32} />
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Pendekatan Ilmiah
            </h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Penelitian ketat, keselamatan terbukti, dan inovasi didukung ahli.
          </p>
        </motion.div>

        {/* Technology Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
        >
          <motion.div
            className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <Shield className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Teknologi Lapisan Penghalang
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Proses proprietari kami menerapkan lapisan pelindung ke material ban daur ulang, menciptakan permukaan yang aman dan tahan lama yang:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-700 dark:text-slate-200">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Menghilangkan penumpahan partikel mikro
              </li>
              <li className="flex items-center text-slate-700 dark:text-slate-200">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Mencegah pencucian bahan kimia
              </li>
              <li className="flex items-center text-slate-700 dark:text-slate-200">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Meningkatkan daya tahan & ketahanan dampak
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Emisi Nol Volatil
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Proses manufaktur kami menghasilkan nol senyawa organik yang mudah menguap (VOC):
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-700 dark:text-slate-200">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Mematuhi standar keselamatan mainan ISO 8124
              </li>
              <li className="flex items-center text-slate-700 dark:text-slate-200">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Memenuhi persyaratan material EU EN 71
              </li>
              <li className="flex items-center text-slate-700 dark:text-slate-200">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Aman untuk kontak anak yang lama
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Expert Profiles */}
        <motion.div className="mb-16" variants={itemVariants}>
          <div className="flex items-center justify-center mb-8">
            <Users className="text-purple-500 mr-3" size={32} />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Tim Konsultasi Ahli
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experts.map((expert, index) => {
              const IconComponent = expert.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Background Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                          {expert.name}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                          {expert.title}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg flex items-center justify-center">
                        <IconComponent className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 italic">
                      {expert.credentials}
                    </p>

                    <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                      Keahlian: {expert.expertise}
                    </p>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {expert.bio}
                    </p>

                    {/* Hover reveal CTA */}
                    <button className="mt-4 w-full px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                      Lihat Profil Lengkap →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Research Process */}
        <motion.div
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-8"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Proses Penelitian & Keselamatan Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                step: '1',
                label: 'Pengujian Material',
                description: 'Analisis komposisi kimia & penyaringan kontaminasi',
              },
              {
                step: '2',
                label: 'Pengembangan Lapisan',
                description: 'Penyempurnaan teknologi penghalang & pengujian daya tahan',
              },
              {
                step: '3',
                label: 'Sertifikasi Keselamatan',
                description: 'Verifikasi kepatuhan ISO 8124 & EU',
              },
              {
                step: '4',
                label: 'Validasi Lapangan',
                description: 'Pengujian dunia nyata di lingkungan sekolah',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                custom={index}
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full font-bold mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-center mb-2">
                    {item.label}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2 text-2xl text-blue-300 dark:text-blue-700">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA for Technical Data */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold rounded-lg text-lg transition-all hover:shadow-xl hover:shadow-blue-500/30"
          >
            Unduh Dokumentasi Teknis & Keselamatan
            <span className="ml-2">↓</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
