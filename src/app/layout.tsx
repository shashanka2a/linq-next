import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linq — SMB Growth Solutions",
  description: "Digital solutions that help small businesses grow revenue and streamline operations.",
  keywords: [
    "Linq",
    "SMB",
    "MenuPro",
    "Mainstreet",
    "digital menus",
    "reservations",
    "payments",
    "bookings",
  ],
  authors: [{ name: "Linq" }],
  metadataBase: new URL("https://www.example.com"),
  openGraph: {
    title: "Linq — SMB Growth Solutions",
    description:
      "Digital solutions that help small businesses grow revenue and streamline operations.",
    url: "https://www.example.com",
    siteName: "Linq",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Linq" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linq — SMB Growth Solutions",
    description:
      "Digital solutions that help small businesses grow revenue and streamline operations.",
    images: ["/og.png"],
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
        {children}
      </body>
    </html>
  );
}
