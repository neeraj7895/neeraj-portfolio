import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neeraj Sharma - FinTech Operations Analyst",
  description: "Professional portfolio of Neeraj Sharma. FinTech Operations Analyst specialized in digital banking, automation, and analytics with 3+ years of experience.",
  keywords: ["FinTech", "Operations", "Analytics", "Power BI", "Data Engineering", "Digital Banking"],
  authors: [{ name: "Neeraj Sharma" }],
  openGraph: {
    title: "Neeraj Sharma - FinTech Operations Analyst",
    description: "Transforming digital payment workflows into scalable, secure business solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black antialiased">
        {children}
      </body>
    </html>
  );
}