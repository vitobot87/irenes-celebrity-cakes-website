import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Irene's Celebrity Cakes | Custom Cakes & Italian Pastries in Mississauga",
  description: "Mississauga's beloved Italian bakery crafting custom wedding cakes, celebration cakes, and authentic Italian pastries since 2007. Over 35 years of experience.",
  metadataBase: new URL("https://vitobot87.github.io"),
  openGraph: {
    title: "Irene's Celebrity Cakes | Custom Cakes & Italian Pastries",
    description: "Mississauga's beloved Italian bakery crafting custom wedding cakes, celebration cakes, and authentic Italian pastries since 2007.",
    url: "https://vitobot87.github.io/irenes-celebrity-cakes-website",
    siteName: "Irene's Celebrity Cakes",
    images: [
      {
        url: "/irenes-celebrity-cakes-website/og-image.png",
        width: 1200,
        height: 630,
        alt: "Irene's Celebrity Cakes - Custom Cakes & Italian Pastries",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irene's Celebrity Cakes | Custom Cakes & Italian Pastries",
    description: "Mississauga's beloved Italian bakery crafting custom wedding cakes, celebration cakes, and authentic Italian pastries since 2007.",
    images: ["/irenes-celebrity-cakes-website/og-image.png"],
  },
  keywords: ["custom cakes Mississauga", "wedding cakes Mississauga", "Italian bakery Mississauga", "Italian pastries", "celebration cakes", "cannoli", "tiramisu"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
