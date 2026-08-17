import { Users } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-squid/80 backdrop-blur-xl">
      <div className="h-0.5 w-full bg-linear-to-r from-bolivia-red via-bolivia-yellow to-bolivia-green" />

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <span
            className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-squid-light ring-1 ring-aws-orange/40"
            aria-label="AWS Student Builder Group Bolivia"
            role="img"
          >
            <svg viewBox="0 0 48 30" className="h-[62%] w-[62%]" fill="none" aria-hidden="true">
              <text
                x="24"
                y="16"
                textAnchor="middle"
                fontFamily="var(--font-sans)"
                fontSize="15"
                fontWeight="700"
                fill="#f4f6f8"
                letterSpacing="0.5"
              >
                aws
              </text>
              <path d="M8 24c9 5 23 5 32 0" stroke="#ff9900" strokeWidth="3" strokeLinecap="round" />
              <path d="M34 20.5c2.5-1 5-1.2 6.5-.3" stroke="#ff9900" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <span className="flex items-center gap-2">
            <span className="text-base font-bold tracking-tight text-foreground">SBG</span>
            <span className="rounded-md border border-aws-orange/30 bg-aws-orange/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-aws-orange">
              Bolivia
            </span>
          </span>
        </a>

        <nav className="flex items-center gap-2 sm:gap-4">
          <a
            href="#inicio"
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Inicio
          </a>
          <a
            href="#comunidad"
            className="inline-flex items-center gap-2 rounded-lg bg-aws-orange px-4 py-2 text-sm font-semibold text-squid shadow-[0_0_20px_-6px_var(--aws-orange)] transition-transform hover:scale-[1.03] active:scale-95"
          >
            <Users className="h-4 w-4" aria-hidden="true" />
            <span className="whitespace-nowrap">Unirse a la comunidad</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
