import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageWrapper>
          <Experience />
        </PageWrapper>
        
      </main>
      <Footer />
    </>
  );
}
