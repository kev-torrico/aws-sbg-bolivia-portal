import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const amazonEmber = localFont({
  src: [
    { path: "../fonts/AmazonEmber-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/AmazonEmber-Medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-amazon-ember",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AWS Student Builder Group Bolivia | Comunidad Cloud",
  description:
    "Conectando a la comunidad de estudiantes y entusiastas de la nube en todo Bolivia. Explora los capítulos locales de AWS SBG, eventos en Meetup y grupos de WhatsApp.",
  keywords: [
    "AWS",
    "Student Builder Groups",
    "Bolivia",
    "Cloud",
    "Comunidad",
    "Cochabamba",
    "La Paz",
    "Santa Cruz",
  ],
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#161D26",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`h-full antialiased ${amazonEmber.variable}`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
