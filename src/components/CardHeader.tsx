import { StarIcon } from "@/assets";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardHeaderProps {
  title: string;
  description?: ReactNode; 
  className?: string;
}

export const CardHeader: FC<CardHeaderProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      {description && (
        <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">
          {description}
        </p>
      )}
    </div>
  );
};
