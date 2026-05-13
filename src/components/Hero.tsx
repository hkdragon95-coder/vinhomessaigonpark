import React from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000',
    title: 'VINHOMES SAIGON PARK',
    subtitle: 'Đại đô thị thông minh phía Tây TP.HCM',
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000',
    title: 'SỐNG TRỌN TINH HOA',
    subtitle: 'Kiến tạo tương lai với chuẩn sống Resort 5 sao',
  },
  {
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=2000',
    title: 'KẾT NỐI VÔ TẬN',
    subtitle: 'Tâm điểm giao thương, tâm điểm kết nối liên vùng',
  },
];

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Image with Dark Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear scale-100 swiper-slide-active:scale-110"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-navy/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
              </div>

              {/* Content */}
              <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <h2 className="text-gold font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-4">
                    Tâm Điểm Phía Tây Bắc TP.HCM
                  </h2>
                  <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <div className="h-8 md:h-10 text-white/90 text-lg md:text-2xl font-light tracking-widest max-w-2xl mx-auto mb-10">
                    <Typewriter
                      words={['Đại đô thị thông minh', 'Sinh thái bậc nhất', 'Giáo dục quốc tế', 'Công nghệ vượt trội']}
                      loop={0}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={2000}
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="luxury-button w-full sm:w-auto">
                      Nhận Bảng Giá
                    </button>
                    <button className="luxury-button-outline !text-white !border-white hover:!bg-white hover:!text-navy w-full sm:w-auto">
                      Xem Mặt Bằng
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 flex flex-col items-center gap-2 pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Cuộn Xuống</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};
