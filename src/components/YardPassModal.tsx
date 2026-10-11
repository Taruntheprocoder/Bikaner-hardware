import React, { useState } from 'react';

interface YardPassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const YardPassModal: React.FC<YardPassModalProps> = ({ isOpen, onClose }) => {
  const [visitorName, setVisitorName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [vehicleNo, setVehicleNo] = useState('');
  const [purpose, setPurpose] = useState('Stock Inspection & Material Testing');
  const [passGenerated, setPassGenerated] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setPassGenerated(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
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
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-amber-400 text-2xl">badge</span>
            <span className="bg-[#a33900] text-white text-[11px] font-bold px-2 py-0.5 rounded uppercase">
              SECTOR 23 CENTRAL DEPOT
            </span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-white">
            Yard Visitor &amp; Pickup Inspection Pass
          </h2>
          <p className="text-xs text-[#cbdbf5] mt-1">
            Valid at Gate 2, Plot 42-B, Main Market Road, Sector 23 Industrial Area, Faridabad.
          </p>
        </div>

        {/* Form or Pass View */}
        <div className="p-6">
          {!passGenerated ? (
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0b1c30] uppercase mb-1">
                  Visitor / Representative Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Chandra (Purchase Officer)"
                  className="w-full p-2.5 bg-[#eff4ff] text-[#0b1c30] text-sm rounded-lg outline-none focus:ring-2 focus:ring-[#a33900] border border-slate-200"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0b1c30] uppercase mb-1">
                  Manufacturing Company / Plant Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sona Comstar / Escorts Ancillary"
                  className="w-full p-2.5 bg-[#eff4ff] text-[#0b1c30] text-sm rounded-lg outline-none focus:ring-2 focus:ring-[#a33900] border border-slate-200"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0b1c30] uppercase mb-1">
                    Vehicle Number (Truck/Bolero/Car)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. HR-29-BD-1234"
                    className="w-full p-2.5 bg-[#eff4ff] text-[#0b1c30] text-sm rounded-lg outline-none focus:ring-2 focus:ring-[#a33900] border border-slate-200 font-mono uppercase"
                    value={vehicleNo}
                    onChange={(e) => setVehicleNo(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0b1c30] uppercase mb-1">
                    Primary Purpose
                  </label>
                  <select
                    className="w-full p-2.5 bg-[#eff4ff] text-[#0b1c30] text-sm rounded-lg outline-none focus:ring-2 focus:ring-[#a33900] border border-slate-200"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                  >
                    <option>Stock Inspection &amp; MTC Verification</option>
                    <option>Direct Loading / Over-The-Counter Pickup</option>
                    <option>Sample Thread Gauge Measurement</option>
                    <option>Founder Meeting (Shri Rajesh Sharma)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#a33900] hover:bg-[#cc4900] text-white font-bold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                  Issue Gate Inspection Pass
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              {/* Printed Pass Card */}
              <div className="border-2 border-dashed border-[#a33900] p-4 rounded-xl bg-[#eff4ff] text-[#0b1c30] relative">
                <div className="flex justify-between items-start border-b border-slate-200 pb-3 mb-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#a33900] tracking-widest uppercase">
                      OFFICIAL VISITOR PASS
                    </span>
                    <h3 className="font-extrabold text-base text-[#0b1c30]">
                      BIKANER HARDWARE YARD
                    </h3>
                    <p className="text-[11px] text-[#565e74]">
                      Gate 2 • Bay 04 Heavy Stacking Area
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs font-bold text-[#006194]">
                      #PASS-{Math.floor(100000 + Math.random() * 900000)}
                    </span>
                    <span className="block text-[10px] text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.5 rounded mt-1">
                      ACTIVE TODAY
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[#565e74] block">Visitor:</span>
                    <strong className="text-sm">{visitorName || 'Authorized Engineer'}</strong>
                  </div>
                  <div>
                    <span className="text-[#565e74] block">Company:</span>
                    <strong className="text-sm">{companyName || 'Manufacturing Unit'}</strong>
                  </div>
                  <div>
                    <span className="text-[#565e74] block">Vehicle:</span>
                    <strong className="font-mono">{vehicleNo || 'Self Entry'}</strong>
                  </div>
                  <div>
                    <span className="text-[#565e74] block">Purpose:</span>
                    <strong>{purpose}</strong>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200 text-[11px] text-[#565e74] flex justify-between items-center">
                  <span>Plot 42-B, Sector 23 Industrial Area, Faridabad</span>
                  <span className="font-bold text-[#a33900]">Priority Entry</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => window.print()}
                  className="flex-1 py-2.5 bg-[#213145] hover:bg-[#0b1c30] text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">print</span>
                  Print / Save Pass
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-[#0b1c30] font-bold text-xs rounded-xl transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
