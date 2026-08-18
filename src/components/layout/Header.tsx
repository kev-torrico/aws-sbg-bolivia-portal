import { ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-navy-900">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3 text-foreground">
          <span
            className="brand-mark h-7 w-10 shrink-0 text-aws-orange"
            aria-hidden="true"
          />
          <span>
            <span className="block font-mono text-[0.6875rem] tracking-[0.1em] text-slate-200">
              AWS STUDENT BUILDER GROUP
            </span>
            <span className="mt-0.5 block text-sm font-medium text-white">
              UPB · Bolivia
            </span>
          </span>
        </a>

        <nav
          className="flex items-center gap-1 sm:gap-5"
          aria-label="Navegación principal"
        >
          <a
            href="#mapa"
            className="hidden text-sm text-slate-200 transition-colors hover:text-white sm:block"
          >
            Capítulos
          </a>
          <a
            href="#capitulos"
            className="inline-flex items-center gap-2 rounded-sm bg-aws-orange px-3 py-2 text-sm font-medium text-navy-900 transition-colors hover:bg-[#cc7a00]"
          >
            <span className="whitespace-nowrap">Unirme</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
