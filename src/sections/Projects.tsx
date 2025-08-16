import PostNestLandingPage from "@/assets/images/postnest-preview.png";
import greenCartLandingPage from "@/assets/images/green-cart.png";
import filmFetchLandingPage from "@/assets/images/film-fetch.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import HeaderSection from "@/components/HeaderSection";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Best Solo Project",
    year: "2025",
    title: "GreenCart – Grocery Hub",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://greencart-frontend-blond.vercel.app/",
    image: greenCartLandingPage,
  },
  {
    company: "Solo Project",
    year: "May 2025",
    title: "PostNest – Blog Platform",
    results: [
      { title: "Improved UX by 40%" },
      { title: "Boosted speed by 50%" },
      { title: "Grew mobile traffic by 35%" },
    ],
    link: "https://postnest.vercel.app/",
    image: PostNestLandingPage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "FilmFetch - Movie Database",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://film-fetch.vercel.app/",
    image: filmFetchLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-16 lg:py-20" id="projects">
      <div className="container">
        <HeaderSection
          eyebrow="REAL-WORLD PROJECTS"
          title="Featured Creations"
          description="Discover how I built full-stack apps with clean UI and high
          performance."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, project_index) => (
            <Card
              key={project.title}
              className="px-8 pb-0 pt-8 md:px-10 md:pt-12 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${project_index}* 40px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-600 to-sky-600 dark:from-emerald-300 dark:to-sky-300 text-transparent bg-clip-text inline-flex gap-2 font-bold tracking-widest text-sm uppercase">
                    <span>{project?.company}</span>
                    <span>&bull;</span>
                    <span>{project?.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <hr className="border-2 border-gray-200 dark:border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 items-center text-sm text-gray-600 dark:text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 h-12 w-full md:w-auto px-6 rounded-xl font-bold inline-flex justify-center items-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-2xl shadow-xl"
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
