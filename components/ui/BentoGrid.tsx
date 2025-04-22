"use client";

import { useState } from "react";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";
import dynamic from 'next/dynamic';
import { cn } from "@/lib/utils";
import GridGlobe from "./GridGlobe";

// Dynamically import BackgroundGradientAnimation with SSR disabled
const BackgroundGradientAnimation = dynamic(
  () => import("./GradientBg").then((mod) => mod.BackgroundGradientAnimation),
  {
    ssr: false,
    loading: () => (
      <div className="relative h-full w-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="text-white font-bold text-3xl text-center md:text-4xl lg:text-5xl mb-8">
          Loading...
        </div>
      </div>
    ),
  }
);

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = "aryankitb@gmail.com";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn("h-full", id === 6 ? "flex justify-center" : "")}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 ? (
          <BackgroundGradientAnimation containerClassName="w-full h-full">
            <div className="relative h-full w-full flex flex-col items-center justify-center p-8 z-20">
              <div className="text-white font-bold text-lg text-center md:text-xl lg:text-2xl mb-8">
                Let&apos;s collaborate and build something amazing together!
              </div>
              <button
                onClick={handleCopy}
                className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none group/button hover:scale-105 transition-transform"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#161A31] px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 transition-all duration-300 group-hover/button:bg-opacity-90">
                  {copied ? (
                    <>
                      <IoCheckmarkOutline className="text-green-400 animate-bounce" />
                      <span className="animate-pulse">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <IoCopyOutline className="group-hover/button:rotate-12 transition-transform" />
                      Copy my email address
                    </>
                  )}
                </span>
              </button>
            </div>
          </BackgroundGradientAnimation>
        ) : (
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>
            <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
              {title}
            </div>

            {id === 2 && <GridGlobe />}

            {id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  {leftLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
                </div>
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
                  {rightLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}; 