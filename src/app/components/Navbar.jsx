"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogoClick = (e) => {
    e.preventDefault();
    // Phile home page par navigate karega, phir window ko refresh karega
    router.push("/");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 fixed top-0 left-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO SECTION - CLICK TO REFRESH */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            Z
          </div>
          <span className="text-xl font-black tracking-tight text-gray-900">
            Zen<span className="text-emerald-500">Leaf</span>
          </span>
        </a>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-emerald-500 transition-colors">
            Home
          </Link>
          <Link
            href="/blog"
            className="hover:text-emerald-500 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="hover:text-emerald-500 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-emerald-500 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* ACTION BUTTON */}
        <div>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-950 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-emerald-900 transition-all">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Begin Journey
          </button>
        </div>
      </div>
    </nav>
  );
}
