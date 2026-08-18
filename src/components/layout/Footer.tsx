import {
  ArrowUpRight,
  Briefcase,
  Calendar,
  GitBranch,
  MessageCircle,
} from "lucide-react";

const communityLinks = [
  { label: "Explorar capítulos", href: "#capitulos" },
  { label: "Código de conducta", href: "#comunidad" },
  { label: "AWS Educate", href: "https://aws.amazon.com/education/" },
  { label: "Documentación de AWS", href: "https://docs.aws.amazon.com/" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/", icon: GitBranch },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Briefcase },
  {
    label: "Meetup",
    href: "https://www.meetup.com/aws-user-group-bolivia/",
    icon: Calendar,
  },
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/",
    icon: MessageCircle,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="comunidad" className="border-t border-border bg-navy-900">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="brand-mark h-8 w-11 text-aws-orange"
                aria-hidden="true"
              />
              <p className="font-mono text-xs tracking-[0.1em] text-white">
                AWS STUDENT BUILDER GROUP
              </p>
            </div>
            <p className="mt-6 max-w-sm text-lg leading-7 text-slate-200">
              Impulsando el talento cloud del país a través de capítulos
              locales, mentoría y eventos comunitarios.
            </p>
            <p className="mt-4 font-mono text-[0.6875rem] tracking-[0.1em] text-sky">
              UPB · COCHABAMBA · BOLIVIA
            </p>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-[0.12em] text-aws-orange">
              {"// "}COMUNIDAD
            </h2>
            <ul className="mt-5 space-y-3">
              {communityLinks.map((link) => {
                const isExternal = link.href.startsWith("http");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-sm text-slate-200 transition-colors hover:text-white"
                    >
                      {link.label}
                      {isExternal && (
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-sky"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xs tracking-[0.12em] text-aws-orange">
              {"// "}SÍGUENOS
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-slate-400 text-slate-200 transition-colors hover:border-aws-orange hover:bg-aws-orange hover:text-navy-900"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 font-mono text-[0.6875rem] tracking-[0.06em] text-slate-200 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} AWS STUDENT BUILDER GROUP · BOLIVIA</p>
          <p>BUILD · CONNECT · GROW</p>
        </div>
      </div>
    </footer>
  );
}
