"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar"; // 1. NAVBAR KO SABSE UPAR IMPORT KIYA

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [btnStatus, setBtnStatus] = useState("Send Message");
  const [showSuccessCard, setShowSuccessCard] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBtnStatus("Syncing Stream...");

    setTimeout(() => {
      setBtnStatus("Message Logged!");
      setShowSuccessCard(true);

      setForm({ name: "", email: "", message: "" });

      setTimeout(() => {
        setBtnStatus("Send Message");
        setShowSuccessCard(false);
      }, 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-emerald-100">
      {/* 2. NAVBAR KO MAIN LAYOUT MEIN SABSE UPAR PLACE KIYA */}
      <Navbar />

      {/* MAIN CONTAINER (Padding settings adjusted to prevent overlapping with top navbar) */}
      <div className="py-32 px-6 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-2xl relative">
          {/* LEFT BRAND PANEL */}
          <div className="lg:col-span-5 bg-gray-950 p-12 flex flex-col justify-between text-white relative min-h-[380px]">
            <div className="absolute inset-0 bg-radial from-emerald-950/30 via-transparent to-transparent opacity-70 pointer-events-none" />

            <div className="space-y-4 z-10">
              <h2 className="text-3xl font-black tracking-tight">
                Initiate Contact
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Have inquiries about our frontend systems, dynamic route maps,
                components, or premium layouts? Send us your logs.
              </p>
            </div>

            <div className="space-y-5 text-sm text-gray-300 z-10 font-light">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400 text-xs">
                  📍
                </span>
                <p>Bhubaneswar, Odisha, India</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400 text-xs">
                  ✉️
                </span>
                <p>systems@zenleaf.com</p>
              </div>
            </div>

            <p className="text-[10px] text-gray-600 font-mono tracking-widest uppercase z-10">
              ZenLeaf Interface Framework © 2026
            </p>
          </div>

          {/* RIGHT INTERACTIVE FORM PANEL */}
          <div className="lg:col-span-7 p-12 bg-white flex flex-col justify-center">
            {showSuccessCard && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-sm font-medium transition-all duration-300 animate-bounce">
                🎉 Success! Your message data has been submitted and captured
                locally in the state stream tracker.
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-emerald-500 rounded-xl text-sm focus:outline-hidden transition-colors bg-gray-50/40 text-gray-900"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 focus:border-emerald-500 rounded-xl text-sm focus:outline-hidden transition-colors bg-gray-50/40 text-gray-900"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                  Message Logs
                </label>
                <textarea
                  rows="4"
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 focus:border-emerald-500 rounded-xl text-sm focus:outline-hidden transition-colors bg-gray-50/40 text-gray-900 resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 cursor-pointer ${
                  showSuccessCard
                    ? "bg-emerald-600 shadow-lg shadow-emerald-600/20"
                    : "bg-gray-900 hover:bg-emerald-600 shadow-sm"
                }`}
              >
                {btnStatus}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ❌ Bottom "Back to Homepage" navigation block is now completely deleted */}
    </div>
  );
}
