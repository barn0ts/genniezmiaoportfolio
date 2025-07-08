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
          title: "Find Your Care",
          text: "This section showcases a list of available doctors, making it easy for users to explore healthcare professionals. It highlights both popular and favorited doctors, helping users find trusted care quickly."
        },
        {
          num: "02",
          imageSrc: "/icare2.png",
          imageAlt: "Atlas goal planning interface",
          title: "Know Your Doctor",
          text: "Users can view complete information about a selected doctor—including their specialization, clinic details, and a time range of their availability—empowering them to make informed decisions before booking."
        },
        {
          num: "03",
          imageSrc: "/icare3.png", 
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Pick a Slot",
          text: "Once a doctor is chosen, users can select a preferred date and time for their appointment. The intuitive interface ensures that scheduling is quick, personalized, and fits their availability."
        },
        {
          num: "04",
          imageSrc: "/icare5.png", 
          imageAlt: "Atlas goal planning interface",
          title: "My Health Vault",
          text: "This feature gives users access to all their stored medical records in one secure place—making it easier to track past consultations, test results, and medical updates anytime."
        },
        {
          num: "05",
          imageSrc: "/icare6.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Vaccine Tracker",
          text: "Users can view their vaccination records, including completed shots, upcoming due dates, and recommended vaccines. It helps keep their immunization history organized and up to date."
        },
        {
          num: "06",
          imageSrc: "/icare4.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Health Snapshot",
          text: "Detailed health results like fasting blood sugar are displayed in this section. Each result comes with clear explanations and reference ranges, helping users better understand their health status at a glance."
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
      ],
    },
    "sipnayan": {
      title: "Sipnayan",
      quote: "Isip at kasanayan para sa future mathematician",
      description: "Sipnayan is an interactive learning platform designed to make math fun and easier for students. It offers engaging lessons, activities, and assessments that help improve problem-solving skills and boost confidence in mathematics. With Sipnayan, students can enjoy learning at their own pace, while teachers can track their progress and performance.",
      imageSrc: "/sipnayanui.png",
      myRole: "UI UX Desinger",
      contributions: "As a member of the Sipnayan team, I was primarily responsible for the overall design of the application. While the project was a collaborative effort, I took the lead in crafting the visual interface, layout, and user experience. I designed features that make learning math fun and meaningful for Grade 3 students, including interactive lessons, a friendly AI guide named Sip, and cultural rewards like the Mayon Volcano, Santo Niño statue, and the traditional jeepney.",
      myTeam: "Just Me",
      learnings: "This experience taught me how to design with empathy, especially for children who are still developing their math skills. I learned how to present educational content in a simple yet engaging way, and how to incorporate local culture to make learning more relatable. I also gained a better understanding of user interface (UI) and user experience (UX) design principles, particularly when designing for both young learners and their parents.",
      buttons: ["UI/UX DESIGN", "FIGMA", "CANVA"],
      previewImages: ["/ui1.png", "/ui2.png", "/ui3.png", "/ui4.png", "/ui5.png", "/ui6.png", "/ui7.png", "/ui8.png", "/ui9.png", "/ui10.png", "/ui11.png", "/ui12.png"],
      link: "https://www.figma.com/proto/vRgbhfogTEeyhTHBIl07Fy/Sipnayan?node-id=165-185&t=oWLzGpjevSjtD1ic-1&scaling=min-zoom&content-scaling=fixed&page-id=165%3A2&starting-point-node-id=165%3A185&show-proto-sidebar=1",
      featureHighlights: [
        {
          num: "01",
          imageSrc: "/sip1.png", 
          imageAlt: "Atlas reporting and analytics section",
          title: "Who Uses Sipnayan?",
          text: "Sipnayan is designed for three types of users: students, parents, and teachers. Each user has a unique experience tailored to their role—students enjoy guided learning and fun rewards, parents monitor progress and support learning at home, while teachers track performance and guide classroom instruction."
        },
        {
          num: "02",
          imageSrc: "/sip2.png",
          imageAlt: "Atlas goal planning interface",
          title: "Design Your Own Sip",
          text: "Students can design their very own Sip, the helpful AI guide that motivates, gives hints, and makes learning more fun! From colors to expressions, make Sip your own!"
        },
        {
          num: "03",
          imageSrc: "/sip3.png", 
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Student Homepage",
          text: "The homepage lets students see the lessons they recently worked on, view their personalized learning path, and discover popular lessons that they can explore next."
        },
        {
          num: "04",
          imageSrc: "/sip4.png", 
          imageAlt: "Atlas goal planning interface",
          title: "Lessons Page",
          text: "Students can browse through all their math lessons here. Completed lessons are highlighted and marked with a ribbon so learners can feel proud of their progress."
        },
        {
          num: "05",
          imageSrc: "/sip5.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Lesson Roadmap",
          text: "Each lesson is broken down into smaller subtopics. Students can hop through these steps one at a time, giving them a clear and guided way to master the topic."
        },
        {
          num: "06",
          imageSrc: "/sip6.png", 
          imageAlt: "Atlas reporting and analytics section",
          title: "Quiz Section",
          text: "Students answer questions in a fun, interactive format. After each correct answer, they receive encouraging feedback — in Filipino — like “Tama ka! Galing!” to boost confidence and make learning lively."
        },
        {
          num: "07",
          imageSrc: "/sip7.png",
          imageAlt: "Atlas goal planning interface",
          title: "Treasure Section",
          text: "After completing a lesson, students can tap the treasure chest to reveal a surprise item from a region in the Philippines — from Mayon Volcano to Santo Niño statue! A fun and cultural reward for every effort!"
        },
        {
          num: "08",
          imageSrc: "/sip8.png", 
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Ask for Help Anytime",
          text: "Students can talk to Sip, their friendly AI guide, whenever they feel stuck. Sip gives hints and explanations in a simple, child-friendly way that’s easy to understand."
        },
        {
          num: "09",
          imageSrc: "/sip9.png", 
          imageAlt: "Atlas goal planning interface",
          title: "Lesson Overview Page",
          text: "Before starting a lesson, students can read a short description of what they’ll learn and discover what they’ll earn — like pearls, diamonds, and cultural treasures!"
        },
        {
          num: "10",
          imageSrc: "/sip10.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Treasure Collection",
          text: "All the treasures that students unlock are safely stored here. They can look back, revisit what they’ve earned, and feel proud of the math journey they’ve completed."
        },
        {
          num: "11",
          imageSrc: "/sip11.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Parent Dashboard",
          text: "Parents can view their child’s recent activities, completed lessons, areas needing attention, and all collected treasures. It’s a helpful tool to support learning at home and see where their child shines — or needs help."
        },
        {
          num: "12",
          imageSrc: "/sip12.png",
          imageAlt: "Atlas application dashboard showcasing strategic goals",
          title: "Teacher Dashboard",
          text: "Teachers can track their students’ progress, identify learning gaps, and manage lesson plans. With clear insights into each learner’s journey, teachers can give the right support at the right time."
        },
      ],
    },
  };


type Props = {
  params: Promise<{
    projectId: string;
  }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { projectId } = await params;
  const project = projectData[projectId as keyof typeof projectData];

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetails project={project} />;
}

export async function generateStaticParams() {
  return Object.keys(projectData).map((projectId) => ({
    projectId,
  }));
}


