"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"

export default function ExperienceSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqItems = [
    {
      question: "Where did you do your internship?",
      answer:
        <>
          I interned at <b>Symph</b> from January to the first week of April 2025.
        </>,
    },
    {
      question: "Where did you study?",
      answer: (
        <>
          <ul>
            <li>
              <b>College</b>: Cebu Institute of Technology – University (CIT-U)
            </li>
            <li>
              <i>Bachelor of Science in Information Technology</i>
            </li>
            <li>
              <b>SHS</b>: Mandaue City Comprehensive National High School (MCCNHS)
            </li>
            <li>
              <i>Technical Vocational Livelihood - ICT</i>
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "What certifications do you have?",
      answer: (
        <>
          <ul>
            <li>Introduction to Programming</li>
            <li>Data Visualization</li>
            <li>Introduction to Machine Learning</li>
            <li>Pandas for Data Analysis</li>
            <li>SoloLearn PHP & SQL</li>
          </ul>
        </>
      ),
    },
    {
      question: "How do you approach design?",
      answer:
        <>My design process starts with <b>research</b> to understand the audience, pain points, and competitors. I then create <b>user personas</b> and structure the content through <b>site mapping</b>. Next, I develop <b>wireframes</b> to outline layouts and build prototypes for interactive testing. After gathering feedback through <b>user testing</b>, I refine the design and <b>finalize high-fidelity UI</b> visuals using Figma</>,
    },
    {
      question: "What are your core design principles?",
      answer:
        "My design approach is user-centered, prioritizing user needs and behaviors to create meaningful experiences. I focus on simplicity, consistency, and accessibility for all users.",
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <div className="py-32 px-8 w-[80%] mx-auto flex flex-col md:flex-row">
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(12deg);
          }
          50% { 
            transform: translateY(-10px) rotate(12deg);
          }
        }
        
        @keyframes float-reverse {
          0%, 100% { 
            transform: translateY(0px) rotate(-12deg);
          }
          50% { 
            transform: translateY(-8px) rotate(-12deg);
          }
        }
        
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) rotate(-6deg);
          }
          50% { 
            transform: translateY(-12px) rotate(-6deg);
          }
        }
        
        @keyframes float-gentle {
          0%, 100% { 
            transform: translateY(0px) rotate(6deg);
          }
          50% { 
            transform: translateY(-6px) rotate(6deg);
          }
        }
        
        .float-1 {
          animation: float 2s ease-in-out infinite;
        }
        
        .float-2 {
          animation: float-reverse 1s ease-in-out infinite 0.5s;
        }
        
        .float-3 {
          animation: float-slow 3s ease-in-out infinite 1s;
        }
        
        .float-4 {
          animation: float-gentle 2s ease-in-out infinite 1.5s;
        }
      `}</style>
      
      {/* Left side - Title with stickers */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center relative">
        <div className="relative">
          <p className="text-[clamp(2rem,3vw,4rem)] font-bold">Where <span className='text-[#FF9A02]'>Learning</span></p>
          <p className="text-[clamp(2rem,3vw,4rem)] font-bold">Meets <span className='text-[#FF9A02]'>Experience</span></p>

          {/* Floating Stickers around the title */}
          <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 bg-yellow-200 p-2 sm:p-3 rounded-full shadow-md float-1 hover:scale-110 transition-transform cursor-pointer">
            <span className="text-xl">🤔</span>
          </div>

          <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-8 bg-blue-200 p-2 sm:p-3 rounded-full shadow-md float-2 hover:scale-110 transition-transform cursor-pointer">
            <span className="text-xl">💡</span>
          </div>

          <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-green-200 p-2 sm:p-3 rounded-full shadow-md float-3 hover:scale-110 transition-transform cursor-pointer">
            <span className="text-xl">📚</span>
          </div>

          <div className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 bg-pink-200 p-2 sm:p-3 rounded-full shadow-md float-4 hover:scale-110 transition-transform cursor-pointer">
            <span className="text-xl">🔍</span>
          </div>
        </div>
      </div>

      {/* Right side - FAQ accordion */}
      <div className="w-full md:w-1/2 p-4 md:p-8 overflow-auto">
        <div className="max-w-xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full text-left font-medium text-lg py-2 focus:outline-none"
              >
                <span>{item.question}</span>
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-[#ffeacb] text-[#fdad35] font-bold">
                  {openItems.includes(index) ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              {openItems.includes(index) && (
                <div className="mt-2 text-muted-foreground animate-fadeIn">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}