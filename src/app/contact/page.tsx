import type { Metadata } from "next";
import Link from "next/link";

import { siteContent } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/animated";
import { AmbientOrbs } from "@/components/ambient-orbs";

export const metadata: Metadata = {
  title: "Contact",
  description: siteContent.contact.description,
  openGraph: {
    title: "Contact | SWERVE",
    description: siteContent.contact.description,
  },
};

export default function ContactPage() {
  return (
    <div className="relative mx-auto w-full max-w-6xl space-y-12 px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <AmbientOrbs />
      <div className="section-surface rounded-[32px] p-8 sm:p-10">
        <SectionHeading
          eyebrow="Contato"
          title={siteContent.contact.title}
          description={siteContent.contact.description}
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <div className="card-hover rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  WhatsApp direto
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {siteContent.contact.responseTime}
                </p>
              </div>
              <Button asChild variant="accent" size="lg" className="w-full">
                <Link href={siteContent.whatsapp.href}>Chamar no WhatsApp</Link>
              </Button>
              <div className="rounded-2xl border border-border bg-muted/30 p-5 text-sm text-muted">
                Respostas diretas e briefing objetivo. Podemos iniciar com uma call
                rapida e evoluir para o escopo completo.
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="card-hover rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Formulario detalhado
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Envie o briefing e retornamos com uma proposta personalizada.
                </p>
              </div>
              <form
                action={siteContent.contact.formspreeEndpoint}
                method="POST"
                className="space-y-4"
              >
                <Input name="name" placeholder="Nome" required />
                <Input name="email" type="email" placeholder="Email" required />
                <Input name="whatsapp" placeholder="WhatsApp" required />
                <select
                  name="projectType"
                  className="flex h-11 w-full rounded-xl border border-border bg-card px-4 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ring-offset-background"
                  required
                >
                  <option value="">Tipo de projeto</option>
                  <option value="site">Site institucional</option>
                  <option value="landing">Landing page</option>
                  <option value="app">App ou SaaS</option>
                  <option value="dashboard">Dashboard/Admin</option>
                  <option value="other">Outro</option>
                </select>
                <Textarea name="message" placeholder="Mensagem" required />
                <Input name="budget" placeholder="Budget (opcional)" />
                <Button type="submit" variant="secondary" size="lg" className="w-full">
                  Enviar briefing
                </Button>
              </form>
              <p className="text-xs text-muted">
                Configure o endpoint em src/content/site.ts para receber os emails.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
