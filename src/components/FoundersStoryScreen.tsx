import React from 'react';
import {
  PROFILE_AVATAR_URL,
  WAREHOUSE_RACKS_URL,
  WAREHOUSE_QC_URL,
} from '../data/mockData';

interface FoundersStoryScreenProps {
  onSelectTab: (tab: string) => void;
  onOpenRfq: () => void;
  onOpenPass: () => void;
}

export const FoundersStoryScreen: React.FC<FoundersStoryScreenProps> = ({
  onSelectTab,
  onOpenRfq,
  onOpenPass,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Top Tonal Banner / Header Interlock */}
      <section className="relative w-full bg-[#213145] text-[#eaf1ff] overflow-hidden py-12 sm:py-16">
        {/* Ambient Heritage & Industrial Motif */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-between">
          <svg className="w-96 h-96 -ml-20 fill-[#ffdbce]" viewBox="0 0 200 200">
            <path d="M100 0 L122 68 L195 70 L138 114 L159 184 L100 142 L41 184 L62 114 L5 70 L78 68 Z"></path>
          </svg>
          <svg className="w-[30rem] h-[30rem] -mr-32 fill-[#93ccff]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="none" r="30" stroke="currentColor" strokeDasharray="10 5" strokeWidth="10"></circle>
            <circle cx="50" cy="50" fill="currentColor" r="14"></circle>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-bold">
            <span className="bg-[#a33900] text-white px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
              <span className="material-symbols-outlined text-sm">history_edu</span>
              Since 1994 • Faridabad
            </span>
            <span className="bg-[#565e74] text-white px-3 py-1 rounded-full">
              31 Years of Industrial Trust
            </span>
            <span className="bg-[#d3e4fe] text-[#0b1c30] px-3 py-1 rounded-full">
              Sector 23 Industrial Cluster
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#ffb599]">
                Heritage of Rajasthan • Engine of NCR
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                The Journey from Bikaner to Haryana’s Manufacturing Heartland.
              </h1>
              <p className="text-base sm:text-lg text-[#cbdbf5] max-w-3xl leading-relaxed">
                In 1994, when Faridabad’s foundry smoke and lathe machine hum forged North India’s industrial backbone, one man arrived with ancestral Marwari business ethics: uncompromising material honesty, zero counterfeit tolerance, and a relentless promise to never let a machine tool go idle.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/10 px-4 py-2.5 rounded-xl backdrop-blur-xs border border-white/10">
                  <span className="material-symbols-outlined text-[#ffdbce] text-2xl">verified</span>
                  <div>
                    <p className="font-bold text-sm text-white">15,000+ Industrial SKUs</p>
                    <p className="text-xs text-[#cbdbf5]">High Tensile &amp; Mill Stock</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 px-4 py-2.5 rounded-xl backdrop-blur-xs border border-white/10">
                  <span className="material-symbols-outlined text-[#93ccff] text-2xl">local_shipping</span>
                  <div>
                    <p className="font-bold text-sm text-white">2-Hour Factory Dispatch</p>
                    <p className="text-xs text-[#cbdbf5]">Sector 23 to IMT Manesar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guiding Philosophy Badge */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-white text-[#0b1c30] p-6 rounded-2xl shadow-xl w-full max-w-sm relative border border-slate-100">
                <div className="absolute -top-3 -right-3 bg-[#a33900] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">store</span> Original Hub
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#ffdbce] flex items-center justify-center text-[#a33900]">
                    <span className="material-symbols-outlined text-2xl">handshake</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#565e74] uppercase tracking-wide">
                      Guiding Philosophy
                    </p>
                    <p className="font-bold text-base text-[#a33900]">‘Naitik Vyapar Hi Pukaar’</p>
                  </div>
                </div>
                <p className="text-xs text-[#5a4138] italic leading-relaxed">
                  "A single cracked unbranded bolt can shut down an automotive stamping press line for 18 hours. We never sell low-grade scrap to earn extra rupee. We sell peace of mind."
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[#565e74]">Faridabad Chamber of Commerce</span>
                  <span className="font-bold text-[#006194]">Life Member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Showcase Split Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Portrait Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white p-5 rounded-2xl shadow-md border border-slate-200">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#e5eeff]">
                <img
                  alt="Shri Rajesh Kumar Sharma, Founder and Managing Proprietor"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  src={PROFILE_AVATAR_URL}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#213145]/95 via-[#213145]/50 to-transparent p-5 text-white">
                  <span className="text-[10px] bg-[#a33900] text-white px-2 py-0.5 rounded uppercase font-bold tracking-wider inline-block">
                    Managing Proprietor
                  </span>
                  <h2 className="text-xl font-bold text-white mt-1">Shri Rajesh Kumar Sharma</h2>
                  <p className="text-xs text-[#cbdbf5]">Bikaner native • 31+ Yrs Faridabad Industrialist</p>
                </div>
              </div>

              {/* Accreditations Bar */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-[#eff4ff] p-2.5 rounded-lg border border-slate-200">
                  <p className="text-[#565e74]">Verified Member</p>
                  <p className="font-bold text-[#0b1c30] text-[11px] mt-0.5">
                    Faridabad Small Industries Assoc.
                  </p>
                </div>
                <div className="bg-[#eff4ff] p-2.5 rounded-lg border border-slate-200">
                  <p className="text-[#565e74]">IndiaMART Recognition</p>
                  <p className="font-bold text-[#006194] text-[11px] mt-0.5">
                    Star Verified Seller
                  </p>
                </div>
              </div>

              {/* Founder Signature & Contact */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between px-2">
                <div>
                  <p className="text-[11px] text-[#565e74]">Direct Line for Plant Head RFQs:</p>
                  <a href="tel:+919811200000" className="font-bold text-sm text-[#a33900] hover:underline">
                    +91 98112 4478X
                  </a>
                </div>
                <div className="text-right">
                  <span className="font-serif italic font-bold text-lg text-[#565e74] tracking-widest select-none">
                    R. K. Sharma
                  </span>
                  <span className="block text-[9px] text-[#5a4138] uppercase tracking-wider">
                    Proprietor Signature
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & Background */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#ffdbce] text-[#370e00] text-xs font-bold">
                <span className="material-symbols-outlined text-sm">auto_stories</span>
                <span>The Founder's Calling</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight">
                "We Didn’t Just Sell Fasteners; We Built Unbreakable Relations."
              </h2>
            </div>

            <p className="text-base text-[#5a4138] leading-relaxed">
              Born in the desert city of Bikaner, Rajasthan, Rajesh Kumar Sharma grew up understanding the sacred value of the merchant's word—where commitments were sealed by a simple handshake and honor superseded temporary profits. In early 1994, noticing Haryana’s meteoric rise as the epicenter of tractors, auto-components, and heavy engineering, he packed a single wooden crate of sample grade fasteners and relocated to Faridabad.
            </p>

            <p className="text-sm text-[#5a4138] leading-relaxed">
              Starting from a compact 200 sq.ft shutter in Sector 23 with zero institutional credit, he noticed a critical pain point: fabrication plants were losing millions due to sub-standard bolts breaking under high torque. Sharmaji took a radical vow: <strong>Only genuine test-certified materials, zero duplicate stamping, and transparent wholesale weight rates.</strong>
            </p>

            <div className="bg-[#eff4ff] p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-[#a33900] font-bold text-sm">
                <span className="material-symbols-outlined text-lg">format_quote</span>
                <span>Proprietor's Desk Memo, March 1994</span>
              </div>
              <p className="text-xs sm:text-sm text-[#0b1c30] italic leading-relaxed">
                "Faridabad runs on sweat and steel. When an operator switches on a press or a conveyor belt at 7 AM, he should never fear that our nut will strip or our belt will snap. If we guarantee 8.8 grade, it must hold 800 Megapascals. Nothing less."
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenRfq}
                className="px-5 py-3 rounded-xl bg-[#a33900] text-white font-bold text-sm hover:bg-[#cc4900] shadow-md transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">call</span>
                <span>Speak Directly with Shri Rajesh Sharma</span>
              </button>
              <button
                onClick={() => onSelectTab('bulk-industrial-orders')}
                className="px-5 py-3 rounded-xl bg-[#eff4ff] text-[#0b1c30] font-bold text-sm hover:bg-[#dce9ff] border border-slate-200 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base text-[#006194]">receipt_long</span>
                <span>View B2B Supply Terms</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 30-Year Milestones Timeline */}
      <section className="w-full bg-[#eff4ff] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#006194] font-bold">
                Chronicles of Industrial Growth
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight mt-1">
                Four Decades of Engineering Dedication
              </h2>
            </div>
            <p className="text-sm text-[#565e74] max-w-md">
              How a modest Sector 23 store transformed into Haryana's trusted master stockist for automotive and fabrication hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1994 */}
            <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-[#a33900]">1994</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#ffdbce] text-[#370e00] text-[11px] font-bold">
                    Inception
                  </span>
                </div>
                <div className="h-1 w-12 bg-[#a33900] rounded-full"></div>
                <h3 className="font-bold text-base text-[#0b1c30]">The 200 Sq.Ft Shutter</h3>
                <p className="text-xs text-[#5a4138] leading-relaxed">
                  Opened in Sector 23 Industrial Pocket. Rajeshji personally cycled to ball-bearing factories and Ballabgarh foundries with high-tensile bolt samples and torque-grade charts.
                </p>
              </div>
              <div className="mt-4 pt-2 bg-[#eff4ff] p-2 rounded-lg text-[11px] text-[#565e74]">
                <strong>Key Milestone:</strong> First bulk contract with Escorts ancillary units.
              </div>
            </div>

            {/* 2008 */}
            <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-[#006194]">2008</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#cce5ff] text-[#001d31] text-[11px] font-bold">
                    Mill Store Shift
                  </span>
                </div>
                <div className="h-1 w-12 bg-[#006194] rounded-full"></div>
                <h3 className="font-bold text-base text-[#0b1c30]">Heavy Mill Consumables</h3>
                <p className="text-xs text-[#5a4138] leading-relaxed">
                  Expanded beyond fasteners to V-belts, machinery pulleys, pneumatic fittings, cutting tools, and industrial lubricants. Acquired dedicated 3,000 sq.ft stocking yard.
                </p>
              </div>
              <div className="mt-4 pt-2 bg-[#eff4ff] p-2 rounded-lg text-[11px] text-[#565e74]">
                <strong>Key Milestone:</strong> Authorized distributorship of Fenner belts &amp; TVS fasteners.
              </div>
            </div>

            {/* 2016 */}
            <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-[#565e74]">2016</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#dae2fd] text-[#131b2e] text-[11px] font-bold">
                    Digital B2B
                  </span>
                </div>
                <div className="h-1 w-12 bg-[#565e74] rounded-full"></div>
                <h3 className="font-bold text-base text-[#0b1c30]">IndiaMART Star Verified</h3>
                <p className="text-xs text-[#5a4138] leading-relaxed">
                  Early adoption of digital procurement. Rajeshji brought Bikaner Hardware online, servicing OEM plants across Alwar, Bhiwadi, Western UP, and Kundli.
                </p>
              </div>
              <div className="mt-4 pt-2 bg-[#eff4ff] p-2 rounded-lg text-[11px] text-[#565e74]">
                <strong>Key Milestone:</strong> Awarded TrustSEAL for 99.4% genuine order fulfillments.
              </div>
            </div>

            {/* 2025 */}
            <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-[#a33900]">2025</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#ffdbce] text-[#370e00] text-[11px] font-bold">
                    Present Day
                  </span>
                </div>
                <div className="h-1 w-12 bg-[#a33900] rounded-full"></div>
                <h3 className="font-bold text-base text-[#0b1c30]">15,000+ SKUs Fleet</h3>
                <p className="text-xs text-[#5a4138] leading-relaxed">
                  Now operating fully computerized inventory dispatch in Sector 23 with same-day emergency supply vans serving Sector 24, 25, 58, 59, and IMT Manesar.
                </p>
              </div>
              <div className="mt-4 pt-2 bg-[#eff4ff] p-2 rounded-lg text-[11px] text-[#565e74]">
                <strong>Key Milestone:</strong> Annual procurement partnership with 450+ factories.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
          <span className="text-xs font-bold text-[#a33900] uppercase tracking-widest">
            Our Founding Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight">
            The 4 Pillars of Shri Rajeshji’s Business
          </h2>
          <p className="text-sm text-[#565e74]">
            Why plant managers and maintenance engineers refuse to buy from anywhere else in Faridabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#ffdbce] flex items-center justify-center text-[#a33900]">
              <span className="material-symbols-outlined text-2xl">scale</span>
            </div>
            <h3 className="font-bold text-base text-[#0b1c30]">Naitik Vyapar (Ethical Pricing)</h3>
            <p className="text-xs text-[#5a4138] leading-relaxed">
              Strict per-kilogram and wholesale per-piece rates tied to transparent raw material indices. No inflated markups during factory shortages.
            </p>
            <span className="text-[11px] text-[#a33900] font-bold block pt-1">
              Honest weighing scales verified monthly
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#cce5ff] flex items-center justify-center text-[#006194]">
              <span className="material-symbols-outlined text-2xl">gpp_good</span>
            </div>
            <h3 className="font-bold text-base text-[#0b1c30]">Zero Counterfeit Guarantee</h3>
            <p className="text-xs text-[#5a4138] leading-relaxed">
              Every High Tensile 8.8, 10.9, 12.9 bolt and SS 304/316 screw carries authentic mill heat test certificates. No forged grade stamps tolerated.
            </p>
            <span className="text-[11px] text-[#006194] font-bold block pt-1">
              100% Replacement Warranty
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#dce9ff] flex items-center justify-center text-[#0b1c30]">
              <span className="material-symbols-outlined text-2xl">bolt</span>
            </div>
            <h3 className="font-bold text-base text-[#0b1c30]">Rapid Factory Dispatch</h3>
            <p className="text-xs text-[#5a4138] leading-relaxed">
              When an assembly line halts, every minute costs money. Dedicated three-wheeler dispatch vehicles run continuously to Faridabad Sector 24, 25 &amp; 58.
            </p>
            <span className="text-[11px] text-[#565e74] font-bold block pt-1">
              Average turnaround &lt; 90 minutes
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#dae2fd] flex items-center justify-center text-[#565e74]">
              <span className="material-symbols-outlined text-2xl">signature</span>
            </div>
            <h3 className="font-bold text-base text-[#0b1c30]">Proprietor’s Personal Word</h3>
            <p className="text-xs text-[#5a4138] leading-relaxed">
              If a rare pitch or custom hardened pin isn't in NCR stock, Sharmaji utilizes his pan-India network to source it within 24 hours. A promise is a promise.
            </p>
            <span className="text-[11px] text-[#565e74] font-bold block pt-1">
              Direct founder escalation anytime
            </span>
          </div>
        </div>
      </section>

      {/* Store Yard & Stock Reality Photo Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 w-full">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs bg-[#dae2fd] text-[#131b2e] px-3 py-1 rounded-full uppercase font-bold inline-block">
                Sector 23 Central Yard &amp; Warehouse
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight">
                See Where 15,000+ Fastener Specifications Reside.
              </h2>
              <p className="text-sm text-[#5a4138] leading-relaxed">
                Unlike online brokers operating from rented desks, Bikaner Hardware owns and operates a physical brick-and-mortar facility right in Sector 23's beating industrial heart. Our heavy steel racking houses over 120 metric tons of fastener inventory.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#0b1c30]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#a33900] text-lg">check_circle</span>
                  <span>Computerized bin location system for lightning-fast yard picking</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#a33900] text-lg">check_circle</span>
                  <span>On-site pitch gauge &amp; digital micrometer verification counter</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#a33900] text-lg">check_circle</span>
                  <span>Spacious loading bay accommodating Tata 407 &amp; Bolero pickups</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => onSelectTab('contact-and-store')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#565e74] hover:bg-[#213145] text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">directions</span>
                  <span>Get Directions to Store Yard</span>
                </button>
                <button
                  onClick={onOpenPass}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff] text-[#a33900] font-bold text-xs border border-slate-200 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">badge</span>
                  <span>Get Yard Visitor Pass</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-[#eff4ff] relative group border border-slate-200">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Sector 23 Heavy Hardware Warehouse Rack Bay A"
                  src={WAREHOUSE_RACKS_URL}
                />
                <div className="absolute bottom-2 left-2 bg-[#213145]/90 text-white px-2.5 py-1 rounded text-xs font-semibold backdrop-blur-xs">
                  Rack Bay A: Grade 8.8 Hex Bolts
                </div>
              </div>
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-[#eff4ff] relative group border border-slate-200">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Quality Assurance Counter with Vernier Caliper and Thread Gauge"
                  src={WAREHOUSE_QC_URL}
                />
                <div className="absolute bottom-2 left-2 bg-[#213145]/90 text-white px-2.5 py-1 rounded text-xs font-semibold backdrop-blur-xs">
                  Quality Assurance Counter
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Founder Access Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 w-full">
        <div className="bg-gradient-to-r from-[#a33900] to-[#cc4900] text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-15 pointer-events-none">
            <svg className="w-80 h-80 fill-white" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45"></circle>
            </svg>
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="bg-white/20 backdrop-blur-xs px-3 py-1 rounded text-xs text-white uppercase font-bold tracking-wider inline-block">
                Direct Founder Access
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Need Custom Fasteners or Heavy Industrial Machinery Spares?
              </h2>
              <p className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed">
                Have a specialized engineering drawing, DIN specification, or bulk recurring procurement tender? Shri Rajesh Kumar Sharma reviews high-volume industrial inquiries personally within 2 hours.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenRfq}
                className="w-full py-3.5 px-6 rounded-xl bg-white text-[#a33900] hover:bg-slate-100 transition-colors font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">request_quote</span>
                <span>Submit Engineering RFQ</span>
              </button>
              <a
                className="w-full text-center py-3.5 px-6 rounded-xl bg-[#213145] text-white hover:bg-[#0b1c30] transition-colors font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
                href="tel:+919811200000"
              >
                <span className="material-symbols-outlined text-base">phone_in_talk</span>
                <span>Call Sector 23 Yard Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
