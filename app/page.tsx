'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Educational inquiry from positiveairductcleaning.org:\n\n${message || 'No additional message.'}\n\nEmail: ${email}`;
    window.location.href = `mailto:david@bakerstrategy.com?subject=Positive Air Education Inquiry&body=${encodeURIComponent(body)}`;
    alert('Thank you. Your message has been prepared — we will follow up with educational resources on Positive Air Duct Cleaning®.');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex-1">
      {/* Hero - Blue Theme */}
      <section className="hero-bg text-white py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-3xl text-sm mb-6 border border-white/20">
              Straight from the Hart • Positive Air Duct Cleaning®
            </div>
            
            <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-8">
              The Smarter Way<br />to Clean Air.
            </h1>
            
            <p className="text-2xl text-white/80 mb-10 max-w-lg">
              An educational resource on <strong>Positive Air Duct Cleaning®</strong> — the revolutionary non-invasive method invented by David Hart of RamAir International.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/faqs" 
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-white text-blue-700 hover:bg-blue-100 px-10 font-semibold text-lg transition-all active:scale-[0.985]"
              >
                Explore the FAQs
              </a>
              <a 
                href="#method" 
                className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-white/80 hover:bg-white/10 px-8 font-medium text-lg transition-all"
              >
                Learn the Method
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-sm opacity-75">
              <div>📚 Backed by peer-reviewed research</div>
              <div>🎙️ Featured in Straight from the Hart</div>
              <div>🌍 Used in 23+ countries</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>
      </section>

      {/* Educational Trust Bar */}
      <div className="bg-white py-6 border-b">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-sm text-zinc-500">
          <div>Invented by David Hart • RamAir International</div>
          <div className="flex items-center gap-2">⭐ Peer-reviewed • NADCA aligned</div>
          <div className="text-blue-600 font-medium">Non-invasive • Protects flex duct • Superior containment</div>
        </div>
      </div>

      {/* What is Positive Air */}
      <section id="method" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <div className="sticky top-24">
                <div className="uppercase tracking-[3px] text-blue-600 text-sm font-medium mb-3">THE METHOD</div>
                <h2 className="text-5xl font-semibold tracking-tighter leading-none mb-6">What is Positive Air Duct Cleaning?</h2>
                <p className="text-lg text-zinc-600">
                  A better, safer way to clean HVAC systems. Invented in 2007, it uses the system's own air handler to move air in the correct direction — no large external machines, no cutting into ducts, and no damage to modern flex ducting.
                </p>
                <a href="/faqs" className="mt-8 inline-flex items-center text-blue-600 font-medium hover:underline">
                  Read the full FAQs →
                </a>
              </div>
            </div>
            
            <div className="md:col-span-7 space-y-10 text-zinc-600">
              <div className="flex gap-6">
                <div className="font-mono text-5xl font-light text-blue-500 flex-shrink-0">01</div>
                <div>
                  <div className="font-semibold text-xl text-zinc-900 mb-2">Uses the existing air handler</div>
                  <p>The furnace fan — already correctly sized for the home or building — provides the perfect amount of airflow. No need to bring and hook up massive negative air machines.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="font-mono text-5xl font-light text-blue-500 flex-shrink-0">02</div>
                <div>
                  <div className="font-semibold text-xl text-zinc-900 mb-2">Non-invasive & protective</div>
                  <p>No cutting into ducts. No rotary brushes that can tear flex duct seams. Peer-reviewed studies confirm it protects modern HVAC systems where negative pressure methods can cause delamination and warranty issues.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="font-mono text-5xl font-light text-blue-500 flex-shrink-0">03</div>
                <div>
                  <div className="font-semibold text-xl text-zinc-900 mb-2">Visible, controlled results</div>
                  <p>Debris is pushed exactly where it should go and collected in a clear vacuum box so both technician and customer can see the results in real time. The patented SaniJet system allows precise application of disinfectants directly inside the ducts without fogging the living space.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Positive Air is Superior */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-blue-400 uppercase tracking-widest text-sm mb-4">THE POSITIVE DIFFERENCE</div>
            <h2 className="text-5xl font-semibold tracking-tighter">Why Positive Air Beats Traditional Negative Air</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-3xl p-10">
              <div className="text-red-400 text-sm font-medium mb-6">TRADITIONAL NEGATIVE AIR</div>
              <ul className="space-y-6 text-zinc-400">
                <li className="flex gap-4">
                  <span className="text-red-400 flex-shrink-0">✕</span>
                  <span>Pulls against natural system airflow</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-400 flex-shrink-0">✕</span>
                  <span>Often requires cutting into ducts</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-400 flex-shrink-0">✕</span>
                  <span>Can damage flex duct seams (peer-reviewed)</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-400 flex-shrink-0">✕</span>
                  <span>Risk of recontamination from ambient air</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-400 flex-shrink-0">✕</span>
                  <span>More labor intensive, slower, higher liability</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-900/30 border border-blue-700 rounded-3xl p-10">
              <div className="text-blue-400 text-sm font-medium mb-6">POSITIVE AIR DUCT CLEANING®</div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-blue-400 flex-shrink-0">✓</span>
                  <span>Works with the existing air handler</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-400 flex-shrink-0">✓</span>
                  <span>Completely non-invasive in most cases</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-400 flex-shrink-0">✓</span>
                  <span>Protects modern flex ducting and warranties</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-400 flex-shrink-0">✓</span>
                  <span>Superior containment — no recontamination</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-400 flex-shrink-0">✓</span>
                  <span>Faster, visible results, one-person friendly</span>
                </li>
              </ul>
              <div className="mt-10 pt-8 border-t border-blue-800 text-sm text-blue-300">
                Trusted by restoration professionals, the U.S. military, and contractors in 23+ countries. The only method approved for Forensic Restoration™.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos - First 2 from user list */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-blue-600 text-sm font-medium tracking-widest mb-3">WATCH & LEARN</div>
            <h2 className="text-5xl font-semibold tracking-tighter">Featured Videos</h2>
            <p className="text-zinc-600 mt-3">Straight from David Hart and the RamAir team</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-zinc-900 rounded-3xl overflow-hidden">
              <div className="aspect-video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pzWMJDpcC4k" title="Positive Air Duct Cleaning Explained" allowFullScreen></iframe>
              </div>
              <div className="p-6 text-white">
                <h3 className="font-semibold">Positive Air Duct Cleaning Explained</h3>
                <p className="text-sm text-zinc-400 mt-1">David Hart breaks down the revolutionary Positive Air method.</p>
              </div>
            </div>
            
            <div className="bg-zinc-900 rounded-3xl overflow-hidden">
              <div className="aspect-video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/z-QNyBLIC60" title="SaniJet System Demo" allowFullScreen></iframe>
              </div>
              <div className="p-6 text-white">
                <h3 className="font-semibold">SaniJet Patented Sanitizing System</h3>
                <p className="text-sm text-zinc-400 mt-1">See the precision application that makes Positive Air decontamination superior.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a href="/resources" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              Browse all 12 educational videos →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials / Real Results */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold tracking-tighter">Real Customer Results</h2>
            <p className="text-zinc-600 mt-4 max-w-md mx-auto">From David Hart's interviews and field experience</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-50 p-8 rounded-3xl">
              <div className="text-6xl text-amber-400 mb-6">“</div>
              <p className="italic leading-relaxed mb-8">
                My son's asthma is all but gone. We're breathing better. I'm not dusting every single day.
              </p>
              <div className="text-sm text-zinc-500">— RamAir / Positive Air customer</div>
            </div>
            
            <div className="bg-zinc-50 p-8 rounded-3xl">
              <div className="text-6xl text-amber-400 mb-6">“</div>
              <p className="italic leading-relaxed mb-8">
                We completed a major casino remediation in 10 days — half the price and a fraction of the time of the traditional quote.
              </p>
              <div className="text-sm text-zinc-500">— David Hart, on large-scale commercial work</div>
            </div>
            
            <div className="bg-zinc-50 p-8 rounded-3xl">
              <div className="text-6xl text-amber-400 mb-6">“</div>
              <p className="italic leading-relaxed mb-8">
                Positive Air has revolutionized our restoration work at PuroClean Northwest. Fast, safe, and superior results every time.
              </p>
              <div className="text-sm text-zinc-500">— Bob Jordan, PuroClean Northwest, Straight from the Hart Episode 2</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Educational */}
      <div id="contact" className="bg-blue-700 py-20 text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold tracking-tighter mb-6">Want to Learn More?</h2>
          <p className="text-xl text-blue-100 mb-10">
            This site exists to educate homeowners, facility managers, and contractors about the superior Positive Air Duct Cleaning® method. 
            Reach out for resources, contractor referrals, or podcast updates.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/30 placeholder:text-white/60 focus:outline-none focus:border-white text-white"
              required
            />
            <textarea
              placeholder="What would you like to learn more about? (Positive Air benefits, finding a contractor, SaniJet, forensic restoration...)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-6 py-4 rounded-3xl bg-white/10 border border-white/30 placeholder:text-white/60 focus:outline-none focus:border-white text-white h-32"
            />
            <button 
              type="submit"
              className="w-full h-14 bg-white text-blue-700 rounded-2xl font-semibold text-lg hover:bg-blue-100 active:bg-blue-200 transition-all"
            >
              Send Educational Inquiry
            </button>
          </form>
          
          <p className="text-xs text-blue-200/70 mt-10">
            You will be connected with educational resources and qualified Positive Air contractors where available.<br />
            <span className="opacity-60">Not a direct service provider — we educate on the RamAir Positive Air standard.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
