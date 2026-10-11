import React, { useState, useEffect } from 'react';
import { Product, RfqItem } from '../types';

interface QuickRfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product | null;
  onRfqSubmitted?: (quoteData: any) => void;
}

export const QuickRfqModal: React.FC<QuickRfqModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
  onRfqSubmitted,
}) => {
  const [companyName, setCompanyName] = useState('');
  const [gstin, setGstin] = useState('');
  const [phone, setPhone] = useState('');
  const [sector, setSector] = useState('Sector 24 / 25 Industrial Area, Faridabad');
  const [productName, setProductName] = useState('');
  const [grade, setGrade] = useState('Grade 8.8 High-Tensile');
  const [quantity, setQuantity] = useState(500);
  const [unit, setUnit] = useState('Pcs');
  const [urgency, setUrgency] = useState('regular');
  const [submittedQuote, setSubmittedQuote] = useState<any | null>(null);

  useEffect(() => {
    if (initialProduct) {
      setProductName(initialProduct.name);
      setGrade(initialProduct.gradeBadge);
      setQuantity(initialProduct.moq);
      setUnit(initialProduct.unit);
    } else {
      setProductName('M12 x 50mm Hex Head Bolt');
      setGrade('Grade 8.8 High-Tensile');
      setQuantity(500);
      setUnit('Pcs');
    }
    setSubmittedQuote(null);
  }, [initialProduct, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const unitPrice = initialProduct?.price || 8.4;
    const subtotal = unitPrice * quantity;
    const gstAmount = subtotal * 0.18;
    const total = subtotal + gstAmount;

    const quoteResult = {
      quoteNo: `BHM-EST-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      companyName: companyName || 'Standard Industrial Account',
      gstin: gstin || '06AABCA1234F1Z8',
      phone: phone || '+91 98112 XXXXX',
      sector,
      productName,
      grade,
      quantity,
      unit,
      unitPrice,
      subtotal,
      gstAmount,
      total,
      urgency,
    };

    setSubmittedQuote(quoteResult);
    if (onRfqSubmitted) {
      onRfqSubmitted(quoteResult);
    }
  };

  const generateWhatsAppLink = () => {
    if (!submittedQuote) return '#';
    const text = `*FORMAL RFQ INQUIRY - BIKANER HARDWARE*\nQuote Ref: ${submittedQuote.quoteNo}\nCompany: ${submittedQuote.companyName}\nGSTIN: ${submittedQuote.gstin}\nItem: ${submittedQuote.productName} (${submittedQuote.grade})\nQty: ${submittedQuote.quantity} ${submittedQuote.unit}\nDestination: ${submittedQuote.sector}\nUrgency: ${submittedQuote.urgency}\n\nPlease confirm availability and dispatch schedule.`;
    return `https://wa.me/919811200000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#a33900] text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl">request_quote</span>
            <div>
              <h2 className="text-lg font-bold tracking-tight">
                {submittedQuote ? 'Official GST Quotation Estimate' : 'Instant Wholesale RFQ Generator'}
              </h2>
              <p className="text-xs text-[#ffdbce]">
                Sector 23 Faridabad Pricing Desk • Guaranteed turnaround &lt; 15 mins
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {!submittedQuote ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0b1c30] uppercase mb-1">
                    Company / Plant Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Precision Tools Ltd"
                    className="w-full p-2.5 bg-[#eff4ff] text-[#0b1c30] text-sm rounded-lg outline-none focus:ring-2 focus:ring-[#a33900] border border-slate-200"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0b1c30] uppercase mb-1">
                    Purchase Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98XXX XXXXX"
                    className="w-full p-2.5 bg-[#eff4ff] text-[#0b1c30] text-sm rounded-lg outline-none focus:ring-2 focus:ring-[#a33900] border border-slate-200"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0b1c30] uppercase mb-1">
                    GSTIN (For ITC Evaluation)
                  </label>
                  <input
                    type="text"
                    placeholder="06AABCB1234F1Z8"
                    className="w-full p-2.5 bg-[#eff4ff] text-[#0b1c30] text-sm rounded-lg outline-none focus:ring-2 focus:ring-[#a33900] border border-slate-200 font-mono uppercase"
                    value={gstin}
                    onChange={(e) => setGstin(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0b1c30] uppercase mb-1">
                    Delivery Destination
                  </label>
                  <select
                    className="w-full p-2.5 bg-[#eff4ff] text-[#0b1c30] text-sm rounded-lg outline-none focus:ring-2 focus:ring-[#a33900] border border-slate-200"
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                  >
                    <option>Faridabad Sector 23 / 24 / 25 (Immediate Pickup)</option>
                    <option>Ballabhgarh Industrial Area</option>
                    <option>IMT Manesar / Gurugram Industrial Zone</option>
                    <option>Okhla Industrial Area (Delhi NCR)</option>
                    <option>Prithla / Palwal Corridor</option>
                  </select>
                </div>
              </div>

              {/* Item Specification */}
              <div className="p-3 bg-[#eff4ff] rounded-xl border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-[#a33900] uppercase tracking-wider block">
                  Hardware Item Details
                </span>
                <div>
                  <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                    Item Name &amp; Dimensions
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-2.5 bg-white text-[#0b1c30] text-sm rounded-lg outline-none border border-slate-200 font-medium"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                      Grade / Standard
                    </label>
                    <select
                      className="w-full p-2.5 bg-white text-[#0b1c30] text-sm rounded-lg outline-none border border-slate-200"
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                    >
                      <option>Grade 8.8 High-Tensile</option>
                      <option>Grade 10.9 Heavy Automotive</option>
                      <option>Grade 12.9 Alloy Steel Unbrako</option>
                      <option>SS 304 Stainless Marine</option>
                      <option>SS 316 Chemical Grade</option>
                      <option>Fenner V-Belt Heavy Standard</option>
                      <option>SKF Ball Bearing Precision</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                      Required Quantity
                    </label>
                    <div className="flex gap-1">
                      <input
                        type="number"
                        min="1"
                        required
                        className="w-full p-2.5 bg-white text-[#0b1c30] text-sm rounded-lg outline-none border border-slate-200 font-mono font-bold"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                      />
                      <span className="p-2.5 bg-slate-200 text-xs font-bold rounded-lg flex items-center">
                        {unit}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-xs font-bold text-[#0b1c30] uppercase mb-1">
                  Dispatch Priority
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setUrgency('line_down')}
                    className={`p-2 rounded-lg text-xs font-bold text-center border transition-colors ${
                      urgency === 'line_down'
                        ? 'bg-red-50 text-red-700 border-red-500'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    Emergency (&lt; 4h)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('regular')}
                    className={`p-2 rounded-lg text-xs font-bold text-center border transition-colors ${
                      urgency === 'regular'
                        ? 'bg-[#e5eeff] text-[#006194] border-[#006194]'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    Regular (24h)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('monthly_contract')}
                    className={`p-2 rounded-lg text-xs font-bold text-center border transition-colors ${
                      urgency === 'monthly_contract'
                        ? 'bg-[#ffdbce] text-[#a33900] border-[#a33900]'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    Monthly PO (30d)
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#a33900] hover:bg-[#cc4900] text-white font-bold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">bolt</span>
                  Calculate Official Quotation &amp; ITC Estimate
                </button>
              </div>
            </form>
          ) : (
            /* Formal Quotation Result View */
            <div className="space-y-4">
              <div className="border border-slate-300 p-4 rounded-xl bg-slate-50 relative">
                <div className="flex justify-between items-start border-b border-slate-200 pb-3 mb-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#a33900] tracking-widest uppercase">
                      PROVISIONAL ESTIMATE SHEET
                    </span>
                    <h3 className="font-extrabold text-base text-[#0b1c30]">
                      BIKANER HARDWARE &amp; MILL STORE
                    </h3>
                    <p className="text-[11px] text-[#565e74]">
                      Sector 23 Industrial Area, Faridabad • GSTIN: 06AABCB1234F1Z8
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs font-bold text-[#a33900]">
                      {submittedQuote.quoteNo}
                    </span>
                    <span className="block text-[11px] text-[#565e74]">{submittedQuote.date}</span>
                  </div>
                </div>

                <div className="text-xs space-y-1 mb-3">
                  <p>
                    <strong>Buyer:</strong> {submittedQuote.companyName} ({submittedQuote.sector})
                  </p>
                  <p>
                    <strong>GSTIN:</strong>{' '}
                    <span className="font-mono">{submittedQuote.gstin}</span> |{' '}
                    <strong>Phone:</strong> {submittedQuote.phone}
                  </p>
                </div>

                {/* Calculation Table */}
                <div className="bg-white rounded-lg border border-slate-200 overflow-hidden text-xs">
                  <div className="grid grid-cols-12 bg-slate-100 p-2 font-bold text-[#0b1c30]">
                    <div className="col-span-6">Description / Grade</div>
                    <div className="col-span-2 text-right">Qty</div>
                    <div className="col-span-2 text-right">Rate</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>
                  <div className="grid grid-cols-12 p-2 border-t border-slate-100">
                    <div className="col-span-6 font-medium">
                      {submittedQuote.productName}
                      <span className="block text-[10px] text-[#565e74]">{submittedQuote.grade}</span>
                    </div>
                    <div className="col-span-2 text-right font-mono">
                      {submittedQuote.quantity} {submittedQuote.unit}
                    </div>
                    <div className="col-span-2 text-right font-mono">
                      ₹{submittedQuote.unitPrice.toFixed(2)}
                    </div>
                    <div className="col-span-2 text-right font-mono font-bold">
                      ₹{submittedQuote.subtotal.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="mt-3 space-y-1 text-right text-xs">
                  <div className="text-[#565e74]">
                    Subtotal: <span className="font-mono">₹{submittedQuote.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="text-[#565e74]">
                    GST (18% ITC Eligible):{' '}
                    <span className="font-mono">₹{submittedQuote.gstAmount.toFixed(2)}</span>
                  </div>
                  <div className="text-sm font-extrabold text-[#a33900] pt-1 border-t border-slate-200">
                    Grand Total:{' '}
                    <span className="font-mono text-base">₹{submittedQuote.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Send Formal RFQ to WhatsApp Desk
                </a>
                <button
                  onClick={() => setSubmittedQuote(null)}
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-[#0b1c30] font-semibold text-xs rounded-xl transition-colors"
                >
                  Edit Items
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
