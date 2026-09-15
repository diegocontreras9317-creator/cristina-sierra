import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-ivory py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-brand-ivory/10 pb-12 mb-8">
        <div>
          <Link to="/" className="font-serif text-3xl font-bold tracking-tight inline-block mb-6">
            Cristina Sierra<span className="text-brand-gold italic font-light"> Nail</span>
          </Link>
          <p className="text-brand-ivory/60 font-light max-w-sm">
            Arte, precisión y belleza en cada detalle. Tu lugar de confianza en Medellín y área metropolitana.
          </p>
        </div>
        
        <div>
          <h4 className="uppercase tracking-[0.2em] text-xs font-semibold mb-6 text-brand-gold">Navegación</h4>
          <ul className="space-y-4 font-light text-brand-ivory/80">
            <li><Link to="/servicios" className="hover:text-brand-gold transition-colors">Menú de Servicios</Link></li>
            <li><Link to="/sedes" className="hover:text-brand-gold transition-colors">Nuestras Sedes</Link></li>
            <li><a href="/#galeria" className="hover:text-brand-gold transition-colors">Galería</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="uppercase tracking-[0.2em] text-xs font-semibold mb-6 text-brand-gold">Redes Oficiales</h4>
          <ul className="space-y-4 font-light text-brand-ivory/80">
            <li>
              <a 
                href="https://www.instagram.com/cristina_sierranail?stkn=MXVsbG4ybGV0b2kyNQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-gold transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a 
                href="https://linktr.ee/CristinaSierraNails" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-gold transition-colors"
              >
                Linktree
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-ivory/40 font-light">
        <p>&copy; {new Date().getFullYear()} Cristina Sierra Nail. Todos los derechos reservados.</p>
        <p>Hecho con precisión y estilo.</p>
      </div>
    </footer>
  );
}
