
import React from 'react';
import { MapPin, Navigation, Building2, DoorOpen, LocateFixed, City } from 'lucide-react';
import { SHOP_INFO } from '../constants';

const MapSection: React.FC = () => {
  // Iframe embed for Popman House Nairobi
  const embedUrl = `https://maps.google.com/maps?q=Popman%20House%20Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="bg-[#0B1120] py-12 md:py-20 px-5 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Information */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-none">
                Visit Our <span className="text-gradient">Shop</span>
              </h2>
              <p className="text-slate-400 font-medium text-base md:text-lg leading-relaxed max-w-xl">
                We are conveniently located in the heart of Nairobi CBD. Drop by for expert laptop diagnosis, 
                repairs, or to browse our latest inventory of high-performance machines.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5 flex items-start gap-4 hover:border-indigo-500/30 transition-colors">
                <div className="bg-indigo-600/10 p-2 rounded-lg text-indigo-400">
                  <Building2 size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Building</p>
                  <p className="text-white font-bold text-sm">Popman House</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5 flex items-start gap-4 hover:border-indigo-500/30 transition-colors">
                <div className="bg-indigo-600/10 p-2 rounded-lg text-indigo-400">
                  <LocateFixed size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Floor</p>
                  <p className="text-white font-bold text-sm">2nd Floor</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5 flex items-start gap-4 hover:border-indigo-500/30 transition-colors">
                <div className="bg-indigo-600/10 p-2 rounded-lg text-indigo-400">
                  <DoorOpen size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Room</p>
                  <p className="text-white font-bold text-sm">Room 17</p>
                </div>
              </div>

              <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5 flex items-start gap-4 hover:border-indigo-500/30 transition-colors">
                <div className="bg-indigo-600/10 p-2 rounded-lg text-indigo-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-white font-bold text-sm">Nairobi CBD</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Popman+House+Nairobi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-xl font-black shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all active:scale-95"
              >
                <Navigation size={20} />
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Right Side: Minimized Map */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-[4/3] rounded-[40px] overflow-hidden border border-white/10 shadow-3xl group">
              {/* Subtle dark overlay for consistency */}
              <div className="absolute inset-0 bg-indigo-900/5 pointer-events-none z-10 transition-opacity group-hover:opacity-0"></div>
              
              <iframe 
                width="100%" 
                height="100%" 
                id="gmap_canvas" 
                src={embedUrl}
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0}
                className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                title="SallyTech Location Map"
              ></iframe>

              {/* Float label for map */}
              <div className="absolute top-6 left-6 z-20 bg-[#0B1120]/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hidden md:flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">SallyTech Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
