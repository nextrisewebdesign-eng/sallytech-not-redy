
import React from 'react';
import { Product } from '../types';
import { LayoutGrid } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const isOffer = product.offerPrice && product.offerPrice > 0;
  const currentPrice = isOffer ? product.offerPrice : product.price;

  return (
    <div className="bg-card rounded-[24px] overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 border border-white/5 h-full">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950/30 flex items-center justify-center p-2">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 image-sharp"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className={`backdrop-blur-md text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg ${product.condition === 'Brand New' ? 'bg-green-600/90' : 'bg-indigo-600/90'}`}>
            {product.condition}
          </span>
          {isOffer && (
             <span className="bg-red-600/90 backdrop-blur-md text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
               SALE
             </span>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2234]/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">{product.brand}</p>
          <span className="text-[10px] font-bold text-slate-500 uppercase">{product.stock} Units Left</span>
        </div>
        
        <h3 className="text-xl font-extrabold text-white mb-3 leading-tight group-hover:text-indigo-300 transition-colors">
          {product.name}
        </h3>
        
        <div className="mb-5 flex items-baseline gap-2">
           <p className="text-2xl font-black text-cyan-brand">
             <span className="text-sm font-medium mr-1 text-slate-400 uppercase">Ksh</span>
             {currentPrice?.toLocaleString()}
           </p>
           {isOffer && (
              <span className="text-xs text-slate-500 line-through font-bold">Ksh {product.price.toLocaleString()}</span>
           )}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {product.specs.processor && (
            <span className="tag-pill px-3 py-1.5 rounded-lg border border-white/5 bg-slate-900/50 text-[10px] font-bold">
              {product.specs.processor}
            </span>
          )}
          {product.specs.ram && (
            <span className="tag-pill px-3 py-1.5 rounded-lg border border-white/5 bg-slate-900/50 text-[10px] font-bold">
              {product.specs.ram}
            </span>
          )}
        </div>

        <button 
          onClick={() => onViewDetails(product)}
          className="mt-auto w-full py-4 px-6 bg-slate-800 text-white rounded-2xl font-black text-center hover:bg-indigo-600 transition-all active:scale-95 text-xs uppercase tracking-widest flex items-center justify-center gap-2 border border-white/5 group/btn"
        >
          <LayoutGrid size={16} className="group-hover/btn:rotate-90 transition-transform duration-500" />
          View Full Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
