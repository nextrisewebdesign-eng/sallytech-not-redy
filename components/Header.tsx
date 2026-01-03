
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { SHOP_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Inventory', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#0B1120] border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-extrabold tracking-tight">
              <span className="text-gradient">SallyTech</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 mr-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActive(link.path) ? 'text-indigo-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <a
              href={`tel:${SHOP_INFO.phone}`}
              className="w-11 h-11 bg-indigo-600/20 text-indigo-400 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-lg shadow-indigo-500/10"
            >
              <Phone size={20} />
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-11 h-11 bg-slate-800 text-slate-300 rounded-lg flex items-center justify-center focus:outline-none hover:bg-slate-700 transition-all border border-white/5"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-white/5 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-5 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 rounded-xl text-lg font-bold transition-all ${
                  isActive(link.path) ? 'bg-indigo-600/10 text-indigo-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${SHOP_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-indigo-600 text-white py-4 rounded-2xl font-black mt-6 shadow-xl shadow-indigo-500/20"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
