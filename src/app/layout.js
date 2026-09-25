// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.buildslabs.com"),
  title: {
    default: "Buildslabs | Custom Web & Mobile App Development Company",
    template: "%s | Buildslabs",
  },
  description:
    "Buildslabs designs and builds custom web apps, Android apps, dashboards and APIs for fintech, healthtech, e-commerce and logistics teams. Offices in Cork & New Delhi.",
  openGraph: {
    type: "website",
    siteName: "Buildslabs",
    url: "https://www.buildslabs.com",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}