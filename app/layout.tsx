import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kate Lia | Sports Media Photographer — Long Island, NY",
  description:
    "Kate Lia is a professional sports media photographer based in Long Island, New York. Capturing the passion, energy, and beauty of athletic moments through a cinematic lens.",
  keywords: [
    "sports photographer",
    "media photographer",
    "Long Island photographer",
    "sports photography",
    "action photography",
    "New York photographer",
  ],
  openGraph: {
    title: "Kate Lia | Sports Media Photographer",
    description:
      "Capturing the passion, energy, and beauty of athletic moments through a cinematic lens.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
