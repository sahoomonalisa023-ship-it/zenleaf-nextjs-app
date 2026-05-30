"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-gray-950 pt-12 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO MAIN WRAPPER (Removed overflow-hidden so bottom card can float outside) */}
        <div className="relative w-full h-132 bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-800/50 mb-16">
          {/* BACKGROUND IMAGE CONTAINER WITH INSIDE CLIP */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
              alt="Meditation"
              className="w-full h-full object-cover opacity-35 filter grayscale-25"
            />
            <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-900/40 to-transparent" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* CENTER CONTENT BLOCK */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20 space-y-6">
            {/* ELEGANT SERIF HEADING */}
            <h1 className="text-white text-4xl sm:text-6xl font-serif tracking-wide max-w-3xl leading-tight">
              Transform Your Mind
            </h1>

            {/* SUBTITLE */}
            <p className="text-neutral-400 text-sm sm:text-base max-w-md tracking-wide font-light">
              Create tranquility and alignment with systematic daily habits.
            </p>

            {/* LEAF-SHAPED GLOWING BUTTON */}
            <div className="pt-2">
              <Link href="/article/meditation">
                <button className="relative px-8 py-3.5 bg-emerald-950/80 text-emerald-300 font-bold text-sm tracking-wider uppercase border border-emerald-500/40 cursor-pointer transition-all duration-300 hover:text-white hover:bg-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] rounded-tl-none rounded-br-none rounded-tr-3xl rounded-bl-3xl transform hover:scale-102 active:scale-98">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Begin Your Journey
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* FIXED FLOATING CONTENT CARD (Moved down completely using translate-y-1/2 with full opacity) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-11/12 max-w-2xl bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 hidden md:flex items-center gap-6 z-30">
            {/* Brand Logo Badge */}
            <div className="w-12 h-12 bg-neutral-950 rounded-xl flex items-center justify-center shrink-0 shadow-md">
              <span className="text-white font-serif font-bold text-xl">N</span>
            </div>

            {/* Card Content Text */}
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-gray-900">
                Meditation helps...
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Meditation stabilizes mental focus, balances cortisol levels,
                and integrates structural clarity into everyday spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
