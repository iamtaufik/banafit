'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star } from 'lucide-react';

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

const testimonials = [
  {
    name: 'Ibu Siti',
    role: 'PE Teacher',
    school: 'SDN Gunungkidul',
    image: '👨‍🏫',
    quote: 'Alat olahraga Banafit mengubah pelajaran PE kami. Siswa lebih antusias, dan kami bangga mengajar sustainability.',
    rating: 5,
  },
  {
    name: 'Andi',
    role: 'Student',
    school: 'SMP Yogyakarta',
    image: '🎓',
    quote: 'Ini pertama kalinya kami punya peralatan bagus di sekolah. Olahraga jadi lebih seru dan aman!',
    rating: 5,
  },
  {
    name: 'Pak Rudi',
    role: 'Principal',
    school: 'SD Sleman',
    image: '👔',
    quote: 'Banafit membantu kami memberikan pendidikan berkualitas. Investasi terbaik untuk masa depan siswa kami.',
    rating: 5,
  },
  {
    name: 'Sinta',
    role: 'Student',
    school: 'SMP Bantul',
    image: '👩‍🎓',
    quote: 'Pelajaran tentang limbah dan daur ulang jadi lebih bermakna ketika kami bisa menggunakan produk hasilnya.',
    rating: 5,
  },
  {
    name: 'Dr. Wahyu',
    role: 'Environmental Educator',
    school: 'Teacher Training Institute',
    image: '🔬',
    quote: 'Banafit adalah contoh nyata bagaimana bisnis dan pendidikan bisa bersatu untuk perubahan sosial.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Apa Kata Siswa & Guru
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Kisah nyata dari sekolah yang berubah karena Banafit.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div variants={itemVariants}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true, bulletActiveClass: 'swiper-pagination-bullet-active bg-yellow-400' }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            className="w-full testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-700 dark:to-slate-800 rounded-lg p-6 border border-slate-600 h-full flex flex-col hover:border-yellow-400 transition-colors"
                  whileHover={{ scale: 1.05, borderColor: '#fbbf24' }}
                >
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-200 italic mb-6 flex-1">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-slate-600 pt-4 flex items-start gap-4">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-slate-400">{testimonial.role}</p>
                      <p className="text-xs text-slate-500">{testimonial.school}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Custom Swiper Styles */}
        <style jsx global>{`
          .testimonials-swiper .swiper-pagination {
            position: relative;
            margin-top: 24px;
          }

          .testimonials-swiper .swiper-pagination-bullet {
            background: rgba(148, 163, 184, 0.6);
            opacity: 1;
          }

          .testimonials-swiper .swiper-pagination-bullet-active {
            background: #fbbf24 !important;
          }
        `}</style>
      </motion.div>
    </section>
  );
}
