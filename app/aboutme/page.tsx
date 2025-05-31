"use client";

import React, { useState, useEffect, useRef } from 'react';
import NavbarSection from "@/components/Navbar";
import Image from 'next/image';
import AnimatedSkills from "@/components/AnimatedSkills";
import AnimatedSoftwares from "@/components/AnimatedSoftwares";
import ExperienceSection from "@/components/ExperienceSection"; 
import { ArrowDown } from "lucide-react"; 
import RunningCarousel from "@/components/RunningCarousel";;

const AboutMePage = () => {
  // const faqData = [
  //   { question: "What is your design process?", answer: "I usually start with..." },
  //   { question: "What are your favorite design tools?", answer: "I love using Figma..." },
  //   { question: "What is your design philosophy?", answer: "I believe that good design..." },
  // ];
  const [hovered, setHovered] = useState<"Gen" | "UI/UX" | "Skills" | "Software" | null>(null);

  const design = [
    "/design.png"
  ];

  const think = [
    "/twice.png"
  ];

  const imageSize = "clamp(100px, 20vw, 300px)";

  const imageSources = [
    "/genicon1.jpg",
    "/genicon2.jpg",
    "/genicon3.jpg",
    "/genicon4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [imageSources.length]);

  const scrollToSection2 = () => {
    section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const firstVersion = [
    "DESIGNER",
    "FUR SISTER",
    "BAKER",
    "TECHIE",
    "CLEAN FREAK",
    "CREATIVE",
    "ROMCOM LOVER",
  ];

  const secondVersion = [
    "BE CURIOUS",
    "ALWAYS GIVE YOUR BEST",
    "NEVER STOP GROWING",
    "STAY HUMBLE",
    "WORK HARD",
    "TRUST THE PROCESS",
  ];
  

  return (
    <div className='text-gray-900 '>
      <NavbarSection />

      {/* Section 1: Big Text with Gradient Background */}
      <div className="relative h-screen flex flex-col justify-center items-center text-5xl font-bold overflow-hidden"> {/* Added overflow-hidden */}
        <Image
          src="/gradientbg.png"
          alt="Background Gradient"
          layout="fill"
          objectFit="cover"
          className="bg-white"
          style={{ zIndex: -1 }}
          priority 
        />
        <div className="absolute inset-0 pointer-events-none">
          {hovered === "Gen" && design.map((src, index) => (
              <div
                key={`design-${index}`}
                className="absolute transition-opacity duration-300 opacity-100 rounded-xl overflow-hidden"
                style={{
                  transform: `rotate(${index * 20 - 10}deg)`,
                  top: '25%', 
                  left: '25%', 
                  width: imageSize,
                  height: imageSize,
                }}
              >
                <Image
                  src={src}
                  alt="Design Image"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            ))
          }

          {hovered === "UI/UX" && (
            <div
              className="absolute transition-opacity duration-300 opacity-100 rounded-xl overflow-hidden"
              style={{
                bottom: '26%', 
                right: '12%',  
                transform: 'rotate(8deg)', 
                width: imageSize,
                height: imageSize,
              }}
            >
              <Image
                src={think[0]}
                alt="Think Image"
                width={300}
                height={300}
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          )}
        </div>

        {/* Text Content */}
        <h1 className="relative z-10 text-[clamp(2rem,5vw,5rem)] font-bold mt-14 mb-8 text-center px-4"> 
          <span
            className="text-[#FF9A02] cursor-pointer mr-2 md:mr-5"
            onMouseEnter={() => setHovered("Gen")}
            onMouseLeave={() => setHovered(null)}
          >
            I design,
          </span>
          so users
        </h1>
        <p className="relative z-10 text-[clamp(2rem,5vw,5rem)] font-bold mb-8 text-center px-4"> 
          don&apos;t have to{" "}
          <span
            className="text-[#FF9A02] cursor-pointer"
            onMouseEnter={() => setHovered("UI/UX")}
            onMouseLeave={() => setHovered(null)}
          >
            think twice.
          </span>{" "}
        </p>
        <button
            className="bg-[#FF9A02] text-white px-10 py-2 lg:py-3 text-lg rounded-md cursor-pointer flex items-center mt-5 transition-transform duration-200 hover:scale-110"
            onClick={scrollToSection2}
            style={{
              fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
              paddingLeft: "clamp(1rem, 3vw, 2.5rem)",
              paddingRight: "clamp(1rem, 3vw, 2.5rem)",
            }}
          >
            Explore <ArrowDown className="ml-2" size={20} />
          </button>
      </div>


      <div className='bg-white'>
      {/* Section 2: Image Left, Text Right - Carousel */}
      <div className="bg-white pt-32 md:pt-48 px-8 xl:ml-[-12rem] md:ml-[-1rem]" ref={section2Ref}>
        <div className="container mx-auto flex items-center justify-center flex-col md:flex-row">
          <div className={`w-full md:w-1/2 mb-8 md:mb-0 relative h-[20rem] md:h-[30rem] transition-transform duration-300 ${hovered === "Gen" ? "scale-110" : "scale-100"}`}>
            {imageSources.map((src, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-4000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={src}
                  alt={`About Me Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg mx-auto object-cover h-full w-full"
                  style={{ objectFit: "cover", height: "100%", width: "50%" }}
                />
              </div>
            ))}
          </div>
          <div className="w-[25rem] md:w-[30rem] pl-0 md:pl-auto xl:ml-[-10rem] text-center md:text-left">
            <h2 className="text-[clamp(1.2rem,3vw,2rem)] font-bold mb-4">
              Hello! You can call me 
              <span
                className="text-[#FF9A02] cursor-pointer"
                onMouseEnter={() => setHovered("Gen")}
                onMouseLeave={() => setHovered(null)}
              >
                {" "}Gen
              </span>
            </h2>
            <p className="text-[clamp(1.2rem, 2vw, 1.5rem)] text-gray-800 leading-relaxed">
              I’m a UI/UX designer passionate about crafting <span className="text-[#FF9A02]">intuitive</span> and <span className="text-[#FF9A02] mr-1">visually compelling</span>
              experiences. My focus is on blending <span className="text-[#FF9A02]">creativity</span> with <span className="text-[#FF9A02] mr-1">functionality</span>
              to design seamless, user-friendly interfaces. You’ll most likely find me in
              Figma—or if not, on Instagram, watching design reels to stay inspired and updated.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-48 max-w-full px-8 bg-white">
        <RunningCarousel items={firstVersion} direction="left"/>
      </div>

      <div className="mb-20 max-w-full px-8 bg-white">
        <RunningCarousel items={secondVersion} direction="right"/>
      </div>

      {/* Section 3: Text Left, Animated Skills Right */}
      <div className="bg-white mt-[-10rem] px-8 flex items-center justify-center min-h-screen">
        <div className="container mx-auto flex items-center justify-center flex-col md:flex-row">
          <div className="w-[25rem] md:w-[30rem] pl-0 md:pl-auto lg:ml-[10rem] text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-[clamp(1.2rem,3vw,2rem)] font-bold mb-4">
              My <span
                className="text-[#FF9A02] cursor-pointer"
                onMouseEnter={() => setHovered("Skills")}
                onMouseLeave={() => setHovered(null)}
              >Skills</span>
            </h2>

            <p className="text-[clamp(1.2rem, 2vw, 1.5rem)] text-gray-800 leading-relaxed">
              As a UI/UX designer, I specialize in crafting intuitive and user-friendly designs.
              I excel in wireframing, collaboration, and actively listening to user feedback to refine
              experiences. I stay flexible, incorporating design trends to create visually compelling
              and functional interfaces.
            </p>
          </div>
          <div className={`w-full md:w-1/2 flex items-center justify-center xl:ml-[-12rem] transition-transform duration-300 ${hovered === "Skills" ? "scale-110" : "scale-100"}`}>
            <AnimatedSkills />
          </div>
        </div>
      </div>

      {/* Section 4: Image Left, Text Right */}
      <div className="bg-white pb-32 md:pb-48 px-8 xl:ml-[-2rem]">
        <div className="container mx-auto flex items-center justify-center flex-col md:flex-row">
          <div className={`w-full md:w-1/2 flex items-center justify-center xl:ml-[-12rem] transition-transform duration-300 ${hovered === "Software" ? "scale-110" : "scale-100"}`}>
            <AnimatedSoftwares />
          </div>
          <div className="w-[25rem] md:w-[30rem] pl-0 md:pl-auto lg:ml-[-7rem] text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-[clamp(1.2rem,3vw,2rem)] font-bold mb-4">
              <span
                className="text-[#FF9A02] cursor-pointer"
                onMouseEnter={() => setHovered("Software")}
                onMouseLeave={() => setHovered(null)}
              >Software</span> of Choice
            </h2>
            <p className="text-[clamp(1.2rem, 2vw, 1.5rem)] text-gray-800 leading-relaxed">
              I rely on Figma for designing, ChatGPT for brainstorming, and Notion for organizing ideas. Discord keeps me connected, while Dribbble and Coolors inspire creativity. Canva helps me with quick visuals.
            </p>
          </div>
        </div>
      </div>
    </div>

      {/* Section 5: Experience  */}
      <div className="relative py-10 flex justify-center items-center overflow-hidden"> 
        <Image
          src="/gradientbg.png"
          alt="Background Gradient"
          layout="fill"
          objectFit="cover"
          className="bg-white absolute inset-0" 
          style={{ zIndex: -1 }}
        />
        <ExperienceSection />
      </div>
    </div>
  );
};

export default AboutMePage;