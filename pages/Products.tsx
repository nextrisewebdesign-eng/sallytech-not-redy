
import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { Product } from '../types';
import { Loader2, AlertTriangle, ExternalLink, HelpCircle } from 'lucide-react';

const Products: React.FC = () => {
  const { products, loading, error, isFallback } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B1120] flex items-center justify-center">
        <Loader2 className="text-indigo-500 animate-spin" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1120] py-16 text-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">Our Inventory</h1>
          <div className="inventory-underline"></div>
          
          {error && (
            <div className="mb-8 p-6 rounded-3xl bg-amber-500/10 border border-amber-500/20 max-w-2xl mx-auto text-left">
              <div className="flex items-center gap-3 text-amber-400 mb-3">
                <AlertTriangle size={20} />
                <h3 className="font-black uppercase tracking-widest text-sm">Database Access Error</h3>
              </div>
              <p className="text-slate-300 text-sm font-medium mb-4 leading-relaxed">
                {error}
              </p>
              <div className="bg-slate-900/80 p-4 rounded-xl border border-white/5 space-y-3">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <HelpCircle size={12} /> How to fix this in Firebase:
                </p>
                <ol className="text-xs text-slate-400 space-y-2 list-decimal pl-4 font-medium">
  <li>
    Go to <strong>Firestore Database</strong> &gt; <strong>Rules</strong> tab.
  </li>
  <li>
    Set <code>allow read: if true;</code> for the <code>laptops</code> collection.
  </li>
  <li>
    Click <strong>Publish</strong>.
  </li>
</ol>
                <a 
                  href="https://console.firebase.google.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors mt-2"
                >
                  Open Firebase Console <ExternalLink size={12} />
                </a>
              </div>
            </div>
          )}

          <p className="text-slate-500 font-medium max-w-md mx-auto mb-4 text-sm">
            High-performance machines for work, gaming, and creativity. Click on any laptop for details.
          </p>
          <div className="flex items-center justify-center gap-3">
            <p className="text-indigo-400 text-sm font-bold">
              Showing {isFallback ? 'Default' : 'Live'} Stock 
              <span className="text-slate-600 font-normal ml-1">({products.length} Laptops)</span>
            </p>
            {!isFallback && <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" title="Connected to Live Database"></span>}
          </div>
        </div>

        {/* Results Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map(product => (
              <ProductCard key={product.id} product={product} onViewDetails={setSelectedProduct} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/20 rounded-[40px] border border-white/5 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-2">No items found</h3>
            <p className="text-slate-400">Inventory is currently empty.</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Products;
