import React from "react";

const HeaderSection = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: String;
  title: String;
  description: String;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text ">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-white/60 text-center mt-4 md:text-lg max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};

export default HeaderSection;
