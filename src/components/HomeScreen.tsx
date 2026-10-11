import React, { useState } from 'react';
import {
  CATEGORIES,
  PRODUCTS,
  FASTENER_MATRIX,
  TESTIMONIALS,
  WAREHOUSE_CAM_URL,
} from '../data/mockData';
import { Product } from '../types';

interface HomeScreenProps {
  onSelectTab: (tab: string) => void;
  onOpenRfq: (product?: Product) => void;
  onOpenPdf: () => void;
  onOpenTrustSeal: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectTab,
  onOpenRfq,
  onOpenPdf,
  onOpenTrustSeal,
}) => {
  // Fast RFQ engine state
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [itemsRequirement, setItemsRequirement] = useState('');
  const [destination, setDestination] = useState('Faridabad Sector 23 / 24 / 25 (Immediate Pickup)');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFastRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      onOpenRfq();
      setFormSubmitted(false);
    }, 1200);
  };

  const fastMovingProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* Top Industrial Marquee / NCR Dispatch Status Banner */}
      <div className="w-full bg-[#213145] text-[#eaf1ff] py-2 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] font-semibold">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-[#a33900] px-2 py-0.5 rounded text-white font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
              Live Yard
            </span>
            <span className="text-[#d3e4fe] font-medium">
              Sec 23 Main Yard: Dispatching now to Sector 24, Ballabhgarh &amp; Prithla industrial clusters.
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#d3e4fe]">
            <span className="flex items-center gap-1 text-[#93ccff]">
              <span className="material-symbols-outlined text-sm leading-none">local_shipping</span>
              Same-Day Delivery &lt; 4 Hours
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:flex items-center gap-1 text-[#ffdbce]">
              <span className="material-symbols-outlined text-sm leading-none">receipt_long</span>
              100% ITC Eligible GST Invoicing
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section: Modern Industrial Powerhouse */}
      <section className="relative w-full bg-gradient-to-br from-[#f8f9ff] via-[#eff4ff] to-[#dce9ff] py-10 sm:py-16 px-4 sm:px-6 overflow-hidden">
        {/* Ambient Structural Engineering Shapes */}
        <div className="absolute -right-24 -top-24 w-96 h-96 opacity-10 pointer-events-none text-[#0b1c30]">
          <svg fill="currentColor" viewBox="0 0 200 200">
            <polygon points="100,10 120,40 180,40 140,80 160,130 100,100 40,130 60,80 20,40 80,40" />
          </svg>
        </div>
        <div className="absolute left-1/3 -bottom-16 w-80 h-80 rounded-full bg-[#ffdbce]/30 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            {/* Verification Badges Row */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenTrustSeal}
                className="inline-flex items-center gap-2 bg-[#213145] hover:bg-[#0b1c30] text-[#eaf1ff] px-3 py-1.5 rounded-full shadow-xs transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#ffdbce] text-base leading-none">
                  verified
                </span>
                <span className="text-xs font-bold tracking-wide">IndiaMART TrustSEAL Verified</span>
                <span className="bg-[#a33900] px-1.5 py-0.5 rounded text-white text-[11px] font-bold">
                  ★ 4.8 / 5
                </span>
                <span className="text-[#cce5ff] text-[11px] font-normal hidden sm:inline">
                  (2,400+ B2B Inquiries)
                </span>
              </button>
              <button
                onClick={() => onSelectTab('founders-story')}
                className="inline-flex items-center gap-1 bg-[#e5eeff] hover:bg-[#dce9ff] text-[#006194] px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-colors"
              >
                <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                30+ Years Legacy (Est. 1994)
              </button>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1c30] tracking-tight leading-tight">
                Faridabad’s Premier Industrial Hardware &amp;{' '}
                <span className="text-[#a33900] underline decoration-[#cc4900] decoration-4 underline-offset-8">
                  Mill Store
                </span>{' '}
                Since 1994
              </h1>
              <p className="text-base sm:text-lg text-[#5a4138] max-w-2xl leading-relaxed">
                Authorized wholesale stockist of Heavy Duty Fasteners, Power Tools, Industrial V-Belts, Ball Bearings, Lathe Accessories, and Safety Equipment. Supplying 450+ factories across Sector 23, IMT Manesar, and Delhi NCR.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onSelectTab('products-and-prices')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#a33900] hover:bg-[#cc4900] text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">category</span>
                Browse 3,500+ Hardware Items
              </button>
              <a
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#213145] hover:bg-[#0b1c30] text-[#eaf1ff] font-bold text-sm shadow-md transition-all"
                href="https://wa.me/919811200000?text=Hello%20Bikaner%20Hardware%2C%20please%20send%20wholesale%20quote"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-[#ffdbce] text-lg">chat</span>
                Instant WhatsApp Quote
              </a>
              <button
                onClick={onOpenPdf}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0b1c30] font-bold text-sm shadow-xs border border-slate-200 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#006194] text-lg">picture_as_pdf</span>
                2025 Store Catalogue
              </button>
            </div>

            {/* Quick Live Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-4 max-w-lg">
              <div className="bg-white/80 p-3 rounded-xl shadow-xs border border-slate-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#a33900] leading-none">
                  3,500+
                </div>
                <div className="text-[11px] font-semibold text-[#565e74] mt-1">Ready Stock SKUs</div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl shadow-xs border border-slate-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] leading-none">
                  450+
                </div>
                <div className="text-[11px] font-semibold text-[#565e74] mt-1">NCR Plant Accounts</div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl shadow-xs border border-slate-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#006194] leading-none">
                  &lt; 15m
                </div>
                <div className="text-[11px] font-semibold text-[#565e74] mt-1">Avg. RFQ Turnaround</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Mosaic & Featured Inventory Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#a33900] animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#a33900]">
                    Warehouse Yard Camera Feed
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold bg-[#eff4ff] text-[#565e74] px-2.5 py-0.5 rounded">
                  SEC-23 BAY 04
                </span>
              </div>

              {/* Hero Yard Visual Image */}
              <div className="relative h-60 sm:h-64 rounded-xl overflow-hidden shadow-inner bg-[#e5eeff] group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Sector 23 Faridabad Warehouse Yard"
                  src={WAREHOUSE_CAM_URL}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#213145]/90 via-[#213145]/30 to-transparent flex items-end p-4">
                  <div className="text-white space-y-0.5">
                    <span className="font-bold text-base block text-white">
                      Over 40 Metric Tonnes Fasteners In Stock
                    </span>
                    <p className="text-xs text-[#ffdbce]">
                      TVS, Unbrako, LPS &amp; APL Grade 8.8 / 10.9 / 12.9
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stock Availability Bar */}
              <div className="mt-4 p-3 bg-[#eff4ff] rounded-xl space-y-2 border border-slate-200">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#0b1c30] font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-[#006194]">inventory_2</span>
                    High-Tensile Hex Bolts (M6 - M36)
                  </span>
                  <span className="text-[#a33900] font-extrabold">98.4% Available</span>
                </div>
                <div className="w-full bg-[#e5eeff] rounded-full h-2 overflow-hidden">
                  <div className="bg-[#a33900] h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
                <div className="flex justify-between items-center text-[11px] text-[#565e74]">
                  <span>Lot Dispatched: 14 Today</span>
                  <span className="text-[#0b1c30] font-semibold">Ready for Truck Pickup</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Highlights Ribbon */}
        <div className="max-w-7xl mx-auto mt-8">
          <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#ffdbce] flex items-center justify-center text-[#370e00] shrink-0">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
              <div>
                <div className="font-bold text-sm text-[#0b1c30]">100% Genuine Brands</div>
                <div className="text-xs text-[#5a4138]">Bosch, TVS, Fenner, SKF &amp; Taparia</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#dae2fd] flex items-center justify-center text-[#131b2e] shrink-0">
                <span className="material-symbols-outlined text-2xl">receipt_long</span>
              </div>
              <div>
                <div className="font-bold text-sm text-[#0b1c30]">Full GST ITC Invoices</div>
                <div className="text-xs text-[#5a4138]">Instant HSN Codes &amp; E-Way Bills</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#cce5ff] flex items-center justify-center text-[#001d31] shrink-0">
                <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
              </div>
              <div>
                <div className="font-bold text-sm text-[#0b1c30]">Credit Terms for MSMEs</div>
                <div className="text-xs text-[#5a4138]">30 to 45 Days for Contracted Plants</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#dce9ff] flex items-center justify-center text-[#a33900] shrink-0">
                <span className="material-symbols-outlined text-2xl">storefront</span>
              </div>
              <div>
                <div className="font-bold text-sm text-[#0b1c30]">Over-The-Counter Pickup</div>
                <div className="text-xs text-[#5a4138]">Direct Truck Loading at Sec 23 Market</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Section 1: Vibrant Category Quick-Grid */}
      <section className="w-full py-12 px-4 sm:px-6 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#a33900] font-bold">
                Industrial Consumables &amp; Spares
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight mt-1">
                Core Hardware Categories
              </h2>
              <p className="text-sm text-[#5a4138]">
                Engineered for Faridabad stamping units, foundries, auto-ancillary machining, and fabrication lines.
              </p>
            </div>
            <button
              onClick={() => onSelectTab('products-and-prices')}
              className="inline-flex items-center gap-1.5 font-bold text-sm text-[#a33900] hover:text-[#cc4900] cursor-pointer"
            >
              View All Product Families
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="group relative bg-white rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden border border-slate-100"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        cat.colorTheme === 'primary'
                          ? 'bg-[#ffdbce] text-[#a33900]'
                          : cat.colorTheme === 'secondary'
                          ? 'bg-[#dae2fd] text-[#565e74]'
                          : 'bg-[#cce5ff] text-[#006194]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                    </span>
                    <span className="text-[11px] font-bold bg-[#eff4ff] text-[#565e74] px-2.5 py-1 rounded-full font-mono">
                      {cat.variantsCount}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-[#0b1c30] group-hover:text-[#a33900] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#5a4138] mt-2 leading-relaxed">{cat.description}</p>
                </div>
                <div className="mt-6 pt-4 bg-[#eff4ff] -mx-5 -mb-5 p-4 rounded-b-2xl flex items-center justify-between border-t border-slate-100">
                  <span className="text-xs font-semibold text-[#0b1c30]">{cat.brands}</span>
                  <button
                    onClick={() => onSelectTab('products-and-prices')}
                    className="text-xs text-[#a33900] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    Browse Category <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Section 2: IndiaMART Integration & Verified Trust Matrix */}
      <section className="w-full py-12 px-4 sm:px-6 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="bg-[#213145] text-[#eaf1ff] p-6 sm:p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#a33900] text-white text-[11px] font-bold uppercase tracking-widest">
                    IndiaMART Star Supplier
                  </span>
                  <span className="text-[#93ccff] text-xs font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    TrustSEAL Certified
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Verified Industrial Credibility Built on 30 Years of Unbroken Plant Deliveries
                </h2>
                <p className="text-sm text-[#cbdbf5] leading-relaxed">
                  Every purchase through Bikaner Hardware &amp; Mill Store is backed by direct mill test certificates (MTC), verifiable GST input tax credit, strict weight compliance checks, and a designated factory account manager.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-xs">
                    <div className="font-extrabold text-2xl text-[#ffdbce] leading-none">98.2%</div>
                    <div className="text-[11px] text-[#cbdbf5] mt-1">Response Rate (&lt;15m)</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-xs">
                    <div className="font-extrabold text-2xl text-[#93ccff] leading-none">2,400+</div>
                    <div className="text-[11px] text-[#cbdbf5] mt-1">IndiaMART Leads Done</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-xs">
                    <div className="font-extrabold text-2xl text-white leading-none">100%</div>
                    <div className="text-[11px] text-[#cbdbf5] mt-1">GST Compliant</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-xs">
                    <div className="font-extrabold text-2xl text-[#ffb599] leading-none">4.8★</div>
                    <div className="text-[11px] text-[#cbdbf5] mt-1">B2B Buyer Score</div>
                  </div>
                </div>
              </div>

              {/* Direct IndiaMART Verified Badge Widget Box */}
              <div className="lg:col-span-5 bg-white text-[#0b1c30] p-5 rounded-2xl shadow-lg space-y-3">
                <div className="flex items-center justify-between pb-3 bg-[#eff4ff] -mx-5 -mt-5 p-4 rounded-t-2xl border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a33900] text-2xl">
                      domain_verification
                    </span>
                    <div>
                      <div className="font-bold text-sm text-[#0b1c30]">IndiaMART Seller Profile</div>
                      <div className="text-[11px] text-[#565e74]">ID: 4892189 / Faridabad Hub</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[#006194] text-[11px] font-bold bg-white px-2 py-0.5 rounded shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006194]"></span> Active
                  </span>
                </div>
                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex justify-between py-1 bg-[#f8f9ff] px-2.5 rounded">
                    <span className="text-[#565e74]">Legal Trade Entity</span>
                    <span className="font-bold text-[#0b1c30]">Bikaner Hardware &amp; Mill Store</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#f8f9ff] px-2.5 rounded">
                    <span className="text-[#565e74]">Sector 23 Shop Area</span>
                    <span className="font-bold text-[#0b1c30]">2,800 Sq. Ft. + Stock Yard</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#f8f9ff] px-2.5 rounded">
                    <span className="text-[#565e74]">GST Registration</span>
                    <span className="font-mono font-bold text-[#0b1c30]">06AABCB1234F1Z8</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#f8f9ff] px-2.5 rounded">
                    <span className="text-[#565e74]">Dispatch Coverage</span>
                    <span className="font-bold text-[#a33900]">Faridabad, Manesar, Noida, Okhla</span>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenRfq()}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#a33900] hover:bg-[#cc4900] text-white rounded-xl font-bold text-sm shadow-sm transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">send</span>
                    Submit RFQ via IndiaMART Direct Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Section 3: Featured Fast-Selling Items with Exact INR Pricing */}
      <section className="w-full py-12 px-4 sm:px-6 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#a33900] font-bold">
                Wholesale Stock Rate Sheet
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight mt-1">
                Fast-Moving Factory Essentials
              </h2>
              <p className="text-sm text-[#5a4138]">
                Live benchmark contract pricing for high-volume orders. Subject to volume tier discounts.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-[#565e74] bg-[#eff4ff] px-3 py-1.5 rounded-full border border-slate-200">
                Updated Daily at 08:30 AM IST
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fastMovingProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden border border-slate-200"
              >
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="bg-[#ffdbce] text-[#a33900] text-[11px] px-2 py-0.5 rounded font-bold">
                      {product.gradeBadge}
                    </span>
                    <span className="text-[#565e74] text-[11px] font-mono">{product.sku}</span>
                  </div>
                  <div className="h-40 rounded-xl bg-[#eff4ff] overflow-hidden group">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={product.imageUrl}
                      alt={product.imageAlt}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0b1c30] line-clamp-1">{product.name}</h3>
                    <p className="text-xs text-[#565e74] mt-0.5">{product.description}</p>
                  </div>
                  <div className="bg-[#eff4ff] p-2.5 rounded-lg flex items-baseline justify-between border border-slate-100">
                    <div>
                      <span className="text-xl font-extrabold text-[#a33900] leading-none">
                        ₹{product.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-[#565e74]"> /{product.unit}</span>
                    </div>
                    <span className="text-xs text-[#0b1c30] font-semibold">MOQ: {product.moq} {product.unit}s</span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 pt-0">
                  <button
                    onClick={() => onOpenRfq(product)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#eff4ff] hover:bg-[#a33900] hover:text-white text-[#0b1c30] font-bold text-xs transition-colors cursor-pointer border border-slate-200"
                  >
                    <span className="material-symbols-outlined text-base">request_quote</span>
                    Get Best Price
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Spec & Fastener Comparison Sheet */}
      <section className="w-full py-12 px-4 sm:px-6 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#a33900] font-bold">
              Faridabad Fabrication Benchmark
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight mt-1">
              High-Tensile Fastener Metric Matrix
            </h2>
            <p className="text-sm text-[#5a4138]">
              Immediate inventory availability by tensile grade and mechanical standard at our Sector 23 depot.
            </p>
          </div>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-xs border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#e5eeff] text-[#0b1c30] font-bold text-xs uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4">Fastener Grade</th>
                  <th className="py-3 px-4">Tensile Strength (MPa)</th>
                  <th className="py-3 px-4">Yield Strength (MPa)</th>
                  <th className="py-3 px-4">Primary Factory Application</th>
                  <th className="py-3 px-4">Sec 23 Stock Status</th>
                  <th className="py-3 px-4">Instant Quote</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {FASTENER_MATRIX.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-[#eff4ff] transition-colors ${idx % 2 === 1 ? 'bg-slate-50/50' : ''}`}
                  >
                    <td className={`py-3.5 px-4 font-bold ${row.highlightColor || 'text-slate-900'}`}>
                      {row.grade}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold">{row.tensileStrength}</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">{row.yieldStrength}</td>
                    <td className="py-3.5 px-4 text-xs text-[#5a4138]">{row.application}</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 text-[#006194] text-xs font-bold">
                        <span className="w-2 h-2 rounded-full bg-[#006194]"></span> {row.sec23Stock}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <button
                        onClick={() => onOpenRfq()}
                        className="text-[#a33900] font-bold hover:underline text-xs flex items-center gap-1 cursor-pointer"
                      >
                        Get Per-Kg Rate ({row.ratePerKg})
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Core Section 4: Industrial Client Testimonials from Plant Supervisors */}
      <section className="w-full py-12 px-4 sm:px-6 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#a33900] font-bold">
              Trusted by Plant Engineers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight">
              Supplying the Backbone of Faridabad Manufacturing
            </h2>
            <p className="text-sm text-[#5a4138]">
              Hear from plant heads and procurement superintendents who rely on our prompt yard dispatch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-[#a33900]">
                    {[...Array(test.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm leading-none text-amber-500">
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-[#5a4138] italic leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>
                <div className="pt-3 bg-[#eff4ff] -mx-5 -mb-5 p-4 rounded-b-2xl border-t border-slate-100">
                  <div className="font-bold text-sm text-[#0b1c30]">{test.author}</div>
                  <div className="text-xs text-[#565e74]">
                    {test.role} • {test.company} ({test.location})
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quick Inquiry / RFQ Fast Strip */}
      <section className="w-full py-12 px-4 sm:px-6 bg-gradient-to-r from-[#e5eeff] to-[#dce9ff]">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs text-[#a33900] font-bold uppercase tracking-wider">
                Fast RFQ Engine
              </span>
              <h3 className="text-2xl font-bold text-[#0b1c30]">Need a Fast Wholesale Estimate?</h3>
              <p className="text-sm text-[#5a4138] leading-relaxed">
                Enter your required item specification or upload your factory purchase list. Our Sector 23 pricing desk replies within 15 minutes.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-sm font-semibold">
                <a href="tel:+919811200000" className="flex items-center gap-1 text-[#a33900] hover:underline">
                  <span className="material-symbols-outlined text-base">call</span>
                  +91 98112 XXXXX
                </a>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 text-[#565e74]">
                  <span className="material-symbols-outlined text-base">location_on</span>
                  Sector 23 Market
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleFastRfqSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#565e74] font-semibold mb-1">
                    Company / Plant Name *
                  </label>
                  <input
                    className="w-full bg-[#eff4ff] p-2.5 rounded-lg text-sm text-[#0b1c30] outline-none focus:bg-white focus:ring-2 focus:ring-[#a33900] border border-slate-200"
                    placeholder="e.g. Apex Precision Tools Ltd."
                    required
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#565e74] font-semibold mb-1">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    className="w-full bg-[#eff4ff] p-2.5 rounded-lg text-sm text-[#0b1c30] outline-none focus:bg-white focus:ring-2 focus:ring-[#a33900] border border-slate-200"
                    placeholder="+91 98XXX XXXXX"
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#565e74] font-semibold mb-1">
                    Required Items / Fastener Sizes *
                  </label>
                  <input
                    className="w-full bg-[#eff4ff] p-2.5 rounded-lg text-sm text-[#0b1c30] outline-none focus:bg-white focus:ring-2 focus:ring-[#a33900] border border-slate-200"
                    placeholder="e.g. M16x80 Grade 10.9 Bolts (500 pcs) + SKF 6306"
                    required
                    type="text"
                    value={itemsRequirement}
                    onChange={(e) => setItemsRequirement(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#565e74] font-semibold mb-1">
                    Delivery Destination
                  </label>
                  <select
                    className="w-full bg-[#eff4ff] p-2.5 rounded-lg text-sm text-[#0b1c30] outline-none focus:bg-white focus:ring-2 focus:ring-[#a33900] border border-slate-200"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  >
                    <option>Faridabad Sector 23 / 24 / 25 (Immediate Pickup)</option>
                    <option>Ballabhgarh Industrial Area</option>
                    <option>IMT Manesar / Gurugram Industrial Zone</option>
                    <option>Okhla Industrial Area (Delhi NCR)</option>
                    <option>Prithla / Palwal Corridor</option>
                    <option>All-India Transport Logistics</option>
                  </select>
                </div>
                <div className="sm:col-span-2 pt-2">
                  <button
                    className="w-full py-3.5 bg-[#a33900] hover:bg-[#cc4900] text-white font-bold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-xl">bolt</span>
                    {formSubmitted
                      ? 'Generating Official Estimate...'
                      : 'Request Official GST Quote (Turnaround < 15 Mins)'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
