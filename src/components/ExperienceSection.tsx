'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, BookMarked, X, CheckCircle, MapPin, Clock } from 'lucide-react';
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

// Form validation schema
const workshopFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  school: z.string().min(2, 'School name required'),
  phoneNumber: z.string().min(10, 'Phone number must be valid'),
  coursePreference: z.enum(['beginner', 'intermediate', 'advanced']),
  participants: z.string().min(1, 'Number of participants required'),
});

type WorkshopFormData = z.infer<typeof workshopFormSchema>;

export function ExperienceSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<WorkshopFormData>();

  const onSubmit = (data: WorkshopFormData) => {
    // Simulate form submission
    console.log('Form data:', data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
      reset();
    }, 2000);
  };

  const timelineSteps = [
    {
      title: 'Tire Collection',
      description: 'Gather end-of-life tires from local sources',
      icon: '♻️',
    },
    {
      title: 'Material Processing',
      description: 'Clean, cut, and prepare raw materials',
      icon: '🔧',
    },
    {
      title: 'Coating Application',
      description: 'Apply barrier coating technology',
      icon: '🎨',
    },
    {
      title: 'Quality Testing',
      description: 'Safety certification and quality assurance',
      icon: '✅',
    },
    {
      title: 'Product Assembly',
      description: 'Build finished products and furniture',
      icon: '🏗️',
    },
    {
      title: 'Educational Impact',
      description: 'Delivered to schools for student learning',
      icon: '🎓',
    },
  ];

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
            Experience Banafit
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Learn, engage, and witness the transformation from waste to wonder.
          </p>
        </motion.div>

        {/* Two Main Experience Tracks */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" variants={containerVariants}>
          {/* Workshop Track */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-800 p-8 hover:shadow-xl transition-shadow"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Users className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Workshop Track
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Hands-on learning experiences
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              "Belajar Re-Engineering Limbah"
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              A comprehensive certification program teaching educators and community members how to transform waste tires into valuable educational resources.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <Clock className="text-blue-500 mr-3" size={20} />
                <span>3-day intensive workshop</span>
              </div>
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <MapPin className="text-blue-500 mr-3" size={20} />
                <span>On-site or school location</span>
              </div>
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <CheckCircle className="text-blue-500 mr-3" size={20} />
                <span>Official certification upon completion</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-lg p-4 mb-6">
              <h4 className="font-bold text-slate-900 dark:text-white mb-3">Curriculum Topics:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Circular economy fundamentals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Material science & safety protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Product assembly & customization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300">School implementation strategies</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all hover:shadow-lg"
            >
              Daftar Workshop →
            </button>
          </motion.div>

          {/* Museum Track */}
          <motion.div
            className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg border border-purple-200 dark:border-purple-800 p-8 hover:shadow-xl transition-shadow"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <BookMarked className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Museum Track
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Interactive experience journey
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              "From Waste to Wonder"
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              An immersive showroom and interactive museum showcasing the complete transformation journey from discarded tires to educational excellence.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <Clock className="text-purple-500 mr-3" size={20} />
                <span>Self-paced, 2-3 hour experience</span>
              </div>
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <MapPin className="text-purple-500 mr-3" size={20} />
                <span>Banafit Innovation Center</span>
              </div>
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <CheckCircle className="text-purple-500 mr-3" size={20} />
                <span>School groups & individuals welcome</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-lg p-4 mb-6">
              <h4 className="font-bold text-slate-900 dark:text-white mb-3">Experience Zones:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Interactive waste sorting station</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Live product assembly demo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Virtual reality material journey</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300">Student impact stories & testimonials</span>
                </li>
              </ul>
            </div>

            <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold rounded-lg transition-all hover:shadow-lg">
              Kunjungi Showroom Kami →
            </button>
          </motion.div>
        </motion.div>

        {/* Transformation Timeline */}
        <motion.div
          className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            The Transformation Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                custom={index}
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow h-full">
                  <div className="text-5xl mb-3">{step.icon}</div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Ready to be part of the sustainable innovation movement?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all hover:shadow-xl"
            >
              Register for Workshop
            </button>
            <button className="px-8 py-4 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-all">
              Schedule a Visit
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Workshop Registration Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-slate-900 rounded-lg shadow-2xl max-w-lg w-full max-h-96 overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white dark:bg-slate-900 flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 z-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {isSubmitted ? 'Terima Kasih!' : 'Daftar Workshop'}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="mb-4 flex justify-center">
                      <CheckCircle className="text-green-500" size={64} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Pendaftaran Berhasil!
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Kami akan menghubungi Anda segera dengan detail workshop.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        {...register('fullName')}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
                        placeholder="Nama Anda"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
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
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
                        placeholder="email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* School */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Nama Sekolah
                      </label>
                      <input
                        type="text"
                        {...register('school')}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
                        placeholder="Sekolah Anda"
                      />
                      {errors.school && (
                        <p className="text-red-500 text-sm mt-1">{errors.school.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        {...register('phoneNumber')}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
                        placeholder="0812345678"
                      />
                      {errors.phoneNumber && (
                        <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                      )}
                    </div>

                    {/* Course Preference */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Tingkat Pengalaman
                      </label>
                      <select
                        {...register('coursePreference')}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
                      >
                        <option value="beginner">Pemula</option>
                        <option value="intermediate">Menengah</option>
                        <option value="advanced">Lanjutan</option>
                      </select>
                      {errors.coursePreference && (
                        <p className="text-red-500 text-sm mt-1">{errors.coursePreference.message}</p>
                      )}
                    </div>

                    {/* Participants */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Jumlah Peserta
                      </label>
                      <input
                        type="number"
                        {...register('participants')}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white"
                        placeholder="1"
                        min="1"
                      />
                      {errors.participants && (
                        <p className="text-red-500 text-sm mt-1">{errors.participants.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all mt-6"
                    >
                      Kirim Pendaftaran
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
