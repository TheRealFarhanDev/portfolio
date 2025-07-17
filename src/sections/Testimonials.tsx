import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import HeaderSection from "@/components/HeaderSection";
import Image from "next/image";
import GrainImage from "@/assets/images/grain.jpg";
import Card from "@/components/Card";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

// [
//   {
//     name: "Sarthak Jain",
//     position: "Java DSA Enthusiast ⚙️",
//     text: "While I’m still figuring out how to reverse a linked list, Farhan is building full-stack apps like it’s light work. Man’s got the cleanest Tailwind setups I’ve seen.",
//     avatar: memojiAvatar1,
//   },
//   {
//     name: "Mehul Patel",
//     position: "Python DSA Navigator 🐍",
//     text: "I’m stuck on Leetcode mediums, he’s deploying MERN apps with infinite scroll and auth. Every time I see his UI, I get motivated *and* depressed.",
//     avatar: memojiAvatar2,
//   },
//   {
//     name: "Tanya Rao",
//     position: "Frontend & Database Tinkerer 🧩",
//     text: "We both started building side projects, but this guy dropped Postnest like it was a weekend hack. Clean UI, smooth queries — solid stuff all around.",
//     avatar: memojiAvatar3,
//   },
//   {
//     name: "Yash Kulkarni",
//     position: "Flask/Django Backend Builder 🛠️",
//     text: "I send REST APIs. He builds dashboards that look like Dribbble shots. Frontend magic + full-stack knowledge — dangerous combo.",
//     avatar: memojiAvatar4,
//   },
//   {
//     name: "Niharika B.",
//     position: "Data Analysis Explorer 📊",
//     text: "I’m more into pandas and plots these days, but every time I peek at his GitHub — Postnest, Streamify, etc. — I feel like switching to web dev. Everything’s just so clean and well-built.",
//     avatar: memojiAvatar5,
//   },
// ];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <HeaderSection
          eyebrow="Project Collaborators"
          title="What Teammates Say About Me"
          description="Not just code — here&rsquo;s what folks I&rsquo;ve worked with say about the experience."
        />

        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8">
                <div className="flex gap-4 items-center">
                  <div className="bg-gray-700 rounded-full size-14 inline-flex max-h-full justify-center items-center flex-shrink-0">
                    <Image src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base text-white/70">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
