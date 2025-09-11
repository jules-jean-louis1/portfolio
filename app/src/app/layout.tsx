import type { Metadata } from "next";
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
  title: "Portfolio - Jules JEAN-LOUIS | Développeur Web",
  description:
    "Portfolio de Jules JEAN-LOUIS, développeur web passionné par le code et le design. Découvrez mes projets et expériences.",
  icons: {
    icon: "/images/logos/jjl.svg",
    shortcut: "/images/logos/jjl.svg",
    apple: "/images/logos/jjl.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
