import { motion } from 'motion/react';
import { services } from '../data';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  return (
    <section id="servicios" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-brand-nude/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-ivory rounded-full blur-3xl opacity-50 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
              <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold">Nuestra Experiencia</h2>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark">
              Servicios<br/>
              <span className="italic font-light text-brand-rose">Premium</span>
            </h3>
          </div>
          <div className="max-w-sm flex flex-col items-start gap-6">
            <p className="text-brand-dark/70 font-light text-sm md:text-base leading-relaxed">
              Diseñamos experiencias a la medida. Desde un cuidado clásico hasta el nail art más vanguardista con las mejores técnicas del mercado.
            </p>
            <Link 
              to="/servicios"
              className="group inline-flex items-center gap-2 text-brand-dark border-b border-brand-dark/30 pb-1 text-xs uppercase tracking-widest hover:text-brand-rose hover:border-brand-rose transition-all duration-300 font-medium"
            >
              Ver Menú de Precios Completo 
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-ivory mb-8 rounded-sm shadow-sm">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end pb-8"> 
                  <a 
                     href="/#sedes"
                     className="bg-brand-white text-brand-dark px-8 py-3 rounded-full text-xs uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-brand-gold hover:text-white"
                  >
                    Reservar <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-serif mb-3 text-brand-dark group-hover:text-brand-rose transition-colors">{service.title}</h4>
                <p className="text-brand-dark/60 font-light text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="/#sedes" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold text-brand-gold hover:text-brand-rose transition-colors group/link">
                  Agendar ahora 
                  <ArrowUpRight className="w-3 h-3 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
