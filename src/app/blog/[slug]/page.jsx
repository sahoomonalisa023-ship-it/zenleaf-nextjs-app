"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

// --- DYNAMIC DATABASE WITH UNIQUE SLUGS & PREMIUM IMAGES ---
const allCombinedArticles = {
  // 🎯 NAVBAR "BEGIN JOURNEY" TARGET PATHS (Dono options ko handle kiya hai taaki safe rahe)
  "morning-focus-meditation": {
    isJourneyPage: true,
    title: "Your Journey to Inner Clarity Begins Now",
    subtitle: "A step-by-step mental transformation framework.",
    tag: "Exclusive Journey",
    readTime: "10 min experience",
    // 📸 PREMIUM IMAGE: Unique dark serene meditation look
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    introduction:
      "Welcome to your transition phase. This isn't just an article—it's a guided framework engineered to calm your sympathetic nervous system, reset mental friction, and align daily focus tracking.",
    steps: [
      {
        phase: "Step 01",
        title: "The Silent Awakening Ritual",
        desc: "Upon opening your eyes tomorrow, commit to 180 seconds of absolute sensory deprivation. No screens, no notifications. Just deep alpha-state awareness.",
        accentColor: "border-emerald-500 bg-emerald-50/40 text-emerald-700",
      },
      {
        phase: "Step 02",
        title: "Somatic Vagus Nerve Reset",
        desc: "Inhale sharply for four cycles, retain the breath for seven counts, and audibly exhale for eight counts. This instantly signals security to your physical body.",
        accentColor: "border-teal-500 bg-teal-50/40 text-teal-700",
      },
      {
        phase: "Step 03",
        title: "Cognitive Intention Mapping",
        desc: "Write down exactly one single focus goal for the day. Eliminate the rest. Structural clarity wins over multitasking loops every single time.",
        accentColor: "border-indigo-500 bg-indigo-50/40 text-indigo-700",
      },
    ],
    finalTakeaway:
      "Sustainable peace is not accidental. It is a systematic daily architecture.",
  },

  // Mirror setup for featured slug option
  "featured-morning-focus-meditation": {
    isJourneyPage: true,
    title: "Your Journey to Inner Clarity Begins Now",
    subtitle: "A step-by-step mental transformation framework.",
    tag: "Exclusive Journey",
    readTime: "10 min experience",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    introduction:
      "Welcome to your transition phase. This isn't just an article—it's a guided framework engineered to calm your sympathetic nervous system, reset mental friction, and align daily focus tracking.",
    steps: [
      {
        phase: "Step 01",
        title: "The Silent Awakening Ritual",
        desc: "Upon opening your eyes tomorrow, commit to 180 seconds of absolute sensory deprivation. No screens, no notifications. Just deep alpha-state awareness.",
        accentColor: "border-emerald-500 bg-emerald-50/40 text-emerald-700",
      },
      {
        phase: "Step 02",
        title: "Somatic Vagus Nerve Reset",
        desc: "Inhale sharply for four cycles, retain the breath for seven counts, and audibly exhale for eight counts. This instantly signals security to your physical body.",
        accentColor: "border-teal-500 bg-teal-50/40 text-teal-700",
      },
      {
        phase: "Step 03",
        title: "Cognitive Intention Mapping",
        desc: "Write down exactly one single focus goal for the day. Eliminate the rest. Structural clarity wins over multitasking loops every single time.",
        accentColor: "border-indigo-500 bg-indigo-50/40 text-indigo-700",
      },
    ],
    finalTakeaway:
      "Sustainable peace is not accidental. It is a systematic daily architecture.",
  },

  // 🎯 BLOG CARD 1: MEDITATION FOR BEGINNERS
  "meditation-for-beginners": {
    isJourneyPage: false,
    title: "Transform Your Mind Through Daily Meditation",
    tag: "Mindfulness",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    introduction:
      "Starting a meditation practice doesn't require hours of sitting in perfect silence. Taking just 10 minutes every day to sit silently can transform how your mind responds to everyday challenges.",
    sections: [
      {
        heading: "1. Consistency Over Duration",
        text: "Sitting for just 10 minutes every day trains your brain neural pathways effectively. It is much better than doing 1 hour once a week.",
      },
    ],
    finalTakeaway:
      "The goal of meditation is simply to witness your thoughts without judgment.",
  },

  // 🎯 BLOG CARD 2: MINDFUL BREATHING
  "mindful-breathing": {
    isJourneyPage: false,
    title: "3 Deep Breathing Techniques for Instant Calm",
    tag: "Breathwork",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3",
    introduction:
      "Your breath is the ultimate remote control for your brain. Deep breathing activates the body's natural relaxation response immediately.",
    sections: [
      {
        heading: "1. The 4-7-8 Trick",
        text: "Inhale for 4s, hold for 7s, exhale for 8s to reset your nervous system and slow down your heart rate instantly.",
      },
    ],
    finalTakeaway:
      "One single deep breath can re-anchor your complete mental stability.",
  },

  // 🎯 BLOG CARD 3: OVERCOMING STRESS
  "overcoming-stress": {
    isJourneyPage: false,
    title: "Overcoming Daily Stress Through Mindfulness",
    tag: "Healthy Living",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5",
    introduction:
      "Mindfulness anchors you directly into the present moment. Instead of worrying about the future, observe your current surroundings to build peace.",
    sections: [
      {
        heading: "1. Breaking Reaction Loops",
        text: "Create a 3-second gap between a stress trigger and your biological reply framework.",
      },
    ],
    finalTakeaway:
      "Inner calm remains undisturbed even in the absolute center of outer chaos.",
  },
};

