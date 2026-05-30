import "./globals.css";
import Navbar from "./components/Navbar"; // 🚀 Sirf Navbar import hoga

export const metadata = {
  title: "ZenLeaf - Elevate Your Mind",
  description: "A professional wellness and meditation platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-white">
        {/* NAVBAR GLOBAL - Ab yeh har page ke upar automatic dikhega */}
        <Navbar />

        {/* MAIN CONTENT - Jo bhi page khulega wo yahan load hoga */}
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
