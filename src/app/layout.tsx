import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
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
  themeColor: "#232f3e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`dark h-full antialiased ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
