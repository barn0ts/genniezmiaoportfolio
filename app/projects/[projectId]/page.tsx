import React from 'react';
import ProjectDetails from "@/components/ProjectDetails";

interface Project {
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
  // highlightImage, highlightTitle, highlightText are now superseded by featureHighlights
}

interface ProjectData {
  [key: string]: Project;
}

const projectData: ProjectData = {
    "atlas": {
      title: "Atlas",
      quote: "A Streamlined Balanced Scorecard",
      description: "Atlas is a streamlined Balanced Scorecard application designed to help individuals and organizations plan, track, and achieve their goals with clarity and focus. It offers a user-friendly interface combined with powerful analytics, making strategic planning more accessible and effective. With features that support goal setting, performance monitoring, and data-driven decision-making, Atlas empowers users to align their activities with long-term objectives and drive measurable results.",
      imageSrc: "/atlasui.png",
      myRole: (
          <>
              <ul>
                  <li>
                      UI/UX Designer
                  </li>
                  <li>
                      Graphic Designer
                  </li>
                  <li>
                      Front-end Developer
                  </li>
                  <li>
                      Back-end Developer
                  </li>
              </ul>
          </>
      ),
      contributions: "I am one of the Frontend Developer and the Lead UI/UX Designer for Atlas, responsible for designing the application's landing page and most of its features. I ensured the interface is user-friendly and intuitive, allowing users to navigate it effortlessly without additional guidance. Additionally, I created the Atlas logo and prioritized making the application's design visually appealing.",
      myTeam: (
        <>
            <ul>
                <li>
                    Lara Pable
                </li>
                <li>
                    Arziel Mae Lawas
                </li>
                <li>
                    Arvin Santillan
                </li>
                <li>
                    Lyndon Roy Trocio
                </li>
            </ul>
        </>
    ),
      learnings: "While working on Atlas, I learned how to manage my time effectively, especially considering the demands of other subjects and assignments. This experience taught me the importance of prioritization. As the primary designer of many features in Atlas, I also developed the ability to accept feedback and suggestions from my team, which helped me refine my work and collaborate more effectively.",
      buttons: ["NEXT.JS", "REACT.JS", "TAILWIND CSS", "UI/UX DESIGN"],
      previewImages: ["/atlas1.png", "/atlas2.png", "/atlas3.png", "/atlas4.png", "/atlas5.png", "/atlas6.png", "/atlas7.png", "/atlas8.png", "/atlas9.png", "/atlas10.png"],
      link: "https://citu-atlas.vercel.app/",
      featureHighlights: [
        {
          num: "01",
          imageSrc: "/atlas3.png", 
          imageAlt: "Atlas reporting and analytics section",
          title: "Setting Clear Objectives",
          text: "The Input Goal feature allows the organization to define specific goals, outline actionable steps, and set a target timeframe for achievement."
        },
        {
          num: "02",
          imageSrc: "/atlas5.png",
          imageAlt: "Atlas goal planning interface",
          title: "Viewing Personal and Department Details",
          text: "The Profile feature lets users view and manage their personal profile as well as access information about their department."
        },
        {
          num: "03",
          imageSrc: "/atlas6.png", 
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Analyzing for Strategic Planning",
          text: "The SWOT Analysis feature allows users to input their strengths, weaknesses, opportunities, and threats. Based on these inputs, the AI generates tailored strategies to guide decision-making and goal setting."
        },
        {
          num: "04",
          imageSrc: "/atlas7.png", 
          imageAlt: "Atlas goal planning interface",
          title: "Generating and Categorizing Strategies",
          text: "After analyzing the user's SWOT input, the AI generates strategies and automatically classifies them as SO (Strengths–Opportunities), WO (Weaknesses–Opportunities), ST (Strengths–Threats), or WT (Weaknesses–Threats) for effective strategic planning."
        },
        {
          num: "05",
          imageSrc: "/atlas4.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Aligning Strategies with Goals",
          text: "After users input their SWOT analysis and the AI generates strategies, this feature automatically maps each strategy to its appropriate perspective—Financial, Stakeholder, Internal Process, or Learning and Growth—ensuring all actions align with the organization’s strategic goals."
        },
        {
          num: "06",
          imageSrc: "/atlas1.png", 
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Tracking Strategic Goals",
          text: "The Balanced Scorecard feature helps users turn their strategies into actionable goals by organizing them into four key perspectives: Financial, Stakeholder, Internal Process, and Learning and Growth. This tool allows users to track progress, align goals with strategic priorities, and monitor performance over time."
        },
        {
          num: "07",
          imageSrc: "/atlas8.png", 
          imageAlt: "Atlas goal planning interface",
          title: "Reviewing Progress Over Time",
          text: "The Report feature lets users select a year to view a clear, comprehensive summary of their progress, highlighting accomplishments and areas for improvement."
        },
        {
          num: "08",
          imageSrc: "/atlas9.png", 
          imageAlt: "Atlas goal planning interface",
          title: "Viewing Finalized Strategic Reports",
          text: "This feature displays only complete reports with no missing data. It includes visualizations across all strategic perspectives, an approval section for validation, and an export option for sharing or documentation."
        },
        {
          num: "09",
          imageSrc: "/atlas2.png", 
          imageAlt: "Atlas goal planning interface",
          title: "Improving Through Feedback",
          text: "The Feedback Form allows users to share their thoughts, suggestions, and experiences about using the app. It’s designed to collect valuable input that can help improve features, fix issues, and enhance the overall user experience"
        }
    ]
  },
    "bconnect": {
      title: "Barangay Connect",
      quote: "Bringing Communities Together",
      description: "Barangay Connect is a community-driven hub designed to strengthen communication, engagement, and collaboration within a barangay. The app empowers residents to connect with one another, promote local businesses, report incidents, request official documents, and conveniently access a range of barangay services. With its user-friendly interface and focus on community involvement, Barangay Connect helps foster a more connected, informed, and responsive local environment.",
      imageSrc: "/bconnectui.png",
      myRole: (
        <>
            <ul>
                  <li>
                      UI/UX Designer
                  </li>
                  <li>
                      Graphic Designer
                  </li>
                  <li>
                      Front-end Developer
                  </li>
                  <li>
                      Back-end Developer
                  </li>
              </ul>
        </>
    ),
      contributions: "I designed the logo and worked on key features including the landing page, dashboard, summary details, announcement section, and business posting functionality. Additionally, I was responsible for coding both the frontend and backend for announcement and business posting features, ensuring seamless integration and user experience across the application.",
      myTeam: (
        <>
            <ul>
                <li>
                    Lara Pable
                </li>
                <li>
                    Arziel Mae Lawas
                </li>
                <li>
                    Arvin Santillan
                </li>
            </ul>
        </>
    ),
      learnings: "Working on Barangay Connect taught me the value of collaboration, as it was our very first project where we hard-coded everything. Whenever I felt confused or struggled to understand something, I didn’t hesitate to ask my teammates for help, which greatly enhanced our teamwork. Although my design skills at that time were not as developed, looking back, I can clearly see how much I have improved compared to where I am now.",
      buttons: ["REACT.JS", "TAILWIND CSS", "UI/UX DESIGN"],
      previewImages: ["/bc1.png", "/bc2.png", "/bc3.png", "/bc4.png", "/bc5.png"],
      featureHighlights: [
        {
          num: "01",
          imageSrc: "/bc1.png", 
          imageAlt: "Atlas reporting and analytics section",
          title: "Community Portal",
          text: "The cover page introduces the system with its logo and a “Get Started” button. The logo reflects its purpose: ‘B’ for Barangay, ‘C’ for Connect, and the small building inside the “C” symbolizes the community, emphasizing connection and unity within the barangay."
        },
        {
          num: "02",
          imageSrc: "/bc2.png",
          imageAlt: "Atlas goal planning interface",
          title: "Promoting Community Businesses",
          text: "The Local Businesses feature showcases local small businesses within the barangay. Users can search, view complete details, and add businesses to their favorites for easy access—supporting community growth and local entrepreneurship."
        },
        {
          num: "03",
          imageSrc: "/bc3.png", 
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Empowering Local Entrepreneurs",
          text: "This feature allows business owners to easily introduce their business to the community by submitting key details such as the business name, date, image, and a brief description. It promotes visibility and helps connect them with potential local customers."
        },
        {
          num: "04",
          imageSrc: "/bc4.png", 
          imageAlt: "Atlas goal planning interface",
          title: "Community Updates and Engagement",
          text: "The Announcement feature displays all barangay announcements in one place. Users can view full details, add announcements to favorites, and see how many people are going, encouraging awareness and participation in local events."
        },
        {
          num: "05",
          imageSrc: "/bc5.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Managing Community Announcements",
          text: "Admins can edit or delete announcements and view the last modified date, allowing them to keep information accurate and up to date for the community."
        }
      ]
    },
    "icare": {
      title: "iCare",
      quote: "Your Partner in Health",
      description: "iCare is a comprehensive medical application designed to simplify healthcare management for users. With iCare, users can easily book appointments with doctors, ensuring timely access to medical care. The platform provides a seamless experience by allowing users to browse available healthcare providers, select their preferred doctor, and schedule consultations at their convenience.",
      imageSrc: "/icareui.png",
      myRole: (
        <>
            <ul>
                  <li>
                      UI/UX Designer
                  </li>
                  <li>
                      Graphic Designer
                  </li>
              </ul>
        </>
    ),
      contributions: "I am assigned to design several key features for the iCare application, including the appointment booking system, a page to view all doctors, a detailed doctor information page, and the tracking of blood pressure and blood sugar.",
      myTeam: (
        <>
            <ul>
                <li>
                    Lara Pable
                </li>
                <li>
                    Arziel Mae Lawas
                </li>
                <li>
                    Roxanne Zaine Alcordo
                </li>
            </ul>
        </>
    ),
      learnings: "Working on iCare was a unique experience, as it was my first time designing an application in Figma. As a first-timer, I’d say that the design isn’t bad. While bringing our ideas to life, we had to learn the platform’s tools and best practices, which challenged us to adapt and improve our design skills on the go.",
      buttons: ["PROTOTYPE", "UI/UX DESIGN", "FIGMA"],
      previewImages: ["/icare1.png", "/icare2.png", "/icare3.png", "/icare4.png", "/icare5.png", "/icare6.png", "/icare7.png"],
      featureHighlights: [
        {
          num: "01",
          imageSrc: "/icare1.png", 
          imageAlt: "Atlas reporting and analytics section",
          title: "Community Portal",
          text: "The cover page introduces the system with its logo and a “Get Started” button. The logo reflects its purpose: ‘B’ for Barangay, ‘C’ for Connect, and the small building inside the “C” symbolizes the community, emphasizing connection and unity within the barangay."
        },
        {
          num: "02",
          imageSrc: "/icare2.png",
          imageAlt: "Atlas goal planning interface",
          title: "Promoting Community Businesses",
          text: "The Local Businesses feature showcases local small businesses within the barangay. Users can search, view complete details, and add businesses to their favorites for easy access—supporting community growth and local entrepreneurship."
        },
        {
          num: "03",
          imageSrc: "/icare3.png", 
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Empowering Local Entrepreneurs",
          text: "This feature allows business owners to easily introduce their business to the community by submitting key details such as the business name, date, image, and a brief description. It promotes visibility and helps connect them with potential local customers."
        },
        {
          num: "04",
          imageSrc: "/icare5.png", 
          imageAlt: "Atlas goal planning interface",
          title: "Community Updates and Engagement",
          text: "The Announcement feature displays all barangay announcements in one place. Users can view full details, add announcements to favorites, and see how many people are going, encouraging awareness and participation in local events."
        },
        {
          num: "05",
          imageSrc: "/icare6.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Managing Community Announcements",
          text: "Admins can edit or delete announcements and view the last modified date, allowing them to keep information accurate and up to date for the community."
        }
      ]
    },
    "sweetrush": {
      title: "Sweet Rush",
      quote: "Savor the Joy, Feel the Rush",
      description: "SweetRush is a delightful mobile application designed to bring the joy of discovering and ordering sweet treats to users. The app allows users to browse through menus, place orders, and track their deliveries in real time. With an easy-to-use interface and a focus on satisfying your sweet tooth, SweetRush makes indulging in your favorite desserts more convenient than ever.",
      imageSrc: "/sweetrushui.png",
      myRole: (
        <>
            <ul>
                  <li>
                      UI/UX Designer
                  </li>
                  <li>
                      Graphic Designer
                  </li>
              </ul>
        </>
    ),
      contributions: "For SweetRush, I designed the logo and contributed to the design of several key features, including the review section, nutrition facts section, payment section, basket, and donation section.",
      myTeam: "Lara Pable",
      learnings: "Working on Sweet Rush was a unique experience, as we were initially unfamiliar with Android Studio. While familiarizing ourselves with the platform, we simultaneously worked on the project, which challenged us to learn on the go. This process taught me the importance of adaptability and persistence when tackling new tools and technologies.",
      buttons: ["PROTOTYPE", "UI/UX DESIGN", "CANVA", "ANDROID STUDIO"],
      previewImages: ["/sr1.png", "/sr2.png", "/sr3.png", "/sr4.png", "/sr5.png", "/sr6.png"],
      featureHighlights: [
        {
          num: "01",
          imageSrc: "/sr1.png", 
          imageAlt: "Atlas reporting and analytics section",
          title: "Welcome Interface and Branding",
          text: "This section serves as the initial greeting screen, featuring the Sweet Rush logo to introduce users to the application. It establishes the system’s branding identity."
        },
        {
          num: "02",
          imageSrc: "/sr2.png",
          imageAlt: "Atlas goal planning interface",
          title: "Customer Feedback Highlights",
          text: "The review feature displays detailed food reviews along with the names of the reviewers, giving users insight into the dining experience and helping them make informed choices based on real feedback."
        },
        {
          num: "03",
          imageSrc: "/sr3.png", 
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Order Summary and Checkout",
          text: "In this section, users provide their delivery address and view a summary of their order before completing the payment—ensuring accuracy and a smooth checkout experience."
        },
        {
          num: "04",
          imageSrc: "/sr4.png", 
          imageAlt: "Atlas goal planning interface",
          title: "Order Setup and Scheduling",
          text: "This feature allows users to enter their complete address, schedule their order, and select a drop-off type, ensuring convenience and flexibility in the ordering process."
        },
        {
          num: "05",
          imageSrc: "/sr5.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Food Transparency and Details",
          text: "This section provides users with complete nutrition facts and a list of ingredients used in each meal, promoting informed and health-conscious food choices."
        }
      ]
    },
    "dailyui": {
      title: "Daily UI",
      quote: "Get Better Each Day",
      description: "Daily UI Challenge is a creative design challenge where participants complete daily interface design tasks to improve their skills and build a strong design portfolio.",
      imageSrc: "/dailyui.png",
      myRole: "UI UX Desinger",
      contributions: "As the sole participant in the Daily UI Challenge, I took on the responsibility of designing and creating UI components based on the given prompts. Each day, I conceptualized, sketched, and developed user-friendly and visually appealing interfaces while applying design principles and best practices.",
      myTeam: "Just Me",
      learnings: "Through this challenge, I enhanced my UI/UX design skills, improved my proficiency in design tools, and strengthened my understanding of user-centered design principles.",
      buttons: ["UI/UX DESIGN", "FIGMA", "CANVA"],
      previewImages: ["/ui1.png", "/ui2.png", "/ui3.png", "/ui4.png", "/ui5.png", "/ui6.png", "/ui7.png", "/ui8.png", "/ui9.png", "/ui10.png", "/ui11.png", "/ui12.png"],
      featureHighlights: [
        {
          num: "01",
          imageSrc: "/ui2.png", 
          imageAlt: "Atlas reporting and analytics section",
          title: "Settings",
          text: "A clean and intuitive layout where users can manage preferences, privacy, and app configurations, ensuring control over their experience."
        },
        {
          num: "02",
          imageSrc: "/ui3.png",
          imageAlt: "Atlas goal planning interface",
          title: "User Profile",
          text: "Displays About Me, Personal Details, and Certifications, designed to showcase the user's background and achievements in a structured manner."
        },
        {
          num: "03",
          imageSrc: "/ui4.png", 
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Credit Card Checkout",
          text: "A sleek checkout interface showing billing details, payment method, courier, and order summary for a streamlined e-commerce experience."
        },
        {
          num: "04",
          imageSrc: "/ui5.png", 
          imageAlt: "Atlas goal planning interface",
          title: "Music Player Design",
          text: "Inspired by Spotify, this modern UI features playback controls, album art, and a minimalist playlist view, enhancing music discovery and listening."
        },
        {
          num: "05",
          imageSrc: "/ui6.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Flash Message",
          text: "Quick and clear notifications for actions like “Success: Your daily emotion has been logged” or “Failed to log”, providing instant user feedback."
        },
        {
          num: "06",
          imageSrc: "/ui7.png", 
          imageAlt: "Atlas reporting and analytics section",
          title: "Direct Message",
          text: "A conversational UI enabling users to send and receive messages in real-time, focused on clarity, responsiveness, and user connection."
        },
        {
          num: "07",
          imageSrc: "/ui8.png",
          imageAlt: "Atlas goal planning interface",
          title: "Pop-up Overlay",
          text: "A centered modal prompting users to scan a QR code to proceed with payment, ensuring a smooth and secure transaction experience."
        },
        {
          num: "08",
          imageSrc: "/ui9.png", 
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Analytics Chart",
          text: "A reimagined version of YouTube’s analytics dashboard, visualizing data like views, watch time, and audience demographics with clarity and style."
        },
        {
          num: "09",
          imageSrc: "/ui10.png", 
          imageAlt: "Atlas goal planning interface",
          title: "Purchase Receipt",
          text: "A clean and organized layout summarizing itemized purchases, prices, totals, and transaction details, giving users a professional proof of payment."
        },
        {
          num: "10",
          imageSrc: "/ui11.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Website Recreation",
          text: "A responsive redesign of the HelloTime website, reflecting its core aesthetics while improving layout and modernizing UI elements."
        },
        {
          num: "11",
          imageSrc: "/ui13.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "E-commerce Shop",
          text: "An engaging shop UI for fresh juice products, complete with nutrition facts, ingredients, and a freshness guarantee, promoting transparency and trust."
        },
        {
          num: "12",
          imageSrc: "/ui14.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Countdown Timer",
          text: "A playful and organized bento-box–inspired countdown timer, ideal for tracking time with a visually structured and unique layout."
        }
      ],
    },
    "lumihood": {
      title: "Lumihood",
      quote: "Your daily light for brighter days",
      description: "Lumihood is a calming and intuitive mood journal app that helps you gently understand and care for your emotions. By selecting visuals like colors, shapes, sounds, and images, the AI interprets your mood and provides thoughtful insights without needing the right words. With daily check-ins, soothing suggestions, and personal reflections, Lumihood creates a safe space for emotional growth. In the future, it may also serve as a helpful tool for psychiatrists to better understand their clients’ emotional patterns.",
      imageSrc: "/lumiui.png",
      myRole: "UI UX Desinger",
      contributions: "As the sole creator of this project, I was responsible for the overall concept, research and design of the application. I initiated this idea out of a deep concern for the growing number of people silently struggling with their emotions. This project was built with empathy at its core—focusing on gentle, user-friendly interaction that allows users to express their mood through non-verbal methods such as colors, emojis, images, shapes, and sounds. Every decision, from visual selection to tone of messaging, was made to ensure the user feels understood and supported.",
      myTeam: "Just Me",
      learnings: "Through this project, I learned that emotions can be expressed in subtle ways—like choosing a color, image, shape, or sound that reflects one’s mood. I also realized how important it is to use gentle, thoughtful language to create a safe space for users. While the topic of emotional wellness is complex and evolving, I’m committed to improving this project through continuous research and development. This is just the beginning, and I hope Lumihood grows into a tool that people can trust and feel supported by.",
      buttons: ["UI/UX DESIGN", "FIGMA", "CANVA"],
      previewImages: ["/ui1.png", "/ui2.png", "/ui3.png", "/ui4.png", "/ui5.png", "/ui6.png", "/ui7.png", "/ui8.png", "/ui9.png", "/ui10.png", "/ui11.png", "/ui12.png"],
      link: "https://www.figma.com/proto/D66Guwd2A1yzkKtOgiwAbJ/LUMIHOOD?node-id=61-328&t=Vhkge4baG1Cass7Y-1&scaling=scale-down&content-scaling=fixed&page-id=19%3A2&starting-point-node-id=19%3A3&show-proto-sidebar=1",
      featureHighlights: [
        {
          num: "01",
          imageSrc: "/lumi1.png", 
          imageAlt: "Atlas reporting and analytics section",
          title: "Meet Lumi",
          text: "The introduction screen features Lumi, a friendly character who guides the user through their emotional journey—setting a warm, approachable tone for the app."
        },
        {
          num: "02",
          imageSrc: "/lumi2.png",
          imageAlt: "Atlas goal planning interface",
          title: "Message to Tomorrow",
          text: "A reflective space where users write notes to their future selves—these messages are locked and shown after a year, encouraging growth and introspection."
        },
        {
          num: "03",
          imageSrc: "/lumi3.png", 
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Home Page",
          text: "The home interface opens with a daily insight. Users are greeted with thoughtful content such as categories that organize healing resources, peaceful sessions designed for unwinding, and the daily light—a soft touchpoint of encouragement."
        },
        {
          num: "04",
          imageSrc: "/lumi4.png", 
          imageAlt: "Atlas goal planning interface",
          title: "First Touch of Emotion",
          text: "Before diving into the deeper emotional tools, users are asked how they’re currently feeling. This simple check-in moment allows space for presence and honesty—framing the experience with mindfulness."
        },
        {
          num: "05",
          imageSrc: "/lumi5.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "When Emotions Take Color",
          text: "Here, feelings find expression through color. Instead of using words, users are drawn to hues that mirror their inner world—yellow for joy, red for anger, blue for sorrow, green for anxiety, violet for shock, and gray for detachment."
        },
        {
          num: "06",
          imageSrc: "/lumi6.png", 
          imageAlt: "Atlas reporting and analytics section",
          title: "Seeing Yourself in Another Face",
          text: "Users choose a character whose facial expression or demeanor reflects their present emotional state. This mirrors the real-world way we empathize—through body language, eyes, and posture—offering a visual method to pinpoint emotions with greater depth."
        },
        {
          num: "07",
          imageSrc: "/lumi7.png",
          imageAlt: "Atlas goal planning interface",
          title: "The Picture That Speaks for You",
          text: "Through curated images, users select the one that feels most aligned with their internal experience. Visual cues often tap into subconscious emotions, making this feature an artistic and psychological method of emotional recognition."
        },
        {
          num: "08",
          imageSrc: "/lumi8.png", 
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Shape of a Feeling",
          text: "By choosing from abstract shapes, users lean into the design psychology of form—sharp lines for tension or anger, smooth curves for peace. The shapes act as emotional mirrors, revealing mood through geometry."
        },
        {
          num: "09",
          imageSrc: "/lumi9.png", 
          imageAlt: "Atlas goal planning interface",
          title: "The Sound of a State",
          text: "Auditory perception can instantly ground emotion. Whether it’s a calming breeze, static noise, or gentle melody, the chosen sound helps users connect their feelings to a sensory experience. It enhances emotional recognition using sonic resonance."
        },
        {
          num: "10",
          imageSrc: "/lumi10.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Journal Note",
          text: "An optional journaling space where users can freely express their thoughts—offering context and deeper emotional clarity through written reflection."
        },
        {
          num: "11",
          imageSrc: "/lumi11.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Emotion Result",
          text: "Based on all inputs, Lumi the AI analyzes and determines the most likely emotion being felt today, providing an empathetic summary of the user’s emotional state."
        },
        {
          num: "12",
          imageSrc: "/lumi12.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Recommendation Section",
          text: "Once the emotion is identified, Lumi provides personalized suggestions—like light breathing exercises, calming music, or comforting affirmations to help the user cope and heal."
        },
        {
          num: "13",
          imageSrc: "/lumi13.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Emotion Calendar",
          text: "A visual map of the user’s emotions across the month—highlighting patterns and emotional cycles for self-awareness and mental wellness tracking."
        },
        {
          num: "14",
          imageSrc: "/lumi14.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Dashboard",
          text: "The Dashboard displays a user’s emotional summary for the day, highlights of significant moods, a breakdown of their monthly emotional trends, and a record of actions they’ve taken to manage their feelings—turning emotions into meaningful data."
        }
      ],
    },
  };


interface ProjectDetailsPageProps {
  params: {
    projectId: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(projectData).map((projectId) => ({
    projectId: projectId,
  }));
}

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { projectId } = params;
  const project = projectData[projectId as keyof ProjectData];

  if (!project) {
    return <div>Project not found</div>; 
  }

  return (
    <div>
      <ProjectDetails project={project} /> 
    </div>
  );
}