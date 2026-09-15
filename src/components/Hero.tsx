import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-brand-ivory pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-3/4 md:w-1/2 h-full bg-brand-nude/30 rounded-l-full mix-blend-multiply blur-3xl opacity-50 translate-x-1/4"></div>
        <div className="absolute left-0 bottom-0 w-3/4 md:w-1/2 h-full bg-brand-rose/20 rounded-r-full mix-blend-multiply blur-3xl opacity-50 -translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-6 md:gap-8 pt-12 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              Premium Nail Art en Medellín
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1]">
              El arte de <br />
              <span className="italic font-light text-brand-rose">la belleza</span> en<br />
              tus manos.
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="text-brand-dark/70 text-lg md:text-xl max-w-md font-light leading-relaxed"
          >
            Una experiencia estética única. Creatividad, profesionalismo y el lugar perfecto para tu próxima cita en nuestras 9 sedes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a
              href="#sedes"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-brand-dark text-brand-ivory text-sm uppercase tracking-widest hover:bg-brand-dark/90 transition-all"
            >
              Reserva tu cita
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#galeria"
              className="flex items-center justify-center px-8 py-4 border border-brand-dark/20 text-brand-dark text-sm uppercase tracking-widest hover:border-brand-dark hover:bg-brand-dark/5 transition-all"
            >
              Descubre nuestros trabajos
            </a>
          </motion.div>
        </div>

        {/* Image Composition */}
        <div className="md:col-span-6 lg:col-span-7 relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative w-[90%] md:w-[85%] h-full flex justify-end"
          >
             {/* Main Image */}
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-5/6 h-[90%] overflow-hidden bg-brand-nude">
                <img 
                  src="/assets/hero_nail_art_v2.jpg" 
                  alt="Editorial Nail Art Cristina Sierra" 
                  className="w-full h-full object-cover object-center scale-105"
                />
             </div>
             
             {/* Accent overlapping image - optional, using gallery 1 */}
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.7 }}
               className="absolute -bottom-8 md:-bottom-12 -left-4 md:-left-12 w-[55%] md:w-[45%] aspect-[3/4] border-8 border-brand-ivory overflow-hidden bg-brand-rose z-20 shadow-2xl"
             >
                <img 
                  src="/assets/gallery_nail_1.jpeg" 
                  alt="Nail Art Detail" 
                  className="w-full h-full object-cover scale-[1.3] origin-top-right"
                />
             </motion.div>
             
             {/* Circular Accent Image */}
             <motion.div 
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
               className="absolute -top-8 -right-8 md:-top-10 md:-right-10 w-28 h-28 md:w-36 md:h-36 rounded-full border-8 border-brand-ivory overflow-hidden z-30 shadow-xl"
             >
               <img 
                 src="/assets/hero_circle_img.jpg" 
                 alt="Detalle de diseño circular" 
                 className="w-full h-full object-cover"
               />
             </motion.div>
          </motion.div>
        </div>
        
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-dark/50"
      >
        <div className="w-[1px] h-12 bg-brand-dark/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/3 bg-brand-dark"
          />
        </div>
      </motion.div>
    </section>
  );
}
