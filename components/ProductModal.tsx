
import React, { useEffect } from 'react';
import { X, MessageCircle, Cpu, HardDrive, Monitor, Check, Database } from 'lucide-react';
import { Product } from '../types';
import { SHOP_INFO } from '../constants';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [product]);

  if (!product) return null;

  const isOffer = product.offerPrice && product.offerPrice > 0;
  const sellingPrice = isOffer ? product.offerPrice : product.price;

  const whatsappMsg = encodeURIComponent(
    `Hello SallyTech! I saw the *${product.name}* (${product.specs?.processor || ''}, ${product.specs?.ram || ''}) priced at *KSh ${sellingPrice?.toLocaleString()}* on your website. I'd like to place an order. Is it available?`
  );
  const whatsappLink = `https://wa.me/${SHOP_INFO.whatsapp}?text=${whatsappMsg}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0B1120]/95 backdrop-blur-xl animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-[#1A2234] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[40px] shadow-2xl border border-white/10 animate-in zoom-in-95 fade-in duration-300 scrollbar-hide flex flex-col lg:flex-row">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 md:w-12 md:h-12 bg-slate-900/80 text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-all border border-white/10"
        >
          <X size={24} />
        </button>

        {/* Image Side - Maximum Resolution Rendering */}
        <div className="relative w-full lg:w-1/2 min-h-[350px] lg:min-h-full bg-slate-950 flex items-center justify-center overflow-hidden p-4 md:p-8 group">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain image-sharp transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 flex gap-2">
            <div className={`backdrop-blur-md text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl ${product.condition === 'Brand New' ? 'bg-green-600/90' : 'bg-indigo-600/90'}`}>
              {product.condition}
            </div>
            {isOffer && (
              <div className="bg-red-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl animate-pulse">
                Special Offer
              </div>
            )}
          </div>
        </div>

        {/* Details Side */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-between">
          <div className="space-y-8">
            <div>
              <p className="text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px] mb-2">{product.brand} Professional</p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 tracking-tight">{product.name}</h2>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-[#2DD4BF]">Ksh {sellingPrice?.toLocaleString()}</span>
                {isOffer ? (
                  <span className="text-slate-500 font-bold text-sm line-through italic">Ksh {product.price.toLocaleString()}</span>
                ) : (
                  <span className="text-slate-500 font-bold text-sm line-through italic">Ksh {(product.price * 1.15).toLocaleString()}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-all">
                <div className="flex items-center gap-3 text-indigo-400 mb-2">
                  <Cpu size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Processor</span>
                </div>
                <p className="text-white font-bold text-sm md:text-base">{product.specs?.processor || 'Contact Us'}</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-all">
                <div className="flex items-center gap-3 text-indigo-400 mb-2">
                  <Database size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Memory</span>
                </div>
                <p className="text-white font-bold text-sm md:text-base">{product.specs?.ram || 'Contact Us'}</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-all">
                <div className="flex items-center gap-3 text-indigo-400 mb-2">
                  <HardDrive size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Storage</span>
                </div>
                <p className="text-white font-bold text-sm md:text-base">{product.specs?.storage || 'Contact Us'}</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-all">
                <div className="flex items-center gap-3 text-indigo-400 mb-2">
                  <Monitor size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Display</span>
                </div>
                <p className="text-white font-bold text-sm md:text-base">{product.specs?.screenSize || 'Contact Us'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-300 font-bold">
              <Check size={20} className="text-[#2DD4BF]" />
              <span className="text-sm">Verified Unit • Free Local Delivery</span>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-6 px-8 bg-[#25D366] text-white rounded-[24px] font-black text-xl flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-all shadow-2xl shadow-green-600/30 active:scale-95 uppercase tracking-tighter"
            >
              <MessageCircle size={28} />
              Place Order
            </a>
            <p className="text-center text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Available via WhatsApp 7am - 8pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
