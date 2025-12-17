
export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  metric: string;
  image: string;
}

export enum PricingTier {
  STARTER = 'STARTER',
  PRO = 'PRO',
  ENTERPRISE = 'ENTERPRISE'
}

export type View = 'landing' | 'onboarding' | 'dashboard';

export interface OnboardingData {
  agencyName: string;
  agencySlug: string;
  focus: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  project: string;
  status: 'Active' | 'Pending' | 'Inactive';
  value: string;
  lastActive: string;
}

export interface Contract {
  id: string;
  title: string;
  client: string;
  status: 'Draft' | 'Sent' | 'Signed' | 'Expired';
  value: string;
  date: string;
}
