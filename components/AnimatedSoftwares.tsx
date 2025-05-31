"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from 'next/image';

type Software = {
  src: string;
  alt: string;
  x: number;
  y: number;
  direction: {
    x: number;
    y: number;
  }
}

export default function AnimatedSoftwares() {
  const [softwares, setSoftwares] = useState<Software[]>([
    {
      src: "/figma.png",
      alt: "Figma",
      x: -60,
      y: -40,
      direction: { x: 0.2, y: 0.1 },
    },
    {
      src: "/chatgpt.png",
      alt: "ChatGPT",
      x: 60,
      y: -40,
      direction: { x: -0.15, y: 0.2 },
    },
    {
      src: "/notion.png",
      alt: "Notion",
      x: -20,
      y: 30,
      direction: { x: 0.1, y: -0.2 },
    },
    {
      src: "/discord.png",
      alt: "Discord",
      x: 20,
      y: 30,
      direction: { x: 0.2, y: -0.1 },
    },
    {
      src: "/dribble.jpg",
      alt: "Dribbble",
      x: -80,
      y: 80,
      direction: { x: -0.1, y: -0.15 },
    },
    {
      src: "/canva.png",
      alt: "Canva",
      x: 80,
      y: 80,
      direction: { x: -0.2, y: 0.1 },
    },
    {
      src: "/coolors.png",
      alt: "Coolors",
      x: 0,
      y: -80,
      direction: { x: 0.2, y: 0.2 },
    },
  ]);

  const [hoveredSoftware, setHoveredSoftware] = useState<string | null>(null);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setSoftwares((prevSoftwares) =>
        prevSoftwares.map((software) => {
          // Calculate new position
          let newX = software.x + software.direction.x * 3;
          let newY = software.y + software.direction.y * 3;

          // Bounce off invisible boundaries
          const bounds = 110;
          let newDirectionX = software.direction.x
          let newDirectionY = software.direction.y

          if (Math.abs(newX) > bounds) {
            newDirectionX = -software.direction.x
            newX = newX > 0 ? bounds : -bounds
          }

          if (Math.abs(newY) > bounds) {
            newDirectionY = -software.direction.y
            newY = newY > 0 ? bounds : -bounds
          }

          return {
            ...software,
            x: newX,
            y: newY,
            direction: {
              x: newDirectionX,
              y: newDirectionY,
            },
          }
        }),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full md:w-1/2 mb-8 md:mb-0 relative h-[20rem] md:h-[30rem] xl:ml-[5rem] bg-white border border-gray-200 rounded-lg overflow-hidden flex items-center justify-center"
      style={{
        maxWidth: "clamp(200px, 70vw, 500px)",
        maxHeight: "clamp(150px, 50vh, 400px)",
      }}
    >

      <div className="relative w-full h-full">
        {softwares.map((software, index) => (
          <motion.div
            key={index}
            className={`absolute left-1/2 top-1/2 rounded-full shadow-md`}
            style={{
              translateX: "-50%",
              translateY: "-50%",
            }}
            onMouseEnter={() => setHoveredSoftware(software.alt)}
            onMouseLeave={() => setHoveredSoftware(null)}
            animate={{
              x: software.x,
              y: software.y,
              transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
              },
            }}
          >
            <Image
              src={software.src}
              alt={software.alt}
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {hoveredSoftware && (
        <div className="absolute bottom-4 left-0 w-full text-center text-gray-800 font-semibold">
          {hoveredSoftware}
        </div>
      )}
    </div>
  )
}