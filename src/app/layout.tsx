import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rue's Glam | Beauty, Elegance & Confidence",
  description:
    "Discover professional nail artistry, makeup, wig installations, eyelash extensions and permanent eyebrow services at Rue's Glam.",
  applicationName: "Rue's Glam",
  keywords: [
    "Rue's Glam",
    "nail artistry",
    "professional makeup",
    "wig installations",
    "eyelash extensions",
    "permanent eyebrows",
    "bridal beauty",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}