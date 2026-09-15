import { motion } from 'motion/react';
import { instagramReels } from '../data';
import { Instagram } from 'lucide-react';

export function InstagramReels() {
  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-brand-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 flex items-center gap-2">
              <Instagram className="w-4 h-4" /> En Tendencia
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif">
              Reels en <span className="italic font-light text-brand-rose">Instagram</span>
            </h3>
          </div>
          <p className="text-brand-dark/70 font-light max-w-sm">
            Descubre nuestro día a día, diseños exclusivos y mucho más en nuestras redes oficiales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 place-items-center">
          {instagramReels.map((reel, index) => {
            const embedUrl = reel.url.endsWith('/') ? `${reel.url}embed` : `${reel.url}/embed`;
            
            return (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-full max-w-[340px] bg-brand-ivory rounded-2xl overflow-hidden shadow-xl shadow-brand-dark/5"
              >
                <div className="relative w-full aspect-[9/16] bg-brand-nude/50">
                  <iframe
                    src={embedUrl}
                    className="absolute top-0 left-0 w-full h-full border-none"
                    frameBorder="0"
                    scrolling="no"
                    allowtransparency="true"
                    allow="encrypted-media"
                    title={`Instagram Reel ${index + 1}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/cristina_sierranail?stkn=MXVsbG4ybGV0b2kyNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-brand-dark/20 text-brand-dark text-sm uppercase tracking-widest hover:border-brand-dark hover:bg-brand-dark hover:text-brand-ivory transition-all"
          >
            Ver más en @cristina_sierranail
          </a>
        </div>
      </div>
    </section>
  );
}
