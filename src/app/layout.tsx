import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Banafit - Energizing Sustainable Innovation",
  description:
    "Revolutionizing physical education through circular economy solutions from waste tires. Sports equipment, furniture, and educational modules.",
  keywords: ['banafit', 'ban', 'olahraga', 'sekolah', 'inovasi', 'ban bekas', 'gunungkidul', 'banafit gunungkidul'],
  robots: "index, follow",
  authors: [
    {
      name: "Banafit Team",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${notoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
