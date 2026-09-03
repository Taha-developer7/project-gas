import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AL-SHAHERYAR ENTERPRISES | LPG Gas Refill & Doorstep Delivery',
  description: 'AL-SHAHERYAR ENTERPRISES provides LPG gas cylinder refill and reliable doorstep delivery services with a focus on safety, accurate quantity and customer convenience.',
  openGraph: { title: 'AL-SHAHERYAR ENTERPRISES', description: 'LPG refill, delivered with care.', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'AL-SHAHERYAR ENTERPRISES', description: 'LPG refill, delivered with care.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
