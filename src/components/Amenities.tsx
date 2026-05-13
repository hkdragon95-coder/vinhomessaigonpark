import React from 'react';
import { motion } from 'motion/react';
import { AMENITIES } from '../constants';
import * as LucideIcons from 'lucide-react';

export const Amenities = () => {
  return (
    <section id="amenities" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Đẳng Cấp Thượng Lưu
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Tiện Ích Đặc Quyền <span className="italic text-gold-light">All-In-One</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            Tạo lập một không gian sống nơi mọi nhu cầu từ giáo dục, y tế, mua sắm đến giải trí đều được đáp ứng ngay trước thềm nhà.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES.map((amenity, index) => {
            const Icon = (LucideIcons as any)[amenity.icon] || LucideIcons.HelpCircle;
            
            return (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group luxury-card bg-navy-dark overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={amenity.image} 
                    alt={amenity.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-500" />
                  <div className="absolute top-6 left-6 w-12 h-12 bg-gold flex items-center justify-center rounded-sm">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl mb-4 group-hover:text-gold transition-colors">{amenity.title}</h3>
                  <p className="text-white/60 leading-relaxed font-light">
                    {amenity.description}
                  </p>
                  <button className="mt-6 flex items-center gap-2 text-gold group-hover:gap-4 transition-all duration-300 font-semibold text-xs uppercase tracking-widest">
                    Khám phá <LucideIcons.ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
