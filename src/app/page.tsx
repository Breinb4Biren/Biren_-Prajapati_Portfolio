import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
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
