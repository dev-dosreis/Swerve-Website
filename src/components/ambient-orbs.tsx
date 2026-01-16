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
        className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-accent/25 blur-3xl"
        animate={{ y: [0, 24, 0], x: [0, 12, 0], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-0 h-72 w-72 rounded-full bg-foreground/15 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -14, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent/10 blur-[120px]"
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}