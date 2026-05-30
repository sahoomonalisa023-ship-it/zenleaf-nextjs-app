import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-200 border-t border-gray-800 w-full mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        {/* TOP LAYOUT: ALL TEXT CONVERTED TO HIGH-CONTRAST LIGHT SHADES */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          {/* BRAND COLUMN */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xl font-black tracking-tight text-white">
              Zen<span className="text-emerald-400">Leaf</span>
            </h3>
            <p className="text-xs leading-relaxed text-gray-300 max-w-sm font-light">
              Empowering your mind, alignment of internal thoughts, and
              supporting a structural lifestyle of consistency.
            </p>
          </div>

          {/* QUICK EXPLORE LINKS */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  Home Feed
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  Our Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* CATEGORIES / VALUES */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Focus Areas
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {/* ✅ Fixed broken closing tags here */}
              <li className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-2">
                Meditation
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-2">
                Mental Wellness
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-2">
                Healthy Living
              </li>
            </ul>
          </div>
        </div>

        {/* REFINED PORTFOLIO HIGHLIGHT (CLEAN DESIGN - NO EMAIL) */}
        <div className="mt-6 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_0_20px_rgba(16,185,129,0.03)]">
          {/* Left Side Status */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs text-gray-200 font-medium">
              Designed & Developed end-to-end
            </p>
          </div>

          {/* Right Side Capsule: Premium Single-Focus Brand Grid */}
          <div className="flex items-center gap-3 bg-emerald-500/20 border border-emerald-400/40 px-4 py-1.5 rounded-lg">
            {/* Pure White Bold Name */}
            <span className="text-xs font-black text-white tracking-wide uppercase">
              Monalisa Sahoo
            </span>
            <div className="w-px h-3 bg-emerald-400/40" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-300 uppercase">
              Frontend Developer
            </span>
          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <p>© {new Date().getFullYear()} ZenLeaf Inc. Built with precision.</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
