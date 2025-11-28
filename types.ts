export interface NavLink {
  label: string;
  href: string;
}

export interface PricingTier {
  name: string;
  price: string;
  setupFee?: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface CaseStudy {
  title: string;
  metric: string;
  description: string;
}