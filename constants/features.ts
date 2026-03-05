import { Layout, Database, ShoppingCart, Search, Palette, UserCheck } from 'lucide-react';

export interface Feature {
  id: string;
  name: string;
  minPrice: number;
  maxPrice: number;
  description: string;
  icon: any;
}

export const FEATURES: Feature[] = [
  {
    id: 'base',
    name: 'Base Website',
    minPrice: 500,
    maxPrice: 1200,
    description: 'Core structure, standard pages (Home, About, Contact).',
    icon: Layout,
  },
  {
    id: 'cms',
    name: 'CMS Integration',
    minPrice: 400,
    maxPrice: 800,
    description: 'Ability for the client to edit content (Sanity, WordPress).',
    icon: Database,
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    minPrice: 1200,
    maxPrice: 3000,
    description: 'Online store, product pages, and payment gateway.',
    icon: ShoppingCart,
  },
  {
    id: 'seo',
    name: 'SEO Pack',
    minPrice: 300,
    maxPrice: 600,
    description: 'Performance optimization and search engine indexing.',
    icon: Search,
  },
  {
    id: 'branding',
    name: 'Custom Branding',
    minPrice: 600,
    maxPrice: 1500,
    description: 'Custom logo, color palette, and unique UI design.',
    icon: Palette,
  },
  {
    id: 'auth',
    name: 'User Auth',
    minPrice: 500,
    maxPrice: 1000,
    description: 'Login, registration, and protected user areas.',
    icon: UserCheck,
  },
];
