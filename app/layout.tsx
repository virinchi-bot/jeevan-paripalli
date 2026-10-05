import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://jeevan-paripelli.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Jeevan Paripelli | Personal Profile",
    template: "%s | Jeevan Paripelli",
  },

  description:
    "Jeevan Paripelli's personal profile and public Instagram presence, @jvnn_007. Learn more about Jeevan Paripelli and his online identity.",

  applicationName: "Jeevan Paripelli",
  authors: [
    {
      name: "Jeevan Paripelli",
      url: SITE_URL,
    },
  ],
  creator: "Jeevan Paripelli",
  publisher: "Jeevan Paripelli",

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Jeevan Paripelli",
    title: "Jeevan Paripelli | Personal Profile",
    description:
      "Personal profile of Jeevan Paripelli and public Instagram profile @jvnn_007.",
    firstName: "Jeevan",
    lastName: "Paripelli",
    username: "jvnn_007",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 1200,
        alt: "Jeevan Paripelli",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jeevan Paripelli | Personal Profile",
    description:
      "Personal profile of Jeevan Paripelli and public Instagram profile @jvnn_007.",
    images: ["/profile.jpg"],
  },

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },

  category: "personal",

  other: {
    "profile:first_name": "Jeevan",
    "profile:last_name": "Paripelli",
    "profile:username": "jvnn_007",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#f4f0e8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
