import React from 'react';

interface PdfCatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRfq: () => void;
}

export const PdfCatalogueModal: React.FC<PdfCatalogueModalProps> = ({
  isOpen,
  onClose,
  onOpenRfq,
}) => {
  if (!isOpen) return null;

  const catalogSections = [
    {
      title: 'High-Tensile Metric Fasteners (DIN 931 / 933 / 912)',
      pages: 'Pages 01 - 24',
      size: '2.4 MB',
      details: 'Grades 8.8, 10.9, 12.9, Allen Socket, Hex Flange, Grub Screws with torque ratings.',
    },
    {
      title: 'Stainless Steel Fasteners & Marine Hardware (A2 / A4)',
      pages: 'Pages 25 - 42',
      size: '1.8 MB',
      details: 'SS 304 & SS 316 Bolts, Threaded Rods, Nyloc Nuts, Spring Washers for chemical plants.',
    },
    {
      title: 'Fenner Industrial V-Belts & Transmission Pulleys',
      pages: 'Pages 43 - 58',
      size: '1.6 MB',
      details: 'Classical A/B/C/D sections, Wedge SPZ/SPA/SPB/SPC, and timing belt pitch charts.',
    },
    {
      title: 'SKF, NBC & FYH Bearings & Pillow Blocks',
      pages: 'Pages 59 - 76',
      size: '2.1 MB',
      details: 'Deep groove, taper roller, spherical roller, UCP & UCF pillow block housing specs.',
    },
    {
      title: 'Bosch Industrial Power Tools & Norton Abrasives',
      pages: 'Pages 77 - 94',
      size: '2.8 MB',
      details: 'Angle grinders, rotary hammers, cutting wheels, flap discs & metrology instruments.',
    },
  ];

  const handleDownload = (sectionName: string) => {
    // Generate a downloadable text/document blob simulation
    const content = `BIKANER HARDWARE & MILL STORE - 2025 INDUSTRIAL CATALOGUE
Sector 23 Industrial Area, Faridabad, Haryana
Section: ${sectionName}
GSTIN: 06AABCB1234F1Z8
Contact: +91 98112 XXXXX | sales@bikanerhardwarefbd.com

Thank you for downloading the official Bikaner Hardware 2025 engineering rate & specification sheet.
For bulk purchase inquiries, contact our Sector 23 pricing desk.`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Bikaner_Hardware_2025_${sectionName.replace(/\s+/g, '_')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#a33900] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-3xl">menu_book</span>
            <div>
              <span className="bg-white/20 text-white text-[11px] font-bold px-2 py-0.5 rounded uppercase">
                Edition 2025 (94 Pages)
              </span>
              <h2 className="text-xl font-bold tracking-tight text-white mt-1">
                Bikaner Hardware &amp; Mill Store Master Catalogue
              </h2>
            </div>
          </div>
          <p className="text-xs text-[#ffdbce] leading-relaxed">
            Complete technical specification sheets, tensile strength formulas, thread pitch standards, and wholesale slab pricing.
          </p>
        </div>

        {/* Section List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs font-bold text-[#565e74]">
            <span>CATALOGUE SECTIONS (PDF BUNDLE: 10.7 MB)</span>
            <button
              onClick={() => handleDownload('Master_Full_Catalog_2025')}
              className="text-[#a33900] hover:underline flex items-center gap-1 font-bold text-xs"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              Download Complete PDF (10.7 MB)
            </button>
          </div>

          <div className="space-y-2.5">
            {catalogSections.map((sec, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#eff4ff] hover:bg-[#e5eeff] rounded-xl border border-slate-200 flex items-center justify-between gap-3 transition-colors"
              >
                <div className="min-w-0">
                  <div className="font-bold text-sm text-[#0b1c30] truncate">{sec.title}</div>
                  <div className="text-xs text-[#565e74] mt-0.5">{sec.details}</div>
                  <div className="text-[11px] font-mono text-[#006194] font-semibold mt-1">
                    {sec.pages} • {sec.size}
                  </div>
                </div>
                <button
                  onClick={() => handleDownload(sec.title)}
                  className="px-3 py-1.5 bg-white hover:bg-[#a33900] hover:text-white text-[#a33900] rounded-lg border border-[#a33900]/30 font-bold text-xs shrink-0 flex items-center gap-1 shadow-xs transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  Get PDF
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-[#565e74]">
            Physical hardcopy binder available over-the-counter at Sector 23 Yard.
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenRfq();
              }}
              className="px-4 py-2 bg-[#a33900] hover:bg-[#cc4900] text-white font-bold rounded-lg transition-colors"
            >
              Request Custom Pricing
            </button>
            <button
              onClick={onClose}
              className="px-3 py-2 bg-slate-200 text-[#0b1c30] font-semibold rounded-lg hover:bg-slate-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
