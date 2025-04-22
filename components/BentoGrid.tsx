import dynamic from 'next/dynamic';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { IoCheckmarkOutline, IoCopyOutline } from 'react-icons/io5';

interface BentoItem {
  className: string;
  gradientBackgroundStart: string;
  gradientBackgroundEnd: string;
  firstColor: string;
  secondColor: string;
  thirdColor: string;
  fourthColor: string;
  fifthColor: string;
  pointerColor: string;
  size: string;
  blendingValue: string;
  content: React.ReactNode;
}

const BackgroundGradientAnimation = dynamic(
  () => import('./ui/GradientBg').then((mod) => mod.BackgroundGradientAnimation),
  {
    ssr: false,
    loading: () => (
      <div className="relative h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="text-white font-bold text-3xl text-center md:text-4xl lg:text-5xl mb-8">
          Loading...
        </div>
      </div>
    ),
  }
);

export function BentoGrid() {
  const [copied, setCopied] = useState(false);
  
  const items: BentoItem[] = [
    {
      className: "md:col-span-2 md:row-span-2",
      gradientBackgroundStart: "45deg",
      gradientBackgroundEnd: "225deg",
      firstColor: "#FFA07A",
      secondColor: "#FF6347",
      thirdColor: "#FF4500",
      fourthColor: "#FF8C00",
      fifthColor: "#FFA500",
      pointerColor: "#FFD700",
      size: "450",
      blendingValue: "hard-light",
      content: (
        <div className="p-8">
          <h1 className="font-bold text-2xl mb-4 text-white">Full Stack Developer</h1>
          <p className="text-sm text-neutral-300">
            Passionate about creating seamless web experiences with modern technologies
          </p>
        </div>
      ),
    },
    {
      className: "md:col-span-1",
      gradientBackgroundStart: "0deg",
      gradientBackgroundEnd: "180deg",
      firstColor: "#98FB98",
      secondColor: "#90EE90",
      thirdColor: "#3CB371",
      fourthColor: "#2E8B57",
      fifthColor: "#228B22",
      pointerColor: "#32CD32",
      size: "200",
      blendingValue: "hard-light",
      content: (
        <div className="p-8">
          <h2 className="font-bold text-xl mb-2 text-white">Tech Stack</h2>
          <p className="text-sm text-neutral-300">
            React, Next.js, TypeScript, Node.js
          </p>
        </div>
      ),
    },
    {
      className: "md:col-span-1",
      gradientBackgroundStart: "90deg",
      gradientBackgroundEnd: "270deg",
      firstColor: "#87CEEB",
      secondColor: "#00BFFF",
      thirdColor: "#1E90FF",
      fourthColor: "#4169E1",
      fifthColor: "#0000FF",
      pointerColor: "#4682B4",
      size: "200",
      blendingValue: "hard-light",
      content: (
        <div className="p-8">
          <h2 className="font-bold text-xl mb-2 text-white">Experience</h2>
          <p className="text-sm text-neutral-300">
            3+ years of professional development
          </p>
        </div>
      ),
    },
    {
      className: "md:col-span-3",
      gradientBackgroundStart: "180deg",
      gradientBackgroundEnd: "360deg",
      firstColor: "#E2CBFF",
      secondColor: "#393BB2",
      thirdColor: "#E2CBFF",
      fourthColor: "#7B61FF",
      fifthColor: "#9F7AEA",
      pointerColor: "#805AD5",
      size: "400",
      blendingValue: "hard-light",
      content: (
        <div className="relative h-full w-full flex flex-col items-center justify-center p-8 z-20">
          <div className="text-white font-bold text-xl text-center md:text-2xl lg:text-3xl mb-8">
            Do you want to start a project together?
          </div>
          <button
            onClick={() => {
              const text = "aryankitb@gmail.com";
              navigator.clipboard.writeText(text);
              setCopied(true);
              setTimeout(() => setCopied(false), 3000);
            }}
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
      ),
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 border border-transparent hover:border-slate-600 shadow-input",
            item.className
          )}
        >
          <BackgroundGradientAnimation
            containerClassName="rounded-xl"
            gradientBackgroundStart={item.gradientBackgroundStart}
            gradientBackgroundEnd={item.gradientBackgroundEnd}
            firstColor={item.firstColor}
            secondColor={item.secondColor}
            thirdColor={item.thirdColor}
            fourthColor={item.fourthColor}
            fifthColor={item.fifthColor}
            pointerColor={item.pointerColor}
            size={item.size}
            blendingValue={item.blendingValue}
            interactive={true}
          >
            <div className="relative z-20 h-full w-full p-4">
              {item.content}
            </div>
          </BackgroundGradientAnimation>
        </div>
      ))}
    </div>
  );
} 