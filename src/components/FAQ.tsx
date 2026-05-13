import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-luxury-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              Giải Đáp Thắc Mắc
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title"
            >
              Câu Hỏi <br /><span className="italic text-gold-light">Thường Gặp</span>
            </motion.h2>
            <p className="text-gray-500 text-lg mb-8 max-w-md">
              Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của quý khách về dự án Vinhomes Saigon Park.
            </p>
            <div className="hidden lg:block">
                <img 
                    src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=600" 
                    alt="FAQ Mascot" 
                    className="w-full max-w-sm rounded-sm grayscale opacity-30 mix-blend-multiply"
                />
            </div>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-black/5 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                >
                  <span className={`font-serif text-xl md:text-2xl transition-colors ${openIndex === index ? 'text-gold' : 'text-navy group-hover:text-gold'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-gold text-white rotate-180' : 'bg-gray-50 text-gray-400'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-8 pt-2">
                        <div className="h-[1px] w-12 bg-gold mb-4" />
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
