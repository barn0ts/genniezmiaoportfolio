"use client";

import React, { useState } from "react";

const ThingsToKnow = () => {
  const [showImages, setShowImages] = useState(false);
  const [visibleTextIndex, setVisibleTextIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    "/8things7.png",
    "/8things2.png", 
    "/8things3.png",
    "/8things4.png",
    "/8things5.png",
    "/8things6.png",
    "/8things1.png",
    "/8things8.png",
  ];

  const descriptions = [
    "I bake goodies.",
    "I have two dogs.",
    "I love cartoon movies.",
    "I clean to destress",
    "Hopeless romantic? Maybe.",
    "I do UI/UX design with passion!",
    "I am a proud Pisces baby!",
    "Nothing beats good laughs with friends!",
  ];

  const imageSize = "clamp(40px, 8vw, 100px)";
  const sideImageSize = "clamp(60px, 12vw, 160px)";

  const getImageStyle = (baseStyle: any, index: number) => {
    const hasText = visibleTextIndex === index;
    const moveUp = hasText ? 'translateY(-10px)' : '';
    const baseRotation = baseStyle.rotate || `${(index * 7) % 15 - 7}deg`; 
    
    if (baseStyle.translateX && baseStyle.translateY) {
      return `${baseStyle.translateX} ${baseStyle.translateY} ${moveUp} rotate(${baseRotation})`;
    } else if (baseStyle.translateX) {
      return `${baseStyle.translateX} ${moveUp} rotate(${baseRotation})`;
    } else if (baseStyle.translateY) {
      return `${baseStyle.translateY} ${moveUp} rotate(${baseRotation})`;
    } else {
      return `${moveUp} rotate(${baseRotation})`;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center p-5 text-gray-900 overflow-hidden relative mt-20 mb-20">

      {(showImages || isHovered) && (
        <div className="absolute inset-0 pointer-events-none">
          
          {[
            { top: "15%", left: "clamp(25%, 30vw, 35%)", size: imageSize },
            { top: "10%", left: "50%", size: imageSize, translateX: "translateX(-50%)" },
            { top: "15%", right: "clamp(25%, 30vw, 35%)", size: imageSize },
            { bottom: "15%", left: "clamp(25%, 30vw, 35%)", size: imageSize },
            { bottom: "10%", left: "50%", size: imageSize, translateX: "translateX(-50%)" },
            { bottom: "15%", right: "clamp(25%, 30vw, 35%)", size: imageSize },
            { top: "50%", left: "clamp(8%, 15vw, 18%)", size: sideImageSize, translateY: "translateY(-50%)" },
            { top: "50%", right: "clamp(8%, 15vw, 18%)", rotate: "3deg", size: sideImageSize, translateY: "translateY(-50%)" },
          ].map((style, index) => (
            <div
              key={index}
              className="absolute flex flex-col items-center transition-transform duration-300 ease-in-out"
              style={{
                top: style.top,
                bottom: style.bottom,
                left: style.left,
                right: style.right,
                width: style.size,
                height: "auto",
                pointerEvents: "auto",
                transform: getImageStyle(style, index),
              }}
            >
              <img
                src={images[index]}
                alt={`Image ${index + 1}`}
                style={{ 
                  width: "100%", 
                  height: "auto",
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "8px",
                  aspectRatio: "1/1"
                }}
                onClick={() =>
                  setVisibleTextIndex(visibleTextIndex === index ? null : index)
                }
                onError={(e) => {
                  e.currentTarget.style.backgroundColor = "#ddd";
                  e.currentTarget.style.display = "flex";
                  e.currentTarget.style.alignItems = "center";
                  e.currentTarget.style.justifyContent = "center";
                  e.currentTarget.innerHTML = `<span style="font-size: 12px; color: #666;">Image ${index + 1}</span>`;
                }}
              />
              {visibleTextIndex === index && (
                <div className="mt-2 text-[clamp(0.7rem,2.5vw,0.875rem)] bg-opacity-80 px-2 py-1 text-[#FF9A02] transition-opacity duration-300">
                  {descriptions[index]}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Main Text */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="text-[clamp(2rem,5vw,5rem)] font-bold mt-14">
          <span className="text-[#FF9A02] cursor-pointer" onClick={() => setShowImages(!showImages)}>
            8 things
          </span>
        </h1>
        <span className="text-[clamp(2rem,5vw,5rem)] font-bold cursor-pointer mt-[-1rem]" onClick={() => setShowImages(!showImages)}>
          you should know
        </span>
        <p className="text-[clamp(2rem,5vw,5rem)] font-bold mb-8 mt-[-1rem]">
          <span className="text-[#FF9A02] cursor-pointer" onClick={() => setShowImages(!showImages)}>
            about me
          </span>
        </p>
      </div>
    </div>
  );
};

export default ThingsToKnow;