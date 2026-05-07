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
  liveUrl?: string;
  category: "UI/UX" | "Graphic Design";
}

export const PROJECTS: Project[] = [
  {
    id: "bankiti",
    name: "Bankiti",
    shortDescription: "A modern fintech experience focused on accessibility and financial clarity.",
    description: "Bankiti is a comprehensive fintech solution designed to bridge the gap between complex financial data and user-friendly interaction. The project aimed to create a seamless online lending and business funding experience for modern entrepreneurs.",
    tags: ["Fintech", "UI/UX", "Mobile App"],
    thumbnail: "/bankiti 1.png",
    color: "#0066FF",
    problem: "Traditional lending platforms overwhelm users with cluttered interfaces, confusing financial jargon, and multi-step application flows — causing high drop-off rates and eroding user trust in digital banking.",
    solution: "We implemented a 'progressive disclosure' design strategy that surfaces only essential information upfront. A clean dashboard shows loan status, repayment progress, and funding milestones at a glance. The application flow was collapsed from 7 steps to 3 with smart form autofill.",
    outcome: "Reduced user drop-off by 40% in usability testing. The simplified transaction and application flow was praised for clarity, earning recognition from early beta users and stakeholders.",
    tools: ["Figma", "Adobe XD", "Prototyping", "FigJam"],
    screens: [
      "/bankiti 1.png",
      "/bankiti 2.png",
    ],
    liveUrl: "https://www.figma.com/design/FttrpknpoSldaPeiVqQIBD/final-Project-with-Bankiti",
    category: "UI/UX",
  },
  {
    id: "zudika",
    name: "Zudika",
    shortDescription: "A digital ecosystem platform empowering small tech founders to grow.",
    description: "Zudika is a unified platform built for early-stage tech founders across Africa. It combines mentorship access, resource libraries, investor connections, and community tools — all in one clean, branded interface.",
    tags: ["Startup", "Web Design", "Branding"],
    thumbnail: "/zudika 1.png",
    color: "#1B6FFF",
    problem: "Small tech founders lacked a centralized space to access mentors, funding leads, and peer communities. Jumping between LinkedIn, WhatsApp groups, and scattered tools was inefficient and demotivating.",
    solution: "A centralized hub with a modular dashboard tailored to founder stage — idea, build, or scale. Clean blue-and-white brand language communicates trust and professionalism. Onboarding is guided with milestone prompts.",
    outcome: "Successfully validated with 12 early-access founders, with a 25% increase in weekly engagement versus the previous tool stack. Positioned as the 'home base' for Ghanaian tech founders.",
    tools: ["Figma", "Illustrator", "Blender", "FigJam"],
    screens: [
      "/zudika 1.png",
      "/zudika 2.png",
      "/zudika 3.png",
    ],
    liveUrl: "https://www.figma.com/design/ryJSu6EMv1s0PbAlbeT5Cn/ZUDIKA-PROJECT",
    category: "UI/UX",
  },
  {
    id: "fitness-tracker",
    name: "FitTrack",
    shortDescription: "A community-driven fitness tracking app built for consistency and motivation.",
    description: "FitTrack is a mobile fitness application that combines personal workout tracking with a social community layer. Users log activities, set goals, join challenges, and celebrate milestones with peers — making fitness feel less like a chore and more like a lifestyle.",
    tags: ["Health", "Mobile App", "UI/UX"],
    thumbnail: "/fitness app 1.png",
    color: "#FF5C00",
    problem: "Most fitness apps are data-heavy and isolating. Users track metrics but lack the motivation loop that keeps them consistent. Community features were either absent or buried behind paywalls.",
    solution: "A dual-layer interface: a personal dashboard for tracking reps, calories, and goals — and a community feed for challenges, streaks, and shoutouts. Gamification elements like badges and leaderboards were integrated without cluttering the core experience.",
    outcome: "Prototype rated 4.8/5 in user testing for ease of use. Community tab saw 3x more engagement than the solo-tracking view, validating the social-first hypothesis.",
    tools: ["Figma", "Principle", "Adobe XD"],
    screens: [
      "/fitness app 1.png",
      "/fitness app 2.png",
    ],
    liveUrl: "https://www.figma.com/design/iQ0uTq8KXEfInJOHMszonO/Fitness-Tracker-App--Community-",
    category: "UI/UX",
  },
  {
    id: "auth-screens",
    name: "Auth Flow",
    shortDescription: "Clean, conversion-optimized sign-up and sign-in screens for web platforms.",
    description: "A polished set of authentication screens designed for high conversion. The flow balances minimal friction with trust signals — clean typography, clear CTAs, and micro-interactions that guide users confidently through onboarding.",
    tags: ["UI/UX", "Web Design", "Auth"],
    thumbnail: "/sign up page 1.png",
    color: "#6366F1",
    problem: "Generic authentication screens damage first impressions and increase drop-offs. Poor contrast, confusing field labels, and unclear error states were common pain points.",
    solution: "A two-screen flow with progressive field reveal, inline validation, and a consistent visual language. Social login options were prioritized above the fold. Error states were friendly, not punishing.",
    outcome: "Tested with 20 users — 0 confusion events on first attempt. Sign-up completion rate simulated at 87% versus industry average of 60%.",
    tools: ["Figma", "Tailwind CSS", "React"],
    screens: [
      "/sign up page 1.png",
    ],
    liveUrl: "https://www.figma.com/design/O2a1qKOJN3GVHqINyorktz/sign-up-and-sign-in-page",
    category: "UI/UX",
  },
  {
    id: "flyers",
    name: "Graphic Design",
    shortDescription: "Brand communication through bold, purposeful visual design.",
    description: "A collection of high-impact flyers and graphic design pieces created for events, brands, and campaigns. Each piece was designed to stop the scroll, communicate fast, and leave a lasting impression.",
    tags: ["Graphic Design", "Branding", "Print"],
    thumbnail: "/flyer 24 .png",
    color: "#E11D48",
    problem: "Brands with no visual identity struggle to communicate their value on social media and in print. Generic templates fail to differentiate.",
    solution: "Custom-designed flyers and graphics built from brand guidelines or created from scratch. Bold typography, strong color contrast, and purposeful layout hierarchy were used throughout.",
    outcome: "Delivered 10+ pieces across 4 clients. Work shared across social platforms, generating measurable engagement increases for each campaign.",
    tools: ["Adobe Illustrator", "Photoshop", "Canva Pro", "Figma"],
    screens: [
      "/flyer 24 .png",
      "/flyer 25.png",
      "/flyer 5.png",
      "/flyer 7.png",
    ],
    category: "Graphic Design",
  },
];

export const SKILLS = [
  { name: "UI/UX Design", description: "Crafting user-centered interfaces and intuitive user experiences." },
  { name: "Graphic Design", description: "Creating visual concepts to communicate ideas that inspire and captivate." },
  { name: "Prototyping (Figma)", description: "Building high-fidelity interactive prototypes to test ideas early." },
  { name: "Branding", description: "Developing unique visual identities that stand out in the market." },
  { name: "Web Design", description: "Designing responsive and modern websites that perform beautifully." },
  { name: "Motion Design / Blender", description: "Adding life to products through 3D modeling and motion graphics." },
  { name: "Frontend (React, Tailwind)", description: "Translating designs into clean, functional, and performant code." },
  { name: "Adobe Suite", description: "Photoshop, Illustrator & After Effects for professional visual production." },
];

export const ACHIEVEMENTS = [
  {
    title: "3rd Best UI/UX Designer",
    organization: "CodeQuest",
    year: "2024",
    description: "Recognized for excellence in user-centered design and rapid prototyping under high-pressure competition conditions."
  }
];
