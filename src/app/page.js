"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* 1. GLOBAL NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 pt-20">
        {/* 2. HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center space-y-6">
          <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold tracking-widest uppercase rounded-full">
            Welcome to ZenLeaf Framework
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-gray-900 leading-none">
            A Clean Mind Creates <br />
            <span className="text-emerald-500">Structured Consistency</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-base sm:text-lg font-light leading-relaxed">
            Empowering your core focus, alignment of internal deep thoughts, and
            supporting a healthy digital lifestyle built directly for modern
            developers.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-bold text-sm rounded-xl transition-all shadow-md shadow-emerald-500/10">
              Get Started Free
            </button>
            <button className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold text-sm rounded-xl transition-all">
              Learn More
            </button>
          </div>
        </section>

        {/* 3. FEATURE CARDS SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 text-xl font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Daily Meditation
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Keep your mind tracking beautifully. Filter out code compilation
                anxiety logs seamlessly with micro sessions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 text-xl font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Mental Wellness
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                An intentional space designed layout to map layout architecture,
                keeping your mental framework completely clean.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 text-xl font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Healthy Living
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Build a structural lifestyle layout of pure absolute
                consistency. Balance code sprints with active breathing
                patterns.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 4. GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
