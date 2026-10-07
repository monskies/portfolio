import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nehemiam Montero | Full Stack Developer",
  description:
    "Software Developer building across the full stack, from web apps and mobile to IoT and game development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-ink font-sans text-ivory antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
