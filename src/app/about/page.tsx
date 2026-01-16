import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerItem } from "@/components/animated";
import { AmbientOrbs } from "@/components/ambient-orbs";

export const metadata: Metadata = {
  title: "About",
  description: siteContent.about.description,
  openGraph: {
    title: "About | SWERVE",
    description: siteContent.about.description,
  },
};

export default function AboutPage() {
  return (
    <div className="relative mx-auto w-full max-w-6xl space-y-14 px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <AmbientOrbs />
      <div className="section-surface rounded-[32px] p-8 sm:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[36px] border border-border bg-muted/30 shadow-xl">
              <Image
                src="/placeholders/avatar.svg"
                alt="Equipe SWERVE"
                width={520}
                height={520}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Sobre"
              title={siteContent.about.title}
              description={siteContent.about.description}
            />
            <p className="text-base text-muted">
              Nosso foco esta na simplicidade: do primeiro rascunho ao deploy,
              cuidamos de cada detalhe para que sua marca transmita clareza e
              confianca.
            </p>
            <Button asChild variant="accent" size="lg">
              <Link href={siteContent.whatsapp.href}>Falar no WhatsApp</Link>
            </Button>
          </div>
        </FadeIn>
        </div>
      </div>

      <div className="space-y-8">
        <SectionHeading
          eyebrow="Valores"
          title="Principios que guiam cada entrega."
        />
        <Stagger className="grid gap-6 md:grid-cols-3">
          {siteContent.about.values.map((value) => (
            <StaggerItem
              key={value.title}
              className="card-hover rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{value.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
