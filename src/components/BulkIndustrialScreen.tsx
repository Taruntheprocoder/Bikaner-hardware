import React, { useState } from 'react';
import { WAREHOUSE_BULK_YARD_URL } from '../data/mockData';
import { RfqItem } from '../types';

interface BulkIndustrialScreenProps {
  onOpenPdf: () => void;
  onOpenPass: () => void;
  onOpenTrustSeal: () => void;
  onRfqGenerated?: (quote: any) => void;
}

export const BulkIndustrialScreen: React.FC<BulkIndustrialScreenProps> = ({
  onOpenPdf,
  onOpenPass,
  onOpenTrustSeal,
  onRfqGenerated,
}) => {
  // Form state
  const [companyName, setCompanyName] = useState('Apex Precision Components Pvt Ltd');
  const [gstin, setGstin] = useState('06AABCA1234F1Z8');
  const [phone, setPhone] = useState('+91 98112 88410');
  const [sector, setSector] = useState('sec24');
  const [address, setAddress] = useState('Plot No. 18-A, Industrial Area Phase 2, Sector 24, Faridabad');
  const [urgency, setUrgency] = useState<'line_down' | 'regular' | 'monthly_contract'>('regular');
  const [creditTerms, setCreditTerms] = useState('30_days');
  const [whatsappDesk, setWhatsappDesk] = useState(true);
  const [specialNotes, setSpecialNotes] = useState('Zinc yellow plating 12 microns min. Salt spray test report 240 hrs required.');
  const [gstVerified, setGstVerified] = useState(true);
  const [rfqSuccessAlert, setRfqSuccessAlert] = useState(false);
  const [bomUploadedNotice, setBomUploadedNotice] = useState<string | null>(null);

  // Dynamic Item Lines
  const [items, setItems] = useState<RfqItem[]>([
    {
      id: '1',
      description: 'High Tensile Hex Head Bolt',
      grade: 'Grade 8.8 (IS 1367 / ISO 898-1)',
      size: 'M16 x 65mm (Pitch 2.0)',
      quantity: 2500,
      unit: 'Pcs',
      targetDate: '2025-10-20',
    },
    {
      id: '2',
      description: 'Carbide Milling Inserts (APMT)',
      grade: 'PVD Coated for Alloy Steels',
      size: '160408-PDER / Radius 0.8',
      quantity: 300,
      unit: 'Boxes',
      targetDate: '2025-10-18',
    },
  ]);

  const handleAddItem = () => {
    const newItem: RfqItem = {
      id: Date.now().toString(),
      description: 'Flange Nut / Heavy Washer',
      grade: 'Grade 10.9 (Heavy Structural)',
      size: 'M16 (Pitch 2.0)',
      quantity: 1000,
      unit: 'Pcs',
      targetDate: '2025-10-25',
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    if (items.length <= 1) {
      alert('At least one line item is required for quotation processing.');
      return;
    }
    setItems(items.filter((item) => item.id !== id));
  };

  const handleItemChange = (id: string, field: keyof RfqItem, value: any) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleLoadSampleBOM = () => {
    setItems([
      {
        id: 'bom-1',
        description: 'M12 x 50mm Hex Head Bolt',
        grade: 'Grade 8.8 (IS 1367 / ISO 898-1)',
        size: 'M12 x 50mm (Pitch 1.75)',
        quantity: 5000,
        unit: 'Pcs',
        targetDate: '2025-10-22',
      },
      {
        id: 'bom-2',
        description: 'M16 x 80mm High Tensile Bolt',
        grade: 'Grade 10.9 (Heavy Structural)',
        size: 'M16 x 80mm (Pitch 2.0)',
        quantity: 3000,
        unit: 'Pcs',
        targetDate: '2025-10-22',
      },
      {
        id: 'bom-3',
        description: 'Fenner Wedge Belt SPB-2120',
        grade: 'Fenner Industrial Certified',
        size: 'SPB Section 2120mm',
        quantity: 50,
        unit: 'Units',
        targetDate: '2025-10-18',
      },
      {
        id: 'bom-4',
        description: 'SKF Deep Groove Ball Bearing',
        grade: 'Rubber Sealed 2RSH',
        size: '6205-2RSH (25mm bore)',
        quantity: 200,
        unit: 'Pcs',
        targetDate: '2025-10-19',
      },
      {
        id: 'bom-5',
        description: 'Grade 12.9 Socket Head Cap Screw',
        grade: 'Grade 12.9 (Alloy Steel Unbrako)',
        size: 'M10 x 35mm DIN 912',
        quantity: 1200,
        unit: 'Pcs',
        targetDate: '2025-10-20',
      },
    ]);
    setBomUploadedNotice('Auto-Matched: "Escorts_Ancillary_Quarterly_Procurement_BOM.xlsx" (5 items parsed)');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRfqSuccessAlert(true);
    if (onRfqGenerated) {
      onRfqGenerated({
        companyName,
        gstin,
        phone,
        sector,
        urgency,
        items,
      });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Industrial Marquee Ribbon */}
      <div className="w-full bg-[#213145] text-[#eaf1ff] py-2 px-4 sm:px-6 overflow-hidden shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-[11px] font-bold uppercase tracking-wider gap-2">
          <div className="flex items-center gap-4 animate-pulse">
            <span className="flex items-center gap-1.5 text-[#ffdbce]">
              <span className="material-symbols-outlined text-sm leading-none">bolt</span>
              EMERGENCY LINE-DOWN DISPATCH ACTIVE
            </span>
            <span className="hidden md:inline text-[#dae2fd]">
              Faridabad Sectors 23, 24, 25, 58, 59 &amp; Ballabhgarh: 120-Min Expedited Run
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#cce5ff]">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">verified</span>
              ISO 9001:2015 Verified Yard
            </span>
            <span className="hidden sm:inline opacity-40">|</span>
            <span className="hidden sm:inline font-mono">B2B DESK: +91 98112-98440</span>
          </div>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="relative w-full bg-[#eff4ff] py-10 sm:py-16 overflow-hidden border-b border-slate-200">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#a33900]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#006194]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#dce9ff] rounded-full text-xs font-bold text-[#0b1c30] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#a33900] animate-ping"></span>
                <span>OEM &amp; TIER-1 / TIER-2 PROCUREMENT DESK</span>
                <span className="text-[#565e74] opacity-60">•</span>
                <span className="text-[#006194]">EST. 1994 FARIDABAD</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1c30] tracking-tight leading-tight">
                Contract Procurement &amp; Heavy Bulk Supply with{' '}
                <span className="text-[#a33900] underline decoration-[#ffdbce] decoration-4 underline-offset-4">
                  30-Day Credit Terms
                </span>{' '}
                for Verified Industries
              </h1>

              <p className="text-base sm:text-lg text-[#5a4138] max-w-3xl leading-relaxed">
                Streamlined industrial supply for CNC machine centers, structural fabricators, and automotive plants across Sector 24, 25, 58, Ballabhgarh, and Prithla corridors. Direct mill allocations, Mill Test Certificates (MTC) included, and 100% compliant GST input credit.
              </p>

              {/* Metric Badges Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-xl shadow-xs border border-slate-200">
                  <span className="block text-2xl font-extrabold text-[#a33900] font-mono leading-none">
                    2,800+
                  </span>
                  <span className="text-[11px] font-bold text-[#565e74] uppercase mt-1 block">
                    Tons Fasteners Ready
                  </span>
                </div>
                <div className="bg-white p-3.5 rounded-xl shadow-xs border border-slate-200">
                  <span className="block text-2xl font-extrabold text-[#006194] font-mono leading-none">
                    4 Hours
                  </span>
                  <span className="text-[11px] font-bold text-[#565e74] uppercase mt-1 block">
                    Line-Down NCR Run
                  </span>
                </div>
                <div className="bg-white p-3.5 rounded-xl shadow-xs border border-slate-200">
                  <span className="block text-2xl font-extrabold text-[#0b1c30] font-mono leading-none">
                    ₹50 Cr+
                  </span>
                  <span className="text-[11px] font-bold text-[#565e74] uppercase mt-1 block">
                    Annual B2B Volume
                  </span>
                </div>
                <div className="bg-white p-3.5 rounded-xl shadow-xs border border-slate-200">
                  <span className="block text-2xl font-extrabold text-[#cc4900] font-mono leading-none">
                    30 Days
                  </span>
                  <span className="text-[11px] font-bold text-[#565e74] uppercase mt-1 block">
                    PDC / LC Credit Terms
                  </span>
                </div>
              </div>
            </div>

            {/* TrustSEAL Card Mosaic Side */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-md bg-white border border-slate-200">
                <img
                  className="w-full h-44 object-cover"
                  alt="Sector 23 Heavy Warehouse Bay Racks"
                  src={WAREHOUSE_BULK_YARD_URL}
                />
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <button
                      onClick={onOpenTrustSeal}
                      className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded bg-[#eff4ff] text-[#006194] hover:bg-[#dce9ff] transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm leading-none">shield</span>
                      TrustSEAL Verified
                    </button>
                    <span className="text-[11px] text-[#565e74] font-mono font-bold">
                      CODE: BHM-FBD-94
                    </span>
                  </div>
                  <p className="font-bold text-base text-[#0b1c30]">Central Warehouse Yard #42-B</p>
                  <p className="text-xs text-[#5a4138] mt-1">
                    Sector 23 Industrial Cluster. Daily dispatch fleet serving Greater Faridabad, Okhla, and Manesar industrial zones.
                  </p>
                </div>
              </div>

              {/* Price list download */}
              <div className="bg-[#e5eeff] p-4 rounded-xl shadow-xs flex items-center justify-between border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ffdbce] flex items-center justify-center text-[#370e00]">
                    <span className="material-symbols-outlined text-xl">description</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#0b1c30]">Current Price List 2025</p>
                    <p className="text-xs text-[#565e74]">High Tensile &amp; SS Catalog (PDF - 8.4MB)</p>
                  </div>
                </div>
                <button
                  onClick={onOpenPdf}
                  className="px-3 py-2 bg-white hover:bg-[#a33900] hover:text-white rounded-lg text-[#a33900] font-bold text-xs shadow-xs transition-colors flex items-center gap-1 border border-slate-200 cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-sm">download</span> Get Spec
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Bulk RFQ Form & Quotation Engine */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full -mt-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          {/* Form Header */}
          <div className="bg-[#213145] text-[#eaf1ff] px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffdbce] flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">assignment</span> RFQ PROCUREMENT GATEWAY
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Submit Bill of Materials (BOM) or Schedule Contract Tenders
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-lg text-xs font-bold text-white">
                <span className="w-2 h-2 rounded-full bg-[#ffdbce]"></span> SLA: 45-Min Guaranteed Callback
              </span>
            </div>
          </div>

          {/* Form Body */}
          <form onSubmit={handleFormSubmit} className="p-6 md:p-8 space-y-8">
            {/* Step 1: Corporate Identity & GSTIN */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#a33900] text-white text-xs flex items-center justify-center font-bold">
                  1
                </span>
                <h3 className="font-bold text-lg text-[#0b1c30]">
                  Corporate Identity &amp; Factory Hub Location
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#0b1c30]">
                    Registered Company Name *
                  </label>
                  <input
                    className="w-full px-3 py-2.5 bg-[#eff4ff] text-[#0b1c30] rounded-lg text-sm border border-slate-200 outline-none focus:bg-white focus:ring-2 focus:ring-[#a33900]"
                    placeholder="e.g. Apex Precision Components Pvt Ltd"
                    required
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#0b1c30]">
                    15-Digit GSTIN (For 30-Day Credit Evaluation) *
                  </label>
                  <div className="relative">
                    <input
                      className="w-full uppercase font-mono px-3 py-2.5 bg-[#eff4ff] text-[#0b1c30] rounded-lg text-sm border border-slate-200 outline-none focus:bg-white focus:ring-2 focus:ring-[#a33900]"
                      maxLength={15}
                      placeholder="06AABCA1234F1Z8"
                      required
                      type="text"
                      value={gstin}
                      onChange={(e) => setGstin(e.target.value)}
                    />
                    <button
                      className={`absolute right-2 top-2 px-2 py-0.5 text-[11px] font-bold rounded uppercase cursor-pointer ${
                        gstVerified
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-[#cce5ff] text-[#001d31]'
                      }`}
                      type="button"
                      onClick={() => setGstVerified(true)}
                    >
                      {gstVerified ? '✓ Verified' : 'Verify'}
                    </button>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#0b1c30]">
                    Purchase In-Charge Phone / WhatsApp *
                  </label>
                  <input
                    className="w-full px-3 py-2.5 bg-[#eff4ff] text-[#0b1c30] rounded-lg text-sm border border-slate-200 outline-none focus:bg-white focus:ring-2 focus:ring-[#a33900]"
                    placeholder="+91 98XXX XXXXX"
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#0b1c30]">
                    NCR Factory Sector / Industrial Area *
                  </label>
                  <select
                    className="w-full px-3 py-2.5 bg-[#eff4ff] text-[#0b1c30] rounded-lg text-sm border border-slate-200 outline-none focus:bg-white focus:ring-2 focus:ring-[#a33900]"
                    required
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                  >
                    <option value="sec24">Sector 24 / Sector 25 Industrial Area, Faridabad</option>
                    <option value="sec58">Sector 58 / 59 (Automotive Hub), Faridabad</option>
                    <option value="sec6">Sector 6 / NH-5 Industrial Belt</option>
                    <option value="ballabhgarh">Ballabhgarh Industrial Zone / IMT Faridabad</option>
                    <option value="prithla">Prithla / Baghola Heavy Engineering Corridor</option>
                    <option value="gurugram">Gurugram IMT Manesar / Udyog Vihar</option>
                    <option value="okhla">Okhla Phase I/II/III &amp; Mohan Cooperative</option>
                    <option value="other">Other Delhi-NCR Manufacturing Cluster</option>
                  </select>
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="block text-xs font-bold text-[#0b1c30]">
                    Factory Gate Delivery Address
                  </label>
                  <input
                    className="w-full px-3 py-2.5 bg-[#eff4ff] text-[#0b1c30] rounded-lg text-sm border border-slate-200 outline-none focus:bg-white focus:ring-2 focus:ring-[#a33900]"
                    placeholder="Plot No., Phase, Landmark, Near Substation / Chowk"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Excel / BOM Quick Upload Dropzone */}
            <div className="bg-[#eff4ff] p-5 rounded-xl border border-slate-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                <div>
                  <span className="font-bold text-sm text-[#0b1c30] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a33900]">upload_file</span>
                    Quick Bill of Materials (BOM) Import
                  </span>
                  <p className="text-xs text-[#5a4138] mt-0.5">
                    Have an existing purchase requisition sheet? Drag &amp; drop Excel (.xlsx, .csv) or PDF purchase list.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleLoadSampleBOM}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#a33900] bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-[#ffdbce]/40 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">auto_fix_high</span>
                    Load Escorts Ancillary Sample BOM
                  </button>
                  <button
                    type="button"
                    onClick={onOpenPdf}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#006194] hover:underline"
                  >
                    <span className="material-symbols-outlined text-sm">download</span>
                    Template
                  </button>
                </div>
              </div>

              {bomUploadedNotice && (
                <div className="mb-3 p-2.5 bg-emerald-100 text-emerald-900 rounded-lg text-xs font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  {bomUploadedNotice}
                </div>
              )}

              <div
                onClick={handleLoadSampleBOM}
                className="relative bg-white p-6 rounded-xl text-center cursor-pointer hover:bg-[#dce9ff]/30 transition-colors border-2 border-dashed border-[#a33900]/40"
              >
                <span className="material-symbols-outlined text-4xl text-[#a33900] mb-1">
                  cloud_upload
                </span>
                <p className="font-bold text-sm text-[#0b1c30]">
                  Drop Excel BOM or Click to Auto-Import Factory List
                </p>
                <p className="text-xs text-[#565e74] mt-1">
                  Supports multi-item spreadsheets up to 25MB • Automated SKU matching with Bikaner Central Stock
                </p>
              </div>
            </div>

            {/* Step 3: Dynamic Multi-Item Line Selector */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#a33900] text-white text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  <h3 className="font-bold text-lg text-[#0b1c30]">
                    Direct Line Items Specification ({items.length} items)
                  </h3>
                </div>
                <button
                  className="px-3 py-1.5 bg-[#dae2fd] hover:bg-[#bec6e0] text-[#131b2e] rounded-lg font-bold text-xs transition-colors flex items-center gap-1 shadow-xs cursor-pointer"
                  onClick={handleAddItem}
                  type="button"
                >
                  <span className="material-symbols-outlined text-sm">add_circle</span>
                  Add Item Line
                </button>
              </div>

              {/* Items Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#e5eeff] text-[#0b1c30] font-bold text-xs uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-3">Item Description / Name</th>
                      <th className="py-3 px-3">Grade / Material Spec</th>
                      <th className="py-3 px-3">Size / Pitch (mm/inch)</th>
                      <th className="py-3 px-3 w-32">Qty &amp; Unit</th>
                      <th className="py-3 px-3 w-40">Target Date</th>
                      <th className="py-3 px-2 text-center w-12">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {items.map((item) => (
                      <tr key={item.id} className="hover:bg-[#f8f9ff]">
                        <td className="p-2">
                          <input
                            className="w-full p-2 bg-[#eff4ff] rounded text-sm text-[#0b1c30] font-medium outline-none focus:bg-white border border-slate-200"
                            required
                            type="text"
                            value={item.description}
                            onChange={(e) =>
                              handleItemChange(item.id, 'description', e.target.value)
                            }
                          />
                        </td>
                        <td className="p-2">
                          <select
                            className="w-full p-2 bg-[#eff4ff] rounded text-xs text-[#0b1c30] outline-none focus:bg-white border border-slate-200"
                            value={item.grade}
                            onChange={(e) =>
                              handleItemChange(item.id, 'grade', e.target.value)
                            }
                          >
                            <option>Grade 8.8 (IS 1367 / ISO 898-1)</option>
                            <option>Grade 10.9 (Heavy Structural)</option>
                            <option>Grade 12.9 (Alloy Steel Unbrako)</option>
                            <option>SS 304 (A2-70 Austenitic)</option>
                            <option>SS 316 (A4-80 Chemical Grade)</option>
                            <option>PVD Coated for Alloy Steels</option>
                            <option>Fenner Industrial Certified</option>
                            <option>Rubber Sealed 2RSH</option>
                          </select>
                        </td>
                        <td className="p-2">
                          <input
                            className="w-full p-2 bg-[#eff4ff] rounded text-xs text-[#0b1c30] outline-none focus:bg-white border border-slate-200 font-mono"
                            type="text"
                            value={item.size}
                            onChange={(e) =>
                              handleItemChange(item.id, 'size', e.target.value)
                            }
                          />
                        </td>
                        <td className="p-2">
                          <div className="flex gap-1">
                            <input
                              className="w-20 p-2 bg-[#eff4ff] rounded text-xs text-[#0b1c30] font-mono font-bold outline-none border border-slate-200"
                              min="1"
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                handleItemChange(item.id, 'quantity', Number(e.target.value))
                              }
                            />
                            <span className="p-2 bg-slate-100 text-[#565e74] text-xs rounded font-bold">
                              {item.unit}
                            </span>
                          </div>
                        </td>
                        <td className="p-2">
                          <input
                            className="w-full p-2 bg-[#eff4ff] rounded text-xs text-[#0b1c30] outline-none border border-slate-200 font-mono"
                            type="date"
                            value={item.targetDate || ''}
                            onChange={(e) =>
                              handleItemChange(item.id, 'targetDate', e.target.value)
                            }
                          />
                        </td>
                        <td className="p-2 text-center">
                          <button
                            className="text-[#565e74] hover:text-red-600 p-1 rounded cursor-pointer"
                            onClick={() => handleRemoveItem(item.id)}
                            type="button"
                            title="Delete Item"
                          >
                            <span className="material-symbols-outlined text-lg">delete</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Step 4: Dispatch Urgency & Contract Parameters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-2 uppercase">
                  Priority Dispatch Urgency Level *
                </label>
                <div className="space-y-2">
                  <label
                    onClick={() => setUrgency('line_down')}
                    className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer border transition-colors ${
                      urgency === 'line_down'
                        ? 'bg-red-50 border-red-400'
                        : 'bg-[#eff4ff] border-slate-200 hover:bg-[#e5eeff]'
                    }`}
                  >
                    <input
                      checked={urgency === 'line_down'}
                      className="mt-1 accent-[#a33900]"
                      name="urgency"
                      type="radio"
                      readOnly
                    />
                    <div>
                      <span className="font-bold text-sm text-[#ba1a1a] flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">warning</span>
                        Emergency Line-Down (Within 4 Hours NCR)
                      </span>
                      <p className="text-xs text-[#5a4138] mt-0.5">
                        Dedicated hot-shot carrier dispatch from Sector 23 Yard. Priority loading.
                      </p>
                    </div>
                  </label>

                  <label
                    onClick={() => setUrgency('regular')}
                    className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer border transition-colors ${
                      urgency === 'regular'
                        ? 'bg-[#e5eeff] border-[#006194]'
                        : 'bg-[#eff4ff] border-slate-200 hover:bg-[#e5eeff]'
                    }`}
                  >
                    <input
                      checked={urgency === 'regular'}
                      className="mt-1 accent-[#a33900]"
                      name="urgency"
                      type="radio"
                      readOnly
                    />
                    <div>
                      <span className="font-bold text-sm text-[#0b1c30] flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">local_shipping</span>
                        Regular Replenishment (24 to 48 Hours)
                      </span>
                      <p className="text-xs text-[#5a4138] mt-0.5">
                        Consolidated daily factory route dispatch. Standard volume discount applies.
                      </p>
                    </div>
                  </label>

                  <label
                    onClick={() => setUrgency('monthly_contract')}
                    className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer border transition-colors ${
                      urgency === 'monthly_contract'
                        ? 'bg-[#ffdbce]/50 border-[#a33900]'
                        : 'bg-[#eff4ff] border-slate-200 hover:bg-[#e5eeff]'
                    }`}
                  >
                    <input
                      checked={urgency === 'monthly_contract'}
                      className="mt-1 accent-[#a33900]"
                      name="urgency"
                      type="radio"
                      readOnly
                    />
                    <div>
                      <span className="font-bold text-sm text-[#a33900] flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">calendar_month</span>
                        Annual / Monthly Rate Contract (Blanket PO)
                      </span>
                      <p className="text-xs text-[#5a4138] mt-0.5">
                        Fixed price rate-lock for 180 days with staggered weekly scheduled lot drops.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Payment Terms & Tolerance Notes */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#0b1c30] mb-2 uppercase">
                    Requested Credit &amp; Commercial Terms
                  </label>
                  <select
                    className="w-full px-3 py-2.5 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-sm border border-slate-200 outline-none"
                    value={creditTerms}
                    onChange={(e) => setCreditTerms(e.target.value)}
                  >
                    <option value="30_days">
                      30-Day Post-Dated Cheque (PDC) / Verified Corporate Credit
                    </option>
                    <option value="15_days">
                      15-Day Rolling Commercial Account (Weekly Statement)
                    </option>
                    <option value="advance">
                      Immediate RTGS/NEFT with 2% Instant Cash Discount
                    </option>
                    <option value="cod">
                      Cash on Delivery (COD) / Gate Verification for First Lot
                    </option>
                    <option value="lc">
                      Letter of Credit (LC) for Master Orders exceeding ₹25 Lakhs
                    </option>
                  </select>
                </div>

                {/* Instant WhatsApp Desk Toggle */}
                <div className="bg-[#ffdbce]/30 p-4 rounded-xl flex items-center justify-between border border-[#e2bfb2]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#a33900] flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-xl">chat</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#0b1c30]">Direct WhatsApp Desk Dispatch</p>
                      <p className="text-xs text-[#565e74]">
                        Receive formal PDF quote on WhatsApp within 30 mins
                      </p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={whatsappDesk}
                    onChange={(e) => setWhatsappDesk(e.target.checked)}
                    className="w-5 h-5 accent-[#a33900] cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#0b1c30] uppercase">
                    Special Manufacturing / Tolerance Notes
                  </label>
                  <textarea
                    className="w-full px-3 py-2 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-xs border border-slate-200 outline-none focus:bg-white"
                    placeholder="Specify required hardness (HRC), zinc coating thickness (microns), lot packaging preferences..."
                    rows={2}
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Submit Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs text-[#565e74]">
                <span className="material-symbols-outlined text-[#006194] text-base">lock</span>
                NDAs honored. Specifications kept confidential for Tier-1 defense and automotive parts.
              </div>
              <button
                className="w-full sm:w-auto px-8 py-3.5 bg-[#a33900] hover:bg-[#cc4900] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                type="submit"
              >
                <span className="material-symbols-outlined text-base">send</span>
                Generate Formal Industrial RFQ Quote
              </button>
            </div>

            {/* Success Alert */}
            {rfqSuccessAlert && (
              <div className="p-4 bg-[#cce5ff] text-[#001d31] rounded-xl flex items-center justify-between shadow-md border border-[#93ccff]">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                  <span className="material-symbols-outlined text-xl text-[#006194]">
                    check_circle
                  </span>
                  <span>
                    RFQ #BHM-RFQ-2025-881 Generated! Commercial purchase team is preparing pricing matrix for {companyName}.
                  </span>
                </div>
                <button
                  className="font-bold text-sm p-1"
                  onClick={() => setRfqSuccessAlert(false)}
                  type="button"
                >
                  ✕
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Section 3: Bulk Pricing Tiers & Volume Matrix */}
      <section className="w-full bg-[#eff4ff] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#a33900] font-bold">
                TRANSPARENT COMMERCIAL DISCOUNTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] mt-1">
                Volume Pricing Tiers &amp; Master Contract Rebates
              </h2>
              <p className="text-sm text-[#5a4138] max-w-2xl mt-1">
                Pre-negotiated slab rates applied automatically to your invoice based on monthly purchase commitments or order weight.
              </p>
            </div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-xs flex items-center gap-2 text-xs font-mono font-bold text-[#0b1c30] border border-slate-200">
              <span className="material-symbols-outlined text-[#a33900] text-sm">sync</span>
              Base Reference: M12 Grade 8.8 Hex Bolt
            </div>
          </div>

          {/* Pricing Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between border border-slate-200">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded bg-[#eff4ff] text-[11px] uppercase font-bold text-[#565e74]">
                    Tier 1 • Job Shop
                  </span>
                  <span className="font-mono text-sm font-bold text-[#0b1c30]">100 – 500 Pcs</span>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-[#a33900]">8% OFF</span>
                  <p className="text-[11px] text-[#565e74] uppercase mt-0.5 font-bold">
                    Applied Over Standard Counter Rates
                  </p>
                </div>
                <ul className="space-y-2.5 text-xs text-[#5a4138] mb-6">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006194] text-sm">check</span>
                    Standard Box Packaging
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006194] text-sm">check</span>
                    Batch Test Report on Request
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006194] text-sm">check</span>
                    24-Hour Counter / Yard Pickup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006194] text-sm">check</span>
                    GST Input Invoice Provided
                  </li>
                </ul>
              </div>
              <div className="pt-4 bg-[#eff4ff] -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center justify-between border-t border-slate-100">
                <span className="text-[11px] text-[#565e74] font-medium">Ideal for Maintenance &amp; Proto</span>
                <span className="text-base font-bold text-[#0b1c30] font-mono">₹12.40 / pc</span>
              </div>
            </div>

            {/* Tier 2 (Featured) */}
            <div className="bg-white rounded-2xl p-6 shadow-xl relative flex flex-col justify-between border-2 border-[#a33900]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#a33900] text-white text-[11px] uppercase px-3 py-0.5 rounded-full font-bold shadow-xs">
                Most Popular in Faridabad Units
              </div>
              <div>
                <div className="flex items-center justify-between mb-4 mt-1">
                  <span className="px-2.5 py-1 rounded bg-[#ffdbce] text-[11px] uppercase font-bold text-[#370e00]">
                    Tier 2 • Batch Production
                  </span>
                  <span className="font-mono text-sm font-bold text-[#0b1c30]">500 – 2,500 Pcs</span>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-[#a33900]">15% OFF</span>
                  <p className="text-[11px] text-[#565e74] uppercase mt-0.5 font-bold">
                    Volume Factory Discount
                  </p>
                </div>
                <ul className="space-y-2.5 text-xs text-[#0b1c30] mb-6">
                  <li className="flex items-center gap-2 font-semibold">
                    <span className="material-symbols-outlined text-[#a33900] text-sm">check_circle</span>
                    15-Day Rolling PDC Allowed
                  </li>
                  <li className="flex items-center gap-2 font-semibold">
                    <span className="material-symbols-outlined text-[#a33900] text-sm">check_circle</span>
                    NABL Lab Certified MTC with every lot
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a33900] text-sm">check</span>
                    Free Delivery within 15 km Radius
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a33900] text-sm">check</span>
                    Priority Buffer Stock in Sec-23 Yard
                  </li>
                </ul>
              </div>
              <div className="pt-4 bg-[#ffdbce]/30 -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center justify-between border-t border-[#ffdbce]">
                <span className="text-[11px] text-[#a33900] font-bold">Recommended for CNC / Auto</span>
                <span className="text-xl font-extrabold text-[#a33900] font-mono">₹11.45 / pc</span>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between border border-slate-200">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded bg-[#dae2fd] text-[11px] uppercase font-bold text-[#131b2e]">
                    Tier 3 • Master Cartons
                  </span>
                  <span className="font-mono text-sm font-bold text-[#0b1c30]">Master Lots (2,500+)</span>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-[#006194]">22% OFF</span>
                  <p className="text-[11px] text-[#565e74] uppercase mt-0.5 font-bold">
                    + 100% Free NCR Delivery
                  </p>
                </div>
                <ul className="space-y-2.5 text-xs text-[#0b1c30] mb-6">
                  <li className="flex items-center gap-2 font-semibold">
                    <span className="material-symbols-outlined text-[#006194] text-sm">check_circle</span>
                    30-Day Open Account / Credit Facility
                  </li>
                  <li className="flex items-center gap-2 font-semibold">
                    <span className="material-symbols-outlined text-[#006194] text-sm">check_circle</span>
                    Dedicated Key Account Specialist
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006194] text-sm">check</span>
                    180-Day Raw Material Price Lock
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006194] text-sm">check</span>
                    Custom Stamping &amp; Palletized Strapping
                  </li>
                </ul>
              </div>
              <div className="pt-4 bg-[#eff4ff] -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center justify-between border-t border-slate-100">
                <span className="text-[11px] text-[#565e74]">Tier-1 OEM Contract Rate</span>
                <span className="text-base font-bold text-[#006194] font-mono">₹10.50 / pc</span>
              </div>
            </div>
          </div>

          {/* Custom Tons Callout Bar */}
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#cce5ff] flex items-center justify-center text-[#001d31] shrink-0">
                <span className="material-symbols-outlined text-2xl">calculate</span>
              </div>
              <div>
                <h4 className="font-bold text-base text-[#0b1c30]">
                  Need Custom Tons &amp; Container Estimates?
                </h4>
                <p className="text-xs text-[#5a4138]">
                  We supply full trailer loads (16 to 32 MT) directly from primary mills (Tata, Jindal, Unbrako, TVS Sundram Fasteners).
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                className="px-5 py-2.5 bg-[#eff4ff] text-[#0b1c30] hover:bg-[#dce9ff] font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 border border-slate-200 shadow-xs"
                href="tel:+919811298440"
              >
                <span className="material-symbols-outlined text-base">call</span>
                Speak with Yard Officer
              </a>
              <button
                className="px-5 py-2.5 bg-[#a33900] text-white hover:bg-[#cc4900] font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}
                type="button"
              >
                <span className="material-symbols-outlined text-base">receipt_long</span>
                Upload Tender Spec
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Plant Purchase Team Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-1">
          <span className="text-xs uppercase tracking-wider text-[#006194] font-bold">
            BUILT FOR PLANT PURCHASE TEAMS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] mt-1">
            Why 420+ Faridabad Industrial Plants Settle Their Monthly POs With Us
          </h2>
          <p className="text-sm text-[#5a4138] mt-1">
            Zero documentation friction. Ironclad raw material traceability. Cash flow friendly credit cycles calibrated for Haryana manufacturing units.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#dce9ff] flex items-center justify-center text-[#a33900] mb-4">
                <span className="material-symbols-outlined text-2xl">receipt</span>
              </div>
              <h3 className="font-bold text-base text-[#0b1c30] mb-2">100% GST Input Credit</h3>
              <p className="text-xs text-[#5a4138] leading-relaxed">
                Automated e-Invoicing with immediate GSTR-1 push within 24 hours. Full HSN codes (7318, 8207, 8483) ensuring hassle-free audit compliance.
              </p>
            </div>
            <div className="mt-4 pt-3 bg-[#eff4ff] -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center gap-2 text-[11px] text-[#565e74] border-t border-slate-100 font-semibold">
              <span className="material-symbols-outlined text-[#006194] text-sm">check_circle</span>
              e-Way Bills Generated In-House
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#dce9ff] flex items-center justify-center text-[#006194] mb-4">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <h3 className="font-bold text-base text-[#0b1c30] mb-2">Original MTC &amp; TC Included</h3>
              <p className="text-xs text-[#5a4138] leading-relaxed">
                Every fastener lot ships with its heat-number stamped Mill Test Certificate. Chemical and mechanical composition guarantees for high tensile 10.9 &amp; 12.9.
              </p>
            </div>
            <div className="mt-4 pt-3 bg-[#eff4ff] -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center gap-2 text-[11px] text-[#565e74] border-t border-slate-100 font-semibold">
              <span className="material-symbols-outlined text-[#006194] text-sm">check_circle</span>
              NABL Accredited Testing Facility
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#dce9ff] flex items-center justify-center text-[#cc4900] mb-4">
                <span className="material-symbols-outlined text-2xl">support_agent</span>
              </div>
              <h3 className="font-bold text-base text-[#0b1c30] mb-2">Dedicated Account Manager</h3>
              <p className="text-xs text-[#5a4138] leading-relaxed">
                Direct mobile access to an experienced hardware engineer who knows your machine specs, standard toolings, and regular line replenishment cycles.
              </p>
            </div>
            <div className="mt-4 pt-3 bg-[#eff4ff] -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center gap-2 text-[11px] text-[#565e74] border-t border-slate-100 font-semibold">
              <span className="material-symbols-outlined text-[#006194] text-sm">check_circle</span>
              Dedicated Phone &amp; Yard Representative
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#dce9ff] flex items-center justify-center text-[#0b1c30] mb-4">
                <span className="material-symbols-outlined text-2xl">credit_card</span>
              </div>
              <h3 className="font-bold text-base text-[#0b1c30] mb-2">30-Day Flexible PDC Terms</h3>
              <p className="text-xs text-[#5a4138] leading-relaxed">
                Registered industries in Faridabad &amp; NCR enjoy hassle-free 30-day Post-Dated Cheque credit facilities after initial KYC &amp; purchase verification.
              </p>
            </div>
            <div className="mt-4 pt-3 bg-[#eff4ff] -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center gap-2 text-[11px] text-[#565e74] border-t border-slate-100 font-semibold">
              <span className="material-symbols-outlined text-[#006194] text-sm">check_circle</span>
              Quick 24-Hr KYC Verification
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: IndiaMART Verified Guarantee & Trust Seal Showcase */}
      <section className="w-full bg-[#e5eeff] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-200">
            {/* Badge & Star Supplier Graphic */}
            <div className="flex items-center gap-5 shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-[#006194] flex flex-col items-center justify-center text-white shadow-md">
                <span className="material-symbols-outlined text-3xl">verified</span>
                <span className="text-[10px] tracking-wider uppercase font-extrabold text-center leading-none mt-1">
                  STAR<br />SELLER
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-[#0b1c30]">IndiaMART TrustSEAL® Certified</span>
                  <span className="bg-[#ffdbce] text-[#370e00] text-xs px-2 py-0.5 rounded font-bold uppercase">
                    Star Supplier
                  </span>
                </div>
                <p className="text-xs text-[#5a4138] mt-1">
                  Verified on-site physical yard verification by Dun &amp; Bradstreet / IndiaMART audit team.
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs font-semibold text-[#565e74]">
                  <span className="flex items-center gap-1 text-[#006194]">
                    <span className="material-symbols-outlined text-sm">check</span> 98% On-Time Dispatch
                  </span>
                  <span className="opacity-40">•</span>
                  <span className="flex items-center gap-1 text-[#006194]">
                    <span className="material-symbols-outlined text-sm">check</span> 4.8 / 5 Rating (680+ B2B Reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Buyer Protection Guarantee */}
            <div className="bg-[#eff4ff] p-4 rounded-xl flex items-start gap-4 max-w-lg border border-slate-200">
              <span className="material-symbols-outlined text-[#a33900] text-2xl mt-0.5 shrink-0">
                security
              </span>
              <div>
                <h4 className="font-bold text-sm text-[#0b1c30]">
                  100% Direct Buyer Protection Guarantee
                </h4>
                <p className="text-xs text-[#5a4138] mt-1 leading-relaxed">
                  If the material received does not comply with your specified technical grade or thread tolerance specifications, we arrange immediate gate-level replacement within 6 hours across NCR at zero logistics surcharge.
                </p>
              </div>
            </div>

            {/* Yard Visit Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0 w-full lg:w-auto">
              <button
                className="px-4 py-2.5 bg-[#213145] text-white hover:bg-[#0b1c30] font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                onClick={onOpenPass}
                type="button"
              >
                <span className="material-symbols-outlined text-base">pin_drop</span>
                Request Yard Inspection Pass
              </button>
              <a
                className="px-4 py-2 bg-[#dce9ff] text-[#0b1c30] hover:bg-[#bec6e0] font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1 text-center"
                href="tel:+919811298440"
              >
                <span className="material-symbols-outlined text-base text-[#a33900]">phone</span>
                Call Corporate Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
