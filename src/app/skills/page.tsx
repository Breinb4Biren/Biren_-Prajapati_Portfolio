import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageWrapper>
          <Skills />
        </PageWrapper>
        
      </main>
      <Footer />
    </>
  );
}
