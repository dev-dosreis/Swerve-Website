import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/content/site";
import { FadeIn, Stagger, StaggerItem } from "@/components/animated";
import { AmbientOrbs } from "@/components/ambient-orbs";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24 pt-16 sm:pb-28 sm:pt-20">
      <section className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <AmbientOrbs />
        <div className="section-surface relative overflow-hidden rounded-[40px] p-8 sm:p-10">
          <div className="grid-overlay absolute inset-0 opacity-40" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <div className="space-y-6">
              <Badge className="bg-muted/40 text-foreground">
                {siteContent.hero.trustLine}
              </Badge>
              <h1 className="text-balance font-display text-4xl font-semibold tracking-tight text-gradient sm:text-5xl lg:text-6xl">
                {siteContent.hero.headline}
              </h1>
              <p className="text-pretty text-base text-muted sm:text-lg">
                {siteContent.hero.subheadline}
              </p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-muted">
                <span className="rounded-full border border-border bg-background/70 px-4 py-2">
                  UX Premium
                </span>
                <span className="rounded-full border border-border bg-background/70 px-4 py-2">
                  Next.js
                </span>
                <span className="rounded-full border border-border bg-background/70 px-4 py-2">
                  Lighthouse 90+
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="accent" size="lg">
                  <Link href={siteContent.hero.primaryCta.href}>
                    {siteContent.hero.primaryCta.label}
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href={siteContent.hero.secondaryCta.href}>
                    {siteContent.hero.secondaryCta.label}
                  </Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card-hover rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    Time-to-market
                  </p>
                  <p className="mt-3 text-2xl font-semibold">Sprints ageis</p>
                  <p className="mt-2 text-sm text-muted">
                    Entregas rapidas sem comprometer o acabamento premium.
                  </p>
                </div>
                <div className="card-hover rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    Conversao
                  </p>
                  <p className="mt-3 text-2xl font-semibold">UX orientada a leads</p>
                  <p className="mt-2 text-sm text-muted">
                    CTAs claros e experiencias fluidas em todas as telas.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="relative">
              <div className="rounded-[32px] border border-border bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 p-8 text-background shadow-2xl">
                <div className="space-y-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-background/60">
                    SWERVE SYSTEM
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5 font-mono text-sm text-background/80">
                    <p className="text-background/50">// Lighthouse snapshot</p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <span>performance:</span>
                        <span className="text-emerald-300">98</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>seo:</span>
                        <span className="text-emerald-300">95</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>ux_score:</span>
                        <span className="text-emerald-300">97</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">
                      Interface premium, codigo limpo e metricas visiveis.
                    </h2>
                    <p className="text-sm text-background/70">
                      Estrutura modular para evoluir o produto sem retrabalho.
                    </p>
                  </div>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href={siteContent.hero.primaryCta.href}>
                      Vamos construir juntos
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="section-surface relative overflow-hidden rounded-[32px] p-8 sm:p-10">
          <div className="grid-overlay absolute inset-0 opacity-20" />
          <div className="relative space-y-10">
            <SectionHeading
              eyebrow={siteContent.services.eyebrow}
              title={siteContent.services.title}
              description={siteContent.services.description}
            />
            <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {siteContent.services.items.map((service) => (
                <StaggerItem
                  key={service.title}
                  className="card-hover rounded-3xl border border-border bg-card p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">
                    {service.description}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.process.eyebrow}
          title={siteContent.process.title}
        />
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {siteContent.process.steps.map((step, index) => (
            <StaggerItem
              key={step.title}
              className="card-hover rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={siteContent.featuredWork.eyebrow}
          title={siteContent.featuredWork.title}
          description={siteContent.featuredWork.description}
        />
        <Stagger className="grid gap-6 md:grid-cols-2">
          {siteContent.featuredWork.items.map((work) => (
            <StaggerItem
              key={work.title}
              className="group card-hover rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    {work.category}
                  </p>
                  <div className="flex gap-2">
                    {work.stack.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {work.title}
                </h3>
                <p className="text-sm text-muted">{work.summary}</p>
                <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/30">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <Image
                    src="/placeholders/work-placeholder.svg"
                    alt={`Preview ${work.title}`}
                    width={800}
                    height={520}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Button asChild variant="secondary" size="lg">
          <Link href={siteContent.featuredWork.cta.href}>
            {siteContent.featuredWork.cta.label}
          </Link>
        </Button>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="section-surface rounded-[32px] p-8 sm:p-10">
          <div className="space-y-10">
            <SectionHeading
              eyebrow={siteContent.faq.eyebrow}
              title={siteContent.faq.title}
            />
            <Accordion type="single" collapsible className="space-y-4">
              {siteContent.faq.items.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-border bg-foreground px-6 py-12 text-background shadow-2xl sm:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                {siteContent.finalCta.title}
              </h2>
              <p className="text-sm text-background/70 sm:text-base">
                {siteContent.finalCta.description}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Button asChild variant="accent" size="lg">
                <Link href={siteContent.finalCta.primary.href}>
                  {siteContent.finalCta.primary.label}
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={siteContent.finalCta.secondary.href}>
                  {siteContent.finalCta.secondary.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
