import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Products = () => {
  return (
    <section id="products" className="py-24 bg-luxury-bg overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              Loại Hình Sản Phẩm
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title"
            >
              Lựa Chọn Hoàn Hảo <br /><span className="italic text-gold-light">Cho Mọi Nhu Cầu</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <button className="luxury-button-outline">Tải Catalog Chi Tiết</button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[500px] overflow-hidden rounded-sm"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold text-[10px] font-bold uppercase tracking-[3px] mb-2 block">{product.category}</span>
                <h3 className="font-serif text-2xl text-white mb-4">{product.title}</h3>
                <p className="text-white/70 text-sm font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {product.description}
                </p>
                <button className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest border-b border-gold pb-2 hover:gap-4 transition-all duration-300">
                  Xem chi tiết <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
