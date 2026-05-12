'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Target, TrendingUp, Users, Award } from 'lucide-react';

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

// Impact projection data
const impactProjection = [
  { year: '2024', schools: 5, students: 250 },
  { year: '2025', schools: 25, students: 1250 },
  { year: '2026', schools: 100, students: 5000 },
];

const impactMetrics = [
  { name: 'Limbah Dialihkan (ton)', value: 500, percentage: 35 },
  { name: 'Peralatan Disumbangkan', value: 400, percentage: 40 },
  { name: 'Guru Dilatih', value: 200, percentage: 25 },
];

const colors = ['#22c55e', '#3b82f6', '#f59e0b'];

export function ImpactSection() {
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
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="flex items-center justify-center mb-4">
            <Target className="text-orange-500 mr-3" size={40} />
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Target Dampak Kami
            </h1>
          </div>
          <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4">
            100 Sekolah pada 2026
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Transformasi pendidikan jasmani dan kesadaran lingkungan di seluruh Indonesia.
          </p>
        </motion.div>

        {/* Key Impact Numbers */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
        >
          {[
            { icon: Target, label: 'Sekolah Target', value: '100', unit: 'pada 2026', color: 'orange' as const },
            { icon: Users, label: 'Siswa Terdampak', value: '5K+', unit: 'setiap tahun', color: 'blue' as const },
            { icon: TrendingUp, label: 'Limbah Dialihkan', value: '500+', unit: 'ton/tahun', color: 'green' as const },
            { icon: Award, label: 'Guru Dilatih', value: '200+', unit: 'tersertifikasi', color: 'purple' as const },
          ].map((metric, index) => {
            const IconComponent = metric.icon;
            const colorClasses: Record<string, string> = {
              orange: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400',
              blue: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400',
              green: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800 text-green-600 dark:text-green-400',
              purple: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400',
            };
            const colorClass = colorClasses[metric.color];

            return (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${colorClass} rounded-lg p-6 border`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <IconComponent className="mb-3" size={32} />
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  {metric.label}
                </p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {metric.value}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {metric.unit}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Growth Projection Chart */}
        <motion.div
          className="bg-slate-50 dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800 mb-12"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Growth Projection: 2024-2026
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Schools Growth */}
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={impactProjection}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" stroke="#64748b" />
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
                <Line
                  type="monotone"
                  dataKey="schools"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  dot={{ fill: '#f59e0b', r: 6 }}
                  name="Schools"
                />
              </LineChart>
            </ResponsiveContainer>

            {/* Students Growth */}
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={impactProjection}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" stroke="#64748b" />
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
                <Bar dataKey="students" fill="#3b82f6" name="Students Impacted" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Impact Breakdown */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          <motion.div
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <span className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                ♻️
              </span>
              Environmental Impact
            </h3>
            <ul className="space-y-3">
              <li className="text-slate-700 dark:text-slate-300">
                <strong>500+ tons</strong> of tire waste diverted annually
              </li>
              <li className="text-slate-700 dark:text-slate-300">
                <strong>Prevention</strong> of soil & water contamination
              </li>
              <li className="text-slate-700 dark:text-slate-300">
                <strong>Carbon footprint</strong> reduction through upcycling
              </li>
              <li className="text-slate-700 dark:text-slate-300">
                <strong>Circular economy</strong> model demonstrated
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                🎓
              </span>
              Educational Impact
            </h3>
            <ul className="space-y-3">
              <li className="text-slate-700 dark:text-slate-300">
                <strong>5,000+ students</strong> gain access to sports facilities
              </li>
              <li className="text-slate-700 dark:text-slate-300">
                <strong>Improved PE quality</strong> for underserved schools
              </li>
              <li className="text-slate-700 dark:text-slate-300">
                <strong>Curriculum modules</strong> on sustainability & science
              </li>
              <li className="text-slate-700 dark:text-slate-300">
                <strong>Health & wellness</strong> advancement for youth
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <span className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
                👨‍🏫
              </span>
              Community Impact
            </h3>
            <ul className="space-y-3">
              <li className="text-slate-700 dark:text-slate-300">
                <strong>200+ teachers</strong> trained as Banafit ambassadors
              </li>
              <li className="text-slate-700 dark:text-slate-300">
                <strong>Certification program</strong> enabling local expertise
              </li>
              <li className="text-slate-700 dark:text-slate-300">
                <strong>Economic opportunities</strong> for small businesses
              </li>
              <li className="text-slate-700 dark:text-slate-300">
                <strong>Social cohesion</strong> through community workshops
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Roadmap to 100 Schools */}
        <motion.div
          className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg border border-orange-200 dark:border-orange-800 p-8"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Roadmap to 100 Schools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: 'Phase 1: Foundation',
                period: '2024',
                goals: [
                  'Establish 5 pilot schools',
                  'Validate product & curriculum',
                  'Train initial teacher cohort',
                ],
              },
              {
                phase: 'Phase 2: Scale-Up',
                period: '2025',
                goals: [
                  'Expand to 25 schools',
                  'Complete certification program',
                  'Build supply chain partnerships',
                ],
              },
              {
                phase: 'Phase 3: Full Launch',
                period: '2026',
                goals: [
                  'Reach 100 schools target',
                  'Nationwide recognition',
                  'Sustainable impact model',
                ],
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-orange-200 dark:border-orange-700"
                variants={itemVariants}
              >
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                  {phase.period}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  {phase.phase}
                </h4>
                <ul className="space-y-2">
                  {phase.goals.map((goal, i) => (
                    <li key={i} className="text-slate-700 dark:text-slate-300 flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Help us reach our goal of transforming 100 schools by 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold rounded-lg transition-all hover:shadow-xl">
              Nominate a School
            </button>
            <button className="px-8 py-4 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-all">
              Partner With Us
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
