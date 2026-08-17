# AWS Student Builder Group Bolivia — Portal

Sitio web de la comunidad **AWS Student Builder Groups (SBG) Bolivia**. Es un landing page hecho con Next.js que conecta a los distintos capítulos universitarios del país: muestra un mapa interactivo con la ubicación de cada capítulo y enlaces directos a sus grupos de Meetup y WhatsApp.

## Qué vas a encontrar en el sitio

- **Hero** — Presentación de la comunidad con animaciones de entrada (GSAP) y accesos rápidos para unirse o ver los capítulos.
- **Mapa de capítulos (`#mapa`)** — Mapa interactivo de Bolivia (Mapbox GL) con un pin por capítulo. Al hacer clic en un pin se abre un popup con el detalle del capítulo.
- **Capítulos de Bolivia (`#capitulos`)** — Grid de tarjetas, una por capítulo, con ciudad/departamento, universidad, estado (activo / próximamente) y botones directos a su **Meetup** y **WhatsApp**. Actualmente incluye capítulos en Cochabamba, La Paz, Santa Cruz, Tarija y Sucre.
- **Header y Footer** — Navegación del sitio.

Los datos de los capítulos viven en [src/data/sbg-cities.ts](src/data/sbg-cities.ts), por lo que agregar/editar un capítulo es simplemente editar ese archivo.

## Requisitos previos

- **Node.js** 20 o superior (recomendado, por las dependencias de tipos `@types/node`).
- **npm** (el proyecto trae `package-lock.json`; también puedes usar yarn/pnpm/bun si lo prefieres).
- Un **token de acceso de Mapbox** (gratuito) para que el mapa funcione. Se obtiene en [account.mapbox.com/access-tokens](https://account.mapbox.com/access-tokens/).

## Instalación

1. Clona/entra a la carpeta del proyecto e instala las dependencias:

   ```bash
   npm install
   ```

2. Crea tu archivo de variables de entorno a partir del ejemplo incluido:

   ```bash
   cp .env.example .env.local
   ```

3. Edita `.env.local` y coloca tu token real de Mapbox:

   ```bash
   NEXT_PUBLIC_MAPBOX_TOKEN=tu_token_de_mapbox_aqui
   ```

   > Si no configuras el token, el sitio funciona igual, pero en la sección del mapa se mostrará un aviso pidiendo configurarlo en lugar del mapa interactivo.

## Levantar el proyecto en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador. La página se recarga automáticamente al guardar cambios.

## Otros comandos disponibles

| Comando         | Descripción                                        |
| --------------- | --------------------------------------------------- |
| `npm run dev`   | Levanta el servidor de desarrollo (con hot reload). |
| `npm run build` | Genera el build de producción.                      |
| `npm run start` | Sirve el build de producción (requiere `build` previo). |
| `npm run lint`  | Corre ESLint sobre el proyecto.                      |

## Stack técnico

- **[Next.js 16](https://nextjs.org/)** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** para estilos
- **[Mapbox GL / react-map-gl](https://visgl.github.io/react-map-gl/)** para el mapa interactivo
- **GSAP** y **Lenis** para animaciones y scroll suave
- **lucide-react** para iconografía
- **@aws-sdk/client-s3** (integración con S3, según necesidad del proyecto)
