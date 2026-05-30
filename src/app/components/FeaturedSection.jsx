"use client";

import BlogCard from "./BlogCard";

// Home Page ke liye completely UNIQUE Meditation & Wellness articles
const homeMeditationPosts = [
  {
    id: "morning-focus-meditation",
    slug: "morning-focus-meditation",
    title: "Morning Focus: Rewire Your Brain for High Productivity",
    tag: "Mindfulness",
    image: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0", // Beautiful calm morning nature
    description:
      "Learn how a 5-minute morning clarity ritual lowers your cortisol levels and helps you execute deep work without feeling distracted.",
  },
  {
    id: "sound-healing-frequencies",
    slug: "sound-healing-frequencies",
    title: "The Science of Sound Healing & Alpha Frequencies",
    tag: "Sound Therapy",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f", // Singing bowls / meditation setup
    description:
      "Discover how binary beats and specific sound frequencies shift your brainwaves into deep relaxation and repair mental exhaustion.",
  },
  {
    id: "emotional-balance-mindfulness",
    slug: "emotional-balance-mindfulness",
    title: "Emotional Balance: Sitting with Your Anxieties Safely",
    tag: "Mental Health",
    image: "https://images.unsplash.com/photo-1470246973918-29a93221c455", // Forest/peaceful walking path
    description:
      "Instead of fighting stressful thoughts, master the art of active awareness to observe, process, and release heavy emotions safely.",
  },
];

export default function FeaturedSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      {/* SECTION HEADER */}
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Featured <span className="text-emerald-500">Articles</span>
        </h2>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">
          Discover our exclusive homepage insights on deep meditation and mental
          clarity.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {homeMeditationPosts.map((post) => (
          // isFromHome property ensure karegi ki yeh humare naye sub-route par jaye
          <BlogCard key={post.id} post={post} isFromHome={true} />
        ))}
      </div>
    </section>
  );
}
