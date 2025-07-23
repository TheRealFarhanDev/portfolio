import React, { ComponentPropsWithoutRef } from "react";
import GrainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "bg-white dark:bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-10 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:pointer-events-none after:outline-neutral-800/10 dark:after:outline-white/20",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `url(${GrainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};

export default Card;
