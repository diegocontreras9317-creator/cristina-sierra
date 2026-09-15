import { motion } from 'motion/react';
import { useEffect } from 'react';
import { cn } from '../lib/utils';

interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

const menuItemsLeft: MenuItem[] = [
  { name: 'Pedicure spa Tradicional', price: '$40.000' },
  { name: 'Pedicure Semipermanente', price: '$45.000' },
  { name: 'Manicure Semipermanente dama', price: '$65.000' },
  { name: 'Manicure tradicional DAMA Y CABALLERO', price: '$40.000' },
  { name: 'Manos semipermanente caballero', price: '$45.000' },
  { name: 'Manos semipermanente caballero CON DISEÑO', price: '$65.000' },
  { name: 'Pedi Spa', price: '$70.000' },
  { name: 'Uña en poly gel', price: '$15.000' },
  { name: 'Base Rubber + semipermanente', price: '$95.000' },
  { name: 'Tips con base rubber', price: '$110.000' },
  { name: 'Builder gel', price: '$160.000' },
];

const menuItemsRight: MenuItem[] = [
  { name: 'Forrado de Builder gel', price: '$125.000' },
  { name: 'Retoque Builder gel', price: '$110.000' },
  { name: 'Forrado polygel + semipermanente', price: '$110.000' },
  { name: 'Retoque polygel + semipermanente', price: '$100.000' },
  { name: 'Montaje polygel + semipermanente hasta el #3', price: '$130.000+', description: 'Después del #3 cambia el costo' },
  { name: 'Retiro de semipermanente de otro lugar', price: '$15.000' },
  { name: 'Retiro de poly gel de otro lugar', price: '$25.000' },
  { name: 'Montaje de acrílico', price: '$120.000' },
  { name: 'Forrado de acrílico', price: '$110.000' },
  { name: 'Retoque de acrílico', price: '$90.000' },
];

export function ServicesMenu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-brand-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Precios y <span className="italic text-brand-rose">Servicios</span></h1>
          <p className="text-brand-dark/60 font-light tracking-widest uppercase text-xs">Cristina Sierra Nail</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {menuItemsLeft.map((item, index) => (
              <motion.div
                key={`left-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col"
              >
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-brand-dark font-medium text-sm md:text-base">{item.name}</span>
                  <div className="flex-1 border-b border-brand-dark/10 border-dotted mx-2"></div>
                  <span className="text-brand-gold font-semibold whitespace-nowrap">{item.price}</span>
                </div>
                {item.description && (
                  <span className="text-xs text-brand-dark/50 mt-1">{item.description}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {menuItemsRight.map((item, index) => (
              <motion.div
                key={`right-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col"
              >
                <div className="flex justify-between items-baseline gap-4">
                  <span className="text-brand-dark font-medium text-sm md:text-base">{item.name}</span>
                  <div className="flex-1 border-b border-brand-dark/10 border-dotted mx-2"></div>
                  <span className="text-brand-gold font-semibold whitespace-nowrap">{item.price}</span>
                </div>
                {item.description && (
                  <span className="text-xs text-brand-dark/50 mt-1">{item.description}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-brand-dark/40 font-serif italic text-lg">Belleza que nace en tus manos</p>
        </motion.div>
      </div>
    </div>
  );
}
