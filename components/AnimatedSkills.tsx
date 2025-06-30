"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

type Skill = {
  name: string
  color: string
  x: number
  y: number
  direction: {
    x: number
    y: number
  }
}

export default function AnimatedSkills() {
  const [skills, setSkills] = useState<Skill[]>([
    {
      name: "UI/UX DESIGN",
      color: "bg-amber-200 border-amber-300",
      x: -50, 
      y: -20,
      direction: { x: 0.2, y: 0.1 },
    },
    {
      name: "WIREFRAMING",
      color: "bg-blue-200 border-blue-300",
      x: 50,  
      y: -30,
      direction: { x: -0.15, y: 0.2 },
    },
    {
      name: "COLLABORATION",
      color: "bg-green-200 border-green-300",
      x: 0,   
      y: 30,
      direction: { x: 0.1, y: -0.2 },
    },
    {
      name: "GROWTH MINDSET",
      color: "bg-red-200 border-red-300",
      x: -70, 
      y: 60,
      direction: { x: 0.2, y: -0.1 },
    },
    {
      name: "SITE MAPPING",
      color: "bg-pink-200 border-pink-300",
      x: 0,  
      y: 80,  
      direction: { x: -0.1, y: -0.15 },
    },
    {
      name: "DESIGN TRENDS",
      color: "bg-purple-200 border-purple-300",
      x: 70,   
      y: 40,
      direction: { x: -0.2, y: 0.1 },
    },
  ])

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setSkills((prevSkills) =>
        prevSkills.map((skill) => {
          let newX = skill.x + skill.direction.x * 3; 
          let newY = skill.y + skill.direction.y * 3;

          
          const bounds = 130;
          let newDirectionX = skill.direction.x
          let newDirectionY = skill.direction.y

          if (Math.abs(newX) > bounds) {
            newDirectionX = -skill.direction.x
            newX = newX > 0 ? bounds : -bounds
          }

          if (Math.abs(newY) > bounds) {
            newDirectionY = -skill.direction.y
            newY = newY > 0 ? bounds : -bounds
          }

          return {
            ...skill,
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
        maxWidth: "clamp(180px, 50vw, 480px)",
        maxHeight: "clamp(130px, 30vh, 380px)",
      }}
    >

      <div className="relative w-full h-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`absolute left-1/2 top-1/2 ${skill.color} px-4 py-2 rounded-full border text-[clamp(0.8rem, 5vw, 1.5rem)] font-medium shadow-sm`}
            style={{
              translateX: "-50%", 
              translateY: "-50%",
            }}
            animate={{
              x: skill.x,
              y: skill.y,
              transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
              },
            }}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </div>
  )
}