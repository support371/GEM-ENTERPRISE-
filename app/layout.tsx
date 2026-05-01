import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GEM Enterprise',
  description: 'Enterprise cybersecurity and advanced financial services platform.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
