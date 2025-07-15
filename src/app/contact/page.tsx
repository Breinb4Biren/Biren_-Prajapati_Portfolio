import Navbar from '@/components/Navbar';
import ContactForm from '@/components/Contact'; // or Contact
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageWrapper>
          <ContactForm />
        </PageWrapper>
        
      </main>
      <Footer />
    </>
  );
}
