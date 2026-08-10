import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mohitpatel1904.github.io/'),
  title: "Patel Mohit 🤖",
  description: "AI Engineer & ML Engineer. Building intelligent systems with Python, Computer Vision, NLP and Large Language Models.",
  keywords: "Patel Mohit, AI Engineer, Machine Learning, Python, Computer Vision, NLP, OpenCV, MediaPipe, Flask, CatBoost, XGBoost, Scikit-learn, GEC Bhavnagar, Portfolio",
  authors: [{ name: "Patel Mohit" }],
  creator: "Patel Mohit",
  publisher: "Patel Mohit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Patel Mohit - AI & ML Engineer",
    description: "AI Engineer building intelligent systems. MLOps, Computer Vision, NLP, RAG.",
    siteName: "Patel Mohit's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patel Mohit - AI & ML Engineer",
    description: "AI Engineer building intelligent systems. MLOps, Computer Vision, NLP, RAG.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''}/>
    </html>
  );
}
