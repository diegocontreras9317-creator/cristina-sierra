import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '/servicios', isRoute: true },
    { name: 'Sedes', href: '/sedes', isRoute: true },
    { name: 'Galería', href: '/#galeria', isRoute: false },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-brand-ivory/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-brand-dark">
            Cristina Sierra<span className="text-brand-gold italic font-light"> Nail</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm uppercase tracking-widest hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm uppercase tracking-widest hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href="https://www.instagram.com/cristina_sierranail?stkn=MXVsbG4ybGV0b2kyNQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-dark hover:text-brand-gold transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Link
              to="/sedes"
              className="px-6 py-2.5 bg-brand-dark text-brand-ivory text-sm uppercase tracking-widest hover:bg-brand-gold transition-colors"
            >
              Reservar
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-brand-dark"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-ivory flex flex-col px-6 py-12"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-serif text-2xl font-bold">Menú</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-brand-dark" />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 text-3xl font-serif">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-6">
              <Link
                to="/sedes"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-brand-dark text-brand-ivory text-center text-sm uppercase tracking-widest"
              >
                Reservar Cita
              </Link>
              <a
                href="https://www.instagram.com/cristina_sierranail?stkn=MXVsbG4ybGV0b2kyNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-brand-dark"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm uppercase tracking-widest">Síguenos</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
