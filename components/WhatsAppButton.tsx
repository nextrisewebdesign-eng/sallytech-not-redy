
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SHOP_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${SHOP_INFO.whatsapp}?text=Hi Sallytech Digital Solutions! I have an inquiry about your laptops/services.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 whatsapp-gradient text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold pr-2">
        Chat with Us
      </span>
    </a>
  );
};

export default WhatsAppButton;
