import { motion } from 'motion/react';
import { useEffect } from 'react';
import { cn } from '../lib/utils';
import { Sparkles } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    title: "Cuidado Básico & Spa",
    items: [
      { name: 'Manicure tradicional Dama y Caballero', price: '$40.000' },
      { name: 'Manicure Semipermanente dama', price: '$65.000' },
      { name: 'Manos semipermanente caballero', price: '$45.000' },
      { name: 'Manos semipermanente caballero con diseño', price: '$65.000' },
      { name: 'Pedicure spa Tradicional', price: '$40.000' },
      { name: 'Pedicure Semipermanente', price: '$45.000' },
      { name: 'Pedi Spa', price: '$70.000' },
    ]
  },
  {
    title: "Sistemas en Acrílico",
    items: [
      { name: 'Montaje de acrílico', price: '$120.000' },
      { name: 'Forrado de acrílico', price: '$110.000' },
      { name: 'Retoque de acrílico', price: '$90.000' },
    ]
  },
  {
    title: "Polygel & Innovación",
    items: [
      { name: 'Montaje polygel + semipermanente hasta el #3', price: '$130.000+', description: 'Después del #3 cambia el costo' },
      { name: 'Forrado polygel + semipermanente', price: '$110.000' },
      { name: 'Retoque polygel + semipermanente', price: '$100.000' },
      { name: 'Uña en poly gel (Unidad)', price: '$15.000' },
    ]
  },
  {
    title: "Builder Gel & Nivelación",
    items: [
      { name: 'Builder gel', price: '$160.000' },
      { name: 'Forrado de Builder gel', price: '$125.000' },
      { name: 'Retoque Builder gel', price: '$110.000' },
      { name: 'Tips con base rubber', price: '$110.000' },
      { name: 'Base Rubber + semipermanente', price: '$95.000' },
    ]
  },
  {
    title: "Retiros Adicionales",
    items: [
      { name: 'Retiro de semipermanente de otro lugar', price: '$15.000' },
      { name: 'Retiro de poly gel de otro lugar', price: '$25.000' },
    ]
  }
];

export function ServicesMenu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-brand-white min-h-screen relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-nude/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-28"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-brand-dark leading-tight">
            Menú de <br className="md:hidden" /><span className="italic text-brand-rose">Servicios</span>
          </h1>
          <div className="flex items-center justify-center gap-4">
             <div className="h-px w-12 bg-brand-gold/50"></div>
             <p className="text-brand-dark/60 font-light tracking-[0.3em] uppercase text-xs md:text-sm">Cristina Sierra Nail Experts</p>
             <div className="h-px w-12 bg-brand-gold/50"></div>
          </div>
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-24">
          {menuCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="text-center mb-10 md:mb-12">
                 <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-4">{category.title}</h2>
                 <div className="w-16 h-0.5 bg-brand-gold/30 mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col group">
                    <div className="flex justify-between items-baseline gap-4">
                      <span className="text-brand-dark font-medium text-sm md:text-base group-hover:text-brand-rose transition-colors">{item.name}</span>
                      <div className="flex-1 border-b border-brand-dark/10 border-dotted mx-2 opacity-50"></div>
                      <span className="text-brand-gold font-semibold whitespace-nowrap text-lg">{item.price}</span>
                    </div>
                    {item.description && (
                      <span className="text-xs text-brand-dark/50 mt-1.5 uppercase tracking-wider font-light">{item.description}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-32 text-center border-t border-brand-dark/10 pt-16"
        >
          <p className="text-brand-dark/60 font-serif italic text-xl md:text-2xl">
            "El arte de la belleza hasta en el más mínimo detalle."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
