import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I Kadek Hendrayana | Digital Marketing Portfolio",
  description:
    "Digital Marketing portfolio of I Kadek Hendrayana, combining content creation, visual design, social media, and website management.",
  keywords: [
    "I Kadek Hendrayana",
    "Digital Marketing",
    "Content Creation",
    "Social Media",
    "Website Management",
    "Bali",
  ],
  authors: [{ name: "I Kadek Hendrayana" }],
  openGraph: {
    title: "I Kadek Hendrayana | Digital Marketing Portfolio",
    description:
      "Content strategy, visual design, social media, and website management.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C4LV1BPPPS"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C4LV1BPPPS');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
