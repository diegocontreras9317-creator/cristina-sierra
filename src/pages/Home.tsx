import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Gallery } from '../components/Gallery';
import { InstagramReels } from '../components/InstagramReels';

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <InstagramReels />
    </>
  );
}
