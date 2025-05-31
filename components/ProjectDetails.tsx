"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, X, ArrowUpRight } from 'lucide-react';

interface ProjectProps {
  project: {
    title: string;
    quote: string;
    description: string;
    imageSrc: string;
    myRole: React.ReactNode;
    contributions: string;
    myTeam: React.ReactNode;
    learnings: string;
    buttons: string[]; 
    previewImages: string[]; 
    link?: string;
    previewIntro?: string; 
    featureHighlights?: Array<{
      num: string;
      imageSrc: string;
      title: string;
      text: string;
      imageAlt?: string;
    }>;
  };
}

const ProjectDetails = ({ project }: ProjectProps) => {
  const router = useRouter();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null);

  const handleCloseClick = () => {
    router.push("/projects");
  };

  const handlePrevClick = () => {
    if (project.previewImages.length === 0) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.previewImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    if (project.previewImages.length === 0) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.previewImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const openImageModal = (src: string) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeImageModal = () => {
    setModalImageSrc(null);
    setIsModalOpen(false);
    document.body.style.overflow = ''; 
  };

  const projectPreviewIntroText = project.previewIntro || "This section offers a closer look at the project's key features, design choices, and functionalities, providing insights into its development and user experience.";

  return (
    <div className="relative py-10 bg-white">
      <button
        onClick={handleCloseClick}
        className="fixed top-6 right-6 md:top-10 md:right-10 z-30 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition-colors duration-200 shadow-md"
        aria-label="Close project details"
      >
        <X size={20} className="text-gray-700" />
      </button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 pt-8 md:pt-0"> 
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold flex items-center justify-center gap-2 text-gray-900">
            {project.title}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View live project: ${project.title}`}>
                <ArrowUpRight size={24} className="text-gray-600 hover:text-[#FF9A02] transition-colors" />
              </a>
            )}
          </h1>
          <p className="text-[#FF9A02] text-lg mt-2 mb-6 text-center">{project.quote}</p>
        </div>

        {/* Project Description & Tech Buttons */}
        <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg text-center">{project.description}</p>
        <div className="flex flex-wrap gap-3 mb-12 md:mb-16 items-center justify-center">
          {project.buttons.map((buttonLabel, index) => (
            <button
              key={index}
              className="border border-gray-300 text-gray-700 font-medium text-sm py-2 px-4 rounded-full inline-flex items-center cursor-default"
            >
              {buttonLabel}
            </button>
          ))}
        </div>

        {/* Main Project Hero Image */}
        <div className="relative h-[20rem] md:h-[30rem] lg:h-[40rem] xl:h-[50rem] mb-12 md:mb-16">
          <Image
            src={project.imageSrc}
            alt={`${project.title} main showcase`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl" 
            priority
          />
        </div>

        {/* My Role, Contributions, Team, Learnings Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-10 mb-12 md:mb-16">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">My Role</h2>
            <div className="text-gray-700 leading-relaxed prose prose-sm sm:prose max-w-none">{project.myRole}</div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">Contributions</h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{project.contributions}</p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">My Team</h2>
            <div className="text-gray-700 leading-relaxed prose prose-sm sm:prose max-w-none">{project.myTeam}</div>

            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">Learnings & Takeaways</h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{project.learnings}</p>
          </div>
        </div>

        {/* Project In-Depth Section (with Gradient Background & Alternating Layout) */}
        {project.featureHighlights && project.featureHighlights.length > 0 && (
            <div className="relative rounded-xl my-12 md:my-16 lg:my-20 overflow-hidden shadow-lg">
            <Image
                src="/indepthbg.png" 
                alt="Background Gradient"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            
            <div className="relative z-10 py-10 md:py-16 px-6 sm:px-8 md:px-12 lg:px-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-16 text-gray-900 text-center">
                Project In-Depth
                </h2>
                
                <div className="space-y-8 md:space-y-12 lg:space-y-24">
                {project.featureHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12 lg:gap-16 justify-center"
                    >
                    {/* Image Column */}
                    <div className={`w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-1/4 ${index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
                      <div 
                        className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white cursor-pointer group"
                        onClick={() => openImageModal(highlight.imageSrc)}
                      >
                        <Image
                          src={highlight.imageSrc}
                          alt={highlight.imageAlt || highlight.title}
                          width={800} 
                          height={500} 
                          style={{
                            width: '100%', 
                            height: 'auto',  
                            objectFit: 'cover', 
                          }}
                          className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                          sizes="(max-width: 767px) calc(min(100vw - 2rem, 448px)), (min-width: 768px) calc(50vw - 2rem)"
                        />
                      </div>
                    </div>


                    {/* Text Column */}
                    <div className={`w-full md:w-1/2 text-left ${index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'} pt-4 md:pt-0`}>
                        <p className="text-[#FF9A02] text-xl font-semibold leading-relaxed sm:text-2xl">{highlight.num}</p>
                        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">{highlight.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{highlight.text}</p>
                    </div>
                  </div>
                ))}
                </div>
            </div>
            </div>
        )}
        {/* Fallback if no feature highlights provided */}
        {(!project.featureHighlights || project.featureHighlights.length === 0) && project.previewIntro && (
             <div className="relative rounded-xl my-12 md:my-16 lg:my-20 overflow-hidden shadow-lg">
                 <Image src="/gradientbg.png" alt="Background Gradient" layout="fill" objectFit="cover" className="-z-10" quality={75}/>
                 <div className="relative z-10 py-10 md:py-16 px-6 sm:px-8 md:px-12 lg:px-16">
                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">Project In-Depth</h2>
                     <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto text-base sm:text-lg">{projectPreviewIntroText}</p>
                     <p className="text-center text-gray-600 mt-8">More detailed feature previews coming soon.</p>
                 </div>
             </div>
        )}
      </div>

      {/* Image Modal for Enlarged View */}
      {isModalOpen && modalImageSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center overflow-auto bg-black/80 bg-opacity-80 p-4"
          onClick={closeImageModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-modal-title"
        >
          <div
            className="relative mx-auto w-fit h-fit max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Hidden title for accessibility */}
            <h2 id="image-modal-title" className="sr-only">Enlarged Image View</h2>
            <Image
              src={modalImageSrc}
              alt="Enlarged project image"
              layout="intrinsic" 
              width={1320} 
              height={480} 
              style={{
                width: '100%', 
                height: 'auto',  
                objectFit: 'cover', 
              }}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
            aria-label="Close enlarged image view"
          >
            <X size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;