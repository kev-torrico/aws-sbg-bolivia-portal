import { Briefcase, Calendar, GitBranch, MessageCircle } from "lucide-react";

const communityGuides = [
  { label: "Código de conducta", href: "#comunidad" },
  { label: "Cómo unirte a un capítulo", href: "#capitulos" },
  { label: "Documentación oficial de AWS", href: "https://docs.aws.amazon.com/" },
  { label: "AWS Educate / Student Builders", href: "https://aws.amazon.com/education/" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/", icon: GitBranch },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Briefcase },
  { label: "Meetup", href: "https://www.meetup.com/aws-user-group-bolivia/", icon: Calendar },
  { label: "WhatsApp", href: "https://chat.whatsapp.com/", icon: MessageCircle },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="comunidad" className="relative border-t border-border bg-squid">
      <div className="h-0.5 w-full bg-linear-to-r from-bolivia-red via-bolivia-yellow to-bolivia-green" />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="text-sm font-bold text-foreground">AWS Student Builder Group</p>
            <p className="text-xs text-muted-foreground">Bolivia / Cochabamba Hub</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Impulsando el talento cloud del país a través de capítulos locales, mentoría y
              eventos comunitarios.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-aws-orange">
              Guías de la comunidad
            </h3>
            <ul className="mt-4 space-y-2.5">
              {communityGuides.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-aws-orange">
              Redes sociales
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-aws-orange/50 hover:text-aws-orange"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-aws-orange">
              Bolivia unida en la nube
            </h3>
            <div className="mt-4 h-1 w-24 rounded-full bg-linear-to-r from-bolivia-red via-bolivia-yellow to-bolivia-green" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              De Cochabamba a todo el país: cada capítulo suma una pieza al mapa cloud boliviano.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} AWS Student Builder Group — Bolivia. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Construyendo el futuro cloud de Bolivia <span aria-hidden="true">🇧🇴</span>, una
            comunidad a la vez.
          </p>
        </div>
      </div>
    </footer>
  );
}
