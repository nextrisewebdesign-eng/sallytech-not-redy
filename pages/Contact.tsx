
import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ExternalLink } from 'lucide-react';
import { SHOP_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B1120] py-20 lg:py-32 text-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24 space-y-6">
          <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tight">Let's <span className="text-gradient">Connect.</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">Have a question or ready to buy? Our team is available from 7 AM to 8 PM daily.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href={`tel:${SHOP_INFO.phone}`}
                className="bg-slate-900/40 p-10 rounded-[40px] border border-white/5 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group"
              >
                <div className="bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-widest mb-1">Call Us</h3>
                <p className="text-slate-400 font-bold">{SHOP_INFO.phone}</p>
              </a>

              <a 
                href={`https://wa.me/${SHOP_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/40 p-10 rounded-[40px] border border-white/5 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group"
              >
                <div className="bg-green-600/10 text-green-400 border border-green-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-widest mb-1">WhatsApp</h3>
                <p className="text-slate-400 font-bold">Instant Chat</p>
              </a>

              <div className="bg-slate-900/40 p-10 rounded-[40px] border border-white/5 md:col-span-2 flex items-start gap-8">
                 <div className="bg-white/5 text-indigo-400 border border-white/5 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                 </div>
                 <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-widest mb-2">Location</h3>
                    <p className="text-slate-400 font-bold leading-relaxed mb-6">{SHOP_INFO.location}</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-400 font-black hover:text-white transition-all uppercase text-xs tracking-widest"
                    >
                      Open Maps
                      <ExternalLink size={16} />
                    </a>
                 </div>
              </div>
            </div>

            <div className="bg-indigo-600 rounded-[40px] p-10 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
               <div className="flex items-center gap-4 mb-8 relative z-10">
                  <Clock className="text-indigo-200" size={32} />
                  <h3 className="text-2xl font-black tracking-tight">Open Hours</h3>
               </div>
               <div className="space-y-4 relative z-10">
                  <div className="flex justify-between border-b border-indigo-500 pb-4 font-bold">
                    <span className="text-indigo-100">Everyday</span>
                    <span>7:00 AM - 8:00 PM</span>
                  </div>
                  <p className="text-xs font-black uppercase tracking-widest text-indigo-200 mt-4 opacity-80">Including Weekends & Holidays</p>
               </div>
            </div>
          </div>

          <div className="bg-slate-900/50 p-10 md:p-14 rounded-[48px] border border-white/5 shadow-2xl relative">
             <div className="absolute top-0 left-0 w-full h-full bg-indigo-600/5 blur-3xl pointer-events-none rounded-full"></div>
             <h2 className="text-3xl font-black text-white mb-10 tracking-tight relative z-10">Quick Inquiry</h2>
             <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-white font-bold" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Phone</label>
                  <input type="tel" placeholder="07XX XXX XXX" className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-white font-bold" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Topic</label>
                  <select className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-white font-bold appearance-none">
                    <option>Buy a Laptop</option>
                    <option>Repair Service</option>
                    <option>Desktop Inquiry</option>
                    <option>Accessories</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-white text-slate-900 py-6 rounded-2xl font-black text-xl hover:bg-indigo-500 hover:text-white transition-all transform active:scale-95 shadow-xl shadow-indigo-600/10"
                  onClick={() => window.open(`https://wa.me/${SHOP_INFO.whatsapp}?text=Contact form submission inquiry.`, '_blank')}
                >
                  Send to WhatsApp
                </button>
                <p className="text-center text-slate-500 font-bold uppercase text-[10px] tracking-widest">Available 24/7 for messages</p>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
