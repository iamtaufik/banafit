'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AlertCircle, TrendingUp } from 'lucide-react';

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

// Sample data for waste statistics
const wasteData = [
  { region: 'Gunungkidul', potential: 1200, current: 400 },
  { region: 'Sleman', potential: 1800, current: 600 },
  { region: 'Bantul', potential: 1500, current: 500 },
  { region: 'Kulonprogo', potential: 900, current: 300 },
];

const statsData = [
  { name: 'Schools with Facilities', value: 35, percentage: 35 },
  { name: 'Schools Lacking Facilities', value: 65, percentage: 65 },
];

const colors = ['#22c55e', '#ef4444'];

export function IssueSection() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <div className="flex items-center justify-center mb-4">
            <AlertCircle className="text-red-500 mr-3" size={32} />
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Data Limbah & Urgensi
            </h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Memahami krisis: manajemen limbah ban dan kurangnya fasilitas olahraga di sekolah pedesaan.
          </p>
        </motion.div>

        {/* Key Statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
        >
          <motion.div
            className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-lg border border-red-200 dark:border-red-700"
            variants={itemVariants}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">
                  Limbah Ban Tahunan
                </p>
                <p className="text-3xl sm:text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
                  5,400+
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  ton di wilayah DIY
                </p>
              </div>
              <TrendingUp className="text-red-500" size={24} />
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-lg border border-orange-200 dark:border-orange-700"
            variants={itemVariants}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">
                  Sekolah Kekurangan Peralatan
                </p>
                <p className="text-3xl sm:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  65%
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  di Gunungkidul
                </p>
              </div>
              <TrendingUp className="text-orange-500" size={24} />
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700"
            variants={itemVariants}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">
                  Siswa Terdampak
                </p>
                <p className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  25K+
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  di area target
                </p>
              </div>
              <TrendingUp className="text-blue-500" size={24} />
            </div>
          </motion.div>
        </motion.div>

        {/* Charts */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" variants={containerVariants}>
          {/* Waste Potential Chart */}
          <motion.div
            className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800"
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Potensi Limbah Ban per Wilayah
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={wasteData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="region" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    borderRadius: '6px',
                  }}
                  labelStyle={{ color: '#ffffff' }}
                />
                <Legend />
                <Bar dataKey="potential" fill="#ef4444" name="Potential (tons)" />
                <Bar dataKey="current" fill="#f97316" name="Currently Managed (tons)" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* School Facilities Distribution */}
          <motion.div
            className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center"
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Status Fasilitas Olahraga Sekolah
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }: any) => `${name} ${((value / 100) * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {colors.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-lg p-8"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Tantangan Ganda
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-red-600 dark:text-red-400 mb-2 text-lg">
                Krisis Lingkungan
              </h4>
              <p className="text-slate-700 dark:text-slate-300">
                Lebih dari 5.400 ton limbah ban setiap tahun di Gunungkidul tidak terkelola dengan baik. Ketika dikubur atau dibakar, menyebabkan pencemaran tanah, polusi air, dan masalah kesehatan pernapasan.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-2 text-lg">
                Kesenjangan Pendidikan
              </h4>
              <p className="text-slate-700 dark:text-slate-300">
                65% sekolah pedesaan kekurangan fasilitas dan peralatan olahraga yang memadai. Siswa kehilangan kesempatan penting untuk pengembangan fisik dan pendidikan PE berkualitas.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Source Attribution */}
        <motion.p
          className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8"
          variants={itemVariants}
        >
          Data source: ERI Korlantas Polri, Gunungkidul Regional Studies
        </motion.p>
      </motion.div>
    </div>
  );
}
