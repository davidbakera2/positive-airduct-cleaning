'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Positive Air Duct Cleaning®?",
    answer: "Positive Air Duct Cleaning® — the core of 'Straight from the Hart' — is a revolutionary HVAC remediation method invented by David Hart of RamAir International in 2007. Traditional negative air methods had remained largely unchanged since the 1950s even as duct construction evolved to flexible ducting. Positive Air uses the building's own air handler (furnace fan) to generate airflow in the correct, intended direction. Combined with compressed air agitation (via a specialized blasting ball) and vacuum extraction, it thoroughly cleans without invasive cuts or reversing airflow. It is the foundation of the RamAir system and the only method approved for Forensic Restoration™ involving mold, biohazards, crime scenes, or chemical contamination."
  },
  {
    question: "How does Positive Air Duct Cleaning differ from traditional negative air duct cleaning?",
    answer: "Traditional negative air uses large external machines that pull *against* the system's natural flow, often requiring cuts into ducts and rotary brushes. This creates negative pressure that can delaminate flex duct seams (proven in peer-reviewed studies by flex duct manufacturers). Positive Air works *with* the existing air handler — already correctly sized for the job, from residential systems to massive 60,000 CFM commercial rooftop units. It avoids cutting, protects dampers and flex duct, maintains containment, prevents recontamination, and delivers faster, more visible results."
  },
  {
    question: "What are the main advantages of Positive Air Duct Cleaning?",
    answer: "As David Hart explains: • One-person operation (technicians routinely complete 2 homes per day with high profitability)\\n• Non-invasive (no large cuts or external mass air movers — the air handler is already installed and perfectly sized)\\n• No damage to modern flex ducting or dampers (avoids the delamination negative pressure causes)\\n• Superior containment with zero recontamination risk (essential for mold, forensic restoration, crime scenes, and biohazards)\\n• Visible results — customers watch debris collected in a clear vacuum box\\n• Dramatically faster (casino remediation completed in 10 days vs. a quoted 3-month traditional job for half the price)\\n• Lower liability, protects HVAC warranties, and creates a genuinely positive experience for both technicians and customers (many report major reductions in asthma symptoms, less daily dusting, and better breathing)."
  },
  {
    question: "How does the RamAir system (the leader in Positive Air) actually work?",
    answer: "The RamAir system (Platinum or Standard packages featuring the Cyclonic PowerVac and patented SaniJet) uses three key elements: mass air movement from the existing HVAC air handler, agitation via compressed air through a Teflon blasting ball that scours every surface and corrugation, and powerful vacuum extraction. Debris is pushed exactly where it belongs and captured visibly in a clear box. The SaniJet is a game-changer for decontamination: unlike traditional fogging (which either fails to coat duct walls properly or contaminates the entire living space), it applies disinfectants or chemical neutralizers precisely and directly to duct surfaces with full control and no waste. David Hart's team uses this daily on real jobs including mold remediation and forensic work."
  },
  {
    question: "Does Positive Air Duct Cleaning help with allergies, mold, and indoor air quality?",
    answer: "Yes — often dramatically. David Hart shares numerous five-star reviews: 'my son's asthma is all but gone,' 'we're breathing better,' and 'I'm not dusting every single day.' The method removes accumulated allergens, mold spores, pet dander, and debris without spreading them. For restoration projects (mold, smoke, crime scenes, illicit drugs), the SaniJet's targeted application and perfect containment make it far superior. Customers and the technicians performing the work both enjoy a genuinely positive experience."
  },
  {
    question: "How often should I have my air ducts cleaned using Positive Air?",
    answer: "NADCA recommends every 3–5 years for average homes. Clean more frequently (every 1–2 years) if you have pets, smokers, recent construction/renovations, visible dust from vents, musty odors, allergy/asthma sufferers, or if the system has been exposed to water damage, fire, smoke, or mold. A free inspection provides a personalized recommendation based on your specific HVAC system and home environment."
  },
  {
    question: "Will Positive Air Duct Cleaning make a mess in my home?",
    answer: "No. The process is clean, contained, and professional. All debris is directed into a clear collection box where both you and the technician can see exactly what is being removed in real time. Living spaces are protected, and most customers notice *significantly less* dust afterward. The non-invasive Positive Air method avoids the mess and disruption of cutting ducts or aggressive brushing."
  },
  {
    question: "Can Positive Air Duct Cleaning be used for dryer vents, commercial systems, and restoration work?",
    answer: "Yes — it excels here. Dryer vent cleaning takes under 5 minutes with zero indoor mess by using the dryer's own airflow to pull lint outside. Commercial and large-scale jobs (including casinos with enormous rooftop air handlers moving 60,000 CFM) are highly efficient. David Hart’s team recently completed a major casino remediation in just 10 days. The method is ideal for forensic restoration, mold remediation, crime scenes, unattended deaths, and biohazard abatement due to unmatched containment and the SaniJet’s precision."
  },
  {
    question: "How long does a Positive Air Duct Cleaning service take and what does it cost?",
    answer: "An average 2,000 sq ft home typically takes 1–2 hours (vs. 4–6 hours with traditional methods). Pricing is transparent and usually falls between $350–$650 depending on vents and add-ons (roughly $35 per return, $25 per supply, $45–$65 for the air handler). Dryer vent cleaning is typically $89–$149. Many customers find it pays for itself quickly through improved efficiency, lower energy bills, and better health."
  },
  {
    question: "What makes the SaniJet decontamination system unique?",
    answer: "The patented SaniJet (one of David Hart’s favorite innovations) solves the problems of traditional fogging. Fogging either fails to properly coat duct walls (if stopped too soon) or contaminates the entire living space with disinfectant (if continued). The SaniJet turns the HVAC off, uses a compressed canister and dispersion ball on a long hose to apply product *directly and evenly* to duct surfaces as the hose is retracted. You get complete control, perfect coverage where it’s needed, zero waste in the living space, and compliance with the restoration industry’s 'golden rules' of full coating and proper dwell time."
  },
  {
    question: "Why should I choose a Positive Air Duct Cleaning contractor?",
    answer: "As David Hart says, HVAC cleaning should be a *positive experience* for everyone involved. You protect your investment in modern HVAC equipment (especially flex ducting), enjoy one-person efficiency and high profitability for contractors, get visible proof of work, dramatically improve indoor air quality (with real customer stories of reduced asthma and dusting), complete complex jobs faster with less mess and liability, and use technology trusted by the U.S. military, top restoration professionals, and contractors in 23+ countries. Traditional methods have not kept pace with duct evolution. Positive Air is the smarter, safer, warranty-friendly, next-generation standard."
  }
];

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return faqs;
    
    const term = searchTerm.toLowerCase();
    return faqs.filter(faq => 
      faq.question.toLowerCase().includes(term) || 
      faq.answer.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex-1 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6 text-sm font-medium">
            ← Back to Home
          </Link>
          <h1 className="text-6xl font-semibold tracking-tighter mb-4">Positive Air Duct Cleaning FAQs</h1>
          <p className="text-xl text-zinc-600 max-w-md mx-auto">
            Straight from the Hart: Educational insights from David Hart's interview on the superior Positive Air Duct Cleaning® method, RamAir systems, SaniJet technology, real customer results, and why it outperforms traditional negative air approaches.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-12 max-w-2xl mx-auto">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400">🔍</div>
          <input
            type="text"
            placeholder="Search our FAQs... (try 'SaniJet', 'flex duct', 'one person', 'casino', 'fogging', 'asthma', or 'forensic')"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="faq-search w-full pl-14 pr-6 py-5 bg-white border border-zinc-200 rounded-3xl text-lg placeholder:text-zinc-400 focus:outline-none focus:border-emerald-300 shadow-sm"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
            >
              ✕
            </button>
          )}
        </div>

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const originalIndex = faqs.findIndex(f => f.question === faq.question);
              const isOpen = openIndex === originalIndex;
              
              return (
                <div 
                  key={originalIndex} 
                  className="faq-item bg-white border border-zinc-100 rounded-3xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(originalIndex)}
                    className="w-full px-8 py-7 text-left flex items-start justify-between group hover:bg-zinc-50 transition-colors"
                  >
                    <span className="font-medium text-lg pr-8 text-left">{faq.question}</span>
                    <span className={`text-2xl text-emerald-500 transition-transform flex-shrink-0 mt-0.5 ${isOpen ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  
                  <div 
                    className={`accordion-content px-8 pb-8 text-zinc-600 leading-relaxed border-t border-zinc-100 ${isOpen ? 'open' : ''}`}
                  >
                    <div className="pt-2 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white border border-zinc-100 rounded-3xl p-16 text-center">
              <div className="text-6xl mb-6">🤔</div>
              <div className="text-2xl font-medium mb-3">No matching questions found</div>
              <p className="text-zinc-600 mb-8">Try different keywords or give us a call at (734) 355-8232 for personalized answers from the Positive Air experts.</p>
              <a 
                href="tel:+17343558232" 
                className="inline-block bg-emerald-600 text-white px-8 py-3.5 rounded-2xl font-medium"
              >
                Call Now
              </a>
            </div>
          )}
        </div>

        <div className="mt-16 text-center bg-white border border-zinc-100 rounded-3xl p-10">
          <div className="text-emerald-600 mb-3">Still have questions about Positive Air Duct Cleaning?</div>
          <div className="text-2xl font-semibold tracking-tight mb-6">Speak with our local Michigan team</div>
          <a 
            href="tel:+17343558232"
            className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-black text-white px-10 h-14 rounded-2xl text-lg font-medium transition-colors"
          >
            📞 (734) 355-8232
          </a>
          <p className="text-xs text-zinc-500 mt-8">We educate first — no pressure, just better air for your family or business. Insights drawn from David Hart's interview on the "Straight from the Hart" series.</p>
          <div className="text-[10px] text-zinc-400 mt-6">Proud to follow the RamAir Positive Air Duct Cleaning® standard • One-person efficiency • Non-invasive • Superior results</div>
        </div>
      </div>
    </div>
  );
}
