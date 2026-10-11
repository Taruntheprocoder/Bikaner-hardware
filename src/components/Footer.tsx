import React from 'react';
import { LOGO_URL } from '../data/mockData';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenTrustSeal: () => void;
  onOpenRfq: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenTrustSeal,
  onOpenRfq,
}) => {
  return (
    <footer className="w-full bg-[#eff4ff] text-[#0b1c30] border-t border-[#e2bfb2]/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: Brand & Credibility */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img
              alt="Bikaner Hardware and Mill Store Logo"
              className="h-7 w-auto object-contain"
              src={LOGO_URL}
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <span className="font-bold text-lg text-[#a33900] tracking-tight">
              BIKANER HARDWARE
            </span>
          </div>
          <p className="text-sm text-[#5a4138] leading-relaxed">
            Leading industrial hardware, fasteners, power tools &amp; mill store consumables supplier in Faridabad &amp; Delhi-NCR industrial belt since 1994.
          </p>
          <div className="pt-2 space-y-1.5 text-xs text-[#565e74]">
            <p>
              <span className="font-bold text-[#0b1c30]">GSTIN:</span>{' '}
              <span className="font-mono font-semibold">06AABCB1234F1Z8</span>
            </p>
            <p>
              <span className="font-bold text-[#0b1c30]">IndiaMART Profile:</span> Verified Star Supplier
            </p>
            <button
              onClick={onOpenTrustSeal}
              className="text-[#006194] font-bold flex items-center gap-1 hover:underline cursor-pointer pt-1"
            >
              <span className="material-symbols-outlined text-sm">check_circle</span>
              TrustSEAL Verified Partner
            </button>
          </div>
        </div>

        {/* Col 2: Industrial Categories */}
        <div className="space-y-3">
          <span className="font-bold text-[#0b1c30] text-sm block tracking-wide uppercase">
            Industrial Categories
          </span>
          <ul className="space-y-2 text-sm text-[#5a4138]">
            <li>
              <button
                onClick={() => onSelectTab('products-and-prices')}
                className="hover:text-[#a33900] transition-colors cursor-pointer text-left"
              >
                High Tensile Fasteners (8.8, 10.9, 12.9)
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('products-and-prices')}
                className="hover:text-[#a33900] transition-colors cursor-pointer text-left"
              >
                Stainless Steel Fasteners (SS 304, SS 316)
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('products-and-prices')}
                className="hover:text-[#a33900] transition-colors cursor-pointer text-left"
              >
                Industrial Mill Store Machinery &amp; Belts
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('products-and-prices')}
                className="hover:text-[#a33900] transition-colors cursor-pointer text-left"
              >
                Precision Cutting Tools &amp; Carbide Inserts
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('products-and-prices')}
                className="hover:text-[#a33900] transition-colors cursor-pointer text-left"
              >
                Heavy Duty Power Tools &amp; Abrasives
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('products-and-prices')}
                className="hover:text-[#a33900] transition-colors cursor-pointer text-left"
              >
                Pneumatic &amp; Hydraulic Hardware Fittings
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Yard Location */}
        <div className="space-y-3">
          <span className="font-bold text-[#0b1c30] text-sm block tracking-wide uppercase">
            Store &amp; Yard Location
          </span>
          <address className="not-italic text-sm text-[#5a4138] space-y-2.5">
            <p className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#a33900] text-lg mt-0.5 shrink-0">
                location_on
              </span>
              <span>
                Plot No. 42-B, Main Market Road,<br />
                Sector 23 Industrial Area,<br />
                Faridabad, Haryana - 121005
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#a33900] text-lg shrink-0">
                phone
              </span>
              <a href="tel:+919811200000" className="hover:text-[#a33900]">
                +91 98112 XXXXX / 0129-223XXXX
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#a33900] text-lg shrink-0">
                mail
              </span>
              <a href="mailto:sales@bikanerhardwarefbd.com" className="hover:text-[#a33900]">
                sales@bikanerhardwarefbd.com
              </a>
            </p>
          </address>
        </div>

        {/* Col 4: Business Hours & Dispatch */}
        <div className="space-y-3">
          <span className="font-bold text-[#0b1c30] text-sm block tracking-wide uppercase">
            Business Hours &amp; Delivery
          </span>
          <div className="text-sm text-[#5a4138] space-y-1.5">
            <p className="flex justify-between">
              <span>Monday - Saturday:</span>
              <span className="font-bold text-[#0b1c30]">9:00 AM – 8:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Sunday:</span>
              <span className="text-[#ba1a1a] font-semibold">Closed (Emergency Dispatch Open)</span>
            </p>
            <div className="mt-3 p-3 bg-[#e5eeff] rounded-xl border border-slate-200">
              <p className="text-xs text-[#a33900] font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">local_shipping</span>
                NCR Fast Delivery
              </p>
              <p className="text-[11px] text-[#565e74] mt-1 leading-normal">
                Same-day yard dispatch for Faridabad, Ballabhgarh, Palwal, Gurugram, and Okhla Industrial Areas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Strip */}
      <div className="bg-[#e5eeff] py-4 px-4 sm:px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5a4138]">
          <p>© 2025 Bikaner Hardware and Mill Store. All Rights Reserved. Sector 23, Faridabad.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onSelectTab('contact-and-store')}
              className="hover:text-[#0b1c30] transition-colors cursor-pointer"
            >
              GST Verification
            </button>
            <button
              onClick={() => onSelectTab('bulk-industrial-orders')}
              className="hover:text-[#0b1c30] transition-colors cursor-pointer"
            >
              Trade Terms
            </button>
            <button
              onClick={() => onOpenRfq()}
              className="hover:text-[#0b1c30] transition-colors cursor-pointer font-semibold text-[#a33900]"
            >
              Procurement Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
