import React, { useState } from 'react';
import { WAREHOUSE_CAM_URL } from '../data/mockData';

interface ContactStoreScreenProps {
  onOpenPass: () => void;
  onOpenRfq: () => void;
}

export const ContactStoreScreen: React.FC<ContactStoreScreenProps> = ({
  onOpenPass,
  onOpenRfq,
}) => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <div className="flex flex-col w-full bg-[#f8f9ff] py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-10 w-full">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#a33900]">
            Physical Yard Logistics &amp; Inquiries
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30] tracking-tight mt-1">
            Store, Stock Yard &amp; Commercial Desk
          </h1>
          <p className="text-sm text-[#5a4138] mt-1 max-w-2xl leading-relaxed">
            Conveniently situated in Sector 23 Industrial Area with expansive loading bays for small 3-wheeler hot-shots to 32-ton multi-axle freight trailers.
          </p>
        </div>

        {/* Location & Bay Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Yard Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#a33900] text-2xl">
                    location_on
                  </span>
                  <div>
                    <h2 className="font-bold text-base text-[#0b1c30]">
                      Sector 23 Central Depot &amp; Mill Store
                    </h2>
                    <p className="text-xs text-[#565e74]">Plot No. 42-B, Main Market Road, Sector 23</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold bg-[#eff4ff] text-[#006194] px-2.5 py-1 rounded-full">
                  Open Today 9 AM - 8 PM
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#5a4138]">
                <div className="p-3 bg-[#eff4ff] rounded-xl border border-slate-200">
                  <span className="font-bold text-[#0b1c30] block mb-1">Postal Address</span>
                  <p>
                    Bikaner Hardware &amp; Mill Store<br />
                    Plot No. 42-B, Main Market Road,<br />
                    Sector 23 Industrial Area,<br />
                    Faridabad, Haryana – 121005
                  </p>
                </div>
                <div className="p-3 bg-[#eff4ff] rounded-xl border border-slate-200">
                  <span className="font-bold text-[#0b1c30] block mb-1">Direct Telephones</span>
                  <p className="space-y-1">
                    <span className="block font-mono font-bold text-[#0b1c30]">
                      +91 98112 XXXXX (Wholesale Desk)
                    </span>
                    <span className="block font-mono text-[#565e74]">
                      0129-223XXXX (Yard Billing)
                    </span>
                    <span className="block text-[#a33900] font-semibold">
                      sales@bikanerhardwarefbd.com
                    </span>
                  </p>
                </div>
              </div>

              {/* Bay Logistics Guide */}
              <div className="space-y-2 pt-2">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#0b1c30]">
                  Loading Bay &amp; Vehicle Instructions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <strong className="text-[#a33900] block mb-0.5">Bay 01: Fast Small Lots</strong>
                    Tata Ace, Mahindra Bolero &amp; 3-Wheeler hot-shots. 15-minute express turnaround.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <strong className="text-[#006194] block mb-0.5">Bay 02: Heavy Container Freight</strong>
                    Tata 407, 16-wheel trailers, crane unloading for bulk steel fastener coils.
                  </div>
                </div>
              </div>

              {/* Yard Pass Action */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenPass}
                  className="px-5 py-3 bg-[#213145] hover:bg-[#0b1c30] text-white rounded-xl font-bold text-xs flex items-center gap-2 shadow-md transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base text-amber-400">badge</span>
                  Generate Gate 2 Inspection Pass
                </button>
                <a
                  href="https://maps.google.com/?q=Sector+23+Faridabad+Industrial+Area"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] rounded-xl font-bold text-xs flex items-center gap-1.5 border border-slate-200 transition-colors"
                >
                  <span className="material-symbols-outlined text-base text-[#a33900]">map</span>
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Yard Visual Preview */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
              <img
                src={WAREHOUSE_CAM_URL}
                alt="Sector 23 Faridabad Stock Yard"
                className="w-full h-56 object-cover"
              />
              <div className="p-4 bg-white flex justify-between items-center text-xs">
                <div>
                  <span className="font-bold text-[#0b1c30]">Sector 23 Stock Yard &amp; Warehouse</span>
                  <p className="text-[#565e74]">Continuous video monitored inventory staging</p>
                </div>
                <span className="font-mono text-[11px] bg-[#eff4ff] px-2 py-1 rounded text-[#006194] font-bold">
                  2,800 SQ FT GODOWN
                </span>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form & Commercial Terms */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#a33900] font-bold">
                  Direct Inbound Desk
                </span>
                <h2 className="text-lg font-bold text-[#0b1c30]">Send Material Requisition</h2>
                <p className="text-xs text-[#565e74] mt-0.5">
                  Have a question regarding bulk discounts or custom machined fasteners?
                </p>
              </div>

              {sentSuccess && (
                <div className="p-3 bg-emerald-100 text-emerald-900 rounded-xl text-xs font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  Inquiry sent! Sector 23 pricing desk will call back within 15 minutes.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                    Your Name &amp; Designation *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. S. K. Aggarwal (Plant Purchase Head)"
                    className="w-full p-2.5 bg-[#eff4ff] text-[#0b1c30] text-xs rounded-lg border border-slate-200 outline-none focus:bg-white focus:ring-1 focus:ring-[#a33900]"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-[#0b1c30] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      className="w-full p-2.5 bg-[#eff4ff] text-[#0b1c30] text-xs rounded-lg border border-slate-200 outline-none focus:bg-white focus:ring-1 focus:ring-[#a33900]"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0b1c30] mb-1">Email ID</label>
                    <input
                      type="email"
                      placeholder="purchase@company.com"
                      className="w-full p-2.5 bg-[#eff4ff] text-[#0b1c30] text-xs rounded-lg border border-slate-200 outline-none focus:bg-white focus:ring-1 focus:ring-[#a33900]"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                    Requirement Specification / Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="List fastener sizes, quantities, required grades, or plant delivery timeline..."
                    className="w-full p-2.5 bg-[#eff4ff] text-[#0b1c30] text-xs rounded-lg border border-slate-200 outline-none focus:bg-white focus:ring-1 focus:ring-[#a33900]"
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#a33900] hover:bg-[#cc4900] text-white rounded-xl font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">send</span>
                  Submit Requisition Message
                </button>
              </form>
            </div>

            {/* Official GST & Banking Card */}
            <div className="bg-[#eff4ff] p-5 rounded-2xl border border-slate-200 space-y-3 text-xs">
              <span className="font-bold text-[#a33900] uppercase tracking-wider block">
                Official GST &amp; Commercial Clearance
              </span>
              <div className="space-y-1.5 text-[#5a4138]">
                <div className="flex justify-between">
                  <span className="text-[#565e74]">GSTIN Number:</span>
                  <span className="font-mono font-bold text-[#0b1c30]">06AABCB1234F1Z8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#565e74]">State Jurisdiction:</span>
                  <span className="font-semibold text-[#0b1c30]">Haryana (State Code 06)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#565e74]">E-Way Bill Generation:</span>
                  <span className="font-semibold text-emerald-800">Automated Direct API</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#565e74]">Bank RTGS/NEFT:</span>
                  <span className="font-mono text-[#0b1c30]">HDFC Bank, Sec 23 Branch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
