"use client";

import { useEffect, useRef } from "react";
import { Calendar, MessageCircle } from "lucide-react";
import { sbgCities } from "@/data/sbg-cities";
import { CHAPTER_STATUS_META } from "@/types/sbg";
import { cn } from "@/lib/utils";

export function CommunityInfo() {
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cards = listRef.current?.querySelectorAll(".reveal");
    if (!cards?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="capitulos" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-8 text-center">
        <h2 className="text-lg font-bold text-foreground sm:text-xl">Capítulos de Bolivia</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Cada capítulo tiene su propio grupo de Meetup y comunidad de WhatsApp.
        </p>
      </div>

      <div ref={listRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sbgCities.map((city, index) => {
          const statusMeta = CHAPTER_STATUS_META[city.status];
          return (
            <div
              key={city.id}
              className="reveal rounded-2xl border border-border bg-card p-5 transition-colors hover:border-aws-orange/40"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {city.city}, {city.department}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-card-foreground">
                    {city.chapterName}
                  </h3>
                </div>
              </div>

              <span
                className={cn(
                  "mt-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold",
                )}
                style={{
                  borderColor: `color-mix(in srgb, var(${statusMeta.colorVar}) 40%, transparent)`,
                  backgroundColor: `color-mix(in srgb, var(${statusMeta.colorVar}) 15%, transparent)`,
                  color: `var(${statusMeta.colorVar})`,
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: `var(${statusMeta.colorVar})` }}
                />
                {statusMeta.label}
              </span>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {city.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={city.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-bolivia-green px-3 py-1.5 text-xs font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={city.meetupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-aws-orange/40 bg-aws-orange/10 px-3 py-1.5 text-xs font-semibold text-aws-orange transition-colors hover:bg-aws-orange/20"
                >
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  Meetup
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
