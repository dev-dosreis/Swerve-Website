"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const shadow = useTransform(
    scrollY,
    [0, 120],
    [
      "0 0 0 rgba(11, 12, 16, 0)",
      "0 18px 50px -35px rgba(11, 12, 16, 0.35)",
    ]
  );
  const border = useTransform(
    scrollY,
    [0, 120],
    ["rgba(226, 228, 233, 0.45)", "rgba(226, 228, 233, 0.85)"]
  );

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur"
      style={
        reduceMotion
          ? {
              boxShadow: "0 0 0 rgba(11, 12, 16, 0)",
              borderColor: "rgba(226, 228, 233, 0.6)",
            }
          : { boxShadow: shadow, borderColor: border }
      }
    >
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
        <div className="hidden md:flex">
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
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="md:hidden overflow-hidden border-t border-border/60"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
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
              <Button asChild variant="accent" className="w-full">
                <Link href={siteContent.whatsapp.href}>{siteContent.whatsapp.label}</Link>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
