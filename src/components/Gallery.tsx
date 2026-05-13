import React from 'react';
import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

const images = [
  { url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1000', span: 'col-span-12 md:col-span-8' },
  { url: 'https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80&w=800', span: 'col-span-12 md:col-span-4' },
  { url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800', span: 'col-span-12 md:col-span-4' },
  { url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80&w=1000', span: 'col-span-12 md:col-span-8' },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Góc Nhìn Dự Án
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Thư Viện <span className="italic text-gold-light">Hình Ảnh</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 gap-x-4 gap-y-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${image.span} group relative aspect-[16/9] md:aspect-auto overflow-hidden rounded-sm cursor-zoom-in`}
            >
              <img 
                src={image.url} 
                alt={`Project View ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="w-12 h-12 border border-white/40 flex items-center justify-center rounded-full scale-0 group-hover:scale-100 transition-transform duration-500">
                  <Camera className="text-white" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <button className="luxury-button">XEM TOÀN BỘ ALBUM</button>
        </div>
      </div>
    </section>
  );
};
