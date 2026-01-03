
import React from 'react';
import { 
  Settings, 
  CheckCircle2,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { SERVICES, SHOP_INFO } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100">
      {/* Hero */}
      <section className="relative py-24 text-center px-5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-indigo-600/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight">Professional Tech <span className="text-gradient">Repairs</span></h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            From cracked screens to complex motherboard failures, our technicians at SallyTech breathe new life into your hardware. Fast, affordable, and guaranteed results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => (
              <div key={index} className="flex flex-col p-10 rounded-[40px] bg-slate-900/40 border border-white/5 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group">
                <div className="w-20 h-20 bg-indigo-600/10 border border-indigo-500/20 rounded-3xl flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <Settings size={36} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-8">{service.description}</p>
                <div className="mt-auto">
                   <a 
                    href={`https://wa.me/${SHOP_INFO.whatsapp}?text=Hi, I'm inquiring about ${service.title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-400 font-black group/link uppercase text-xs tracking-widest"
                  >
                    Inquire on WhatsApp
                    <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-slate-900/50 rounded-[60px] p-8 md:p-20 border border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-black text-white mb-10 tracking-tight">Why Trust Our Technicians?</h2>
                <div className="space-y-6">
                  {[
                    "Experienced motherboard-level repair specialists",
                    "Genuine original replacement parts used only",
                    "No-fix, no-fee diagnosis policy",
                    "Same-day service for common issues like screens & keyboards",
                    "8:00 AM to 8:00 PM operational hours",
                    "Central Nairobi location for easy access"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="bg-indigo-600/20 p-1.5 rounded-full text-indigo-400">
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="text-lg text-slate-300 font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=1200" 
                  alt="Repair Service" 
                  className="rounded-[40px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-10 -right-10 bg-indigo-600 text-white p-10 rounded-[40px] shadow-2xl hidden md:block border-4 border-[#0B1120]">
                  <p className="text-5xl font-black mb-1">98%</p>
                  <p className="text-indigo-100 font-black uppercase tracking-widest text-xs">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-32 text-center px-5">
         <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-5xl font-black text-white tracking-tight">Have a problematic laptop?</h2>
            <p className="text-xl text-slate-400 font-medium">Get a free consultation and instant quote on WhatsApp right now.</p>
            <a 
              href={`https://wa.me/${SHOP_INFO.whatsapp}?text=I need a repair quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-indigo-600 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-600/30 transition-all active:scale-95"
            >
              <MessageCircle size={24} />
              Chat with Technician
            </a>
         </div>
      </section>
    </div>
  );
};

export default Services;
