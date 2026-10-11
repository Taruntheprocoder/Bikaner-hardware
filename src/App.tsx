/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { FoundersStoryScreen } from './components/FoundersStoryScreen';
import { BulkIndustrialScreen } from './components/BulkIndustrialScreen';
import { ProductsPricesScreen } from './components/ProductsPricesScreen';
import { ContactStoreScreen } from './components/ContactStoreScreen';
import { SearchModal } from './components/SearchModal';
import { QuickRfqModal } from './components/QuickRfqModal';
import { PdfCatalogueModal } from './components/PdfCatalogueModal';
import { TrustSealModal } from './components/TrustSealModal';
import { YardPassModal } from './components/YardPassModal';
import { Product } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [rfqProduct, setRfqProduct] = useState<Product | null>(null);
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [isTrustSealOpen, setIsTrustSealOpen] = useState(false);
  const [isPassOpen, setIsPassOpen] = useState(false);
  const [rfqBasketCount, setRfqBasketCount] = useState(2);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  // Global Ctrl+K / Cmd+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRfq = (product?: Product) => {
    if (product) {
      setRfqProduct(product);
    }
    setIsRfqOpen(true);
  };

  const handleSelectProductFromSearch = (product: Product) => {
    setRfqProduct(product);
    setIsRfqOpen(true);
  };

  const handleSelectCategoryFromSearch = (catId: string) => {
    setSelectedCategory(catId);
    handleSelectTab('products-and-prices');
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-sans selection:bg-[#ffdbce] selection:text-[#370e00]">
      {/* Top Fixed Header with Brand, Search, and Tab Navigation */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenRfq={handleOpenRfq}
        onOpenPdf={() => setIsPdfOpen(true)}
        onOpenTrustSeal={() => setIsTrustSealOpen(true)}
        rfqCount={rfqBasketCount}
      />

      {/* Main Content Area (padding-top 136px / pt-36 to accommodate fixed header) */}
      <main className="flex-1 w-full pt-32 sm:pt-36">
        {currentTab === 'home' && (
          <HomeScreen
            onSelectTab={handleSelectTab}
            onOpenRfq={handleOpenRfq}
            onOpenPdf={() => setIsPdfOpen(true)}
            onOpenTrustSeal={() => setIsTrustSealOpen(true)}
          />
        )}

        {currentTab === 'founders-story' && (
          <FoundersStoryScreen
            onSelectTab={handleSelectTab}
            onOpenRfq={() => handleOpenRfq()}
            onOpenPass={() => setIsPassOpen(true)}
          />
        )}

        {currentTab === 'bulk-industrial-orders' && (
          <BulkIndustrialScreen
            onOpenPdf={() => setIsPdfOpen(true)}
            onOpenPass={() => setIsPassOpen(true)}
            onOpenTrustSeal={() => setIsTrustSealOpen(true)}
            onRfqGenerated={() => setRfqBasketCount((prev) => prev + 1)}
          />
        )}

        {currentTab === 'products-and-prices' && (
          <ProductsPricesScreen
            onOpenRfq={handleOpenRfq}
            onOpenPdf={() => setIsPdfOpen(true)}
            selectedCategory={selectedCategory}
          />
        )}

        {currentTab === 'contact-and-store' && (
          <ContactStoreScreen
            onOpenPass={() => setIsPassOpen(true)}
            onOpenRfq={() => handleOpenRfq()}
          />
        )}
      </main>

      {/* Sticky Bottom Industrial Action Bar (Mobile thumb-zone helper as featured in design) */}
      <div className="fixed bottom-3 left-4 right-4 z-40 lg:hidden">
        <div className="bg-[#213145]/95 backdrop-blur-md text-[#eaf1ff] p-2 rounded-2xl shadow-2xl flex items-center justify-between gap-2 border border-white/10">
          <a
            className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#ffdbce] flex items-center justify-center gap-1.5 text-xs font-bold transition-colors"
            href="tel:+919811200000"
          >
            <span className="material-symbols-outlined text-[#ffdbce] text-base">call</span>
            Call Store
          </a>
          <a
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#a33900] hover:bg-[#cc4900] text-white flex items-center justify-center gap-1.5 text-xs font-bold shadow-sm transition-colors"
            href="https://wa.me/919811200000?text=Hello%20Bikaner%20Hardware%2C%20please%20send%20wholesale%20quote"
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            WhatsApp RFQ
          </a>
          <button
            onClick={() => handleOpenRfq()}
            className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-white flex items-center justify-center"
            title="Open RFQ Form"
          >
            <span className="material-symbols-outlined text-base">request_quote</span>
          </button>
        </div>
      </div>

      {/* Modals & Dialogs */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleSelectProductFromSearch}
        onSelectCategory={handleSelectCategoryFromSearch}
      />

      <QuickRfqModal
        isOpen={isRfqOpen}
        onClose={() => {
          setIsRfqOpen(false);
          setRfqProduct(null);
        }}
        initialProduct={rfqProduct}
        onRfqSubmitted={() => setRfqBasketCount((prev) => prev + 1)}
      />

      <PdfCatalogueModal
        isOpen={isPdfOpen}
        onClose={() => setIsPdfOpen(false)}
        onOpenRfq={() => {
          setIsPdfOpen(false);
          setIsRfqOpen(true);
        }}
      />

      <TrustSealModal
        isOpen={isTrustSealOpen}
        onClose={() => setIsTrustSealOpen(false)}
        onOpenRfq={() => {
          setIsTrustSealOpen(false);
          setIsRfqOpen(true);
        }}
      />

      <YardPassModal
        isOpen={isPassOpen}
        onClose={() => setIsPassOpen(false)}
      />

      {/* Industrial Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenTrustSeal={() => setIsTrustSealOpen(true)}
        onOpenRfq={() => handleOpenRfq()}
      />
    </div>
  );
}
