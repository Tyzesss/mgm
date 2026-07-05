import { Flame } from "lucide-react";
import { LOGO_URL, SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  showName?: boolean;
  compact?: boolean;
};

export function SiteLogo({ className, showName = true, compact = false }: SiteLogoProps) {
  if (LOGO_URL) {
    return (
      <span className={cn("flex items-center gap-2.5", className)}>
        <img
          src={LOGO_URL}
          alt={SITE_NAME}
          className={cn(
            "w-auto object-contain",
            compact ? "h-8 max-w-[7rem]" : "h-9 max-w-[8.5rem]",
          )}
          width={136}
          height={36}
          decoding="async"
        />
        {showName && (
          <span className="hidden font-bold tracking-tight text-foreground sm:inline lg:max-w-[12rem] lg:truncate">
            {SITE_NAME}
          </span>
        )}
      </span>
    );
  }

  return (
    <span className={cn("flex items-center gap-2", className)}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-accent text-white shadow-glow">
        <Flame className="h-5 w-5" />
      </div>
      {showName && <span className="font-bold tracking-tight text-foreground">{SITE_NAME}</span>}
    </span>
  );
}
