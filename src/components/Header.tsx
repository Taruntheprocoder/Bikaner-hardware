import React, { useState } from 'react';
import { LOGO_URL, PROFILE_AVATAR_URL } from '../data/mockData';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenRfq: (initialItem?: any) => void;
  onOpenPdf: () => void;
  onOpenTrustSeal: () => void;
  rfqCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenSearch,
  onOpenRfq,
  onOpenPdf,
  onOpenTrustSeal,
  rfqCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products-and-prices', label: 'Products & Prices' },
    { id: 'founders-story', label: "Founder's Story" },
    { id: 'bulk-industrial-orders', label: 'Bulk Industrial Orders' },
    { id: 'contact-and-store', label: 'Contact & Store' },
    { id: 'request-for-quote', label: 'Get Best Price', isAction: true },
  ];

  const handleNavClick = (id: string, isAction?: boolean) => {
    if (isAction) {
      onOpenRfq();
    } else {
      onSelectTab(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-[#e2bfb2]/30">
      {/* Top Industrial Trust & Emergency Bar */}
      <div className="bg-[#213145] text-[#eaf1ff] py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold">
          <div className="flex items-center flex-wrap gap-x-3 gap-y-1">
            <span className="flex items-center gap-1 text-[#ffdbce]">
              <span className="material-symbols-outlined text-[13px] leading-none text-[#ffdbce]">verified</span>
              GST Registered (06AABCB1234F1Z8)
            </span>
            <span className="opacity-40 hidden sm:inline">•</span>
            <span className="hidden sm:inline">Sector 23 Faridabad Industrial Hub</span>
            <span className="opacity-40">•</span>
            <button
              onClick={onOpenTrustSeal}
              className="flex items-center gap-1 text-[#93ccff] hover:underline cursor-pointer"
            >
              <span className="material-symbols-outlined text-[13px] leading-none">shield_person</span>
              IndiaMART Verified Trust Supplier
            </button>
            <span className="opacity-40 hidden md:inline">•</span>
            <span className="hidden md:inline">Same-Day Delivery in NCR (&lt; 4 Hours)</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+919811200000"
              className="flex items-center gap-1 text-[#ffb599] hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[13px] leading-none">call</span>
              +91 98112 XXXXX
            </a>
            <span className="opacity-40 hidden sm:inline">•</span>
            <a
              href="https://wa.me/919811200000?text=Hello%20Bikaner%20Hardware%20Faridabad%2C%20I%20need%20a%20price%20quotation"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
            >
              <span className="material-symbols-outlined text-[13px] leading-none">chat</span>
              WhatsApp Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand & Actions Bar */}
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <button
          onClick={() => onSelectTab('home')}
          className="flex items-center gap-3 shrink-0 text-left cursor-pointer group"
        >
          <img
            alt="Bikaner Hardware and Mill Store Logo"
            className="h-9 w-auto object-contain group-hover:scale-105 transition-transform"
            src={LOGO_URL}
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl text-[#a33900] tracking-tight leading-none font-sans">
              BIKANER HARDWARE
            </span>
            <span className="text-[11px] font-semibold text-[#565e74] tracking-widest leading-none mt-1 uppercase">
              &amp; MILL STORE • SEC 23 FBD
            </span>
          </div>
        </button>

        {/* Global Search Bar (Ctrl+K) */}
        <div
          onClick={onOpenSearch}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onOpenSearch()}
          className="hidden lg:flex flex-1 max-w-md items-center bg-[#eff4ff] hover:bg-[#e5eeff] px-3 py-2 rounded-lg border border-[#e2bfb2]/50 cursor-pointer transition-colors"
        >
          <span className="material-symbols-outlined text-[#565e74] mr-2 text-[18px]">search</span>
          <span className="w-full text-left text-sm text-[#565e74]/80 truncate">
            Search fasteners, cutting tools, V-belts, SKF bearings...
          </span>
          <span className="text-[11px] font-semibold bg-white text-[#565e74] px-2 py-0.5 rounded shadow-xs border border-slate-200 shrink-0">
            Ctrl+K
          </span>
        </div>

        {/* Header Action Badges & CTAs */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenTrustSeal}
            className="hidden md:flex items-center gap-1 bg-[#e5eeff] hover:bg-[#dce9ff] px-2.5 py-1.5 rounded-lg border border-[#e2bfb2]/30 text-[#0b1c30] text-[12px] font-semibold transition-colors cursor-pointer"
            title="IndiaMART Verified TrustSEAL Certificate"
          >
            <span className="material-symbols-outlined text-[#006194] text-sm">verified_user</span>
            <span>TrustSEAL</span>
          </button>

          <button
            onClick={onOpenPdf}
            className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#dce9ff] text-[#0b1c30] hover:bg-[#dae2fd] transition-colors text-[12px] font-bold cursor-pointer"
          >
            <span className="material-symbols-outlined text-base leading-none text-[#006194]">download</span>
            PDF Catalogue
          </button>

          <button
            onClick={() => onOpenRfq()}
            className="relative flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-[#a33900] hover:bg-[#cc4900] text-white transition-all font-semibold text-sm shadow-sm cursor-pointer hover:shadow-md"
          >
            <span className="material-symbols-outlined text-base leading-none">request_quote</span>
            <span>Quick RFQ</span>
            {rfqCount > 0 && (
              <span className="bg-white text-[#a33900] text-[11px] font-extrabold px-1.5 py-0.2 rounded-full shadow-xs">
                {rfqCount}
              </span>
            )}
          </button>

          {/* Quick search icon on mobile */}
          <button
            onClick={onOpenSearch}
            className="lg:hidden p-2 text-[#565e74] hover:text-[#a33900] rounded-lg hover:bg-slate-100"
            aria-label="Search"
          >
            <span className="material-symbols-outlined text-xl">search</span>
          </button>

          {/* Founder / Procurement Avatar */}
          <div
            onClick={() => onSelectTab('founders-story')}
            role="button"
            tabIndex={0}
            className="cursor-pointer group relative"
            title="Founder Shri Rajesh Kumar Sharma"
          >
            <img
              alt="Proprietor Profile"
              className="w-8 h-8 rounded-full object-cover shrink-0 border border-[#a33900]/30 group-hover:ring-2 group-hover:ring-[#a33900]"
              src={PROFILE_AVATAR_URL}
            />
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#565e74] hover:text-[#a33900] rounded-lg"
            aria-label="Open navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Primary Sub-Navigation Bar */}
      <div className="bg-[#eff4ff]/90 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="hidden md:flex items-center space-x-1 overflow-x-auto py-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              if (item.isAction) {
                return (
                  <button
                    key={item.id}
                    onClick={() => onOpenRfq()}
                    className="px-3.5 py-1.5 text-sm font-semibold whitespace-nowrap transition-colors rounded text-[#a33900] hover:bg-[#ffdbce]/40 flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">price_change</span>
                    {item.label}
                  </button>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 text-sm whitespace-nowrap transition-colors rounded font-semibold cursor-pointer ${
                    isActive
                      ? 'bg-[#cc4900] text-white shadow-xs'
                      : 'text-[#5a4138] hover:text-[#0b1c30] hover:bg-[#dce9ff]/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Expanded Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-3 border-t border-slate-200 space-y-1">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id, item.isAction)}
                    className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg flex items-center justify-between ${
                      isActive
                        ? 'bg-[#a33900] text-white'
                        : 'text-[#0b1c30] hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                  </button>
                );
              })}
              <div className="pt-2 flex gap-2">
                <button
                  onClick={onOpenPdf}
                  className="flex-1 py-2 text-center text-xs font-bold bg-[#dce9ff] text-[#006194] rounded-lg"
                >
                  PDF Catalogue
                </button>
                <button
                  onClick={onOpenTrustSeal}
                  className="flex-1 py-2 text-center text-xs font-bold bg-[#213145] text-white rounded-lg"
                >
                  IndiaMART Verified
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
