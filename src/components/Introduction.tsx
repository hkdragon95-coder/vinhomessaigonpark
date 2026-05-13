import React from 'react';
import { motion } from 'motion/react';
import { PROJECT_STATS, PILLARS } from '../constants';
import { GraduationCap, Cpu, Leaf } from 'lucide-react';

const pillarIcons = {
  GraduationCap: GraduationCap,
  Cpu: Cpu,
  Leaf: Leaf,
};

export const Introduction = () => {
  return (
    <section id="introduction" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Về Dự Án</span>
            <h2 className="section-title">Khởi Đầu Chuẩn Sống <br /><span className="italic text-gold-light">Thông Minh & Sinh Thái</span></h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Vinhomes Saigon Park tọa lạc tại trung tâm phía Tây Bắc TP.HCM, quy hoạch theo mô hình "All-in-one" hiện đại. Dự án kiến tạo một hệ sinh thái đẳng cấp với công viên cây xanh quy mô lớn, tích hợp công nghệ 4.0 và hạ tầng giáo dục, y tế đạt chuẩn quốc tế.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-10">
              Đây không chỉ là nơi an cư lý tưởng mà còn là biểu tượng mới của sự phồn thịnh, mang đến giá trị sống trọn vẹn cho cộng đồng cư dân tương lai.
            </p>
            
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {PROJECT_STATS.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="text-navy font-serif text-4xl md:text-5xl font-bold">{stat.value}</span>
                    <span className="text-gold font-bold text-lg">{stat.suffix}</span>
                  </div>
                  <span className="text-gray-400 text-sm uppercase tracking-widest mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Images Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <img 
                  src="https://images.unsplash.com/photo-1448630360428-65476f8a6eaa?auto=format&fit=crop&q=80&w=1000" 
                  alt="Vinhomes Image 1" 
                  className="w-full h-[400px] object-cover rounded-sm shadow-2xl"
                />
              </div>
              <div className="col-span-4 self-end">
                <img 
                  src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=600" 
                  alt="Vinhomes Image 2" 
                  className="w-full h-[250px] object-cover rounded-sm shadow-xl"
                />
              </div>
              <div className="col-span-12 -mt-10 pl-20">
                 <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000" 
                  alt="Vinhomes Image 3" 
                  className="w-full h-[300px] object-cover rounded-sm shadow-2xl border-8 border-white"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-navy/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* 3 Pillars Section */}
        <div className="mt-32 pt-24 border-t border-gray-100">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif text-navy-dark">03 Trụ Cột Giá Trị</h3>
            <p className="text-gray-400 mt-4 tracking-widest uppercase text-sm font-medium">Bản sắc đô thị hiện đại</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {PILLARS.map((pillar, index) => {
              const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 bg-luxury-bg text-gold flex items-center justify-center rounded-sm mb-6 group-hover:bg-navy group-hover:text-white transition-all duration-500 shadow-sm">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-navy-dark mb-4">{pillar.title}</h4>
                  <p className="text-gray-500 leading-relaxed font-light">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
