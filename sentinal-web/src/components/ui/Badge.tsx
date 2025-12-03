import * as React from "react";
import { cn } from "../../lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outline" | "hazard" | "success";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = "default", ...props }, ref) => {
        const variants = {
            default: "bg-surface text-ink-primary border-border-faint",
            outline: "bg-transparent border-primary text-primary",
            hazard: "bg-hazard/10 text-hazard border-hazard/30",
            success: "bg-primary/10 text-primary border-primary/30",
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center border px-2.5 py-0.5 text-xs font-mono font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);
Badge.displayName = "Badge";

export { Badge };
