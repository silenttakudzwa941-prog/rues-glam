
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mama Nene's Cakes | Beautiful Cakes for Every Celebration",
  description:
    "Discover beautiful celebration cakes, cupcakes, sheet cakes and bento cake boxes at Mama Nene's Cakes in Helensvale, Harare, Zimbabwe. Explore our cake prices and enquire about custom orders through WhatsApp.",
  applicationName: "Mama Nene's Cakes",
  keywords: [
    "Mama Nene's Cakes",
    "Mama Nenes Cakes",
    "cakes in Harare",
    "custom cakes Zimbabwe",
    "birthday cakes Harare",
    "celebration cakes",
    "cupcakes Harare",
    "sheet cakes",
    "bento cakes",
    "cake shop Helensvale",
  ],
  robots: {
    index: false,
    follow: false,
  },
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
