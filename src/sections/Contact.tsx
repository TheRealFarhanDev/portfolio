import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
const gmailhref = "https://mail.google.com/mail/u/0/?fs=1&to=linkupwithfarhan@gmail.com&su=Subject&body=Message&tf=cm"
export const ContactSection = () => {
  return (
    <section className="py-12 lg:py-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0">
          <div
            className="absolute inset-0 overflow-clip rounded-3xl -z-10 opacity-5"
            style={{ backgroundImage: `url(${GrainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center ">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-wide">
                Let’s Build Something Incredible Together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Turning ideas into reality — whether starting fresh or scaling
                up, I’m ready to help. Let’s build something great.
              </p>
            </div>

            <div>
              <a href={gmailhref} target="_blank" className="inline-flex items-center gap-2 text-white bg-gray-900 px-6 h-12 rounded-xl w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
