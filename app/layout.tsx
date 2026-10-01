import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  NAME,
  TITLE,
  DESCRIPTION,
  INSTAGRAM_URL,
} from "./site";

const serif = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Jeevan Paripelli" },
  description: DESCRIPTION,
  applicationName: NAME,
  authors: [{ name: NAME, url: INSTAGRAM_URL }],
  creator: NAME,
  keywords: [
    "Jeevan Paripelli",
    "Jeevan Paripelli Instagram",
    "jvnn_007",
    "Jeevan Paripelli goodness",
    "Jeevan Paripelli kindness",
    "Jeevan Paripelli manchithanam",
    "manchithanam",
    "మంచితనం",
    "goodness",
    "kindness",
    "good-hearted",
    "good person",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: NAME,
    title: TITLE,
    description: DESCRIPTION,
    firstName: "Jeevan",
    lastName: "Paripelli",
    username: "jvnn_007",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpeg",
        alt: "Portrait of Jeevan Paripelli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4efe6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
