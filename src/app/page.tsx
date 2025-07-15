import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';




export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">
      <PageWrapper>
      <Navbar />
      <Hero />
      <Footer/>
      </PageWrapper>
      
    </main>
  );
}
