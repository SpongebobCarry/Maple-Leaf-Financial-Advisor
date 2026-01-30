import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: 'MapleLeaf Financial | Your Trusted Financial Advisor in BC',
    template: '%s | MapleLeaf Financial',
  },
  description: 'Expert financial advice and planning services in British Columbia, Canada. Specializing in life insurance, tax reduction, financial planning, and investing.',
  keywords: ['financial advisor BC', 'life insurance Canada', 'tax reduction BC', 'investment advice Vancouver', 'MapleLeaf Financial'],
  authors: [{ name: 'MapleLeaf Financial' }],
  creator: 'MapleLeaf Financial',
  publisher: 'MapleLeaf Financial',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
