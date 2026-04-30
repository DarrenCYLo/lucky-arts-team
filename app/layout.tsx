import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: {
    default:
      "Lucky Arts Team | Lion Dance, Qilin Dance and Dragon Dance",
    template: "%s | Lucky Arts Team",
  },
  description:
    "Lucky Arts Team provides lion dance, qilin dance and dragon dance performances, costume and merchandise enquiries in North East England.",
  keywords: [
    "Lucky Arts Team",
    "lion dance",
    "qilin dance",
    "dragon dance",
    "Chinese performance",
    "event entertainment",
    "lion dance costume",
    "dragon dance costume",
    "martial arts equipment",
    "North East England",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <CartProvider>
          <header className="relative z-50 border-b border-white/10 bg-black">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-xl font-bold text-red-400">
                Lucky Arts Team
              </Link>

              <Navbar />
            </div>
          </header>

          {children}

          <footer className="border-t border-white/10 bg-black">
  <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-gray-400">
    <p>© 2026 Lucky Arts Team. All rights reserved.</p>
    <p className="mt-2">Lion Dance • Qilin Dance • Dragon Dance</p>

    <p className="mt-2">
      Email:{" "}
      <a
        href="mailto:luckyartsteam@gmail.com"
        className="text-gray-300 transition hover:text-red-400"
      >
        luckyartsteam@gmail.com
      </a>
    </p>

    <p className="mt-2">Service Area: North East England</p>
  </div>
</footer>
        </CartProvider>
      </body>
    </html>
  );
}