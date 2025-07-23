import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import memojiAvatar6 from "@/assets/images/memoji-avatar-6.png";
import HeaderSection from "@/components/HeaderSection";
import Image from "next/image";
import Card from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Preetham",
    position: "Java DSA Enthusiast ⚙️",
    text: "While I’m still figuring out how to reverse a linked list, Farhan is building full-stack apps like it’s light work. Man’s got the cleanest Tailwind setups I’ve seen.",
    avatar: memojiAvatar1,
  },
  {
    name: "Sharath",
    position: "Python DSA Navigator 🐍",
    text: "I’m stuck on Leetcode mediums, he’s deploying MERN apps with infinite scroll and auth. Every time I see his UI, I get motivated and depressed.",
    avatar: memojiAvatar2,
  },
  {
    name: "Gokarnesh",
    position: "Frontend & Database Tinkerer 🧩",
    text: "We both started building side projects, but this guy dropped Postnest like it was a weekend hack. Clean UI, smooth queries — solid stuff all around.",
    avatar: memojiAvatar3,
  },
  {
    name: "Lakshmish",
    position: "Data Analysis Explorer 📊",
    text: "I’m more into pandas and plots these days, but every time I peek at his GitHub — I feel like switching to web dev. Everything’s just so clean and well-built.",
    avatar: memojiAvatar4,
  },
  {
    name: "Chandan",
    position: "Django Backend Builder 🛠️",
    text: "I send REST APIs. He builds dashboards that look like Dribbble shots. Frontend magic + full-stack knowledge — dangerous combo.",
    avatar: memojiAvatar5,
  },
  {
    name: "Dhanush",
    position: "Cybersecurity Enthusiast 🛡️",
    text: "While I’m usually buried in firewalls and threat reports, seeing his work on Projects, it reminds me how secure and sleek a well-built app can be. It's full-stack done right — both in form and function.",
    avatar: memojiAvatar6,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
  <div className="container">
    <HeaderSection
      eyebrow="Project Collaborators"
      title="What Teammates Say About Me"
      description="Not just code — here&rsquo;s what folks I&rsquo;ve worked with say about the experience."
    />

    <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
      <div className="flex gap-8 pr-8 flex-none animate-move-left transition duration-300 hover:[animation-play-state:paused]">
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3"
              >
                <div className="flex gap-4 items-center">
                  <div className="bg-white dark:bg-gray-700 rounded-full size-14 inline-flex justify-center items-center flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-white/40">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-700 dark:text-white/70">
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};
