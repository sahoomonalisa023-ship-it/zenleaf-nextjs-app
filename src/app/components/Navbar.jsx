"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* 🛠️ BRAND LOGO - CHANGED TO <a> TAG FOR HARD REFRESH */}
        <a href="/" className="group flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-md shadow-emerald-500/20">
            <span className="text-white font-black text-xl">Z</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-gray-900">
            Zen
            <span className="text-emerald-500 group-hover:text-emerald-600 transition-colors duration-200">
              Leaf
            </span>
          </h1>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Blog", "About", "Contact"].map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                href={path}
                className="relative text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors duration-300 py-2 group/link"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-emerald-500 rounded-full scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out origin-center" />
              </Link>
            );
          })}
        </nav>

        {/* UNIQUE & GLOWING "BEGIN JOURNEY" CTA BUTTON */}
        <div className="hidden md:flex items-center">
          <Link href="/article/meditation">
            <button className="group relative px-6 py-2.5 bg-emerald-950 text-emerald-400 font-bold text-sm rounded-xl overflow-hidden border border-emerald-500/30 cursor-pointer hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>

              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
                Begin Journey
              </span>

              <div className="absolute inset-0 bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-0" />
            </button>
          </Link>
        </div>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none cursor-pointer z-50"
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-900 rounded-full transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-900 rounded-full transition-opacity duration-200 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-900 rounded-full transition-transform duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {["Home", "Blog", "About", "Contact"].map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                href={path}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-gray-700 hover:text-emerald-500 transition-colors duration-200 py-1"
              >
                {item}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link href="/article/meditation" onClick={() => setIsOpen(false)}>
              <button className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-xl text-center shadow-md">
                Begin Journey
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
