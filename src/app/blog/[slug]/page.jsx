"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function BlogDetailPage() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 selection:bg-emerald-100">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        {/* ARTICLE HEADER */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold tracking-widest uppercase rounded-full">
            Mindfulness Insights
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight capitalize">
            Understanding {slug ? slug.replace(/-/g, " ") : "Your Mental Space"}
          </h1>
          <p className="text-gray-400 text-xs font-mono">
            Published on:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            • 5 min read
          </p>
        </div>

        {/* MAIN TEXT CONTAINER */}
        <div className="prose prose-gray max-w-none border-t border-gray-100 pt-8 text-gray-600 space-y-6 leading-relaxed font-light text-base">
          <p>
            Mental stability isn't a static state; it's a structural practice of
            mapping awareness. When we navigate complex daily workflows, our
            cognitive energy streams naturally degrade, leading to micro-burnout
            zones that affect performance.
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 my-6 italic text-gray-900 font-medium">
            "Tranquility is achieved not by escaping the noise, but by building
            structured spaces within it."
          </blockquote>
          <p>
            By integrating 10-minute active awareness patterns clean inside your
            timeline, you create protective layers for your focus framework.
            This architecture filters out operational anxiety logs seamlessly.
          </p>
        </div>

        {/* NOTE: "Go to Overview" Button is deleted completely from here */}
      </div>
    </div>
  );
}
