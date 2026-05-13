import { NavItem, StatItem, Amenity, Product, FaqItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Trang Chủ', href: '#' },
  { label: 'Giới Thiệu', href: '#introduction' },
  { label: 'Vị Trí', href: '#location' },
  { label: 'Tiện Ích', href: '#amenities' },
  { label: 'Mặt Bằng', href: '#master-plan' },
  { label: 'Sản Phẩm', href: '#products' },
  { label: 'Tin Tức', href: '#news' },
  { label: 'Liên Hệ', href: '#contact' },
];

export const PROJECT_STATS: StatItem[] = [
  { label: 'Tổng diện tích', value: '1080', suffix: 'ha' },
  { label: 'Tổng vốn đầu tư', value: '59.000', suffix: 'tỷ' },
  { label: 'Số lượng sản phẩm', value: '44.000', suffix: '+' },
  { label: 'Quy mô dân số', value: '200.000', suffix: '+' },
];

export const PILLARS = [
  {
    title: 'Giáo Dục',
    description: 'Hệ thống trường học Vinschool liên cấp và đại học quốc tế ngay trong lòng dự án.',
    icon: 'GraduationCap',
  },
  {
    title: 'Công Nghệ Sáng Tạo',
    description: 'Ứng dụng AI và IoT trong vận hành, kiến tạo đô thị thông minh chuẩn quốc tế.',
    icon: 'Cpu',
  },
  {
    title: 'Sinh Thái',
    description: 'Môi trường sống trong lành với công viên 36ha và hệ thống cảnh quan xanh mát.',
    icon: 'Leaf',
  },
];

export const SALES_POLICY = {
  title: 'Chính Sách Siêu Ưu Đãi',
  items: [
    '5 Năm Không Lo Lãi Suất',
    'Lãi suất cố định dưới 6%/năm trong 5 năm',
    'Hỗ trợ tài chính tới 80% giá trị nhà',
    'Vốn tự có chỉ từ 15 - 20%',
  ],
};

export const AMENITIES: Amenity[] = [
  {
    id: '1',
    title: 'Hồ bơi vô cực',
    description: 'Tận hưởng cảm giác thư giãn tuyệt đối với tầm nhìn panorama triệu đô.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1000',
    icon: 'Waves',
  },
  {
    id: '2',
    title: 'Công viên 36ha',
    description: 'Lá phổi xanh của dự án với hàng ngàn tiện ích vui chơi, dã ngoại.',
    image: 'https://images.unsplash.com/photo-1519337020834-14c1c935d64c?auto=format&fit=crop&q=80&w=1000',
    icon: 'TreePine',
  },
  {
    id: '3',
    title: 'Vincom Mega Mall',
    description: 'Thiên đường mua sắm và giải trí quy mô lớn nhất khu vực.',
    image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd301?auto=format&fit=crop&q=80&w=1000',
    icon: 'ShoppingBag',
  },
  {
    id: '4',
    title: 'Bệnh viện Vinmec',
    description: 'Chăm sóc sức khỏe toàn diện với tiêu chuẩn quốc tế 5 sao.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1000',
    icon: 'HeartPulse',
  },
  {
    id: '5',
    title: 'Trường học Vinschool',
    description: 'Môi trường giáo dục đẳng cấp kiến tạo thế hệ tương lai.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
    icon: 'GraduationCap',
  },
  {
    id: '6',
    title: 'Bến du thuyền',
    description: 'Đẳng cấp thượng lưu ngay tại cửa ngõ phía Tây TP.HCM.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000',
    icon: 'Ship',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Căn Hộ Cao Cấp',
    description: 'Thiết kế hiện đại, thông minh với tầm nhìn thoáng đãng.',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1000',
    category: 'Apartment',
  },
  {
    id: '2',
    title: 'Nhà Phố Thương Mại',
    description: 'Giải pháp kinh doanh và an cư hoàn hảo tại tâm điểm đô thị.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    category: 'Shophouse',
  },
  {
    id: '3',
    title: 'Biệt Thự Song Lập',
    description: 'Không gian sống riêng tư, hòa quyện cùng thiên nhiên xanh mát.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000',
    category: 'Villa',
  },
  {
    id: '4',
    title: 'Dinh Thự Ven Sông',
    description: 'Kiến trúc đỉnh cao dành cho cộng đồng tinh hoa bậc nhất.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000',
    category: 'Mansion',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Chủ đầu tư của dự án Vinhomes Saigon Park là ai?',
    answer: 'Dự án được đầu tư và phát triển bởi Tập đoàn Vingroup - thương hiệu bất động sản số 1 Việt Nam với uy tín và quy mô hàng đầu.',
  },
  {
    question: 'Vị trí chính xác của dự án nằm ở đâu?',
    answer: 'Vinhomes Saigon Park sở hữu vị trí đắc địa tại cửa ngõ phía Tây Bắc TP.HCM, kết nối trực tiếp với các trục đường huyết mạch và tuyến Metro số 2.',
  },
  {
    question: 'Dự án có những loại hình sản phẩm nào?',
    answer: 'Chúng tôi cung cấp đa dạng sản phẩm bao gồm Căn hộ (Ruby, Sapphire, Diamond), Shophouse, Nhà phố liền kề, Biệt thự đơn lập & song lập.',
  },
  {
    question: 'Khi nào dự án dự kiến bàn giao?',
    answer: 'Tiến độ thi công đang được đảm bảo đúng cam kết. Dự kiến phân khu đầu tiên sẽ được bàn giao vào Quý 4/2026.',
  },
];

export const CONTACT_INFO = {
  hotline: '0898594868',
  email: 'vinhomessaigonpark.68@gmail.com',
  address: 'Khu đô thị Vinhomes Saigon Park, TP. Hồ Chí Minh',
};