export default function BlogDetail() {
  const { slug } = useParams();
  const article = allCombinedArticles[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-4 text-center p-6">
        <h2 className="text-xl font-bold text-gray-900">
          Journey Segment Not Active
        </h2>
        <p className="text-gray-500 text-sm max-w-xs">
          The path "{slug}" could not be matched.
        </p>
        <Link
          href="/"
          className="text-emerald-600 hover:underline font-semibold"
        >
          ← Return Home
        </Link>
      </div>
    );
  }

  // Elastic Spring Framer Motion Settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const elasticFadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  // LAYOUT 1: EXCLUSIVE HIGH-ANIMATION JOURNEY VIEW FOR THE NAVBAR ACTION BUTTON
  if (article.isJourneyPage) {
    return (
      <div className="min-h-screen bg-neutral-50/70 pb-32 selection:bg-emerald-100">
        {/* HERO IMAGE BANNER - ZOOM EFFECT */}
        <div className="relative w-full h-[460px] bg-neutral-950 overflow-hidden flex items-center">
          <motion.img
            src={article.image}
            alt={article.title}
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.55 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-neutral-950/30 to-black/20" />

          <div className="relative max-w-5xl mx-auto w-full px-6 z-10 text-center md:text-left">
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-4 py-1.5 bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-widest rounded-full shadow-lg"
            >
              {article.tag}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 70, delay: 0.15 }}
              className="text-white text-4xl md:text-6xl font-serif font-black mt-6 leading-tight tracking-tight max-w-3xl"
            >
              {article.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-emerald-300 text-sm md:text-base mt-3 font-medium tracking-wide"
            >
              {article.subtitle} • {article.readTime}
            </motion.p>
          </div>
        </div>

        {/* ELASTIC SPRING CONTENT CONTAINER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-6 -mt-16 relative z-20 space-y-12"
        >
          {/* Main Intro Card */}
          <motion.div
            variants={elasticFadeUp}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
          >
            <p className="text-xl text-gray-800 font-serif leading-relaxed italic text-center md:text-left">
              "{article.introduction}"
            </p>
          </motion.div>

          {/* PROTOCOL CARDS */}
          <div className="space-y-6">
            <motion.h3
              variants={elasticFadeUp}
              className="text-xl font-bold text-gray-900 tracking-tight px-2"
            >
              Your Daily Alignment Protocol
            </motion.h3>

            <div className="grid grid-cols-1 gap-6">
              {article.steps?.map((step, index) => (
                <motion.div
                  key={index}
                  variants={elasticFadeUp}
                  whileHover={{ scale: 1.02, y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className={`p-6 md:p-8 bg-white border-l-4 rounded-r-3xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center gap-6 ${step.accentColor.split(" ")[0]}`}
                >
                  <div
                    className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center font-mono font-bold text-lg shadow-xs ${step.accentColor.split(" ").slice(1).join(" ")}`}
                  >
                    {step.phase}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* BOTTOM SUMMARY CARD (BUTTON REMOVED AS REQUESTED) */}
          <motion.div
            variants={elasticFadeUp}
            className="p-10 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-3xl shadow-2xl text-center"
          >
            <h5 className="text-emerald-400 font-bold uppercase text-[11px] tracking-widest mb-3">
              Core Paradigm Shifting
            </h5>
            <p className="text-gray-100 text-xl md:text-2xl font-serif max-w-2xl mx-auto leading-relaxed mb-0">
              "{article.finalTakeaway}"
            </p>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // LAYOUT 2: STANDARD BLOG DETAILS
  return (
    <div className="min-h-screen bg-white pb-24 selection:bg-emerald-100">
      <div className="relative w-full h-96 bg-gray-950 overflow-hidden">
        <motion.img
          src={article.image}
          alt={article.title}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto w-full px-6 pb-12">
            <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest rounded-md">
              {article.tag}
            </span>
            <h1 className="text-white text-3xl md:text-5xl font-serif mt-4 font-bold leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto px-6 mt-12 space-y-10"
      >
        <motion.p
          variants={elasticFadeUp}
          className="text-lg text-gray-800 font-serif italic border-l-4 border-emerald-500 pl-4 py-2"
        >
          {article.introduction}
        </motion.p>
      </motion.div>
    </div>
  );
}
