import type { Metadata } from "next";
import "./globals.css";
import { Shell } from "@/components/Shell";
import { Footer } from "@/components/Footer";
import site from "@/content/site.json";

export const metadata: Metadata = {
  title: {
    default: `${site.brand.name} — ${site.brand.tagline}`,
    template: `%s — ${site.brand.name}`,
  },
  description: site.brand.tagline,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: site.brand.name,
    description: site.brand.tagline,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Shell />
        {children}
        <Footer />
      </body>
    </html>
  );
}
