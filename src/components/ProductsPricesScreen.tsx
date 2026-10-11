import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import { Product } from '../types';

interface ProductsPricesScreenProps {
  onOpenRfq: (product?: Product) => void;
  onOpenPdf: () => void;
  selectedCategory?: string;
}

export const ProductsPricesScreen: React.FC<ProductsPricesScreenProps> = ({
  onOpenRfq,
  onOpenPdf,
  selectedCategory: initialCategory,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || 'all');
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');

  // Interactive Fastener Weight & Price Calculator state
  const [calcDiameter, setCalcDiameter] = useState('M12');
  const [calcLength, setCalcLength] = useState(50);
  const [calcGrade, setCalcGrade] = useState('8.8');
  const [calcFinish, setCalcFinish] = useState('Black Oxide');
  const [calcQuantity, setCalcQuantity] = useState(1000);

  // Approximate steel bolt weight formula: Weight ~ pi * (d/2)^2 * L * density + head weight
  const diameterValues: { [key: string]: number } = {
    M6: 6,
    M8: 8,
    M10: 10,
    M12: 12,
    M16: 16,
    M20: 20,
    M24: 24,
    M30: 30,
    M36: 36,
  };

  const d = diameterValues[calcDiameter] || 12;
  const radiusCm = d / 20;
  const lengthCm = calcLength / 10;
  // steel density ~ 7.85 g/cm3
  const shankWeightG = Math.PI * radiusCm * radiusCm * lengthCm * 7.85;
  const headWeightG = Math.PI * (radiusCm * 1.5) * (radiusCm * 1.5) * (radiusCm * 1.2) * 7.85;
  const singleWeightG = shankWeightG + headWeightG;
  const weightPer1000Kg = (singleWeightG * 1000) / 1000;
  const totalWeightKg = (singleWeightG * calcQuantity) / 1000;

  // Rate per kg based on grade
  const gradeRates: { [key: string]: number } = {
    '8.8': 142,
    '10.9': 178,
    '12.9': 235,
    'SS 304': 390,
  };
  const ratePerKg = gradeRates[calcGrade] || 142;
  const estimatedCost = totalWeightKg * ratePerKg;
  const perPieceEstimated = estimatedCost / calcQuantity;

  // Filter products
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      !searchFilter ||
      p.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.gradeBadge.toLowerCase().includes(searchFilter.toLowerCase());
    const matchesGrade =
      selectedGrade === 'all' || p.gradeBadge.toLowerCase().includes(selectedGrade.toLowerCase());
    return matchesCat && matchesSearch && matchesGrade;
  });

  const handleAddCalculatedToRfq = () => {
    const customProd: Product = {
      id: `calc-${Date.now()}`,
      name: `${calcDiameter} x ${calcLength}mm Hex Bolt (${calcFinish})`,
      sku: `CALC-${calcDiameter}-${calcLength}`,
      category: 'fasteners',
      gradeBadge: `Grade ${calcGrade}`,
      badgeColor: 'primary',
      description: `${calcFinish} • Theoretical wt: ${(singleWeightG).toFixed(1)}g / pc`,
      price: Number(perPieceEstimated.toFixed(2)),
      unit: 'Pc',
      moq: calcQuantity,
      inStock: true,
      stockQty: `${(totalWeightKg).toFixed(1)} kg estimated`,
      imageUrl: PRODUCTS[0].imageUrl,
      imageAlt: `${calcDiameter} Hex Head Bolt`,
      specs: {
        material: `Grade ${calcGrade} Alloy`,
        finish: calcFinish,
        standard: 'IS 1364 / ISO 4014',
        application: 'Industrial Machinery Assembly',
      },
    };
    onOpenRfq(customProd);
  };

  return (
    <div className="flex flex-col w-full bg-[#f8f9ff] py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-10 w-full">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase tracking-wider text-[#a33900] font-bold">
                SECTOR 23 STOCK DEPOT
              </span>
              <span className="text-xs text-[#006194] font-bold bg-[#e5eeff] px-2.5 py-0.5 rounded-full">
                Live Wholesale Rate Sheet
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30] tracking-tight">
              Products, Specifications &amp; Pricing
            </h1>
            <p className="text-sm text-[#5a4138] mt-1">
              Explore 3,500+ stocked industrial consumables. Instant transparent pricing with genuine manufacturer test certificates.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPdf}
              className="px-4 py-2.5 bg-white hover:bg-slate-100 text-[#006194] border border-slate-300 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">download</span>
              2025 Price PDF (8.4MB)
            </button>
            <button
              onClick={() => onOpenRfq()}
              className="px-5 py-2.5 bg-[#a33900] hover:bg-[#cc4900] text-white rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">request_quote</span>
              Custom RFQ
            </button>
          </div>
        </div>

        {/* Interactive Fastener Engineering Calculator Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#ffdbce] flex items-center justify-center text-[#a33900]">
              <span className="material-symbols-outlined text-xl">calculate</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0b1c30]">
                Engineering Tool: High-Tensile Bolt Weight &amp; Cost Calculator
              </h2>
              <p className="text-xs text-[#565e74]">
                Calculate theoretical steel weight (IS 1364) and instant wholesale per-kg contract rate.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 bg-[#eff4ff] p-4 rounded-xl border border-slate-200 mb-4 text-xs">
            <div>
              <label className="block font-bold text-[#0b1c30] mb-1">Bolt Diameter</label>
              <select
                className="w-full p-2 bg-white rounded-lg border border-slate-200 font-bold text-xs outline-none"
                value={calcDiameter}
                onChange={(e) => setCalcDiameter(e.target.value)}
              >
                {Object.keys(diameterValues).map((dm) => (
                  <option key={dm} value={dm}>
                    {dm} ({diameterValues[dm]}mm)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-[#0b1c30] mb-1">Length: {calcLength}mm</label>
              <input
                type="range"
                min="20"
                max="200"
                step="5"
                className="w-full accent-[#a33900] mt-2 cursor-pointer"
                value={calcLength}
                onChange={(e) => setCalcLength(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block font-bold text-[#0b1c30] mb-1">Tensile Grade</label>
              <select
                className="w-full p-2 bg-white rounded-lg border border-slate-200 font-bold text-xs outline-none"
                value={calcGrade}
                onChange={(e) => setCalcGrade(e.target.value)}
              >
                <option value="8.8">Grade 8.8 (High-Tensile)</option>
                <option value="10.9">Grade 10.9 (Heavy Auto)</option>
                <option value="12.9">Grade 12.9 (Alloy Unbrako)</option>
                <option value="SS 304">SS 304 (Marine A2-70)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-[#0b1c30] mb-1">Surface Finish</label>
              <select
                className="w-full p-2 bg-white rounded-lg border border-slate-200 font-bold text-xs outline-none"
                value={calcFinish}
                onChange={(e) => setCalcFinish(e.target.value)}
              >
                <option>Black Oxide / Phosphate</option>
                <option>Zinc Yellow Plated</option>
                <option>Hot-Dip Galvanized (HDG)</option>
                <option>Dacromet / Geomet</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-[#0b1c30] mb-1">Lot Quantity</label>
              <input
                type="number"
                min="100"
                step="100"
                className="w-full p-2 bg-white rounded-lg border border-slate-200 font-mono font-bold text-xs outline-none"
                value={calcQuantity}
                onChange={(e) => setCalcQuantity(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Calculator Output Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs w-full sm:w-auto">
              <div>
                <span className="text-[#565e74] block">Single Pc Wt:</span>
                <strong className="text-sm font-mono text-[#0b1c30]">
                  {singleWeightG.toFixed(1)} grams
                </strong>
              </div>
              <div>
                <span className="text-[#565e74] block">Wt / 1,000 Pcs:</span>
                <strong className="text-sm font-mono text-[#0b1c30]">
                  {weightPer1000Kg.toFixed(1)} kg
                </strong>
              </div>
              <div>
                <span className="text-[#565e74] block">Total Lot Wt:</span>
                <strong className="text-sm font-mono text-[#006194]">
                  {totalWeightKg.toFixed(1)} kg
                </strong>
              </div>
              <div>
                <span className="text-[#565e74] block">Approx Est. Rate:</span>
                <strong className="text-sm font-mono text-[#a33900]">
                  ₹{perPieceEstimated.toFixed(2)} / pc
                </strong>
              </div>
            </div>

            <button
              onClick={handleAddCalculatedToRfq}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#a33900] hover:bg-[#cc4900] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer shrink-0"
            >
              <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
              Add Specification to RFQ
            </button>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#a33900] text-white shadow-xs'
                  : 'bg-white text-[#565e74] border border-slate-200 hover:bg-slate-100'
              }`}
            >
              All Categories ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-[#a33900] text-white shadow-xs'
                    : 'bg-white text-[#565e74] border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="material-symbols-outlined text-sm">{cat.icon}</span>
                {cat.title.split('&')[0].trim()}
              </button>
            ))}
          </div>

          {/* Search & Grade Filter */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Filter by SKU / name..."
                className="pl-8 pr-3 py-1.5 text-xs bg-white text-[#0b1c30] rounded-lg border border-slate-300 outline-none focus:ring-1 focus:ring-[#a33900]"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
              />
              <span className="material-symbols-outlined text-slate-400 text-sm absolute left-2 top-2">
                search
              </span>
            </div>

            <select
              className="py-1.5 px-2 text-xs bg-white text-[#0b1c30] rounded-lg border border-slate-300 outline-none"
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
            >
              <option value="all">All Grades</option>
              <option value="8.8">Grade 8.8</option>
              <option value="10.9">Grade 10.9</option>
              <option value="12.9">Grade 12.9</option>
              <option value="SKF">SKF Bearings</option>
              <option value="Fenner">Fenner Belts</option>
              <option value="Bosch">Bosch Power Tools</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden border border-slate-200 group"
            >
              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded font-bold ${
                      prod.badgeColor === 'primary'
                        ? 'bg-[#ffdbce] text-[#a33900]'
                        : prod.badgeColor === 'secondary'
                        ? 'bg-[#dae2fd] text-[#565e74]'
                        : 'bg-[#cce5ff] text-[#006194]'
                    }`}
                  >
                    {prod.gradeBadge}
                  </span>
                  <span className="text-[#565e74] text-[11px] font-mono">{prod.sku}</span>
                </div>

                <div className="h-44 rounded-xl bg-[#eff4ff] overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={prod.imageUrl}
                    alt={prod.imageAlt}
                  />
                  {prod.stockQty && (
                    <span className="absolute bottom-2 right-2 bg-[#213145]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                      {prod.stockQty}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-sm text-[#0b1c30] line-clamp-1 group-hover:text-[#a33900] transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#565e74] mt-0.5 line-clamp-2">{prod.description}</p>
                </div>

                {/* Specs Box */}
                <div className="p-2.5 bg-[#eff4ff] rounded-lg text-[11px] space-y-1 text-[#5a4138]">
                  <div className="flex justify-between">
                    <span className="text-[#565e74]">Material:</span>
                    <span className="font-semibold text-[#0b1c30] truncate max-w-[130px]">
                      {prod.specs.material}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#565e74]">Standard:</span>
                    <span className="font-mono font-semibold text-[#0b1c30]">
                      {prod.specs.standard}
                    </span>
                  </div>
                </div>

                {/* Price Slab */}
                <div className="bg-[#f8f9ff] p-2.5 rounded-lg flex items-baseline justify-between border border-slate-100">
                  <div>
                    <span className="text-xl font-extrabold text-[#a33900] leading-none">
                      ₹{prod.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-[#565e74]"> /{prod.unit}</span>
                  </div>
                  <span className="text-xs text-[#0b1c30] font-semibold">
                    MOQ: {prod.moq} {prod.unit}s
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0">
                <button
                  onClick={() => onOpenRfq(prod)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#eff4ff] hover:bg-[#a33900] hover:text-white text-[#0b1c30] font-bold text-xs transition-colors cursor-pointer border border-slate-200"
                >
                  <span className="material-symbols-outlined text-base">request_quote</span>
                  Get Best Price
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">inventory_2</span>
            <p className="text-sm font-bold text-[#0b1c30]">No items found matching the selected filter.</p>
            <p className="text-xs text-[#565e74] mt-1">
              Try adjusting your search criteria or contact our Sector 23 pricing desk directly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
