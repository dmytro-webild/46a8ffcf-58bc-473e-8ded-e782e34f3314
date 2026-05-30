import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'AMS Shipping | Global Freight Forwarding & Logistics',
  description: 'AMS Shipping offers reliable and efficient freight forwarding, air cargo, ocean freight, and customs clearance services worldwide. Streamline your global logistics with us.',
  openGraph: {
    "title": "AMS Shipping | Global Freight Forwarding & Logistics",
    "description": "AMS Shipping offers reliable and efficient freight forwarding, air cargo, ocean freight, and customs clearance services worldwide. Streamline your global logistics with us.",
    "url": "/",
    "siteName": "AMS Shipping",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/cargo-ship-sailing-ocean_23-2152021788.jpg",
        "alt": "Cargo ship at port"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "AMS Shipping | Global Freight Forwarding & Logistics",
    "description": "AMS Shipping offers reliable and efficient freight forwarding, air cargo, ocean freight, and customs clearance services worldwide. Streamline your global logistics with us.",
    "images": [
      "http://img.b2bpic.net/free-photo/cargo-ship-sailing-ocean_23-2152021788.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
