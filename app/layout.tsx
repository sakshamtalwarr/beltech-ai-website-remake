import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // Import the new footer

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Beltech AI | Smart City Intelligence',
  description: 'AI-powered computer vision solutions for traffic and safety.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-white`}>
        <Navbar />
        {children}
        <Footer />  {/* Now Footer appears on every page automatically */}
      </body>
    </html>
  );
}