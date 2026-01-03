
import React, { useEffect } from 'react';
import { X, MessageCircle, Cpu, HardDrive, Monitor, Check } from 'lucide-react';
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

  const whatsappMsg = encodeURIComponent(
    `Hello SallyTech! I saw the *${product.name}* (${product.specs.processor}, ${product.specs.ram}) priced at *KSh ${product.price.toLocaleString()}* on your website. I'd like to place an order. Is it available?`
  );
  const whatsappLink = `https://wa.me/${SHOP_INFO.whatsapp}?text=${whatsappMsg}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0B1120]/90 backdrop-blur-xl animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-[#1A2234] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[40px] shadow-2xl border border-white/10 animate-in zoom-in-95 fade-in duration-300 scrollbar-hide">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 bg-slate-900/80 text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-all border border-white/10"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-[300px] lg:h-full bg-slate-900">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 flex gap-2">
              <div className="bg-indigo-600/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">
                {product.condition}
              </div>
            </div>
          </div>

          {/* Details Side */}
          <div className="p-8 md:p-12 flex flex-col">
            <div className="mb-8">
              <p className="text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px] mb-2">{product.brand} Professional</p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 tracking-tight">{product.name}</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-cyan-brand">Ksh {product.price.toLocaleString()}</span>
                <span className="text-slate-500 font-bold text-sm line-through">Ksh {(product.price * 1.15).toLocaleString()}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 text-indigo-400 mb-2">
                  <Cpu size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Processor</span>
                </div>
                <p className="text-white font-bold">{product.specs.processor || 'N/A'}</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 text-indigo-400 mb-2">
                  <Monitor size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Memory (RAM)</span>
                </div>
                <p className="text-white font-bold">{product.specs.ram || 'N/A'}</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 text-indigo-400 mb-2">
                  <HardDrive size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Storage (SSD)</span>
                </div>
                <p className="text-white font-bold">{product.specs.storage || 'N/A'}</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 text-indigo-400 mb-2">
                  <Monitor size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Display</span>
                </div>
                <p className="text-white font-bold">{product.specs.screenSize || 'N/A'}</p>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-slate-300 font-bold">
                <Check size={20} className="text-green-500" />
                <span>Free Delivery</span>
              </div>
            </div>

            <div className="mt-auto space-y-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-6 px-8 bg-[#25D366] text-white rounded-[20px] font-black text-xl flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-all shadow-2xl shadow-green-600/30 active:scale-95 uppercase tracking-tighter"
              >
                <MessageCircle size={28} />
                Order
              </a>
              <p className="text-center text-[10px] font-black text-slate-500 uppercase tracking-widest">
                Safe Payment on Delivery • Instant Response
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
