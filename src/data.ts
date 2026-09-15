import { Location, Service, GalleryImage } from './types';

export const locations: Location[] = [
  {
    id: 'envigado',
    name: 'Sede Envigado',
    address: 'Carrera 43A #34 Sur, Zona 9, Envigado.',
    whatsapp: '3136198250',
    whatsappLink: 'https://wa.me/573136198250?text=Hola%20Cristina%20Sierra%20Nail%2C%20quiero%20reservar%20una%20cita%20en%20la%20sede%20Envigado.',
    mapsLink: 'https://maps.google.com/?q=Carrera+43A+%2334+Sur,+Zona+9,+Envigado',
    zone: 'Sur',
    image: '/assets/sede_envigado.jpg'
  },
  {
    id: 'sabaneta',
    name: 'Sede Sabaneta',
    address: 'Calle 70 Sur #43A-48, Sabaneta.',
    whatsapp: '3108125103',
    whatsappLink: 'https://wa.me/573108125103?text=Hola%20Cristina%20Sierra%20Nail%2C%20quiero%20reservar%20una%20cita%20en%20la%20sede%20Sabaneta.',
    mapsLink: 'https://maps.google.com/?q=Calle+70+Sur+%2343A-48,+Sabaneta',
    zone: 'Sur',
    image: '/assets/sede_sabaneta.jpg'
  },
  {
    id: 'poblado',
    name: 'Sede Poblado',
    address: 'Calle 10A #37-25, El Poblado, Medellín.',
    whatsapp: '3234264221',
    whatsappLink: 'https://wa.me/573234262421?text=Hola%20Cristina%20Sierra%20Nail%2C%20quiero%20reservar%20una%20cita%20en%20la%20sede%20Poblado.',
    mapsLink: 'https://maps.google.com/?q=Calle+10A+%2337-25,+El+Poblado,+Medellin',
    zone: 'Sur',
    image: '/assets/sede_poblado.jpg'
  },
  {
    id: 'laureles',
    name: 'Sede Laureles',
    address: 'Calle 39 #80B-58, Medellín.',
    whatsapp: '3005269612',
    whatsappLink: 'https://wa.me/573005269612?text=Hola%20Cristina%20Sierra%20Nail%2C%20quiero%20reservar%20una%20cita%20en%20la%20sede%20Laureles.',
    mapsLink: 'https://maps.google.com/?q=Calle+39+%2380B-58,+Medellin',
    zone: 'Centro/Occidente',
    image: '/assets/sede_laureles.jpg'
  },
  {
    id: 'belen',
    name: 'Sede Belén',
    address: 'Carrera 83 #15A-07, Medellín.',
    whatsapp: '3136193142',
    whatsappLink: 'https://wa.me/573136193142?text=Hola%20Cristina%20Sierra%20Nail%2C%20quiero%20reservar%20una%20cita%20en%20la%20sede%20Belen.',
    mapsLink: 'https://maps.google.com/?q=Carrera+83+%2315A-07,+Medellin',
    zone: 'Occidente',
    image: '/assets/sede_belen.jpg'
  },
  {
    id: 'megacentro',
    name: 'Sede Megacentro',
    address: 'Carrera 52 #47-01, locales 418-419, Medellín.',
    whatsapp: '3227639001',
    whatsappLink: 'https://wa.me/573227639001?text=Hola%20Cristina%20Sierra%20Nail%2C%20quiero%20reservar%20una%20cita%20en%20la%20sede%20Megacentro.',
    mapsLink: 'https://maps.google.com/?q=Carrera+52+%2347-01,+Medellin',
    zone: 'Centro',
    image: '/assets/sede_megacentro.jpg'
  },
  {
    id: 'bello',
    name: 'Sede Bello',
    address: 'Calle 27B #58-13, Bello.',
    whatsapp: '3013476775',
    whatsappLink: 'https://wa.me/573013476775?text=Hola%20Cristina%20Sierra%20Nail%2C%20quiero%20reservar%20una%20cita%20en%20la%20sede%20Bello.',
    mapsLink: 'https://maps.google.com/?q=Calle+27B+%2358-13,+Bello',
    zone: 'Norte',
    image: '/assets/sede_bello.jpg'
  },
  {
    id: 'villa-hermosa',
    name: 'Sede Villa Hermosa',
    address: 'Carrera 39 #64-10, Medellín.',
    whatsapp: '3148264173',
    whatsappLink: 'https://wa.me/573148264173?text=Hola%20Cristina%20Sierra%20Nail%2C%20quiero%20reservar%20una%20cita%20en%20la%20sede%20Villa%20Hermosa.',
    mapsLink: 'https://maps.google.com/?q=Carrera+39+%2364-10,+Medellin',
    zone: 'Centro/Oriente',
    image: '/assets/sede_villa_hermosa.jpg'
  },
  {
    id: 'pedicuro',
    name: 'Sede Pedicuro',
    address: 'Calle 39 #80B-58, Medellín.',
    whatsapp: '3232340234',
    whatsappLink: 'https://wa.me/573232340234?text=Hola%20Cristina%20Sierra%20Nail%2C%20quiero%20reservar%20una%20cita%20de%20pedicure%20en%20la%20sede%20Pedicuro.',
    mapsLink: 'https://maps.google.com/?q=Calle+39+%2380B-58,+Medellin',
    zone: 'Centro/Occidente',
    image: '/assets/sede_pedicuro.jpg'
  }
];

export const services: Service[] = [
  {
    id: 'manicura-tradicional',
    title: 'Manicura Tradicional & Semipermanente',
    description: 'Cuidado experto para tus uñas naturales con acabados impecables y duraderos.',
    image: '/assets/services_manicure.jpeg'
  },
  {
    id: 'nail-art',
    title: 'Nail Art de Autor',
    description: 'Diseños exclusivos y personalizados. Convertimos tus uñas en una obra de arte.',
    image: '/assets/gallery_nail_1.jpeg'
  },
  {
    id: 'extensiones',
    title: 'Acrílicas & Polygel',
    description: 'Estructuras perfectas, alargamiento y resistencia con las mejores técnicas del mercado.',
    image: '/assets/gallery_nail_2.jpeg'
  }
];

export const gallery: GalleryImage[] = [
  { id: '1', url: '/assets/gallery_new_1.jpg', alt: 'Nail Art Design 1', category: 'nailart' },
  { id: '2', url: '/assets/gallery_new_2.jpg', alt: 'Nail Art Design 2', category: 'acrilicas' },
  { id: '3', url: '/assets/gallery_new_3.jpg', alt: 'Nail Art Design 3', category: 'tradicional' },
  { id: '4', url: '/assets/gallery_new_4.jpg', alt: 'Hero Nail Art', category: 'nailart' },
];

export const instagramReels: InstagramReel[] = [
  {
    id: '1',
    url: 'https://www.instagram.com/reel/DdIHsRVuaBV/'
  },
  {
    id: '2',
    url: 'https://www.instagram.com/reel/DbI4wj1xe9m/'
  },
  {
    id: '3',
    url: 'https://www.instagram.com/reel/DchLKKvR9al/'
  }
];
