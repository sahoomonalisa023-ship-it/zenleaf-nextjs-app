"use client";

import Link from "next/link";
// ❌ REMOVED: Manual Navbar import hata diya hai kyunki layout.js se global aa raha hai

const blogPosts = [
  {
    id: 1,
    slug: "meditation-for-beginners",
    title: "Transform Your Mind Through Daily Meditation",
    content:
      "Meditation helps reduce stress, improve focus, and bring clarity to your daily life. Taking just 10 minutes every day to sit silently can transform how your mind responds to everyday challenges.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    tag: "Mindfulness",
  },
  {
    id: 2,
    slug: "mindful-breathing",
    title: "3 Deep Breathing Techniques for Instant Calm",
    content:
      "Deep breathing activates the body's natural relaxation response. Try the 4-7-8 technique to slow down your heart rate and reduce daily stress or anxiety immediately.",
    image: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3",
    tag: "Breathwork",
  },
  {
    id: 3,
    slug: "overcoming-stress",
    title: "Overcoming Daily Stress Through Mindfulness",
    content:
      "Mindfulness is about being fully present in the moment. Instead of worrying about the future, observe your current surroundings, thoughts, and feelings to build peace.",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5",
    tag: "Healthy Living",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ❌ REMOVED: <Navbar /> tag ko yahan se hata diya hai taaki double navbar gayab ho jaye */}

      {/* MAIN CONTAINER FOR BLOG CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-32 space-y-12 bg-white">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            Our Official <span className="text-emerald-500">Blog</span>
          </h1>
          <p className="text-gray-500 text-base">
            Stay updated with deep insights on mental wellness, focus execution,
            and clean living.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {blogPosts.map((post) => {
            const postLink = `/blog/${post.slug}`;

            return (
              <div
                key={post.id}
                className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
              >
                {/* IMAGE */}
                <div className="relative h-60 w-full overflow-hidden bg-gray-50">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-emerald-700 uppercase tracking-wider shadow-xs">
                    {post.tag}
                  </div>
                </div>

                {/* CARD BODY */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {post.content}
                    </p>
                  </div>

                  {/* PREMIUM BUTTON */}
                  <div className="pt-2">
                    <Link href={postLink}>
                      <button className="w-full sm:w-auto px-5 py-2.5 bg-gray-900 text-white font-semibold text-xs rounded-xl cursor-pointer hover:bg-emerald-600 transition-colors duration-200 shadow-xs">
                        Read Article →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ❌ NO FOOTER HERE AS PER REQUEST */}
    </div>
  );
}
