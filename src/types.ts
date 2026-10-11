export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  gradeBadge: string;
  badgeColor?: 'primary' | 'secondary' | 'tertiary';
  description: string;
  price: number;
  unit: string;
  moq: number;
  inStock: boolean;
  stockQty?: string;
  imageUrl: string;
  imageAlt: string;
  specs: {
    material: string;
    finish: string;
    standard: string;
    application: string;
  };
}

export interface Category {
  id: string;
  title: string;
  variantsCount: string;
  description: string;
  brands: string;
  icon: string;
  colorTheme: 'primary' | 'secondary' | 'tertiary';
}

export interface FastenerMatrixRow {
  grade: string;
  tensileStrength: string;
  yieldStrength: string;
  application: string;
  sec23Stock: string;
  ratePerKg: string;
  highlightColor?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  initials: string;
}

export interface RfqItem {
  id: string;
  description: string;
  grade: string;
  size: string;
  quantity: number;
  unit: string;
  targetDate?: string;
}

export interface RfqFormData {
  companyName: string;
  gstin: string;
  phone: string;
  sector: string;
  deliveryAddress: string;
  urgency: 'line_down' | 'regular' | 'monthly_contract';
  creditTerms: string;
  whatsappDesk: boolean;
  specialNotes: string;
  items: RfqItem[];
}
