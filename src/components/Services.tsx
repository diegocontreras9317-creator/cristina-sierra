import { motion } from 'motion/react';
import { services } from '../data';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  return (
    <section id="servicios" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-brand-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-xl">
            <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4">Nuestra Experiencia</h2>
            <h3 className="text-4xl md:text-5xl font-serif">Servicios<br/><span className="italic font-light text-brand-rose">Premium</span></h3>
          </div>
          <div className="max-w-sm flex flex-col items-start gap-4">
            <p className="text-brand-dark/70 font-light">
              Diseñamos experiencias a la medida. Desde un cuidado clásico hasta el nail art más vanguardista.
            </p>
            <Link 
              to="/servicios"
              className="inline-flex items-center gap-2 text-brand-dark border-b border-brand-dark pb-1 text-sm uppercase tracking-widest hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              Ver Menú de Precios Completo <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-nude mb-8">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <a 
                     href="/#sedes" 
                     className="bg-brand-ivory text-brand-dark px-6 py-3 rounded-full text-sm uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                   >
                     Reservar <ArrowUpRight className="w-4 h-4" />
                   </a>
                </div>
              </div>
              <h4 className="text-xl font-serif mb-3 group-hover:text-brand-gold transition-colors">{service.title}</h4>
              <p className="text-brand-dark/70 font-light text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="/#sedes" className="mt-auto text-xs uppercase tracking-[0.15em] font-semibold flex items-center gap-2 hover:text-brand-rose transition-colors w-fit">
                Agendar ahora <ArrowUpRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
