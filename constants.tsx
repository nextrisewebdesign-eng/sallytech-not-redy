
import React from 'react';
import { Product, Service, Testimonial } from './types';
import { 
  Laptop, 
  Monitor, 
  Cpu, 
  Settings, 
  ShieldCheck, 
  Truck, 
  PhoneCall, 
  Clock,
  Wrench,
  Activity,
  Zap,
  Battery
} from 'lucide-react';

export const SHOP_INFO = {
  name: 'Sallytech Digital Solutions',
  shortDesc: 'Selling and repairing high-performance desktops and laptops with professional precision.',
  location: 'Popman House, 2nd Floor, Room 17, Nairobi',
  phone: '0799 618902',
  whatsapp: '254799618902',
  email: 'info@sallytech.co.ke',
  hours: '7:00 AM - 8:00 PM (Daily)',
  warranty: '8 Months (Excludes power/physical damage)',
  tiktok: 'https://www.tiktok.com/@br4nchltd?_r=1&_t=ZM-923NHdtroN9',
  delivery: 'Free Delivery'
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'HP EliteBook 840 G5',
    brand: 'HP',
    category: 'laptop',
    specs: { processor: 'Core i5 8th Gen', ram: '8GB DDR4', storage: '256GB SSD', screenSize: '14" FHD' },
    price: 32000,
    image: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=800',
    stock: 12,
    condition: 'Refurbished'
  },
  {
    id: '2',
    name: 'Dell Latitude 7490',
    brand: 'Dell',
    category: 'laptop',
    specs: { processor: 'Core i7 8th Gen', ram: '16GB DDR4', storage: '512GB SSD', screenSize: '14" Touch' },
    price: 38500,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800',
    stock: 8,
    condition: 'Refurbished'
  },
  {
    id: '3',
    name: 'Lenovo ThinkPad X1 Carbon',
    brand: 'Lenovo',
    category: 'laptop',
    specs: { processor: 'Core i7 7th Gen', ram: '16GB', storage: '512GB SSD', screenSize: '14" UHD' },
    price: 45000,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800',
    stock: 5,
    condition: 'Refurbished'
  },
  {
    id: '4',
    name: 'HP EliteBook 820 G3',
    brand: 'HP',
    category: 'laptop',
    specs: { processor: 'Core i5 6th Gen', ram: '8GB', storage: '256GB SSD', screenSize: '12.5"' },
    price: 24500,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
    stock: 10,
    condition: 'Refurbished'
  },
  {
    id: '5',
    name: 'MacBook Air M1 2020',
    brand: 'Apple',
    category: 'laptop',
    specs: { processor: 'Apple M1', ram: '8GB', storage: '256GB SSD', screenSize: '13.3" Retina' },
    price: 85000,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ec696e5237?auto=format&fit=crop&q=80&w=800',
    stock: 4,
    condition: 'Refurbished'
  },
  {
    id: '6',
    name: 'Dell Latitude 5400',
    brand: 'Dell',
    category: 'laptop',
    specs: { processor: 'Core i5 8th Gen', ram: '8GB', storage: '256GB SSD', screenSize: '14"' },
    price: 29000,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    stock: 15,
    condition: 'Refurbished'
  },
  {
    id: '7',
    name: 'Lenovo Yoga 7i',
    brand: 'Lenovo',
    category: 'laptop',
    specs: { processor: 'Core i7 11th Gen', ram: '16GB', storage: '512GB SSD', screenSize: '14" 2-in-1' },
    price: 68000,
    image: 'https://images.unsplash.com/photo-1525547718571-039423c5aefb?auto=format&fit=crop&q=80&w=800',
    stock: 6,
    condition: 'Refurbished'
  },
  {
    id: '8',
    name: 'HP Pavilion 15 Gaming',
    brand: 'HP',
    category: 'laptop',
    specs: { processor: 'Ryzen 5', ram: '8GB', storage: '512GB SSD', screenSize: '15.6" 144Hz' },
    price: 55000,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800',
    stock: 7,
    condition: 'Refurbished'
  },
  {
    id: '9',
    name: 'HP ProDesk 600 G3 SFF',
    brand: 'HP',
    category: 'desktop',
    specs: { processor: 'Core i5 7th Gen', ram: '8GB', storage: '500GB HDD + 128GB SSD' },
    price: 18500,
    image: 'https://images.unsplash.com/photo-1594492683533-b883049188e0?auto=format&fit=crop&q=80&w=800',
    stock: 15,
    condition: 'Refurbished'
  },
  {
    id: '10',
    name: 'Dell UltraSharp 24 Monitor',
    brand: 'Dell',
    category: 'monitor',
    specs: { screenSize: '24" IPS FHD' },
    price: 12000,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800',
    stock: 20,
    condition: 'Refurbished'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Motherboard & BIOS Repair',
    description: 'Expert component-level repairs for dead or malfunctioning motherboards and BIOS programming.',
    icon: 'Cpu'
  },
  {
    id: 's2',
    title: 'Screen Replacement',
    description: 'Fast replacement for cracked or dead screens with high-quality original panels.',
    icon: 'Monitor'
  },
  {
    id: 's3',
    title: 'Battery & Keyboard',
    description: 'Reliable replacement for failing batteries and faulty keys across all laptop models.',
    icon: 'Battery'
  },
  {
    id: 's4',
    title: 'Hardware Diagnosis',
    description: 'Comprehensive analysis to identify performance bottlenecks or hardware failures.',
    icon: 'Activity'
  },
  {
    id: 's5',
    title: 'Full Servicing',
    description: 'Deep cleaning, thermal paste replacement, and software optimization for peak performance.',
    icon: 'Settings'
  },
  {
    id: 's6',
    title: 'Hinges Repair',
    description: 'Fixing broken laptop hinges and housing issues to restore structural integrity.',
    icon: 'Wrench'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Otieno John',
    text: 'john did a goog job he replaced the battery and it works perfectly. highly recommended for laptop issues.',
    rating: 5,
    date: '2 days ago'
  },
  {
    id: 't2',
    name: 'Kamau Wambui',
    text: 'Best laptop repair service in Nairobi CBD. They fixed my motherboard issue when others said it was impossible.',
    rating: 5,
    date: '1 week ago'
  },
  {
    id: 't3',
    name: 'Mercy Mutua',
    text: 'Prompt delivery to Westlands. The HP laptop was exactly as described. Great customer service and legit machines!',
    rating: 5,
    date: '3 days ago'
  },
  {
    id: 't4',
    name: 'Brian Omondi',
    text: 'I received great service... Would recommend to anyone looking for quality and professional work.',
    rating: 5,
    date: '5 days ago'
  },
  {
    id: 't5',
    name: 'Faith Njeri',
    text: 'Repaired my cracked screen in less than 2 hours. These guys are life savers!',
    rating: 5,
    date: '2 weeks ago'
  }
];
