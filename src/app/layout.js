export const dynamic = "force-dynamic"; 

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere | Unlock Your Potential with Expert Courses",
  description: "SkillSphere is a premium online learning platform offering curated courses from industry experts in web development, data science, design, and marketing.",
  keywords: "online learning, courses, web development, data science, skill building, professional training",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <Toaster position="top-center" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
