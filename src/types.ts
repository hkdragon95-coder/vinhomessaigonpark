export interface NavItem {
  label: string;
  href: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}
