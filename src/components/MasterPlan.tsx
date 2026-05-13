import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, Map as MapIcon, LayoutGrid, Building } from 'lucide-react';

const zones = [
  { 
    id: 'z1', 
    name: 'Phân Khu The Grand', 
    image: 'https://images.unsplash.com/photo-1590212151175-e58edd931d41?auto=format&fit=crop&q=80&w=1600',
    details: 'Phân khu cao cấp nhất với hệ sinh thái Clubhouse biệt lập.'
  },
  { 
    id: 'z2', 
    name: 'Phân Khu The Rainbow', 
    image: 'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?auto=format&fit=crop&q=80&w=1600',
    details: 'Sôi động, đầy màu sắc với hệ thống công viên nước chủ đề.'
  },
  { 
    id: 'z3', 
    name: 'Phân Khu The Origami', 
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1600',
    details: 'Đậm chất Nhật Bản với hồ cá Koi và không gian tĩnh tại.'
  },
];

export const MasterPlan = () => {
  const [activeZone, setActiveZone] = useState(zones[0]);

  return (
    <section id="master-plan" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4"
          >
            Tổng Quan Quy Hoạch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-center"
          >
            Mặt Bằng <span className="italic text-gold-light">Tổng Thể Dự Án</span>
          </motion.h2>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setActiveZone(zone)}
              className={`px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 border-b-2 ${
                activeZone.id === zone.id 
                  ? 'border-gold text-navy bg-gold/5' 
                  : 'border-transparent text-gray-400 hover:text-navy'
              }`}
            >
              {zone.name}
            </button>
          ))}
        </div>

        {/* Image Display with Zoom effect */}
        <div className="relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeZone.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video w-full rounded-sm overflow-hidden shadow-2xl cursor-crosshair"
            >
              <img 
                src={activeZone.image} 
                alt={activeZone.name} 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              />
              
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-10 flex flex-col justify-end">
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-gold rounded-full">
                    <ZoomIn size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl mb-1">{activeZone.name}</h3>
                    <p className="text-white/80 font-light max-w-lg">{activeZone.details}</p>
                  </div>
                </div>
              </div>

              {/* Interaction Guide */}
              <div className="absolute top-6 right-6 flex items-center gap-2 bg-navy/80 backdrop-blur-md px-4 py-2 border border-white/20 rounded-full">
                <MapIcon size={14} className="text-gold" />
                <span className="text-white text-[10px] uppercase font-bold tracking-widest">Click to Zoom</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Supporting Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-gray-100 pt-16">
          <div className="flex flex-col items-center text-center">
            <LayoutGrid className="text-gold mb-4" size={32} />
            <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-2">Quy mô Smart</h4>
            <p className="text-gray-400 text-xs">Vận hành đồng bộ bằng Ứng dụng</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Building className="text-gold mb-4" size={32} />
            <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-2">Đa dạng căn hộ</h4>
            <p className="text-gray-400 text-xs">Từ Studio đến 3PN & Penthouse</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MapIcon className="text-gold mb-4" size={32} />
            <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-2">Cảnh quan xanh</h4>
            <p className="text-gray-400 text-xs">Hơn 70% dành cho cây xanh</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Building className="text-gold mb-4" size={32} />
            <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-2">Chuẩn bàn giao</h4>
            <p className="text-gray-400 text-xs">Nội thất cao cấp Kohler/Hafele</p>
          </div>
        </div>
      </div>
    </section>
  );
};
