"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MessageCircle, Rocket } from "lucide-react";

export function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const targets = rootRef.current.querySelectorAll("[data-hero-item]");
    const tween = gsap.fromTo(
      targets,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12 },
    );

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section id="inicio" ref={rootRef} className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-184 -translate-x-1/2 rounded-full bg-aws-orange/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-20">
        <span
          data-hero-item
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-aws-orange" />
          Comunidad oficial de estudiantes cloud
        </span>

        <h1
          data-hero-item
          className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          AWS Student Builder{" "}
          <span className="bg-linear-to-r from-aws-orange to-bolivia-yellow bg-clip-text text-transparent">
            Groups
          </span>{" "}
          Bolivia
        </h1>

        <p
          data-hero-item
          className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Conectando a la comunidad de estudiantes y entusiastas de la nube en todo Bolivia.
          Explora los capítulos locales en el mapa, súmate a los eventos en Meetup y participa en
          los grupos de WhatsApp de cada ciudad.
        </p>

        <div data-hero-item className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#comunidad"
            className="inline-flex items-center gap-2 rounded-lg bg-aws-orange px-5 py-2.5 text-sm font-semibold text-squid shadow-[0_0_24px_-6px_var(--aws-orange)] transition-transform hover:scale-[1.03] active:scale-95"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Unirse a la comunidad
          </a>
          <a
            href="#mapa"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            <Rocket className="h-4 w-4 text-aws-orange" aria-hidden="true" />
            Ver capítulos
          </a>
        </div>
      </div>
    </section>
  );
}
