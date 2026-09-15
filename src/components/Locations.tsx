import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { locations } from '../data';
import { MapPin, MessageCircle, Navigation, Search } from 'lucide-react';
import { cn } from '../lib/utils';

export function Locations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const zones = useMemo(() => {
    const uniqueZones = new Set(locations.map(loc => loc.zone));
    return Array.from(uniqueZones);
  }, []);

  const filteredLocations = useMemo(() => {
    return locations.filter(loc => {
      const matchesSearch = loc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            loc.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesZone = selectedZone ? loc.zone === selectedZone : true;
      return matchesSearch && matchesZone;
    });
  }, [searchTerm, selectedZone]);

  return (
    <section id="sedes" className="py-24 md:py-32 bg-brand-nude/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4">Encuentra tu Sede</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6">Tu próxima cita,<br/><span className="italic font-light">donde más te convenga</span></h3>
          <p className="text-brand-dark/70 font-light">
            Con 9 sedes distribuidas en Medellín y su área metropolitana, siempre estamos cerca de ti.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/50" />
            <input 
              type="text" 
              placeholder="Buscar por sede o dirección..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-brand-white border border-brand-dark/10 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-sm"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
            <button
              onClick={() => setSelectedZone(null)}
              className={cn(
                "px-4 py-2 text-xs uppercase tracking-widest border transition-all",
                selectedZone === null 
                  ? "bg-brand-dark text-brand-ivory border-brand-dark" 
                  : "bg-transparent border-brand-dark/20 text-brand-dark hover:border-brand-dark"
              )}
            >
              Todas
            </button>
            {zones.map(zone => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={cn(
                  "px-4 py-2 text-xs uppercase tracking-widest border transition-all",
                  selectedZone === zone 
                    ? "bg-brand-dark text-brand-ivory border-brand-dark" 
                    : "bg-transparent border-brand-dark/20 text-brand-dark hover:border-brand-dark"
                )}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredLocations.map((loc) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={loc.id}
                className="bg-brand-white border border-brand-dark/5 p-8 flex flex-col group hover:border-brand-gold/30 hover:shadow-xl hover:shadow-brand-gold/5 transition-all"
              >
                {loc.image ? (
                  <div className="w-full h-48 mb-6 overflow-hidden bg-brand-nude/30">
                    <img 
                      src={loc.image} 
                      alt={`Fachada de ${loc.name}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 mb-6 bg-brand-nude/30 border border-dashed border-brand-dark/20 flex flex-col items-center justify-center text-brand-dark/40 gap-2">
                    <span className="text-xs uppercase tracking-widest font-semibold">Espacio para foto</span>
                    <span className="text-[10px] uppercase tracking-wider">{loc.name}</span>
                  </div>
                )}
                
                <div className="mb-6 flex-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-rose font-semibold mb-2 block">{loc.zone}</span>
                  <h4 className="font-serif text-2xl mb-3">{loc.name}</h4>
                  <p className="text-brand-dark/60 font-light text-sm flex items-start gap-2">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-brand-gold" />
                    <span>{loc.address}</span>
                  </p>
                </div>
                
                <div className="flex flex-col gap-3 mt-4 pt-6 border-t border-brand-dark/5">
                  <a 
                    href={loc.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-sm font-medium hover:bg-[#20bd5a] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Reservar por WhatsApp
                  </a>
                  <a 
                    href={loc.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 border border-brand-dark/10 text-brand-dark text-sm hover:bg-brand-dark/5 transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-brand-dark/60" />
                    Cómo llegar
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredLocations.length === 0 && (
          <div className="text-center py-20 text-brand-dark/50">
            <p>No encontramos sedes con esa búsqueda.</p>
          </div>
        )}

      </div>
    </section>
  );
}
