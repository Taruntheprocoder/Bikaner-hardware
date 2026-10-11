import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (categoryId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectCategory,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut listener for ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = PRODUCTS.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q) ||
      p.gradeBadge.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.specs.standard.toLowerCase().includes(q)
    );
  });

  const filteredCategories = CATEGORIES.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-xs">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-[#eff4ff]">
          <span className="material-symbols-outlined text-[#a33900] text-2xl">search</span>
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent text-base text-[#0b1c30] placeholder-[#565e74]/70 outline-none font-medium"
            placeholder="Search fasteners (e.g. M12, 10.9), Fenner belts, SKF bearings, Bosch..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#565e74] hover:text-[#0b1c30] p-1"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 bg-white text-[#565e74] rounded border border-slate-300 hover:bg-slate-100"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Quick Categories */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#565e74] mb-2 px-2">
              Product Families
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {filteredCategories.slice(0, 3).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    onClose();
                  }}
                  className="flex items-center gap-2 p-2 rounded-lg bg-[#eff4ff] hover:bg-[#dce9ff] text-left transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[#a33900] text-lg">{cat.icon}</span>
                  <span className="text-xs font-semibold text-[#0b1c30] truncate">{cat.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Items */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#565e74] mb-2 px-2 flex justify-between items-center">
              <span>Matching Stock SKUs</span>
              <span className="font-mono text-[11px]">{filteredProducts.length} items found</span>
            </div>
            {filteredProducts.length === 0 ? (
              <div className="py-8 text-center text-[#565e74] text-sm">
                <span className="material-symbols-outlined text-3xl mb-1 text-slate-400">inventory_2</span>
                <p>No exact SKU match found for "{query}".</p>
                <p className="text-xs text-[#a33900] mt-1 font-semibold">
                  We stock 15,000+ items offline. Call +91 98112 XXXXX for immediate yard checking.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod);
                      onClose();
                    }}
                    className="p-2.5 rounded-lg hover:bg-[#eff4ff] transition-colors cursor-pointer flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-md bg-[#e5eeff] overflow-hidden shrink-0">
                        <img
                          src={prod.imageUrl}
                          alt={prod.imageAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-sm text-[#0b1c30] group-hover:text-[#a33900] truncate">
                          {prod.name}
                        </div>
                        <div className="text-xs text-[#565e74] flex items-center gap-2 mt-0.5">
                          <span className="font-mono text-[11px] bg-white px-1 rounded border border-slate-200">
                            {prod.sku}
                          </span>
                          <span>•</span>
                          <span className="text-[#a33900] font-semibold">{prod.gradeBadge}</span>
                          <span>•</span>
                          <span>MOQ: {prod.moq}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-extrabold text-[#a33900] text-sm">
                        ₹{prod.price.toFixed(2)}
                        <span className="text-xs text-[#565e74] font-normal"> /{prod.unit}</span>
                      </div>
                      <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                        In Yard
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-[#565e74] flex items-center justify-between px-4">
          <span>Tip: Press <strong>ESC</strong> to dismiss or click item to view quote</span>
          <span className="text-[#006194] font-semibold">Live Stock: Sector 23 Yard</span>
        </div>
      </div>
    </div>
  );
};
