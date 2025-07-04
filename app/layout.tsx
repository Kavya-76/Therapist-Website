import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSWrapper from "./components/AOSWrapper";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD – Licensed Clinical Psychologist",
  description:
    "Dr. Serena Blake offers compassionate, evidence-based therapy for anxiety, relationships, trauma, and more. In-person and online therapy available in California.",
  keywords: [
    "Therapist Los Angeles",
    "Online therapy California",
    "Dr. Serena Blake",
    "PsyD",
    "Psychologist",
    "Mental health",
    "CBT",
    "Anxiety therapy",
    "Trauma recovery",
    "Relationship counseling",
  ],
  icons: {
    icon: '/favicon.png',
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
        <AOSWrapper/>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
