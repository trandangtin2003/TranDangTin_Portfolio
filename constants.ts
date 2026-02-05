
import { Project, Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Trần Đăng Tín",
  role: "Fresher Game Developer",
  dob: "March 13, 2003",
  email: "trandangtin2003@gmail.com",
  phone: "0384356037",
  address: "Da Nang City, Vietnam",
  mainVideo: "https://youtu.be/BYx4-ybK9c0",
  objective: "As a passionate Fresher Game Developer, I aim to leverage my programming skills and creativity to contribute to high-quality Game development, delivering tangible value to the company. With a growth mindset, I set a goal to become a professional Game Developer within the next 2 years and advance to a Lead Developer role. I am committed to supporting the company’s sustainable growth through innovative coding solutions and a collaborative spirit."
};

export const EDUCATION = {
  university: "Vietnam–Korea University of Information and Communication Technology – VKU",
  major: "Software Engineering",
  period: "2021 - 2026",
  details: [
    "Academic program completed.",
    "Current GPA: 3.03 / 4.0"
  ]
};

export const PROJECTS: Project[] = [
  {
    title: "LEVEL DEMON",
    category: "Unity 2D | Cross Platform | Offline",
    date: "Late 2024",
    description: "Developed a challenging 2D platformer (penguin-themed, inspired by Level Devil) where a character navigates treacherous obstacles.",
    technologies: ["Unity Engine", "C#", "Unity Addressables", "Object Pooling", "Git"],
    implementations: [
      "Adaptive Control System: Automatic device detection (mobile/PC) with dynamic UI.",
      "Optimized Trap System: Object Pooling for trap projectiles.",
      "Asynchronous Scene Management: Used Addressables for efficient loading."
    ],
    videoUrl: "https://youtu.be/JB5ebj1z_RQ?si=y9B07JlUO51FJNRN",
    playUrl: "https://trandangtin2003.itch.io/level-demon",
    sourceCodeUrl: "https://gitlab.com/trandangtin2003/level-demon"
  },
  {
    title: "MAM MOUSE MAZE",
    category: "Unity 3D | Mobile | Offline",
    date: "12/2024 - 01/2025",
    description: "3D maze game for mobile with intelligent mouse AI, focusing on engaging gameplay and performance optimization.",
    technologies: ["Unity Engine", "C#", "Firebase", "Google AdMob", "NavMesh"],
    implementations: [
      "AI Navigation: Smart pathfinding with NavMeshAgent and audio sync.",
      "Firebase Integration: Leaderboard system with Realtime Database.",
      "Monetization: Integrated rewarded interstitial ads via AdMob.",
      "Save/Load: Secure system using JSON with AES encryption."
    ],
    videoUrl: "https://youtu.be/XH4LjBaM-zY?si=lAjLHXC8PQ97Z_Ub",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.trandangtin.MAM",
    sourceCodeUrl: "https://gitlab.com/trandangtin2003/mam-mouse-maze"
  },
  {
    title: "FUSION QUIZ BLOCKCHAIN",
    category: "Unity 2D | WebGL (Web3) | Online Multiplayer",
    date: "03/2025 - 04/2025",
    description: "Integrated Web3 blockchain and MetaMask wallet support into a Photon Fusion-based multiplayer quiz game.",
    technologies: ["Photon Fusion", "Solidity", "Hardhat", "Node.js", "Web3.js", "Thirdweb SDK"],
    implementations: [
      "Blockchain Integration: Added Ethereum support for betting functionality.",
      "Smart Contract: Solidity contract to manage sessions and payouts.",
      "Wallet Connection: Payment handler in Unity for MetaMask (1 ETH bet)."
    ],
    videoUrl: "https://youtu.be/szGCMO7iAz4?i=KhWhrswwpRtSKOZ7",
    sourceCodeUrl: "https://gitlab.com/trandangtin2003/blockchaingame-photonfusion"
  },
  {
    title: "TRUST MAZE",
    category: "Unity 3D | PC | Online Multiplayer",
    date: "11/2023 - 01/2024",
    description: "Developed a 3D multiplayer maze game focusing on cooperative and competitive gameplay using real-time networking.",
    technologies: ["Unity Engine", "C#", "Photon PUN 2", "Photon Voice"],
    implementations: [
      "Multiplayer Networking: Lobby system with up to 5 players per room.",
      "Voice Chat: Real-time proximity-based voice communication.",
      "Role-based System: Player vs Monster mechanics with unique abilities."
    ],
    videoUrl: "https://youtu.be/teqmqQYeYOQ?si=n5_EOLNHo985Ghpq",
    sourceCodeUrl: "https://gitlab.com/trandangtin2003/trust-maze-1"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "HIFIVEPLUS Technology Solutions",
    role: "Game Developer - Fresher",
    period: "Nov 2025 - Present",
    project: "Beekids Educational Game Platform",
    description: "Design and implement 2D educational minigames using Cocos Creator (TypeScript/JavaScript).",
    tasks: [
      "Develop standalone minigames for bstories.beekids.edu.vn.",
      "Update and upgrade existing minigames on bkids.edu.vn.",
      "Research and implement game version upgrades and optimization strategies.",
      "Conduct code reviews and provide technical support to team."
    ]
  },
  {
    company: "TNT Media & Isocial Co., Ltd.",
    role: "Game Developer - Fresher",
    period: "June 2025 - Sept 2025",
    description: "Integrated and assembled disparate game modules, assets, and scripts into complete builds.",
    tasks: [
      "Analyzed codebases to connect UI, gameplay logic, audio, and levels.",
      "Collaborated with team to resolve integration issues and cross-engine compatibility.",
      "Ensured stable, functional game deliveries for production."
    ]
  },
  {
    company: "Startup Game Team",
    role: "Intern",
    period: "Jan 2023 - June 2023",
    description: "Developed core puzzle mechanics and asset integration for a Unity-based puzzle game prototype.",
    tasks: [
      "Gained hands-on experience with C#, Git, and debugging.",
      "Worked in an agile environment for rapid prototype development.",
      "Implemented level features and character controls."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  { title: "Game Engines", skills: ["Unity", "Unreal", "Cocos Creator", "Roblox Studio"] },
  { title: "Programming", skills: ["C#", "C++", "Lua", "Solidity", "TypeScript", "JavaScript", "Node.js"] },
  { title: "Game Dev", skills: ["2D/3D", "Cross-platform", "Scene Management", "UI System"] },
  { title: "Networking", skills: ["Photon PUN 2", "Photon Voice", "Photon Fusion", "Real-time Multiplayer"] },
  { title: "Performance", skills: ["Object Pooling", "LOD", "Occlusion Culling", "Memory Management"] },
  { title: "Web3/Blockchain", skills: ["Smart Contracts", "MetaMask", "Hardhat", "Web3.js"] },
  { title: "Backend/AI", skills: ["Firebase", "AES Encryption", "NavMeshAgent", "Pathfinding"] },
  { title: "3D/Art", skills: ["Blender Modeling", "Asset Integration"] },
  { title: "Tools", skills: ["Git", "Addressables", "Async Loading", "Git Submodules"] }
];
