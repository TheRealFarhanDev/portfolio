import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CardHeader = ({
  title,
  description,
  className,
}: {
  title: String;
  description: String;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:px-10 md:pt-8",className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="text-3xl font-serif">{title}</h3>
      </div>
      <p className="text-sm lg:text-base lg:max-w-xs text-white/40 mt-2">{description}</p>
    </div>
  );
};

export default CardHeader;
