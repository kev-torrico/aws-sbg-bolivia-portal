export type ChapterStatus = "active" | "coming-soon" | "inactive";

export interface ChapterStatusMeta {
  label: string;
  colorVar: "--bolivia-green" | "--bolivia-yellow" | "--bolivia-red";
}

export const CHAPTER_STATUS_META: Record<ChapterStatus, ChapterStatusMeta> = {
  active: { label: "Comunidad Activa", colorVar: "--bolivia-green" },
  "coming-soon": { label: "Próximamente", colorVar: "--bolivia-yellow" },
  inactive: { label: "Inactiva", colorVar: "--bolivia-red" },
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
