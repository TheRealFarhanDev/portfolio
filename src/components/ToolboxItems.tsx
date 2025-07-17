import React from "react";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";

const ToolboxItems = ({
  items,
  className,
  itemsWrapperClass,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClass?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge("flex flex-none py-0.5 pr-6 gap-6", itemsWrapperClass)}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center font-semibold gap-4 px-3 py-2 outline outline-2 outline-white/20 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
