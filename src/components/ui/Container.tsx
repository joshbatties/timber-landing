
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn(
      "container mx-auto px-4 py-16 md:py-24",
      className
    )}>
      {children}
    </div>
  );
};

export default Container;
