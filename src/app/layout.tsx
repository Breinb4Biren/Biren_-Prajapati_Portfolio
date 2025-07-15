// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Biren | Portfolio',
  description: 'Developer portfolio of Biren Prajapati',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
