
import React from 'react';
import { SHOP_INFO } from '../constants';
import { Target, Heart, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-[#0B1120] text-slate-100 min-h-screen">
      <section className="relative py-24 text-center px-5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">The <span className="text-gradient">SallyTech</span> Story</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            We are a tech-driven team based in the heart of Nairobi, dedicated to making high-end computing affordable for every student, professional, and business.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200" 
              alt="Our Workshop" 
              className="rounded-[48px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/5"
            />
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-white tracking-tight leading-tight">Quality Refurbished Tech You Can Trust.</h2>
              <p className="text-lg text-slate-400 font-medium leading-relaxed">
                SallyTech Digital Solutions started with a simple observation: new premium laptops are too expensive for most people, while cheap laptops don't last. We bridge that gap by sourcing professional-grade business laptops (HP EliteBooks, Dell Latitudes, ThinkPads) and refurbishing them to "like-new" condition.
              </p>
              <p className="text-lg text-slate-400 font-medium leading-relaxed">
                But we don't just sell. We are technicians at heart. Our repair lab handles the toughest motherboard issues, ensuring your investment is supported long after the sale.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="bg-slate-900/40 p-6 rounded-3xl border border-white/5">
                  <h4 className="text-3xl font-black text-indigo-400">8 Months</h4>
                  <p className="font-black uppercase text-[10px] tracking-widest text-slate-500 mt-1">Full Warranty</p>
                </div>
                <div className="bg-slate-900/40 p-6 rounded-3xl border border-white/5">
                  <h4 className="text-3xl font-black text-indigo-400">5,000+</h4>
                  <p className="font-black uppercase text-[10px] tracking-widest text-slate-500 mt-1">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Target className="text-indigo-400" size={32} />, title: 'Our Mission', desc: 'To provide reliable, high-performance technology at a fraction of the cost.' },
              { icon: <Heart className="text-indigo-400" size={32} />, title: 'Customer First', desc: 'Your satisfaction and productivity are our primary metrics for success.' },
              { icon: <Award className="text-indigo-400" size={32} />, title: 'Excellence', desc: 'Precision repairs and rigorous 24-point testing on every laptop sold.' },
              { icon: <Users className="text-indigo-400" size={32} />, title: 'Community', desc: 'Proudly serving thousands of tech enthusiasts across Nairobi and Kenya.' }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <div className="bg-indigo-600/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-indigo-500/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
