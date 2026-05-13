import React from 'react';
import { motion } from 'motion/react';
import { SALES_POLICY } from '../constants';
import { ShieldCheck, Percent, CreditCard, Wallet } from 'lucide-react';

const icons = [ShieldCheck, Percent, CreditCard, Wallet];

export const SalesPolicy = () => {
  return (
    <section id="policy" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium tracking-[0.2em] uppercase text-sm block mb-4"
          >
            Đặc Quyền Sở Hữu
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-navy-dark mb-6"
          >
            {SALES_POLICY.title}
          </motion.h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SALES_POLICY.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-luxury-bg/50 p-8 rounded-sm border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-navy text-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-medium text-navy-dark leading-snug">
                  {item}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* Action Image/Visual Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-2xl">
             {/* Using descriptive image context as the user uploaded images are not found in filesystem directly */}
             <img 
               src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=1200" 
               alt="Chính sách ưu đãi"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-navy-dark/40 flex items-center justify-center">
                <div className="text-center p-6 border border-white/20 backdrop-blur-sm bg-black/20">
                   <p className="text-gold font-serif text-2xl">Vinhomes Priority</p>
                   <p className="text-white text-sm tracking-widest uppercase mt-2">Dành riêng cho chủ nhân tinh hoa</p>
                </div>
             </div>
          </div>
           <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
               alt="Dòng tiền đầu tư"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-navy-dark/40 flex items-center justify-center">
                <div className="text-center p-6 border border-white/20 backdrop-blur-sm bg-black/20">
                   <p className="text-gold font-serif text-2xl">Giải Pháp Tài Chính</p>
                   <p className="text-white text-sm tracking-widest uppercase mt-2">Tối ưu hóa dòng tiền đầu tư</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
