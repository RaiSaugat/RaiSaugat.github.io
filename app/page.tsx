import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { Skills } from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        {/* <Projects /> */}
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
