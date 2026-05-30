"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

// DATABASE: Isme aapke main blog ka data aur home page ke 3 naye meditation articles dono ka data safe rahega
const allCombinedArticles = {
  // === NAZDEEKI HOME PAGE ARTICLES (FEATURED) ===
  "featured-morning-focus-meditation": {
    title: "Morning Focus: Rewire Your Brain for High Productivity",
    tag: "Mindfulness",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0",
    introduction:
      "Morning meditation sets the cognitive tone for your entire day. By dedicating just a few quiet minutes after waking up, you reclaim your attention framework before reality claims it.",
    sections: [
      {
        heading: "1. Lowering Cortisol Waves Instantly",
        text: "When you wake up, your body experiences a natural cortisol spike. Sitting in silence instead of instantly checking notifications stabilizes this spike, preventing morning anxiety loops.",
      },
      {
        heading: "2. Setting Direct Intentions",
        text: "Visualization exercises during your morning block prepare your subconscious mind to tackle difficult tasks and design clean solutions without feeling mentally scattered.",
      },
    ],
    conclusion: "Win your morning, and you systematically win your entire day.",
  },

  "featured-sound-healing-frequencies": {
    title: "The Science of Sound Healing & Alpha Frequencies",
    tag: "Sound Therapy",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
    introduction:
      "Sound isn't just something we hear; it's a vibrational frequency that directly interacts with our nervous system patterns.",
    sections: [
      {
        heading: "1. Shifting into Alpha & Theta Brainwaves",
        text: "Consistent acoustic patterns from singing bowls or binaural beats slow down your active beta brainwaves, guiding you safely into deep, therapeutic alpha states perfect for relaxation.",
      },
      {
        heading: "2. Dissolving Mental Fatigue",
        text: "Sound therapy acts like a deep cleanse for cognitive clutter, actively reducing mental exhaustion and helping practitioners recover from burnout syndromes.",
      },
    ],
    conclusion:
      "Silence heals, but structured frequencies accelerate inner transformation.",
  },

  "featured-emotional-balance-mindfulness": {
    title: "Emotional Balance: Sitting with Your Anxieties Safely",
    tag: "Mental Health",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1470246973918-29a93221c455",
    introduction:
      "True emotional balance isn't about suppressing your negative thoughts; it is about developing the inner space to witness them without shattering.",
    sections: [
      {
        heading: "1. The Practice of Non-Reaction",
        text: "When stress rises, our biological instinct is to fight it or run away. Mindfulness teaches you to pause, acknowledge the physical sensation of anxiety, and simply breathe through it.",
      },
      {
        heading: "2. De-identifying from Passing Mental Clouds",
        text: "You are not your anxiety; you are the sky witnessing the passing storm clouds. Remembering this structural separation dissolves the power of heavy emotional loops.",
      },
    ],
    conclusion:
      "Peace begins the exact moment you choose not to let your current emotions rewrite your identity.",
  },

  // === AAPKE MAIN BLOG PAGE KE EXISTING ARTICLES (MEDITATION, BREATHING, ETC.) ===
  // Agar aapke purane slugs direct chalte hain, toh unhe yahan niche objects mein mapped rakhein
  "meditation-for-beginners": {
    title: "Transform Your Mind Through Daily Meditation",
    tag: "Mindfulness",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    introduction:
      "Starting a meditation practice doesn't require hours of sitting in perfect silence.",
    sections: [
      {
        heading: "1. Consistency Over Duration",
        text: "Sitting for just 10 minutes every day trains your brain neural pathways effectively.",
      },
    ],
    conclusion:
      "The goal of meditation is simply to witness your thoughts without judgment.",
  },
  "mindful-breathing": {
    title: "3 Deep Breathing Techniques for Instant Calm",
    tag: "Breathwork",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3",
    introduction: "Your breath is the ultimate remote control for your brain.",
    sections: [
      {
        heading: "1. The 4-7-8 Trick",
        text: "Inhale for 4s, hold for 7s, exhale for 8s to reset your nervous system instantly.",
      },
    ],
    conclusion: "One deep breath can re-anchor your complete stability.",
  },
  "overcoming-stress": {
    title: "Overcoming Daily Stress Through Mindfulness",
    tag: "Healthy Living",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5",
    introduction: "Mindfulness anchors you directly into the present moment.",
    sections: [
      {
        heading: "1. Breaking Reaction Loops",
        text: "Create a 3-second gap between a stress trigger and your reply framework.",
      },
    ],
    conclusion: "Inner calm remains undisturbed even in the center of chaos.",
  },
};

export default function BlogDetail() {
  const { slug } = useParams();

  // URL slug ke mutabik correct article select hoga
  const article = allCombinedArticles[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-4 text-center p-6">
        <h2 className="text-xl font-bold text-gray-900">Article not found</h2>
        <p className="text-gray-500 text-sm max-w-xs">
          The requested URL path "{slug}" could not be mapped to our unique
          content blocks.
        </p>
        <Link href="/" className="text-emerald-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white pb-24 selection:bg-emerald-100">
      {/* FULL HERO HEADER IMAGE */}
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
            <p className="text-gray-300 text-xs md:text-sm mt-2 font-light italic">
              {article.readTime}
            </p>
          </div>
        </div>
      </div>

      {/* RENDER CONTENT TEXT WITH FADE-UP ANIMATIONS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto px-6 mt-12 space-y-10"
      >
        {/* Introduction */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-800 leading-relaxed font-serif italic border-l-4 border-emerald-500 pl-4 bg-emerald-50/30 py-3 rounded-r-xl"
        >
          {article.introduction}
        </motion.p>

        {/* Dynamic Sections Loop */}
        {article.sections?.map((sec, i) => (
          <motion.div key={i} variants={itemVariants} className="space-y-2.5">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              {sec.heading}
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-loose">
              {sec.text}
            </p>
          </motion.div>
        ))}

        {/* Core Takeaway Card */}
        <motion.div
          variants={itemVariants}
          className="p-8 bg-gray-950 text-white rounded-2xl shadow-xl"
        >
          <h4 className="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-2">
            Core Takeaway
          </h4>
          <p className="text-gray-200 text-lg font-serif leading-relaxed mb-0">
            "{article.conclusion}"
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div variants={itemVariants} className="pt-4 text-center">
          <Link href="/">
            <button className="px-6 py-2.5 bg-gray-100 hover:bg-emerald-50 text-gray-800 font-semibold text-sm rounded-xl transition border border-gray-200/60 cursor-pointer">
              ← Back to Overview
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
