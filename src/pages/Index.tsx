import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Publications } from '@/components/Publications';
import { Skills } from '@/components/Skills';
import { Teaching } from '@/components/Teaching';
import { Leadership } from '@/components/Leadership';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Publications />
      <Skills />
      <Teaching />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
