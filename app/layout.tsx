import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Soplex Sentinel — AI Agent Runtime Security",
    template: "%s | Soplex Sentinel",
  },

  description:
    "Soplex Sentinel is an AI agent runtime security platform that gives AI agents identity, intent, and enforceable boundaries before they act.",

  keywords: [
    "Soplex Sentinel",
    "SoplexAI",
    "AI agent security",
    "AI agent runtime security",
    "AI runtime security",
    "agentic AI security",
    "AI security",
    "AI agent governance",
    "AI agent control",
    "AI agent firewall",
    "autonomous AI security",
  ],

  authors: [
    {
      name: "Sajjad Ullah",
    },
  ],

  creator: "SoplexAI",
  publisher: "SoplexAI",
  applicationName: "Soplex Sentinel",

  metadataBase: new URL(
    "https://sajjadsoplex.github.io/soplex-sentinel/"
  ),

  alternates: {
    canonical: "https://sajjadsoplex.github.io/soplex-sentinel/",
  },

  openGraph: {
    title: "Soplex Sentinel — AI Agent Runtime Security",

    description:
      "Secure every AI worker before it acts. Soplex Sentinel gives AI agents identity, intent, and enforceable boundaries.",

    siteName: "Soplex Sentinel",

    url: "https://sajjadsoplex.github.io/soplex-sentinel/",

    type: "website",

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",

    title: "Soplex Sentinel — AI Agent Runtime Security",

    description:
      "Secure every AI worker before it acts.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/soplex-sentinel/favicon.ico",
    shortcut: "/soplex-sentinel/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070a",

  colorScheme: "dark",

  width: "device-width",

  initialScale: 1,
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