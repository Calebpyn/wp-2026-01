import type { Metadata } from "next";
import { Besley, Inter } from "next/font/google";
import "./globals.css";

const besley = Besley({
  variable: "--font-besley",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Church in the Community | Los Cabos",
  description:
    "Church in the Community — Every Sunday at 10am at the Hampton Inn, Los Cabos. Join us in worship, community, and service.",
  keywords: [
    "iglesia Los Cabos",
    "church Los Cabos",
    "Christian church Cabo San Lucas",
    "Church in the Community",
  ],
  openGraph: {
    title: "Church in the Community | Los Cabos",
    description:
      "Church in the Community — Every Sunday at 10am at the Hampton Inn, Los Cabos. Join us in worship, community, and service.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Church"],
  name: "Church in the Community",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carretera Transpeninsular KM 24.8 Cerro Colorado",
    addressLocality: "Los Cabos",
    addressRegion: "Baja California Sur",
    postalCode: "23400",
    addressCountry: "MX",
  },
  openingHours: "Su 10:00-12:00",
  url: "https://churchinthecommunity.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${besley.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-inter text-[var(--color-text)]">
        {children}
      </body>
    </html>
  );
}
