import { useEffect } from 'react';
import { Locations } from '../components/Locations';

export function LocationsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-brand-nude/20 min-h-screen">
      <Locations />
    </div>
  );
}
