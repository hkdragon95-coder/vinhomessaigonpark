import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-navy-dark/95 backdrop-blur-lg py-3 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <Logo className="scale-75 md:scale-90 origin-left transition-transform duration-500 group-hover:scale-100" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/80 hover:text-gold text-[11px] uppercase tracking-widest font-semibold transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href={`tel:${CONTACT_INFO.hotline.replace(/\./g, '')}`}
            className="flex items-center gap-2 text-gold hover:text-white transition-colors duration-300"
          >
            <Phone size={16} />
            <span className="text-[14px] font-bold tracking-wider">{CONTACT_INFO.hotline}</span>
          </a>
          <button className="luxury-button">
            Đăng Ký Tư Vấn
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-[80%] bg-navy-dark z-[60] lg:hidden flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-xl font-serif tracking-widest hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-10 border-t border-white/10">
              <a 
                href={`tel:${CONTACT_INFO.hotline.replace(/\./g, '')}`}
                className="flex items-center gap-3 text-gold mb-6"
              >
                <Phone size={24} />
                <span className="text-xl font-bold">{CONTACT_INFO.hotline}</span>
              </a>
              <button className="w-full luxury-button">
                Đăng Ký Ngay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
