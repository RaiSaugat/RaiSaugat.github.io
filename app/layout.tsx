import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Saugat Rai | Senior Software Engineer',
  description:
    'Senior Software Engineer with 7+ years of experience building interactive user interfaces and scalable web applications.',
  keywords: [
    'Software Engineer',
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'Saugat Rai' }],
  openGraph: {
    title: 'Saugat Rai | Senior Software Engineer',
    description:
      'Senior Software Engineer with 7+ years of experience building interactive user interfaces.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <GoogleAnalytics gaId="G-G4K89YMDYR" />
      </body>
    </html>
  );
}
