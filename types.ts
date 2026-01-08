
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'laptop' | 'desktop' | 'monitor' | 'accessory';
  specs: {
    processor?: string;
    ram?: string;
    storage?: string;
    screenSize?: string;
    graphics?: string;
    battery?: string;
  };
  description?: string;
  price: number;
  offerPrice?: number;
  image: string;
  stock: number;
  condition: 'Refurbished' | 'Brand New';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
}
