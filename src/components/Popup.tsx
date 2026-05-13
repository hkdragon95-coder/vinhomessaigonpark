import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift } from 'lucide-react';

export const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Show popup after 5 seconds if not already seen in session
      if (!sessionStorage.getItem('popup-seen')) {
        setIsOpen(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('popup-seen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <button 
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 text-white md:text-gray-400 hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>
            
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=1000" 
                alt="Promotion" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-3 text-gold mb-2">
                  <Gift size={20} />
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">Ưu đãi tháng 05/2026</span>
                </div>
                <h3 className="text-white font-serif text-3xl leading-tight">
                    Tặng Gói Nội Thất <br /><span className="text-gold italic">Lên Đến 200 Triệu</span>
                </h3>
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h4 className="text-navy font-serif text-2xl mb-4">Đăng Ký Nhận Bảng Giá & CSBH</h4>
              <p className="text-gray-500 text-sm mb-8">
                Để lại thông tin chính xác để nhận trọn bộ tài liệu dự án và thư mời tham quan nhà mẫu sớm nhất.
              </p>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Họ và tên *" 
                  className="w-full px-4 py-3 bg-gray-50 border border-black/5 focus:border-gold outline-none text-sm transition-all"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Số điện thoại *" 
                  className="w-full px-4 py-3 bg-gray-50 border border-black/5 focus:border-gold outline-none text-sm transition-all"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full luxury-button"
                >
                  NHẬN ƯU ĐÃI NGAY
                </button>
              </form>
              
              <p className="mt-6 text-[10px] text-gray-400 text-center uppercase tracking-widest">
                Cam kết bảo mật thông tin từ Vingroup
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
