"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

const EmailButton = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "mailto:aryankitb@gmail.com?subject=Let's%20Collaborate!";
  };

  return (
    <button
      onClick={handleClick}
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none group hover:scale-105 transition-transform duration-300"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 transition-all duration-300">
        Let&apos;s get in touch
        <FaLocationArrow className="group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  );
};

export default EmailButton; 