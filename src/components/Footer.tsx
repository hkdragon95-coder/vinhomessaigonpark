import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
             <Logo className="scale-90 origin-left" />
            <p className="text-white/50 leading-relaxed font-light mt-4">
              Biểu tượng thượng lưu mới tại phía Tây Bắc TP.HCM. Kiến tạo cộng đồng tinh hoa bừng sáng với chuẩn sống quốc tế.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-2xl mb-8 border-b border-gold/30 pb-2 inline-block">Liên Kết Nhanh</h4>
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="text-white/60 hover:text-gold transition-colors flex items-center gap-2 group text-sm uppercase tracking-wider"
                >
                  <span className="w-1 h-[1px] bg-gold opacity-0 group-hover:opacity-100 transition-all" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-2xl mb-8 border-b border-gold/30 pb-2 inline-block">Thông Tin Liên Hệ</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-gold shrink-0" size={20} />
                <span className="text-white/60 text-sm">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex gap-4">
                <Phone className="text-gold shrink-0" size={20} />
                <a href={`tel:${CONTACT_INFO.hotline}`} className="text-white font-bold hover:text-gold transition-colors">{CONTACT_INFO.hotline}</a>
              </div>
              <div className="flex gap-4">
                <Mail className="text-gold shrink-0" size={20} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white/60 text-sm hover:text-gold transition-colors">{CONTACT_INFO.email}</a>
              </div>
            </div>
          </div>

          {/* Newsletter / Embed */}
          <div>
            <h4 className="font-serif text-2xl mb-8 border-b border-gold/30 pb-2 inline-block">Vị Trí Bản Đồ</h4>
             <div className="w-full h-48 bg-navy/20 rounded-sm overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125381.18928097984!2d106.60251780517578!3d10.875323212874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752945d8b2d887%3A0xe96843336c1e3458!2sDistrict%2012%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1715580000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2)' }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
            © 2026 VINHOMES SAIGON PARK. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/30">
            <a href="#" className="hover:text-gold transition-colors">Chính Sách Bảo Mật</a>
            <a href="#" className="hover:text-gold transition-colors">Điều Khoản Sử Dụng</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full group-hover:bg-gold group-hover:border-gold transition-all">
                <ArrowUp size={20} />
            </div>
            <span className="text-[8px] uppercase tracking-[0.4em] opacity-30">Back to Top</span>
          </button>
        </div>
      </div>
      
      {/* Scroll Reveal Animation */}
       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-30 shadow-[0_0_15px_rgba(197,160,89,0.5)]" />
    </footer>
  );
};
