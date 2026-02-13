import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: "Neeraj Sharma | FinTech Operations Analyst",
  description:
    "FinTech Operations professional specializing in Digital Banking workflows, Automation, Analytics, and Operational Optimization.",
  keywords: [
    "Neeraj Sharma",
    "FinTech Analyst",
    "Digital Banking",
    "Operations Analyst",
    "Automation",
    "Analytics",
    "Portfolio",
  ],
  openGraph: {
    title: "Neeraj Sharma | FinTech Operations Analyst",
    description:
      "Digital Banking | Automation | Analytics | FinTech Operations",
    url: "https://neeraj-portfolio-beta.vercel.app/",
    siteName: "Neeraj Sharma Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neeraj Sharma | FinTech Operations Analyst",
    description:
      "Digital Banking | Automation | Analytics | FinTech Operations",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
