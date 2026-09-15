import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';
import { locations } from '../data';
import { cn } from '../lib/utils';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-brand-white border border-brand-dark/10 shadow-2xl rounded-2xl w-[320px] max-h-[60vh] flex flex-col overflow-hidden mb-4"
          >
            <div className="bg-brand-dark p-4 flex justify-between items-center">
              <span className="text-brand-ivory font-medium text-sm">Selecciona tu sede</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-brand-ivory/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="overflow-y-auto p-2 flex flex-col gap-1">
              {locations.map((loc) => (
                <a
                  key={loc.id}
                  href={loc.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center p-3 rounded-xl hover:bg-brand-nude/30 transition-colors group"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-brand-dark group-hover:text-brand-dark">{loc.name}</span>
                    <span className="text-[10px] text-brand-dark/50">{loc.zone}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contactar por WhatsApp"
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110",
          isOpen ? "bg-brand-dark text-white shadow-xl" : "bg-[#25D366] text-white hover:shadow-[#25D366]/30"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </button>
    </div>
  );
}
