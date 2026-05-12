import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Positive Air Duct Cleaning® | Educational Resource",
  description: "Learn about Positive Air Duct Cleaning® — the superior, non-invasive method invented by David Hart of RamAir International. Educational hub covering benefits, SaniJet technology, research, and real results.",
  keywords: ["positive air duct cleaning", "ramair", "david hart", "non-invasive duct cleaning", "forensic restoration", "sanjiet", "hvac education"],
  openGraph: {
    title: "Positive Air Duct Cleaning® Education",
    description: "Straight from the Hart: Understanding the revolutionary Positive Air method.",
    images: [{ url: "https://www.positiveairductcleaning.org/og-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-zinc-50 text-zinc-900 flex flex-col font-sans">
        {/* Navigation - Blue Theme */}
        <nav className="bg-white border-b border-zinc-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">P</div>
              <div>
                <div className="font-semibold tracking-tight text-2xl">Positive Air</div>
                <div className="text-[10px] text-zinc-500 -mt-1">DUCT CLEANING®</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/faqs" className="hover:text-blue-600 transition-colors">FAQs</Link>
              <Link href="#method" className="hover:text-blue-600 transition-colors">The Method</Link>
              <Link href="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
              <Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </div>

            <div className="flex items-center gap-4">
              <a href="tel:+17343558232" className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all active:scale-95">
                📞 (734) 355-8232
              </a>
              <a href="#contact" className="md:hidden bg-blue-600 text-white px-5 py-2.5 rounded-2xl text-sm font-semibold">Learn More</a>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer - Blue accents */}
        <footer className="mt-auto bg-zinc-900 text-zinc-400 py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3 text-white mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center font-bold">P</div>
                <span className="font-semibold text-xl tracking-tight">Positive Air Duct Cleaning®</span>
              </div>
              <p className="text-sm leading-relaxed">
                An educational resource dedicated to Positive Air Duct Cleaning® — the non-invasive, superior method developed by David Hart of RamAir International.
              </p>
              <div className="mt-6 text-xs">© {new Date().getFullYear()} Positive Air Duct Cleaning. All rights reserved.</div>
            </div>
            
            <div>
              <div className="font-semibold text-white mb-4">Quick Links</div>
              <div className="space-y-2 text-sm">
                <Link href="/" className="block hover:text-white transition-colors">Home</Link>
                <Link href="/faqs" className="block hover:text-white transition-colors">Comprehensive FAQs</Link>
                <Link href="#method" className="block hover:text-white transition-colors">The Positive Method</Link>
              </div>
            </div>
            
            <div>
              <div className="font-semibold text-white mb-4">Resources</div>
              <div className="space-y-3 text-sm">
                <a href="https://ramair.co" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                  RamAir International →
                </a>
                <a href="tel:+17343558232" className="flex items-center gap-2 hover:text-white transition-colors">
                  📱 (734) 355-8232
                </a>
                <a href="mailto:david@bakerstrategy.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  ✉️ Educational Inquiries
                </a>
                <div className="pt-4 text-[10px] text-zinc-500">Educational Site • Not a direct service provider</div>
              </div>
            </div>
          </div>
          <div className="text-center text-[10px] mt-12 text-zinc-500 border-t border-zinc-800 pt-6">
            Powered by ParlayVU • Educational content drawn from David Hart's \"Straight from the Hart\" series
          </div>
        </footer>
      </body>
    </html>
  );
}
