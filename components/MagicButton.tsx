"use client";

import React, { useState } from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  email,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  email?: string;
}) => {
  const [buttonText, setButtonText] = useState(title);

  const handleButtonClick = async () => {
    if (email) {
      try {
        await navigator.clipboard.writeText(email);
        setButtonText("✓ Email Copied!");
        
        // Reset button text after 3 seconds
        setTimeout(() => {
          setButtonText(title);
        }, 3000);
      } catch (err) {
        console.error("Failed to copy email:", err);
        setButtonText("Failed to copy");
        
        // Reset on error after 3 seconds
        setTimeout(() => {
          setButtonText(title);
        }, 3000);
      }
    } else if (handleClick) {
      handleClick();
    }
  };

  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleButtonClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 transition-all duration-300 ${otherClasses}`}
      >
        {position === "left" && icon}
        {buttonText}
        {position === "right" && buttonText === title && icon}
      </span>
    </button>
  );
};

export default MagicButton;
