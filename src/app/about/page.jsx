"use client";

import Navbar from "../components/Navbar"; // ✅ Link ko hata diya aur sirf Navbar rakha hai

export default function AboutPage() {
  const storyMilestones = [
    {
      step: "Phase 01",
      title: "The Cognitive Architecture",
      desc: "Traditional advice tells you to relax. ZenLeaf replaces raw theories with actual structural user interface tracking layers to analyze anxiety logs calmly.",
    },
    {
      step: "Phase 02",
      title: "Micro-Habit Implementation",
      desc: "Massive mental resets fail because they break workflows. We target 10-minute active awareness patterns that integrate directly inside your working hours.",
    },
    {
      step: "Phase 03",
      title: "Full-Stack Bio Systems",
      desc: "Mental stability isn't isolated. Our system handles data from sound therapy cycles up to strict single-ingredient diet configurations cleanly.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-28 selection:bg-emerald-100 relative overflow-hidden">
      {/* NAVBAR KO MAIN LAYOUT MEIN SABSE UPAR RENDER KIYA */}
      <Navbar />

      {/* DECORATIVE AMBIENT BACKDROP LIGHTS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-50/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* CINEMATIC HERO STATEMENT SECTION */}
        <div className="max-w-3xl mx-auto text-center space-y-6 pt-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-[11px] font-bold tracking-widest uppercase rounded-full border border-emerald-100">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            Core Framework V2
          </div>
          <h1 className="text-5xl font-black tracking-tight sm:text-7xl text-gray-900 leading-none">
            We Build Space for{" "}
            <span className="text-emerald-500 relative inline-block">
              Tranquility
            </span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto">
            ZenLeaf plans, codes, and refines high-fidelity interfaces and clean
            mindfulness resources to protect your mental performance stream from
            daily burnout.
          </p>
        </div>

        {/* BENTO STYLE STORY MILESTONES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-28">
          {storyMilestones.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl border border-gray-100 bg-white shadow-xs hover:shadow-2xl hover:border-emerald-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-55"
            >
              <div className="space-y-6">
                {/* UPPER RUNNING ID */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest font-bold text-gray-400 uppercase">
                    {item.step}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-emerald-500 transition-colors duration-300" />
                </div>

                {/* MAIN HEADLINE LOG */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* ACTION INDICATOR ARROW */}
              <div className="pt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-emerald-500 text-sm">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
