import { ArrowUpRight, Calendar, MessageCircle, X } from "lucide-react";
import { CHAPTER_STATUS_META, type SbgCity } from "@/types/sbg";

interface CityPopupProps {
  city: SbgCity;
  onClose: () => void;
}

export function CityPopup({ city, onClose }: CityPopupProps) {
  const statusMeta = CHAPTER_STATUS_META[city.status];

  return (
    <div className="w-72 max-w-[calc(100vw-3rem)] overflow-hidden rounded-md border border-border bg-card shadow-[0_1px_2px_rgba(6,10,20,0.4),0_8px_24px_rgba(6,10,20,0.35)]">
      <div
        className="h-1"
        style={{ backgroundColor: `var(${statusMeta.colorVar})` }}
      />

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[0.625rem] tracking-[0.1em] text-slate-200">
              {city.city.toUpperCase()} · {city.department.toUpperCase()}
            </p>
            <h3 className="mt-2 text-base leading-5 font-medium text-card-foreground">
              {city.chapterName}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-sm p-1 text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <span
          className="mt-4 inline-flex items-center gap-2 rounded-sm border px-2 py-1 font-mono text-[0.625rem] tracking-[0.08em] uppercase"
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

        <div className="mt-6 flex gap-2">
          <a
            href={city.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-sm bg-aws-orange px-3 py-2 text-xs font-medium text-navy-900 transition-colors hover:bg-[#cc7a00]"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href={city.meetupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-slate-400 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10"
          >
            <Calendar className="h-3.5 w-3.5 text-sky" aria-hidden="true" />
            Meetup
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
