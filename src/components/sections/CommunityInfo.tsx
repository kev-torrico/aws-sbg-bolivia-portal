"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Calendar, MessageCircle } from "lucide-react";
import { sbgCities } from "@/data/sbg-cities";
import { CHAPTER_STATUS_META } from "@/types/sbg";
import { cn } from "@/lib/utils";

export function CommunityInfo() {
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const cards =
      listRef.current?.querySelectorAll<HTMLElement>(".chapter-card");
    if (reduceMotion || !("IntersectionObserver" in window) || !cards?.length)
      return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    cards.forEach((card, index) => {
      card.classList.add("reveal");
      card.style.animationDelay = `${index * 70}ms`;
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
      cards.forEach((card) => {
        card.classList.remove("reveal", "is-visible");
        card.style.removeProperty("animation-delay");
      });
    };
  }, []);

  return (
    <section id="capitulos" className="border-t border-border bg-slate-800">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-6 border-b border-border pb-8 md:grid-cols-[1fr_25rem] md:items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.12em] text-aws-orange">
              {"// "}RED DE COMUNIDADES
            </p>
            <h2 className="mt-3 font-mono text-3xl tracking-[-0.04em] text-white sm:text-4xl">
              Capítulos que construyen juntos.
            </h2>
          </div>
          <p className="text-base leading-7 text-slate-200">
            Cada universidad aporta su propia energía, proyectos y espacios para
            aprender en comunidad.
          </p>
        </div>

        <div
          ref={listRef}
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {sbgCities.map((city) => {
            const statusMeta = CHAPTER_STATUS_META[city.status];

            return (
              <article
                key={city.id}
                className="chapter-card group relative flex min-h-72 flex-col overflow-hidden rounded-md border border-border bg-card p-5 shadow-[0_1px_2px_rgba(6,10,20,0.4),0_8px_24px_rgba(6,10,20,0.35)] transition-colors hover:border-slate-400"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ backgroundColor: `var(${statusMeta.colorVar})` }}
                  aria-hidden="true"
                />

                <div className="pt-2">
                  <p className="font-mono text-[0.6875rem] tracking-[0.1em] text-slate-200">
                    {city.city.toUpperCase()} · {city.department.toUpperCase()}
                  </p>
                  <h3 className="mt-3 text-lg leading-6 font-medium text-card-foreground">
                    {city.chapterName}
                  </h3>
                </div>

                <span
                  className={cn(
                    "mt-4 inline-flex w-fit items-center gap-2 rounded-sm border px-2 py-1 font-mono text-[0.625rem] tracking-[0.08em] uppercase",
                  )}
                  style={{
                    borderColor: `color-mix(in srgb, var(${statusMeta.colorVar}) 45%, transparent)`,
                    backgroundColor: `color-mix(in srgb, var(${statusMeta.colorVar}) 14%, transparent)`,
                    color: `var(${statusMeta.colorVar})`,
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: `var(${statusMeta.colorVar})` }}
                  />
                  {statusMeta.label}
                </span>

                <p className="mt-4 text-sm leading-6 text-slate-200">
                  {city.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <a
                    href={city.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-sm bg-aws-orange px-3 py-2 text-xs font-medium text-navy-900 transition-colors hover:bg-[#cc7a00]"
                  >
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a
                    href={city.meetupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-sm border border-slate-400 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10"
                  >
                    <Calendar
                      className="h-3.5 w-3.5 text-sky"
                      aria-hidden="true"
                    />
                    Meetup
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
