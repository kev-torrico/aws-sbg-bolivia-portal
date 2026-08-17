import { Calendar, MessageCircle, X } from "lucide-react";
import { CHAPTER_STATUS_META, type SbgCity } from "@/types/sbg";

interface CityPopupProps {
  city: SbgCity;
  onClose: () => void;
}

export function CityPopup({ city, onClose }: CityPopupProps) {
  const statusMeta = CHAPTER_STATUS_META[city.status];

  return (
    <div className="w-65 max-w-[calc(100vw-3rem)] overflow-hidden rounded-xl border border-aws-orange/30 bg-card shadow-2xl shadow-black/50">
      <div className="h-1 w-full bg-linear-to-r from-bolivia-red via-bolivia-yellow to-bolivia-green" />

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {city.city}, {city.department}
            </p>
            <h3 className="mt-1 text-base font-bold text-card-foreground">{city.chapterName}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <span
          className="mt-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold"
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

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{city.description}</p>

        <div className="mt-4 flex flex-col gap-2">
          <a
            href={city.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-bolivia-green px-3 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Grupo de WhatsApp
          </a>
          <a
            href={city.meetupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-aws-orange/40 bg-aws-orange/10 px-3 py-2 text-sm font-semibold text-aws-orange transition-colors hover:bg-aws-orange/20"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Comunidad Meetup
          </a>
        </div>
      </div>
    </div>
  );
}
