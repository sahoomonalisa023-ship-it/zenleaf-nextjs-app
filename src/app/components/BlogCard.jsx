"use client";

import Link from "next/link";

export default function BlogCard({ post, isFromHome = false }) {
  // IMPORTANT: Home page wale cards ko hum ek separate routing stream standard de rahe hain
  const blogLink = isFromHome
    ? `/blog/featured-${post.slug}`
    : `/blog/${post.slug || post.id}`;

  return (
    <div className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 h-full">
      {/* IMAGE CONTAINER */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-50">
        <img
          src={post.image || "https://picsum.photos/600/400"}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* TOP BADGE */}
        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-emerald-700 text-[11px] font-bold px-3 py-1 rounded-full shadow-xs uppercase tracking-wider">
          {post.tag || (post.tags && post.tags[0]) || "Wellness"}
        </span>
      </div>

      {/* CARD CONTENT */}
      <div className="flex flex-col flex-1 p-6 justify-between space-y-4">
        <div className="space-y-2">
          {/* TITLE WITH EMERALD HOVER EFFECT */}
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-200 min-h-14">
            {post.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
            {post.description || post.body}
          </p>
        </div>

        {/* READ MORE BUTTON LINK */}
        <div className="pt-2">
          <Link
            href={blogLink}
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-emerald-600 hover:text-emerald-800 transition-colors group/link"
          >
            Read Article
            <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200 ml-1.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
