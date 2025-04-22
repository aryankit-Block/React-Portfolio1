"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const [isSafari, setIsSafari] = useState(false);
  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }
  }, []);

  useEffect(() => {
    if (!mounted || typeof document === 'undefined') return;
    
    const style = document.documentElement.style;
    style.setProperty("--gradient-background-start", gradientBackgroundStart);
    style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    style.setProperty("--first-color", firstColor);
    style.setProperty("--second-color", secondColor);
    style.setProperty("--third-color", thirdColor);
    style.setProperty("--fourth-color", fourthColor);
    style.setProperty("--fifth-color", fifthColor);
    style.setProperty("--pointer-color", pointerColor);
    style.setProperty("--size", size);
    style.setProperty("--blending-value", blendingValue);

    return () => {
      // Cleanup CSS variables
      style.removeProperty("--gradient-background-start");
      style.removeProperty("--gradient-background-end");
      style.removeProperty("--first-color");
      style.removeProperty("--second-color");
      style.removeProperty("--third-color");
      style.removeProperty("--fourth-color");
      style.removeProperty("--fifth-color");
      style.removeProperty("--pointer-color");
      style.removeProperty("--size");
      style.removeProperty("--blending-value");
    };
  }, [mounted, gradientBackgroundStart, gradientBackgroundEnd, firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor, size, blendingValue]);

  useEffect(() => {
    if (!mounted) return;

    function move() {
      if (!interactiveRef.current) return;
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [tgX, tgY, curX, curY, mounted]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;
    const rect = interactiveRef.current.getBoundingClientRect();
    setTgX(event.clientX - rect.left);
    setTgY(event.clientY - rect.top);
  };

  if (!mounted) {
    return (
      <div className={cn(
        "relative h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900",
        containerClassName
      )}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative h-full w-full flex flex-col items-center justify-center overflow-hidden rounded-lg",
        containerClassName
      )}
      style={{
        position: "relative",
        zIndex: 0,
      }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          zIndex: -2,
          transform: `translate(${moveX}px, ${moveY}px)`,
        }}
      >
        <div
          className={cn(
            "w-full h-full absolute overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
            containerClassName
          )}
        >
          <svg className="hidden">
            <defs>
              <filter id="blurMe">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className={cn("", className)}>{children}</div>
          <div
            className={cn(
              "gradients-container h-full w-full blur-lg",
              isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
            )}
          >
            <div
              className={cn(
                `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                `[transform-origin:center_center]`,
                `animate-first`,
                `opacity-100`
              )}
            ></div>
            <div
              className={cn(
                `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                `[transform-origin:calc(50%-400px)]`,
                `animate-second`,
                `opacity-100`
              )}
            ></div>
            <div
              className={cn(
                `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                `[transform-origin:calc(50%+400px)]`,
                `animate-third`,
                `opacity-100`
              )}
            ></div>
            <div
              className={cn(
                `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                `[transform-origin:calc(50%-200px)]`,
                `animate-fourth`,
                `opacity-70`
              )}
            ></div>
            <div
              className={cn(
                `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
                `animate-fifth`,
                `opacity-100`
              )}
            ></div>

            {interactive && (
              <div
                ref={interactiveRef}
                onMouseMove={handleMouseMove}
                className={cn(
                  `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
                  `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
                  `opacity-70`
                )}
              ></div>
            )}
          </div>
        </div>
      </div>
      <div className="relative w-full h-full z-10">
        {children}
      </div>
    </div>
  );
};
