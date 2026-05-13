import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const StickyControls = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Zalo Button (Custom Style) */}
      <motion.a
        href="#"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-600/30 transition-shadow relative group"
      >
        <span className="absolute right-full mr-4 bg-white text-navy px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-navy/5 shadow-xl">
            Chat Zalo
        </span>
        <MessageCircle size={28} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${CONTACT_INFO.hotline.replace(/\./g, '')}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-gold text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-gold/30 transition-shadow relative group"
      >
        <span className="absolute right-full mr-4 bg-white text-navy px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-navy/5 shadow-xl">
            Hotline: {CONTACT_INFO.hotline}
        </span>
        <div className="relative">
          <Phone size={28} />
          <span className="absolute inset-0 bg-white rounded-full animate-ping opacity-25" />
        </div>
      </motion.a>
    </div>
  );
};
