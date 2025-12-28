import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amitabh Soni | DevOps Engineer & Educator",
  description: "Personal portfolio of Amitabh Soni, a DevOps Engineer specializing in Kubernetes, AWS, and GitOps.",
  openGraph: {
    title: "Amitabh Soni | DevOps Engineer & Educator",
    description: "Building resilient, automated infrastructure for modern digital ecosystems.",
    url: "https://amitabh.cloud",
    siteName: "Amitabh Soni Portfolio",
    images: [
      {
        url: "/img5.jpeg", // Using the profile image as the preview for now
        width: 1200,
        height: 630,
        alt: "Amitabh Soni - DevOps Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amitabh Soni | DevOps Engineer & Educator",
    description: "Building resilient, automated infrastructure for modern digital ecosystems.",
    creator: "@Amitabh_DevOps",
    images: ["/img5.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
