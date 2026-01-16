import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { siteContent } from "@/content/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.url),
  title: {
    default: "SWERVE | Sites e produtos digitais premium",
    template: "%s | SWERVE",
  },
  description: siteContent.description,
  openGraph: {
    title: "SWERVE | Sites e produtos digitais premium",
    description: siteContent.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SWERVE | Sites e produtos digitais premium",
    description: siteContent.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
