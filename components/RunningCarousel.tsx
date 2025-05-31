"use client";

import React from "react";

interface RunningCarouselProps {
  items: string[];
  direction?: "left" | "right";
}

const RunningCarousel = ({ items, direction = "left" }: RunningCarouselProps) => {
  // Determine rotation (not needed here anymore)
  const animationClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div
      className="overflow-hidden whitespace-nowrap text-[#fdd69b] font-semibold md:text-xl"
      style={{
        position: "relative"
      }}
      aria-label="running carousel"
    >
      {/* Render the same content twice to loop smoothly */}
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className={`inline-block ${animationClass} text-[5rem] font-bold`}
          style={{
            paddingRight: "2rem"
          }}
          aria-hidden={i === 1}
        >
          {items.map((item, index) => (
            <React.Fragment key={`${i}-${index}`}>
              <span className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
                {item}
              </span>
              {index < items.length - 1 && <span> • </span>}
            </React.Fragment>
          ))}
        </div>
      ))}

      {/* Keyframes for both directions */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
          white-space: nowrap;
        }
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default RunningCarousel;
