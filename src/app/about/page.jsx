"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const storyMilestones = [
    {
      step: "Phase 01",
      title: "The Cognitive Architecture",
      desc: "Traditional advice tells you to relax. ZenLeaf replaces raw theories with actual structural user interface tracking layers to analyze anxiety logs calmly.",
    },
    {
      step: "Phase 02",
      title: "Micro-Habit Implementation",
      desc: "Massive mental resets fail because they break workflows. We target 10-minute active awareness patterns that integrate directly inside your working hours.",
    },
    {
      step: "Phase 03",
      title: "Full-Stack Bio Systems",
      desc: "Mental stability isn't isolated. Our system handles data from sound therapy cycles up to strict single-ingredient diet configurations cleanly.",
    },
  ];

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardSpringFadeVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 75, damping: 14 },
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-28 selection:bg-emerald-100 relative overflow-hidden">
      {/* ❌ NO NAVBAR HERE ANYMORE - IT COMES FROM GLOBAL LAYOUT */}

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-50/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* CINEMATIC HERO STATEMENT SECTION */}
        <div className="max-w-3xl mx-auto text-center space-y-6 pt-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-[11px] font-bold tracking-widest uppercase rounded-full border border-emerald-100"
          >
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            Core Framework V2
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-black tracking-tight sm:text-7xl text-gray-900 leading-none"
          >
            We Build Space for{" "}
            <span className="text-emerald-500 relative inline-block">
              Tranquility
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-500 text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto"
          >
            ZenLeaf plans, codes, and refines high-fidelity interfaces and clean
            mindfulness resources to protect your mental performance stream from
            daily burnout.
          </motion.p>
        </div>

        {/* BENTO STYLE STORY MILESTONES GRID */}
        <motion.div
          variants={listContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-28"
        >
          {storyMilestones.map((item, i) => (
            <motion.div
              key={i}
              variants={cardSpringFadeVariants}
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group relative p-8 rounded-3xl border border-gray-100 bg-white shadow-xs hover:shadow-2xl hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between min-h-55 cursor-pointer"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest font-bold text-gray-400 uppercase">
                    {item.step}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-emerald-500 transition-colors duration-300" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* 🎯 FIXED: Arrow indicator component removed from here cleanly */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
