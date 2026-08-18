"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, MapPinned, UsersRound } from "lucide-react";

export function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const targets = rootRef.current.querySelectorAll("[data-hero-item]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

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
    <section
      id="inicio"
      ref={rootRef}
      className="sbg-grid relative overflow-hidden border-b border-border"
    >
      <div
        className="absolute inset-y-0 left-[56%] hidden w-px bg-border lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid min-h-[38rem] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:py-24">
        <div>
          <p
            data-hero-item
            className="font-mono text-xs tracking-[0.12em] text-aws-orange sm:text-[0.8125rem]"
          >
            {"// "}AWS STUDENT BUILDER GROUP · BOLIVIA
          </p>

          <h1
            data-hero-item
            className="mt-6 max-w-3xl font-mono text-5xl leading-[1.04] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl"
          >
            Build. Connect. <span className="text-aws-orange">Grow.</span>
          </h1>

          <p
            data-hero-item
            className="mt-7 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl"
          >
            La comunidad universitaria para aprender cloud, crear proyectos y
            conectar con builders de todo Bolivia.
          </p>

          <div
            data-hero-item
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#capitulos"
              className="inline-flex items-center gap-2 rounded-sm bg-aws-orange px-5 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-[#cc7a00]"
            >
              Unirme a la comunidad
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#mapa"
              className="inline-flex items-center gap-2 rounded-sm border border-slate-400 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <MapPinned className="h-4 w-4 text-sky" aria-hidden="true" />
              Explorar capítulos
            </a>
          </div>
        </div>

        <aside
          data-hero-item
          className="border border-border bg-slate-800 p-6 shadow-[0_1px_2px_rgba(6,10,20,0.4),0_8px_24px_rgba(6,10,20,0.35)] sm:p-8"
        >
          <div className="flex items-center justify-between border-b border-border pb-5">
            <span className="font-mono text-xs tracking-[0.1em] text-slate-200">
              SBG // NETWORK
            </span>
            <UsersRound
              className="h-5 w-5 text-aws-orange"
              aria-hidden="true"
            />
          </div>

          <dl className="mt-7 grid grid-cols-3 gap-4">
            <div>
              <dt className="font-mono text-[0.6875rem] tracking-[0.08em] text-slate-200">
                CAPÍTULOS
              </dt>
              <dd className="mt-2 font-mono text-3xl text-white">09</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6875rem] tracking-[0.08em] text-slate-200">
                ACTIVOS
              </dt>
              <dd className="mt-2 font-mono text-3xl text-green">07</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6875rem] tracking-[0.08em] text-slate-200">
                PAÍS
              </dt>
              <dd className="mt-2 font-mono text-3xl text-sky">BO</dd>
            </div>
          </dl>

          <p className="mt-8 border-l-2 border-aws-orange pl-4 text-sm leading-6 text-slate-200">
            Una red estudiantil en crecimiento, desde Cochabamba hacia cada
            región del país.
          </p>
        </aside>
      </div>
    </section>
  );
}
