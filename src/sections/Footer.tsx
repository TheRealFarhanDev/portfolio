import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/TheRealFarhanDev",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/mohammed-farhan-0b2ab4341/",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/farhxn_13/#",
  },
  {
    title: "Gmail",
    href: "https://mail.google.com/mail/u/0/?fs=1&to=linkupwithfarhan@gmail.com&su=Subject&body=Message&tf=cm",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip bg-white text-gray-900 dark:bg-transparent dark:text-white">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 
  bg-stone-200/80 dark:bg-emerald-300/30 
  [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] 
  -z-10 pointer-events-none"
      />{" "}
      <div className="container">
        <div className="border-t border-gray-400/75 dark:border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8 mt-4">
          <div className="text-gray-500 dark:text-white/40">
            &copy; 2025. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 text-gray-900 dark:text-white"
                target="_blank"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
