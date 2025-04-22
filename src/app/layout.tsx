import type { Metadata } from "next";
import localFont from "next/font/local";
import { Urbanist, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Daily Minute",
  description: "Record one-minute video journals, improve daily, and unlock insights through AI-powered analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
