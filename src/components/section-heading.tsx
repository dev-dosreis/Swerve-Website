import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

