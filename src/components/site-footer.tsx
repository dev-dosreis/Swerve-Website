import Link from "next/link";

import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-muted sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 font-medium text-foreground">
            {siteContent.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-foreground/70">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {siteContent.footer.socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="hover:text-foreground"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 text-xs">
          <span>
            © {new Date().getFullYear()} {siteContent.name}. Todos os direitos
            reservados.
          </span>
          <span>Feito para marcas tech premium.</span>
        </div>
      </div>
    </footer>
  );
}
