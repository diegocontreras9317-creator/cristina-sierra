import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Home } from './pages/Home';
import { ServicesMenu } from './pages/ServicesMenu';
import { LocationsPage } from './pages/LocationsPage';
import { GalleryPage } from './pages/GalleryPage';

export default function App() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServicesMenu />} />
        <Route path="/sedes" element={<LocationsPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

