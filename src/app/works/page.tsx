import type { Metadata } from "next";

import { siteContent } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { WorksGrid } from "@/components/works-grid";
import { AmbientOrbs } from "@/components/ambient-orbs";

export const metadata: Metadata = {
  title: "Works",
  description: siteContent.works.description,
  openGraph: {
    title: "Works | SWERVE",
    description: siteContent.works.description,
  },
};

export default function WorksPage() {
  return (
    <div className="relative mx-auto w-full max-w-6xl space-y-12 px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <AmbientOrbs />
      <div className="section-surface rounded-[32px] p-8 sm:p-10">
        <SectionHeading
          eyebrow="Works"
          title={siteContent.works.title}
          description={siteContent.works.description}
        />
      </div>
      <WorksGrid />
    </div>
  );
}

