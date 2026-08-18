export type ChapterStatus = "active" | "coming-soon" | "inactive";

export interface ChapterStatusMeta {
  label: string;
  colorVar: "--green" | "--orange" | "--slate-400";
}

export const CHAPTER_STATUS_META: Record<ChapterStatus, ChapterStatusMeta> = {
  active: { label: "Comunidad activa", colorVar: "--green" },
  "coming-soon": { label: "Próximamente", colorVar: "--orange" },
  inactive: { label: "Inactiva", colorVar: "--slate-400" },
};

export interface SbgCity {
  id: string;
  city: string;
  department: string;
  chapterName: string;
  status: ChapterStatus;
  coordinates: {
    lat: number;
    lng: number;
  };
  meetupUrl: string;
  whatsappUrl: string;
  description: string;
}
