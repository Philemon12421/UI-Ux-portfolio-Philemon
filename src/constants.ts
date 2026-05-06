export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  tags: string[];
  thumbnail: string;
  color: string;
  problem: string;
  solution: string;
  outcome: string;
  tools: string[];
  screens: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "bankiti",
    name: "Bankiti",
    shortDescription: "A modern fintech experience focused on accessibility and financial clarity.",
    description: "Bankiti is a comprehensive fintech solution designed to bridge the gap between complex financial data and user-friendly interaction. The project aimed to create a seamless banking experience for the modern user.",
    tags: ["Fintech", "UI/UX", "Mobile App"],
    thumbnail: "https://picsum.photos/seed/bankiti/800/600",
    color: "#0066FF",
    problem: "Traditional banking apps often overwhelm users with cluttered interfaces and obscure financial terminology, leading to a lack of confidence in managing money.",
    solution: "We implemented a 'progressive disclosure' design strategy, showing only essential information upfront while keeping advanced controls easily accessible. A clean, high-contrast color palette was used to ensure readability.",
    outcome: "Reduced user frustration by 40% in user testing sessions and simplified the transaction flow from 5 steps to 3.",
    tools: ["Figma", "Adobe XD", "Prototyping"],
    screens: [
      "https://picsum.photos/seed/b1/1200/800",
      "https://picsum.photos/seed/b2/1200/800",
      "https://picsum.photos/seed/b3/1200/800"
    ]
  },
  {
    id: "zudika",
    name: "Zudika",
    shortDescription: "A digital ecosystem platform for creators and entrepreneurs.",
    description: "Zudika provides a unified platform for digital creators to showcase their work, connect with clients, and manage their business tools in one place.",
    tags: ["Marketplace", "Web Design", "Branding"],
    thumbnail: "https://picsum.photos/seed/zudika/800/600",
    color: "#8B5CF6",
    problem: "Creators were forced to jump between multiple disjointed platforms for portfolio management, invoicing, and client communication.",
    solution: "A centralized hub with a modular dashboard that adapts to different creator needs (designers, writers, developers).",
    outcome: "Successfully unified the creator workflow, leading to a 25% increase in project completion rates for alpha testers.",
    tools: ["Figma", "Illustrator", "Blender"],
    screens: [
      "https://picsum.photos/seed/z1/1200/800",
      "https://picsum.photos/seed/z2/1200/800"
    ]
  },
  {
    id: "iseek",
    name: "ISeek",
    shortDescription: "Revolutionizing job seeking and resume building through smart design.",
    description: "ISeek is a job-seeking platform that focuses on the human aspect of recruitment. It includes a powerful resume builder that helps candidates stand out.",
    tags: ["EdTech", "Web App", "Product Design"],
    thumbnail: "https://picsum.photos/seed/iseek/800/600",
    color: "#10B981",
    problem: "The job market is saturated with generic resumes, and seekers often struggle to align their skills with recruiter expectations.",
    solution: "An interactive, step-by-step resume builder with real-time design suggestions and a clean, 'distraction-free' search interface.",
    outcome: "Winner of the 'Innovation Award' at a local tech summit and recognized for its intuitive onboarding process.",
    tools: ["Figma", "React", "Tailwind"],
    screens: [
      "https://picsum.photos/seed/i1/1200/800",
      "https://picsum.photos/seed/i2/1200/800"
    ]
  }
];

export const SKILLS = [
  "UI/UX Design",
  "Graphic Design",
  "Prototyping (Figma)",
  "Branding",
  "Web Design",
  "Motion Design / Blender",
  "Frontend (React, Tailwind)"
];

export const ACHIEVEMENTS = [
  {
    title: "3rd Best UI/UX Designer",
    organization: "CodeQuest",
    year: "2024",
    description: "Recognized for excellence in user-centered design and rapid prototyping under high-pressure competition."
  }
];
