import type { Metadata } from "next";
import { Geist_Mono, Hanalei_Fill } from "next/font/google";
import "./globals.css";

const hanaleiFill = Hanalei_Fill({
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bearn Sucks",
  description: "Bearn Sucks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hanaleiFill.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
