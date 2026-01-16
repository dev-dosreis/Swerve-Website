"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function AmbientOrbs({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
      aria-hidden
    >
      <motion.div
        className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-accent/18 blur-[90px]"
        animate={{ y: [0, 20, 0], x: [0, 10, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-0 h-72 w-72 rounded-full bg-foreground/10 blur-[100px]"
        animate={{ y: [0, 24, 0], x: [0, -12, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent/08 blur-[140px]"
        animate={{ y: [0, -16, 0], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
