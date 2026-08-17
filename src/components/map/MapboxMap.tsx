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

function CityMarker({ city, isSelected, onSelect }: { city: SbgCity; isSelected: boolean; onSelect: () => void }) {
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
        className="group relative block h-6 w-6 cursor-pointer"
      >
        <span
          className="absolute inset-0 animate-ping-slow rounded-full"
          style={{ backgroundColor: `var(${statusMeta.colorVar})` }}
        />
        <span
          className="absolute inset-0 rounded-full ring-2 ring-squid transition-transform duration-200 group-hover:scale-125"
          style={{
            backgroundColor: "var(--aws-orange)",
            boxShadow: isSelected ? "0 0 0 4px color-mix(in srgb, var(--aws-orange) 35%, transparent)" : undefined,
          }}
        />
        <span className="absolute inset-1.75 rounded-full bg-squid" />
      </button>
    </Marker>
  );
}

export function MapboxMap() {
  const [selectedCity, setSelectedCity] = useState<SbgCity | null>(null);

  if (!MAPBOX_TOKEN || MAPBOX_TOKEN === "tu_token_de_mapbox_aqui") {
    return (
      <div className="flex h-110 w-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-squid px-6 text-center sm:h-140">
        <AlertTriangle className="h-8 w-8 text-aws-orange" aria-hidden="true" />
        <p className="max-w-sm text-sm text-muted-foreground">
          Configura <code className="rounded bg-secondary px-1.5 py-0.5 text-aws-orange">NEXT_PUBLIC_MAPBOX_TOKEN</code>{" "}
          en tu archivo <code className="rounded bg-secondary px-1.5 py-0.5">.env.local</code> con un token válido de{" "}
          <a
            href="https://account.mapbox.com/access-tokens/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-aws-orange underline underline-offset-2"
          >
            Mapbox
          </a>{" "}
          para ver el mapa interactivo.
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-110 w-full overflow-hidden rounded-2xl border border-border bg-squid sm:h-140">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-linear-to-r from-bolivia-red via-bolivia-yellow to-bolivia-green opacity-70" />

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
            offset={20}
            closeButton={false}
            closeOnClick={false}
            onClose={() => setSelectedCity(null)}
          >
            <CityPopup city={selectedCity} onClose={() => setSelectedCity(null)} />
          </Popup>
        )}
      </Map>
    </div>
  );
}
