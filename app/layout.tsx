import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PayFix Auth UI',
  description: 'Premium responsive authentication UI for PayFix.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
