
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  Settings,
  Monitor,
  Cpu,
  MoreVertical
} from 'lucide-react';
import { PRODUCTS, TESTIMONIALS } from '../constants';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { Product } from '../types';

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Show 8 products as requested, filtering for laptops if available
  const featuredProducts = PRODUCTS.filter(p => p.category === 'laptop').slice(0, 8);

  const homeServices = [
    { 
      title: 'Motherboards', 
      desc: 'Expert component-level repairs for dead or malfunctioning motherboards.',
      icon: <Cpu className="text-indigo-400" size={32} />
    },
    { 
      title: 'Battery replacement', 
      desc: 'Reliable replacement for failing batteries across all laptop models.',
      icon: <Settings className="text-indigo-400" size={32} />
    },
    { 
      title: 'Screen Repair', 
      desc: 'Fast replacement for cracked or dead screens with high-quality panels.',
      icon: <Monitor className="text-indigo-400" size={32} />
    }
  ];

  // Double the testimonials for seamless marquee effect
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="bg-[#0B1120] text-slate-100">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-slate-900/50 border border-white/10 px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SallyTech • Nairobi's Best</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold hero-title mb-8 tracking-tighter">
            <span className="word-rotator text-white">
              {/* Ghost text to maintain width based on longest word "Affordable" */}
              <span className="opacity-0 pointer-events-none select-none">Affordable</span>
              <span className="word-rotator-inner absolute top-0 left-0 w-full">
                <span>Best</span>
                <span>Affordable</span>
                <span>Quality</span>
                <span>Best</span> {/* Duplicate for seamless wrap-around slide */}
              </span>
            </span>
            {' '}Laptops <br />
            <span className="text-gradient">Expert Repairs</span>
          </h1>

          <p className="text-xs md:text-sm text-slate-400 max-w-md mx-auto leading-relaxed mb-10 font-medium">
            Welcome to SallyTech. We provide top-tier refurbished and new laptops 
            at unbeatable prices, plus professional repair services you can trust.
          </p>

          <Link 
            to="/products" 
            className="w-full md:w-auto min-w-[280px] bg-indigo-600 text-white px-8 py-4 rounded-xl font-extrabold text-lg hover:bg-indigo-700 transition-all transform active:scale-95 shadow-xl shadow-indigo-600/20"
          >
            View Inventory
          </Link>
        </div>
      </section>

      {/* Inventory Highlight - Showing 8 laptops with 4 in a row on desktop */}
      <section className="py-20 bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">Our Inventory</h2>
            <div className="inventory-underline"></div>
            <p className="text-slate-500 font-medium max-sm:mx-auto mb-4 text-xs md:text-sm max-w-xs mx-auto">
              High-performance machines for work, gaming, and creativity. Click on any laptop for details.
            </p>
            <p className="text-indigo-400 text-xs font-bold">
              Showing Top {featuredProducts.length} Laptops <span className="text-slate-600 font-normal ml-1">(Stock Updated Daily)</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} onViewDetails={setSelectedProduct} />
            ))}
          </div>

          <div className="mt-12 text-center">
             <Link to="/products" className="inline-flex items-center gap-2 bg-slate-900/50 border border-white/5 text-slate-300 px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all group text-sm">
              Browse All Stock
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter uppercase italic">Our Services</h2>
            <div className="inventory-underline"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {homeServices.map((service, idx) => (
              <div key={idx} className="bg-card p-8 rounded-[30px] border border-white/5 flex flex-col items-center text-center group hover:border-indigo-500/30 transition-all">
                <div className="mb-6 p-4 bg-indigo-600/10 rounded-2xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link to="/services" className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-extrabold text-lg shadow-2xl hover:bg-indigo-700 transition-all transform active:scale-95">
              View More Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Authentically Google Reviews Style */}
      <section className="py-24 bg-[#0B1120] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-extrabold text-white tracking-tight uppercase italic mb-10">Trusted in Nairobi</h2>
             <div className="flex justify-center text-[#FBBF24] gap-1 mb-12 scale-125">
               {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
             </div>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative group">
          <div className="animate-marquee flex gap-8 px-8">
            {marqueeItems.map((t, idx) => (
              <div key={idx} className="bg-slate-900/40 p-8 rounded-[24px] border border-white/5 w-[360px] shrink-0 hover:bg-slate-800/40 transition-colors shadow-2xl flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-700 w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-white text-[15px]">{t.name}</h4>
                      <p className="text-[11px] text-slate-500 font-medium">1 review</p>
                    </div>
                  </div>
                  <MoreVertical size={18} className="text-slate-600 cursor-pointer" />
                </div>
                
                <div className="flex text-[#FBBF24] gap-0.5 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>

                <p className="text-slate-300 text-[14px] leading-relaxed mb-6 flex-grow">
                  {t.text}
                </p>

                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                   <div className="bg-indigo-600 w-4 h-4 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                   </div>
                   <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Verified Review</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Subtle gradient edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0B1120] to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0B1120] to-transparent pointer-events-none z-10"></div>
        </div>
      </section>

      {/* Detail Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Home;
