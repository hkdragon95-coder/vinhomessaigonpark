import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, User, Phone, Mail, FileText } from 'lucide-react';

export const RegistrationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Decorative Overlays */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 border-2 border-gold rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 border-2 border-gold rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Nhận Thông Tin Ngay</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
              Sẵn Sàng Trở Thành <br />Cư Dân Tinh Hoa?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 flex items-center justify-center rounded-sm text-gold mt-1">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Ưu Tiên Chọn Vị Trí Đẹp</h4>
                  <p className="text-white/60">Cơ hội độc quyền sở hữu những căn hộ có tầm nhìn công viên triệu đô.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 flex items-center justify-center rounded-sm text-gold mt-1">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Chính Sách Thanh Toán Ưu Việt</h4>
                  <p className="text-white/60">Hỗ trợ lãi suất 0%, chiết khấu hấp dẫn cho khách hàng đặt chỗ sớm.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 flex items-center justify-center rounded-sm text-gold mt-1">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Quà Tặng Tân Gia Đẳng Cấp</h4>
                  <p className="text-white/60">Gói nội thất cao cấp cho 50 khách hàng đầu tiên trong tháng này.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-sm shadow-2xl relative"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 flex items-center justify-center rounded-full mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="font-serif text-3xl text-navy mb-4">Gửi Thông Tin Thành Công!</h3>
                <p className="text-gray-500 mb-8 px-6">
                  Cảm ơn quý khách đã quan tâm. Đội ngũ tư vấn Vinhomes sẽ liên hệ lại trong thời gian sớm nhất.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="luxury-button"
                >
                  Gửi Yêu Cầu Khác
                </button>
              </motion.div>
            ) : (
              <>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 -z-10 blur-2xl" />
                <h3 className="font-serif text-3xl text-navy mb-8 text-center">Đăng Ký Nhận Tư Vấn</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Họ và tên của quý khách *" 
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-sm text-navy focus:outline-none focus:border-gold transition-colors"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="tel" 
                      placeholder="Số điện thoại cá nhân *" 
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-sm text-navy focus:outline-none focus:border-gold transition-colors"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="email" 
                      placeholder="Địa chỉ Email" 
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-sm text-navy focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <FileText className="absolute left-4 top-4 text-gray-400" size={18} />
                    <textarea 
                      placeholder="Thông tin quý khách quan tâm (Căn hộ, Biệt thự...)" 
                      rows={3}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-sm text-navy focus:outline-none focus:border-gold transition-colors resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    disabled={loading}
                    type="submit" 
                    className="w-full luxury-button flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        GỬI YÊU CẦU NGAY
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  <p className="text-gray-400 text-center text-xs italic">
                    * Thông tin của quý khách hoàn toàn được bảo mật.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
