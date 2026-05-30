import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ZenLeaf - Mindfulness Platform",
  description: "Empowering your mind and supporting a structural lifestyle.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col justify-between bg-white text-gray-900">
        <div>
          {/* Global Navbar: Saare pages par top par dikhega */}
          <Navbar />

          {/* Main Content Area: Navbar ke niche se content start karne ke liye pt-20 lagaya hai */}
          <main className="pt-20">{children}</main>
        </div>

        {/* Global Footer: Ab yeh automatic saare pages ke bottom par scroll karne pe milega */}
        <Footer />
      </body>
    </html>
  );
}
