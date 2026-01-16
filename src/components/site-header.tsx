"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 shadow-sm backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-[0.35em] text-foreground"
        >
          {siteContent.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {siteContent.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button asChild variant="accent">
            <Link href={siteContent.whatsapp.href}>{siteContent.whatsapp.label}</Link>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border p-2 text-foreground md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden",
          open ? "block border-t border-border/60" : "hidden"
        )}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6">
          {siteContent.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle className="w-full justify-center" />
          <Button asChild variant="accent" className="w-full">
            <Link href={siteContent.whatsapp.href}>{siteContent.whatsapp.label}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
