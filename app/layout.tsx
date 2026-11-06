import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aina Rahman · Portfolio (demo)",
  description: "Final-year CS student building backend and AI projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-900 antialiased">{children}</body>
    </html>
  );
}
