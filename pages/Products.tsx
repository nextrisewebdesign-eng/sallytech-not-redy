
import React, { useState, useMemo } from 'react';
import { Package, Tag } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { Product } from '../types';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (product.specs.processor?.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0B1120] py-16 text-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">Our Inventory</h1>
          <div className="inventory-underline"></div>
          <p className="text-slate-500 font-medium max-w-md mx-auto mb-4 text-sm">
            High-performance machines for work, gaming, and creativity. Click on any laptop for details.
          </p>
          <p className="text-indigo-400 text-sm font-bold">
            Showing Page 1 of 1 <span className="text-slate-600 font-normal ml-1">({filteredProducts.length} Laptops)</span>
          </p>
        </div>

        {/* Results Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onViewDetails={setSelectedProduct} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/20 rounded-[40px] border border-white/5 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-2">No matching items found</h3>
            <button 
              onClick={() => {setActiveCategory('all'); setSearchQuery('');}}
              className="mt-6 text-indigo-400 font-bold hover:underline text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Products;
