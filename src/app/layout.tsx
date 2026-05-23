import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.ico" },
  title: "CortexStack — AI Agents, SaaS & IoT Solutions",
  description:
    "CortexStack delivers cutting-edge AI Agents, SaaS platforms, and IoT solutions to accelerate your business transformation. Partner with us to build the future.",
  keywords: [
    "AI agents",
    "SaaS development",
    "IoT solutions",
    "outsourcing",
    "software development",
  ],
  authors: [{ name: "CortexStack" }],
  openGraph: {
    title: "CortexStack — AI Agents, SaaS & IoT Solutions",
    description:
      "Cutting-edge AI Agents, SaaS platforms, and IoT solutions to accelerate your business transformation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
