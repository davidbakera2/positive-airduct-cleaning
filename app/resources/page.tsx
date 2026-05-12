import Link from 'next/link';

const videos = [

  {
    id: "U2ExGYl0JbI",
    title: "Straight from the Hart EP02: Bob Jordan, PuroClean Northwest",
    description: "David Hart interviews Bob Jordan of PuroClean Northwest about using Positive Air in restoration, forensic cleaning, disaster recovery, and elevating industry standards through better methods and customer experiences.",
    duration: "47:15"
  },
  {
    id: "ugB-INzfsBg",
    title: "Straight from the Hart EP01: Launching The Series",
    description: "David Baker launches the Straight from the Hart series with David Hart, founder of RamAir International. Discussion on the origins and philosophy of Positive Air Duct Cleaning, the RamAir system, SaniJet technology, and creating positive customer experiences in HVAC cleaning.",
    duration: "28:15"
  },
  {
    id: "3lxxpPGsS5o",
    title: "Positive Air Duct Cleaning Overview",
    description: "Introduction to the Positive Air method and why it is superior to traditional approaches.",
    duration: "12:45"
  },
  {
    id: "2O07GLR9tDc",
    title: "SaniJet System in Action",
    description: "Demonstration of the patented SaniJet for precise duct decontamination.",
    duration: "5:18"
  },
  {
    id: "Ke8Ll11kSjI",
    title: "Flex Duct Damage from Negative Air",
    description: "Peer-reviewed evidence of why negative air can destroy modern flex ducting.",
    duration: "9:33"
  },
  {
    id: "nSK17jruHE8",
    title: "Before and After Positive Air Cleaning",
    description: "Real job footage showing dramatic improvement in duct cleanliness.",
    duration: "4:52"
  },
  {
    id: "FSXVdUhPjbg",
    title: "One-Person Positive Air Operation",
    description: "How a single technician can efficiently clean multiple homes per day.",
    duration: "7:41"
  },
  {
    id: "QR6wom0GHV4",
    title: "Commercial HVAC with Positive Air",
    description: "Large-scale commercial and casino projects using the RamAir system.",
    duration: "11:20"
  },
  {
    id: "VmdFXq0KC-0",
    title: "Dryer Vent Cleaning - Positive Air Method",
    description: "Fast, effective, and fire-prevention focused dryer vent cleaning.",
    duration: "6:05"
  },
  {
    id: "BBl_zc4eBcQ",
    title: "Forensic Restoration Using Positive Air",
    description: "Application in mold, crime scene, and biohazard remediation.",
    duration: "14:12"
  },
  {
    id: "pBr0VOUoWB8",
    title: "Customer Testimonial - Asthma Relief",
    description: "Real family experience after Positive Air Duct Cleaning.",
    duration: "3:55"
  },
  {
    id: "xVYDhtTHsW0",
    title: "RamAir Training Program",
    description: "What to expect from hands-on training and certification in Bend, Oregon.",
    duration: "10:28"
  },
  {
    id: "h7C5NVLn0nw",
    title: "Teflon Blasting Ball Deep Dive",
    description: "How the agitation tool reaches every surface without damaging ducts.",
    duration: "8:17"
  },
  {
    id: "aYjLtgu4Zo4",
    title: "Why Positive Air is the Future",
    description: "David Hart on the evolution of HVAC cleaning and the positive experience it creates.",
    duration: "19:40"
  }
];

const shorts = [
  {
    id: "pBr0VOUoWB8",
    title: "Asthma Relief Testimonial",
    duration: "0:59"
  },
  {
    id: "nSK17jruHE8",
    title: "Dramatic Before & After",
    duration: "0:52"
  },
  {
    id: "VmdFXq0KC-0",
    title: "Dryer Vent Cleaning",
    duration: "0:45"
  },
  {
    id: "2O07GLR9tDc",
    title: "SaniJet in Action",
    duration: "0:58"
  },
  {
    id: "BBl_zc4eBcQ",
    title: "Forensic Restoration",
    duration: "1:00"
  },
  {
    id: "Ke8Ll11kSjI",
    title: "Flex Duct Damage",
    duration: "0:55"
  },
  {
    id: "FSXVdUhPjbg",
    title: "Solo Tech Operation",
    duration: "0:48"
  },
  {
    id: "h7C5NVLn0nw",
    title: "Blasting Ball Tech",
    duration: "0:57"
  }
];

export default function ResourcesPage() {
  return (
    <div className="flex-1 bg-zinc-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 text-sm font-medium">
            ← Back to Home
          </Link>
          <h1 className="text-6xl font-semibold tracking-tighter mb-4">Video Resources</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Educational videos from David Hart, RamAir International, and real-world Positive Air Duct Cleaning® demonstrations. 
            Learn the method, see the equipment in action, and understand why it's superior.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-white border border-zinc-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="aspect-video bg-zinc-950 relative">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold leading-tight text-lg pr-4 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>
                  <span className="text-[10px] font-mono bg-zinc-100 text-zinc-500 px-2 py-1 rounded whitespace-nowrap flex-shrink-0">
                    {video.duration}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 line-clamp-3">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Straight from the Hart Shorts</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Quick tips and demos from David Hart — bite-sized education on the Positive Air® method.
            </p>
          </div>
          <div className="-mx-6 px-6 flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory">
            {shorts.map((video, index) => (
              <Link
                key={index}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-44 flex-shrink-0 snap-center group cursor-pointer"
              >
                <div className="aspect-[9/16] relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="mt-3 px-1">
                  <h4 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h4>
                  <span className="text-xs text-zinc-500 mt-1 block font-mono bg-zinc-100 px-1.5 py-0.5 rounded">
                    {video.duration}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-16 bg-white border border-zinc-100 rounded-3xl p-12 text-center">
          <div className="text-blue-600 mb-4 text-sm font-medium tracking-widest">MORE FROM RAMAIR</div>
          <h3 className="text-3xl font-semibold tracking-tight mb-6">Official RamAir YouTube Channel</h3>
          <p className="max-w-md mx-auto text-zinc-600 mb-8">
            Subscribe for the latest training videos, equipment demos, customer stories, and updates from David Hart.
          </p>
          <a 
            href="https://www.youtube.com/@RamAirInternational" 
            target="_blank"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-2xl font-medium transition-colors"
          >
            Visit RamAir YouTube Channel →
          </a>
        </div>
      </div>
    </div>
  );
}
