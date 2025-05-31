"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from 'lucide-react';


const HeroSection = () => {
  const [hovered, setHovered] = useState<"Gen" | "UI/UX" | null>(null);
  const router = useRouter();
  const [isButtonHovered, setIsButtonHovered] = React.useState(false);

  const genImages = [
    "/genicon1.jpg",
    "/genicon2.jpg",
    "/genicon3.jpg",
    "/genicon4.JPG",
  ];

  const uiuxImages = [
    "/atlasport.png",
    "/sweetrushport.png",
    "/lumireport.png",
    "/bconnectport.png",
  ];

  const imageSize = "clamp(50px, 15vw, 150px)";

  const handleLearnMoreClick = () => {
    router.push("/aboutme");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center p-5 text-gray-900 overflow-hidden">

      {/* Hover Images */}
      {hovered && (
        <div className="absolute inset-0 pointer-events-none">
          {hovered && (
            <div className="absolute inset-0 pointer-events-none">
                {(hovered === "Gen" ? genImages : uiuxImages).map((src, index) => (
                    <div
                    key={index}
                    className="absolute transition-opacity duration-300 opacity-100 shadow-lg rounded-xl overflow-hidden"
                    style={{
                        transform: `rotate(${index * 10 - 15}deg)`,
                        top: index % 2 === 0 ? "20%" : "70%",
                        left: index < 2 ? "20%" : "70%",
                        width: imageSize,
                        height: imageSize,
                    }}
                    >
                    <Image
                        src={src}
                        alt={`${hovered} Image`}
                        width={150}
                        height={150}
                        style={{
                        objectFit: "cover",
                        }}
                        priority
                    />
                    </div>
                ))}
                </div>
            )}
        </div>
      )}

      {/* Main Text */}
      <h1 className="text-[clamp(2rem,5vw,5rem)] font-bold mt-14 mb-2">
        Hi, I'm{" "}
        <span
          className="text-[#FF9A02] cursor-pointer"
          onMouseEnter={() => setHovered("Gen")}
          onMouseLeave={() => setHovered(null)}
        >
          Gen
        </span>
      </h1>
      <p className="text-[clamp(2rem,5vw,5rem)] font-bold mb-8">
        a{" "}
        <span
          className="text-[#FF9A02] cursor-pointer"
          onMouseEnter={() => setHovered("UI/UX")}
          onMouseLeave={() => setHovered(null)}
        >
          UI/UX
        </span>{" "}
        Designer
      </p>

      <button
        onClick={handleLearnMoreClick}
        className={`bg-[#FF9A02] text-white px-6 py-2 lg:py-3  text-lg rounded-md cursor-pointer flex items-center transition-transform duration-200 hover:scale-110`} // Added transition-transform hover:scale-110
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        style={{
          fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
          paddingLeft: "clamp(1rem, 3vw, 2.5rem)",
          paddingRight: "clamp(1rem, 3vw, 2.5rem)",
        }}
      >
          Learn More
          <ArrowRight className="ml-2" size={20} />
      </button>
    </div>
  );
};

export default HeroSection;