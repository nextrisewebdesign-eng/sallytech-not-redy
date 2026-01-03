
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';
import { SHOP_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-white text-2xl font-black italic tracking-tighter">SallyTech</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Nairobi's premier shop for business-class laptops and professional component-level repairs. Located at Popman House.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-sm font-black uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3 text-sm font-bold">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-indigo-400 transition-colors">Inventory</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-sm font-black uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li className="flex gap-3">
                <MapPin className="text-indigo-500 shrink-0" size={18} />
                <span>{SHOP_INFO.location}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-indigo-500 shrink-0" size={18} />
                <span>{SHOP_INFO.phone}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="text-indigo-500 shrink-0" size={18} />
                <span>{SHOP_INFO.hours}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-indigo-600/10 p-6 rounded-3xl border border-indigo-500/20">
              <div className="flex items-center gap-2 text-white font-black mb-2">
                <ShieldCheck size={20} className="text-indigo-400" />
                <span>8 Months Warranty</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Standard on all refurbished units. Quality guaranteed.</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-600">
          <p>© {new Date().getFullYear()} SallyTech Digital. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={SHOP_INFO.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
