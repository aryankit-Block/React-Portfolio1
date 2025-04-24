import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aryankit | Portfolio",
  description: "Modern & Minimal Portfolio",
  icons: {
    icon: "/aryankit.logo.png",
    shortcut: "/aryankit.logo.png",
    apple: "/aryankit.logo.png"
  },
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link 
          rel="icon" 
          type="image/png" 
          href="/aryankit.logo.png"
          sizes="64x64"
        />
        <link 
          rel="apple-touch-icon" 
          href="/aryankit.logo.png"
          sizes="180x180"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
