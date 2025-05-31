"use client";

import React, { useState } from "react";
import NavbarSection from "@/components/Navbar";
import Image from "next/image";
import Link from 'next/link';

const projectData = [
  {
    imageSrc: "/lumiui.png",
    title: "Lumihood",
    description: "Lumihood is a gentle mood journal app designed to help you reconnect with your emotions through colors, visuals, sounds, and reflections.",
    projectId: "lumihood"
  },
  {
    imageSrc: "/dailyui.png",
    title: "Daily UI",
    description: "Daily UI Challenge is a creative design challenge where participants complete daily interface design tasks to improve their skills and build a strong design portfolio.",
    projectId: "dailyui"
  },
  {
    imageSrc: "/atlasui.png",
    title: "Atlas",
    description: "Atlas is a streamlined Balanced Scorecard application designed to help individuals and organizations plan, track, and achieve their goals effectively.",
    projectId: "atlas"
  },
  {
    imageSrc: "/bconnectui.png",
    title: "Barangay Connect",
    description: "Barangay Connect is a community hub designed to enhance communication and engagement within a barangay. ",
    projectId: "bconnect"
  },
  {
    imageSrc: "/icareui.png",
    title: "iCare",
    description: "iCare is a comprehensive medical application designed to simplify healthcare management for users. ",
    projectId: "icare"
  },
  {
    imageSrc: "/sweetrushui.png",
    title: "Sweet Rush",
    description: "SweetRush is a delightful mobile application designed to bring the joy of discovering and ordering sweet treats to users.",
    projectId: "sweetrush"
  },
];

const ProjectsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      <NavbarSection />

      <div className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6 mt-16">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="p-3"
                onMouseEnter={() => setHoveredIndex(index)} 
                onMouseLeave={() => setHoveredIndex(null)} 
              >
                <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden relative">
                  <div className="relative h-[27rem] overflow-hidden"> 
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className={`absolute transition-transform duration-300 ${  
                        hoveredIndex === index ? 'scale-110' : ''
                      }`}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <Link href={`/projects/${project.projectId}`}> 
                      <button className="bg-[#FF9A02] text-white px-4 py-2 rounded-md cursor-pointer">
                        View Project
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;