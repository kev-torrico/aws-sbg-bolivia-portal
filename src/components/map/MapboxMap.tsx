"use client";

import { useState } from "react";
import Map, { Marker, NavigationControl, Popup } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { AlertTriangle } from "lucide-react";
import { sbgCities } from "@/data/sbg-cities";
import { CHAPTER_STATUS_META, type SbgCity } from "@/types/sbg";
import { CityPopup } from "@/components/map/CityPopup";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const BOLIVIA_CENTER = { latitude: -16.2901, longitude: -63.5887, zoom: 5.5 };

function CityMarker({
  city,
  isSelected,
  onSelect,
}: {
  city: SbgCity;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const statusMeta = CHAPTER_STATUS_META[city.status];

  return (
    <Marker
      latitude={city.coordinates.lat}
      longitude={city.coordinates.lng}
      anchor="bottom"
      onClick={(event) => {
        event.originalEvent.stopPropagation();
        onSelect();
      }}
    >
      <button
        type="button"
        aria-label={city.chapterName}
        className="relative block h-7 w-7 cursor-pointer rounded-full border-2 border-navy-900 transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
        style={{ backgroundColor: `var(${statusMeta.colorVar})` }}
      >
        <span className="absolute inset-[5px] rounded-full bg-navy-900" />
        {isSelected && (
          <span
            className="absolute -inset-2 rounded-full border border-aws-orange"
            aria-hidden="true"
          />
        )}
      </button>
    </Marker>
  );
}

export function MapboxMap() {
  const [selectedCity, setSelectedCity] = useState<SbgCity | null>(null);

  if (!MAPBOX_TOKEN || MAPBOX_TOKEN === "tu_token_de_mapbox_aqui") {
    return (
      <div className="flex h-[22rem] w-full flex-col items-center justify-center gap-4 rounded-md border border-border bg-card px-6 text-center sm:h-[34rem]">
        <AlertTriangle className="h-7 w-7 text-aws-orange" aria-hidden="true" />
        <p className="max-w-md text-sm leading-6 text-slate-200">
          Configura{" "}
          <code className="bg-slate-800 px-1.5 py-1 font-mono text-xs text-aws-orange">
            NEXT_PUBLIC_MAPBOX_TOKEN
          </code>{" "}
          en{" "}
          <code className="bg-slate-800 px-1.5 py-1 font-mono text-xs text-white">
            .env.local
          </code>{" "}
          para ver el mapa interactivo.
        </p>
        <a
          href="https://account.mapbox.com/access-tokens/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-[0.08em] text-sky underline underline-offset-4 hover:text-white"
        >
          OBTENER UN TOKEN DE MAPBOX
        </a>
      </div>
    );
  }

  return (
    <div className="relative h-[22rem] w-full overflow-hidden rounded-md border border-border bg-slate-800 sm:h-[34rem]">
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={BOLIVIA_CENTER}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        style={{ width: "100%", height: "100%" }}
        onClick={() => setSelectedCity(null)}
      >
        <NavigationControl position="top-right" showCompass={false} />

        {sbgCities.map((city) => (
          <CityMarker
            key={city.id}
            city={city}
            isSelected={selectedCity?.id === city.id}
            onSelect={() => setSelectedCity(city)}
          />
        ))}

        {selectedCity && (
          <Popup
            latitude={selectedCity.coordinates.lat}
            longitude={selectedCity.coordinates.lng}
            anchor="bottom"
            offset={22}
            closeButton={false}
            closeOnClick={false}
            onClose={() => setSelectedCity(null)}
          >
            <CityPopup
              city={selectedCity}
              onClose={() => setSelectedCity(null)}
            />
          </Popup>
        )}
      </Map>
    </div>
  );
}
