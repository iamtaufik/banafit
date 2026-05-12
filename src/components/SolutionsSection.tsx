'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Dumbbell, Home, BookOpen, ChevronRight } from 'lucide-react';

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

const solutionTabs = [
  {
    id: 'sports',
    label: 'Banafit Sports',
    icon: Dumbbell,
    description: 'Peralatan stasiun latihan modular',
    heroImage: '/assets/kids-playing-outside.png',
    content: {
      tagline: 'Revolusionkan Pelajaran PE',
      intro: 'Stasiun latihan olahraga modular yang dibangun dari ban daur ulang berkelanjutan.',
      products: [
        {
          name: 'Batlingban',
          spec: 'Pelatih Keseimbangan & Kelincahan',
          description: 'Mengembangkan koordinasi dan kekuatan inti',
          features: ['Desain modular', 'Konfigurasi dapat ditumpuk', 'Tahan cuaca'],
          image: '/assets/kids-playing-outside.png',
          color: 'bg-blue-100 dark:bg-blue-900/30',
        },
        {
          name: 'Plyoban',
          spec: 'Platform Latihan Plyometrik',
          description: 'Peralatan latihan berdampak tinggi untuk kekuatan & daya',
          features: ['Tinggi 20cm, 40cm', 'Sistem kode warna', 'Permukaan pendaratan aman'],
          image: '/assets/kids-playing-plyoban.png',
          color: 'bg-red-100 dark:bg-red-900/30',
        },
        {
          name: 'Rintangan Ban',
          spec: 'Latihan Multi-Fungsional',
          description: 'Stasiun fitness lengkap menggabungkan berbagai latihan',
          features: ['Latihan seluruh tubuh', 'Aktivitas tim', 'Kesulitan dapat disesuaikan'],
          image: '/assets/kids-playing-zig-zag.png',
          color: 'bg-green-100 dark:bg-green-900/30',
        },
      ],
    },
  },
  {
    id: 'living',
    label: 'Banafit Living',
    icon: Home,
    description: 'Furniture rumah & kantor berkelanjutan',
    heroImage: '/assets/kids-running-matras.png',
    content: {
      tagline: 'Desain Bertemu Keberlanjutan',
      intro: 'Transformasikan ruang dengan furnitur ramah lingkungan yang dibuat dari ban daur ulang.',
      products: [
        {
          name: 'Rak Buku Ban',
          spec: 'Solusi Penyimpanan',
          description: 'Sistem penyimpanan desain modern',
          features: ['Unit dapat ditumpuk', 'Tata letak dapat disesuaikan', 'Tahan lama & aman'],
          image: '📚',
          color: 'bg-amber-100 dark:bg-amber-900/30',
        },
        {
          name: 'Meja Ban Daur Ulang',
          spec: 'Bagian Furnitur Fungsional',
          description: 'Meja kopi atau makan yang unik',
          features: ['Desain mencolok', 'Ringan', 'Mudah dirawat'],
          image: '🪑',
          color: 'bg-orange-100 dark:bg-orange-900/30',
        },
        {
          name: 'Tempat Duduk Modular',
          spec: 'Sistem Furnitur Fleksibel',
          description: 'Pengaturan tempat duduk yang dapat dikonfigurasi ulang',
          features: ['Penggunaan multi-tujuan', 'Ramah siswa', 'Menghemat ruang'],
          image: '💺',
          color: 'bg-purple-100 dark:bg-purple-900/30',
        },
      ],
    },
  },
  {
    id: 'edu',
    label: 'Banafit Edu',
    icon: BookOpen,
    description: 'Modul kurikulum terintegrasi',
    heroImage: '/assets/background-kids-class.png',
    content: {
      tagline: 'Belajar Melalui Keberlanjutan',
      intro: 'Modul pendidikan yang dikurasi sesuai dengan visi Hardiknas 2026.',
      products: [
        {
          name: 'Modul Ekonomi Sirkular',
          spec: 'Ekonomi & Lingkungan',
          description: 'Kurikulum pembelajaran mendalam tentang manajemen limbah',
          features: ['Selaras dengan Kelas 7-12', 'Integrasi STEM', 'Proyek praktis'],
          image: '♻️',
          color: 'bg-green-100 dark:bg-green-900/30',
        },
        {
          name: 'Modul Ilmu Material',
          spec: 'Fisika & Kimia',
          description: 'Jelajahi sifat-sifat material daur ulang',
          features: ['Pembelajaran berbasis lab', 'Eksperimen interaktif', 'Wawasan karir'],
          image: '🔬',
          color: 'bg-blue-100 dark:bg-blue-900/30',
        },
        {
          name: 'Modul Dampak Sosial',
          spec: 'Pendidikan Kewarganegaraan & Keberlanjutan',
          description: 'Keterlibatan komunitas dan advokasi lingkungan',
          features: ['Proyek komunitas', 'Pembangunan kepemimpinan', 'Dampak dunia nyata'],
          image: '🌍',
          color: 'bg-teal-100 dark:bg-teal-900/30',
        },
      ],
    },
  },
];

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState('sports');
  const activeContent = solutionTabs.find((tab) => tab.id === activeTab)!.content;
  const activeTabData = solutionTabs.find((tab) => tab.id === activeTab)!;

  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Ekosistem Solusi
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Tiga solusi saling terhubung mengubah limbah menjadi nilai di bidang olahraga, gaya hidup, dan pendidikan.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
          variants={itemVariants}
        >
          {solutionTabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 flex-1 sm:flex-none ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 shadow-lg shadow-yellow-500/30 scale-105'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <IconComponent size={20} />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[1]}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {/* Hero Image */}
            <motion.div
              key={`hero-${activeTab}`}
              className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image
                src={activeTabData.heroImage}
                alt={activeTabData.label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </motion.div>

            {/* Category Header */}
            <motion.div className="text-center" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                {activeTabData.label}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                {activeTabData.description}
              </p>
              <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {activeContent.intro}
              </p>
            </motion.div>

            {/* Products Carousel */}
            <motion.div
              className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 sm:p-8 min-h-[400px] sm:min-h-[450px]"
              variants={itemVariants}
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: true }}
                className="w-full h-full"
              >
                {activeContent.products.map((product, index) => (
                  <SwiperSlide key={`${activeTab}-${index}`}>
                    <motion.div
                      className={`${product.color} rounded-lg p-6 h-full border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow flex flex-col`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {product.image.startsWith('/') ? (
                        <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
                          <Image
                            key={`product-${activeTab}-${index}`}
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      ) : (
                        <div className="text-4xl mb-4">{product.image}</div>
                      )}
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {product.name}
                      </h4>
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">
                        {product.spec}
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm">
                        {product.description}
                      </p>
                      <ul className="space-y-1 mb-4 flex-grow">
                        {product.features.map((feature, i) => (
                          <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start">
                            <span className="mr-2">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 font-semibold py-2 rounded-lg text-sm transition-all">
                        Learn More →
                      </button>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* Solution Benefits */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {[
                {
                  title: 'Desain Modular',
                  description: 'Dapat ditumpuk dan dikonfigurasi ulang untuk ruang atau anggaran apa pun',
                },
                {
                  title: 'Hemat Biaya',
                  description: '60-70% lebih murah dari peralatan konvensional',
                },
                {
                  title: 'Dampak Berkelanjutan',
                  description: 'Setiap produk mengalihkan limbah dari tempat pembuangan akhir',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <ChevronRight className="text-white" size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 font-bold rounded-lg text-lg transition-all hover:shadow-xl hover:shadow-yellow-400/50 transform hover:scale-105">
            Minta Demo
            <ChevronRight className="ml-2" size={24} />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
