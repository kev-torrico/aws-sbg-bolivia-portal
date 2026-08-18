import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CommunityInfo } from "@/components/sections/CommunityInfo";
import { MapboxMap } from "@/components/map/MapboxMap";
import { MapPinned, MousePointerClick } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <Hero />

        <section
          id="mapa"
          className="mx-auto w-full max-w-7xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24"
        >
          <div className="mb-8 grid gap-5 border-b border-border pb-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.12em] text-sky">
                {"// "}CAPÍTULOS EN BOLIVIA
              </p>
              <h2 className="mt-3 font-mono text-3xl tracking-[-0.04em] text-white sm:text-4xl">
                Encuentra tu comunidad.
              </h2>
            </div>
            <p className="flex items-center gap-2 text-sm text-slate-200 md:pb-1">
              <MousePointerClick
                className="h-4 w-4 text-aws-orange"
                aria-hidden="true"
              />
              Selecciona un pin para conocer el capítulo
            </p>
          </div>

          <div className="relative">
            <MapPinned
              className="absolute -top-3 left-5 z-10 h-6 w-6 bg-background px-1 text-aws-orange"
              aria-hidden="true"
            />
            <MapboxMap />
          </div>
        </section>

        <CommunityInfo />
      </main>

      <Footer />
    </div>
  );
}
