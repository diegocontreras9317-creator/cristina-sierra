export interface Location {
  id: string;
  name: string;
  address: string;
  whatsapp: string;
  whatsappLink: string;
  mapsLink: string;
  zone: string;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'nailart' | 'acrilicas' | 'tradicional' | 'pedicure';
}

export interface InstagramReel {
  id: string;
  url: string;
}
