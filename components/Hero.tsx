import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-24 overflow-hidden">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div className="relative">
        <Spotlight
          className="-top-40 left-0 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[40vw] top-10 right-0 md:left-full"
          fill="purple"
        />
        <Spotlight className="left-1/2 top-28 h-[80vh] w-[40vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center overflow-hidden"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-16 z-10">
        <div className="w-full max-w-[85vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl px-4">
            Hi! I&apos;m Aryankit, a Next.js Developer based in India.
          </p>

          <a href="https://github.com/aryankit-Block" target="_blank" rel="noopener noreferrer">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
