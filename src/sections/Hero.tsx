import memojiImage from "@/assets/images/memoji-computer-farhan.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 pointer-events-none 
    dark:[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] 
    dark:[-webkit-mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] 
    [mask-image:linear-gradient(to_bottom,transparent,#f5f5f5_10%,#d4d4d4_70%,transparent)] 
    [-webkit-mask-image:linear-gradient(to_bottom,transparent,#f5f5f5_10%,#d4d4d4_70%,transparent)]"
      >
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <HeroOrbit
            size={430}
            rotation={-14}
            shouldOrbit
            orbitDuration="30s"
            shouldSpin
            spinDuration="3s"
          >
            <SparkleIcon className="size-8 dark:text-emerald-300 text-neutral-500" />
          </HeroOrbit>
          <HeroOrbit
            size={440}
            rotation={79}
            shouldOrbit
            orbitDuration="32s"
            shouldSpin
            spinDuration="3s"
          >
            <SparkleIcon className="size-5 dark:text-emerald-300 text-neutral-500" />
          </HeroOrbit>
          <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
            <div className="size-2 dark:bg-emerald-300/20 bg-neutral-400/20 rounded-full" />
          </HeroOrbit>
          <HeroOrbit
            size={530}
            rotation={178}
            shouldOrbit
            orbitDuration="36s"
            shouldSpin
            spinDuration="3s"
          >
            <SparkleIcon className="size-10 dark:text-emerald-300 text-neutral-500" />
          </HeroOrbit>
          <HeroOrbit
            size={550}
            rotation={20}
            shouldOrbit
            orbitDuration="38s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className="size-12 dark:text-emerald-300 text-neutral-500" />
          </HeroOrbit>
          <HeroOrbit
            size={590}
            rotation={98}
            shouldOrbit
            orbitDuration="40s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className="size-8 dark:text-emerald-300 text-neutral-500" />
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
            <div className="size-2 dark:bg-emerald-300/20 bg-neutral-400/20 rounded-full" />
          </HeroOrbit>
          <HeroOrbit
            size={710}
            rotation={144}
            shouldOrbit
            orbitDuration="44s"
            shouldSpin
            spinDuration="3s"
          >
            <SparkleIcon className="size-14 dark:text-emerald-300 text-neutral-500" />
          </HeroOrbit>
          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
            <div className="size-3 dark:bg-emerald-300/20 bg-neutral-400/20 rounded-full" />
          </HeroOrbit>
          <HeroOrbit
            size={800}
            rotation={-72}
            shouldOrbit
            orbitDuration="48s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className="size-28 dark:text-emerald-300 text-neutral-500" />
          </HeroOrbit>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px] drop-shadow-[0_4px_12px_rgba(110,231,183,0.1)]"
            alt="Me Working on the My Laptop"
          />
          <div className=" border px-4 py-1.5 inline-flex items-center gap-4 rounded-lg dark:bg-gray-950 dark:border-gray-800 bg-white border-gray-200">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium dark:text-gray-100 text-gray-800">
              Open to new opportunities
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl text-gray-900 dark:text-white">
            Mohammed Farhan
          </h1>
          <p className="mt-4 text-center text-gray-600 dark:text-white/60 md:text-lg">
            I create high-performance web apps that look great and work even
            better — backed by strong logic and problem-solving skills.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a
            href="#projects"
            className="inline-flex gap-2 items-center border border-gray-300 dark:border-white/15 px-6 h-12 rounded-xl cursor-pointer text-gray-800 dark:text-white"
          >
            <span className="font-semibold">View Portfolio</span>
            <ArrowDown className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center border border-gray-900 bg-gray-900 text-white h-12 px-4 rounded-xl cursor-pointer dark:border-white dark:bg-white dark:text-gray-900"
          >
            <span className="text-2xl">👋🏼</span>
            <span className="font-semibold ml-2">Let&#39;s Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};
