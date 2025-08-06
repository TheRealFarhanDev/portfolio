"use client";
import Image from "next/image";
import Card from "@/components/Card";
import HeaderSection from "@/components/HeaderSection";
import BookImage from "@/assets/images/book-cover.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import MapImage from "@/assets/images/map.png";
import NodeIcon from "@/assets/icons/nodejs.svg";
import MongoIcon from "@/assets/icons/mongodb.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import ShadcnIcon from "@/assets/icons/shadcn.svg";
import VscodeIcon from "@/assets/icons/vscode.svg";
import CppIcon from "@/assets/icons/c++.svg";
import PythonIcon from "@/assets/icons/python.svg";
import SmileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Node.js", iconType: NodeIcon },
  { title: "Express.js", iconType: ExpressIcon },
  { title: "MongoDB", iconType: MongoIcon },
  { title: "Tailwind CSS", iconType: TailwindIcon },
  { title: "C++", iconType: CppIcon },
  { title: "Next.js", iconType: NextIcon },
  { title: "ShadCN", iconType: ShadcnIcon },
  { title: "HTML5", iconType: HtmlIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "GitHub", iconType: GithubIcon },
  { title: "VS Code", iconType: VscodeIcon },
  { title: "Python", iconType: PythonIcon },
];

const hobbies = [
  {
    title: "Music",
    emoji: "🎵",
    top: "5%",
    left: "5%",
  },
  {
    title: "Watching Movies",
    emoji: "🎬",
    top: "5%",
    left: "45%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    top: "35%",
    left: "10%",
  },
  {
    title: "Exploring Tech",
    emoji: "💡",
    top: "65%",
    left: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    top: "45%",
    left: "70%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    top: "40%",
    left: "40%",
  },
  {
    title: "Learning Online",
    emoji: "💻",
    top: "70%",
    left: "45%",
  },
];

const Locationurl =
  "https://www.google.com/maps/place/Channarayapatna,+Karnataka+573116/@12.9041775,76.3832956,15.2z/data=!4m15!1m8!3m7!1s0x3ba5594accfa07f5:0xbe7e9f358e9188bc!2sChannarayapatna,+Karnataka+573116!3b1!8m2!3d12.9035322!4d76.3897978!16zL20vMGdnbWhj!3m5!1s0x3ba5594accfa07f5:0xbe7e9f358e9188bc!8m2!3d12.9035322!4d76.3897978!16zL20vMGdnbWhj?entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D";

export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <section className="py-16 lg:py-26" id="about">
      <div className="container">
        <HeaderSection
          eyebrow="About Me"
          title="Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2">
                <Image src={BookImage} alt="Book Image" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                className="md:mt-2.5"
                itemsWrapperClass="animate-move-left"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClass="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="p-6"
              />
              <div className="relative flex-1 md:mt-2" ref={constrainRef}>
                {hobbies.map((hobbie) => (
                  <motion.div
                    key={hobbie.title}
                    className="inline-flex items-center gap-2 px-6 py-1.5 bg-gradient-to-r rounded-full from-emerald-300 to-sky-400 absolute"
                    style={{
                      top: hobbie.top,
                      left: hobbie.left,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="text-gray-900 font-semibold whitespace-nowrap">
                      {hobbie.title}
                    </span>
                    <span>{hobbie.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
              <a href={Locationurl} target="_blank" rel="noopener noreferrer">
                <Image
                  src={MapImage}
                  alt="Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:absolute after:inset-0 after:content-[''] after:outline after:outline-2 after:outline-gray-500/30 after:-outline-offset-2 after:rounded-full" >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <Image src={SmileMemoji} alt="Smile Emoji" />
                </div>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
