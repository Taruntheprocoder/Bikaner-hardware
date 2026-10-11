import React from 'react';

interface TrustSealModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRfq: () => void;
}

export const TrustSealModal: React.FC<TrustSealModalProps> = ({
  isOpen,
  onClose,
  onOpenRfq,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#213145] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-[#006194] flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined text-2xl">verified_user</span>
            </div>
            <div>
              <span className="bg-[#a33900] text-white text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                IndiaMART Star Supplier
              </span>
              <h2 className="text-xl font-bold tracking-tight text-white mt-1">
                IndiaMART TrustSEAL® Certified
              </h2>
            </div>
          </div>
          <p className="text-xs text-[#cbdbf5] leading-relaxed">
            Verified on-site physical yard verification by Dun &amp; Bradstreet / IndiaMART audit team.
          </p>
        </div>

        {/* Audit Details Body */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 bg-[#eff4ff] rounded-xl border border-slate-200">
              <div className="font-extrabold text-2xl text-[#a33900]">98.2%</div>
              <div className="text-xs text-[#565e74] mt-0.5">Response Rate (&lt; 15 mins)</div>
            </div>
            <div className="p-3 bg-[#eff4ff] rounded-xl border border-slate-200">
              <div className="font-extrabold text-2xl text-[#006194]">2,400+</div>
              <div className="text-xs text-[#565e74] mt-0.5">Verified B2B Deliveries</div>
            </div>
          </div>

          <div className="divide-y divide-slate-100 text-sm">
            <div className="py-2.5 flex justify-between">
              <span className="text-[#565e74]">Legal Trade Entity</span>
              <span className="font-bold text-[#0b1c30]">Bikaner Hardware &amp; Mill Store</span>
            </div>
            <div className="py-2.5 flex justify-between">
              <span className="text-[#565e74]">IndiaMART Member ID</span>
              <span className="font-mono font-semibold text-[#006194]">ID: 4892189 / Faridabad Hub</span>
            </div>
            <div className="py-2.5 flex justify-between">
              <span className="text-[#565e74]">GSTIN Registration</span>
              <span className="font-mono font-bold text-[#0b1c30]">06AABCB1234F1Z8</span>
            </div>
            <div className="py-2.5 flex justify-between">
              <span className="text-[#565e74]">Physical Godown Facility</span>
              <span className="font-semibold text-[#0b1c30]">2,800 Sq. Ft. + Stock Yard (Plot 42-B, Sec 23)</span>
            </div>
            <div className="py-2.5 flex justify-between">
              <span className="text-[#565e74]">Establishment Date</span>
              <span className="font-semibold text-[#0b1c30]">1994 (31+ Years Industrial Standing)</span>
            </div>
            <div className="py-2.5 flex justify-between">
              <span className="text-[#565e74]">Buyer Rating Score</span>
              <span className="font-bold text-amber-600 flex items-center gap-1">
                ★ 4.8 / 5.0 (680+ Verified Buyer Reviews)
              </span>
            </div>
          </div>

          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
            <span className="material-symbols-outlined text-emerald-700 text-lg shrink-0 mt-0.5">
              shield
            </span>
            <div>
              <strong className="block font-bold">100% Direct Buyer Protection Guarantee</strong>
              Material shipped strictly against Mill Test Certificate (MTC) specifications. Immediate gate-level replacement within 6 hours across NCR if grade mismatches.
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenRfq();
              }}
              className="flex-1 py-3 bg-[#a33900] hover:bg-[#cc4900] text-white rounded-xl font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">send</span>
              Submit RFQ via IndiaMART Direct
            </button>
            <button
              onClick={onClose}
              className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-[#0b1c30] rounded-xl font-semibold text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
