"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { siteContent } from "@/content/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/animated";

export function WorksGrid() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return siteContent.works.items;
    return siteContent.works.items.filter((item) => item.category === active);
  }, [active]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
        {siteContent.works.categories.map((category) => (
          <Button
            key={category}
            variant={category === active ? "accent" : "secondary"}
            size="sm"
            onClick={() => setActive(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <StaggerItem
            key={item.title}
            className="group card-hover rounded-3xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/30">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <Image
                  src="/placeholders/work-placeholder.svg"
                  alt={`Preview ${item.title}`}
                  width={800}
                  height={520}
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                  {item.category}
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
