import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AL-SHAHERYAR ENTERPRISES | LPG Gas Refill & Doorstep Delivery',
  description: 'AL-SHAHERYAR ENTERPRISES provides LPG gas cylinder refill and reliable doorstep delivery services with a focus on safety, accurate quantity and customer convenience.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: { title: 'AL-SHAHERYAR ENTERPRISES', description: 'LPG refill, delivered with care.', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'AL-SHAHERYAR ENTERPRISES', description: 'LPG refill, delivered with care.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
