import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Plane, Train, Building2, Car } from 'lucide-react';

const connectivity = [
  { time: '5 Phút', desc: 'Kết nối trực tiếp tuyến Metro số 2', icon: Train },
  { time: '10 Phút', desc: 'Đến Trung tâm Hành chính Quận 12', icon: Building2 },
  { time: '20 Phút', desc: 'Sân bay Quốc tế Tân Sơn Nhất', icon: Plane },
  { time: '30 Phút', desc: 'Trung tâm Quận 1 & KĐT Thủ Thiêm', icon: Car },
];

export const Location = () => {
  return (
    <section id="location" className="py-24 bg-luxury-bg overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Vị Trí Độc Tôn</span>
              <h2 className="section-title">Tâm Điểm <br />Giao Thoa Thịnh Vượng</h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Vinhomes Saigon Park sở hữu tọa độ "vàng" tại cửa ngõ Tây Bắc, nơi giao thoa giữa các trục đường kinh tế trọng điểm và hạ tầng giao thông tương lai của TP.HCM.
              </p>

              <div className="space-y-6">
                {connectivity.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-6 p-6 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow group border-l-2 border-transparent hover:border-gold"
                  >
                    <div className="w-12 h-12 bg-navy/5 flex items-center justify-center rounded-full group-hover:bg-gold/10 transition-colors">
                      <item.icon className="text-navy group-hover:text-gold transition-colors" size={24} />
                    </div>
                    <div>
                      <span className="text-gold font-bold text-xl block leading-none mb-1">{item.time}</span>
                      <span className="text-gray-500 font-medium">{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Map Feature */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative p-4 md:p-8 bg-white shadow-2xl rounded-sm overflow-hidden"
            >
              {/* Fake Map Illustration / Embed */}
              <div className="aspect-[4/3] w-full bg-navy/5 relative overflow-hidden group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125381.18928097984!2d106.60251780517578!3d10.875323212874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752945d8b2d887%3A0xe96843336c1e3458!2sDistrict%2012%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1715580000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
                {/* Floating Map Detail Pins */}
                <div className="absolute top-1/4 left-1/3 p-4 bg-white shadow-xl rounded-sm flex items-center gap-3 animate-floating">
                  <div className="w-4 h-4 bg-gold rounded-full animate-pulse" />
                  <span className="font-bold text-navy text-sm uppercase tracking-tighter">VINHOMES SAIGON PARK</span>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy/5 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
