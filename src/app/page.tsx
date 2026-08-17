import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CommunityInfo } from "@/components/sections/CommunityInfo";
import { MapboxMap } from "@/components/map/MapboxMap";
import { MousePointerClick } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <Hero />

        <section id="mapa" className="mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">
              Mapa de capítulos en Bolivia
            </h2>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MousePointerClick className="h-4 w-4 text-aws-orange" aria-hidden="true" />
              Haz clic en un pin para ver el capítulo
            </p>
          </div>

          <MapboxMap />
        </section>

        <CommunityInfo />
      </main>

      <Footer />
    </div>
  );
}
