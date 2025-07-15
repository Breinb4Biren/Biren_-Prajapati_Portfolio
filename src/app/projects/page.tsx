import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageWrapper>
          <Projects />
        </PageWrapper>
        
      </main>
      <Footer />
    </>
  );
}
