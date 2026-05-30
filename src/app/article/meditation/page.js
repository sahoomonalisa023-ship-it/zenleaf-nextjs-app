"use client";

import { motion } from "framer-motion";

export default function MeditationPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-100 to-white">
      {/* HERO IMAGE (Fixed Tailwind v4: h-137.5) */}
      <div className="relative h-137.5 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
          className="w-full h-full object-cover"
          alt="meditation"
        />

        <div className="absolute inset-0 bg-black/50 flex items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl mx-auto p-10 text-white"
          >
            <p className="text-sm tracking-widest uppercase text-gray-200">
              Meditation & Wellness
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-3">
              Transform Your Mind Through Daily Meditation
            </h1>

            <p className="mt-4 text-gray-200 max-w-2xl">
              Build peace, clarity and focus with simple daily meditation
              habits.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        {/* CARD 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-3">
            Why Meditation Matters
          </h2>
          <p className="text-gray-600 leading-8">
            Meditation helps calm your mind, reduce stress and improve focus. It
            train your brain to stay present and aware.
          </p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-3">How to Start</h2>
          <p className="text-gray-600 leading-8">
            Start with 10 minutes daily. Sit quietly, close your eyes, and focus
            on your breath. Don’t force thoughts — just observe.
          </p>
        </motion.div>

        {/* QUOTE BOX (Fixed Tailwind v4: bg-linear-to-r) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-linear-to-r from-gray-900 to-gray-700 text-white p-8 rounded-2xl"
        >
          <p className="text-lg italic">
            “Consistency is more powerful than intensity. Even 5 minutes daily
            can change your life.”
          </p>
        </motion.div>
      </div>
    </div>
  );
}
