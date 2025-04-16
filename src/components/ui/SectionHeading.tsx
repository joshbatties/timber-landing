
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  children?: ReactNode;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  center = false, 
  className,
  children 
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-10 space-y-2",
      center && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-timber-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;
