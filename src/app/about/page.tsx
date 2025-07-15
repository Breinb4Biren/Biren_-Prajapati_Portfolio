// src/app/about/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageWrapper>
          <About />
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
}
