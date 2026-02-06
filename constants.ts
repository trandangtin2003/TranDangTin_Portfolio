
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
    date: "Early 2025",
    description: "Developed a challenging 2D platformer where a penguin character navigates treacherous obstacles, inspired by game 'Level Devil'.",
    technologies: ["Unity Engine", "C#", "Unity Addressables", "Object Pooling", "Git"],
    implementations: [
      "Adaptive Control System: Automatic device detection (mobile/PC) with dynamic UI switching between touch buttons (for mobile) and keyboard inputs (for PC).",
      "Optimized Trap System: Implemented Object Pooling pattern for trap projectiles, reducing instantiation overhead and improving performance.",
      "Asynchronous Scene Management: Used Unity Addressables for efficient scene loading and catalog updates."
    ],
    videoUrl: "https://youtu.be/JB5ebj1z_RQ?si=y9B07JlUO51FJNRN",
    playUrl: "https://trandangtin2003.itch.io/level-demon",
    sourceCodeUrl: "https://gitlab.com/trandangtin2003/level-demon"
  },
  {
    title: "MAM MOUSE MAZE",
    category: "Unity 3D | Mobile | Offline",
    date: "12/2024 - 01/2025",
    description: "Developed a 3D maze game for mobile platforms with intelligent mouse AI to chase the player, focusing on engaging gameplay and performance optimization.",
    technologies: ["Unity Engine", "C#", "Firebase", "Google AdMob", "NavMesh"],
    implementations: [
      "AI Navigation: Designed mouse monsters with NavMeshAgent for smart pathfinding to pursue the player within the maze. Integrated animation and audio synchronization based on AI states.",
      "Performance Optimization: Applied LOD and occlusion culling to enhance performance on low-end mobile devices, ensuring smooth gameplay.",
      "Radar System: Built a compass and minimap system to display monster directions relative to the player, using real-time positional updates.",
      "Firebase Integration: Implemented a leaderboard system using Firebase Realtime Database to store and display player scores upon reaching the finish line, with name validation and ranking UI.",
      "Google AdMob Integration: Integrated rewarded interstitial ads to monetize the game, triggered when players interact with the third collectible item.",
      "Save/Load System: Developed a secure save system to store and load player positions using JSON with AES encryption, ensuring data persistence across sessions.",
      "Gameplay Features: Added interactive elements like lamp activation with UI feedback and a reset system to clear saved data and restart the game."
    ],
    videoUrl: "https://youtu.be/XH4LjBaM-zY?si=lAjLHXC8PQ97Z_Ub",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.trandangtin.MAM",
    sourceCodeUrl: "https://gitlab.com/trandangtin2003/mam-mouse-maze"
  },
  {
    title: "FUSION QUIZ BLOCKCHAIN",
    category: "Unity 2D | WebGL (Web3) | Online Multiplayer",
    date: "03/2025 - 04/2025",
    description: "Integrated blockchain (Web3) and MetaMask wallet functionality into an existing Photon Fusion-based multiplayer quiz game (Fusion-quiz-network-2.0.5) for networked multiplayer, focusing on experimenting with real-time blockchain features.",
    technologies: ["Unity Engine", "C#", "Photon Fusion", "Solidity", "Hardhat", "Node.js", "Web3.js", "Thirdweb SDK"],
    implementations: [
      "Blockchain Integration: Added Ethereum blockchain support using Hardhat network, connecting Unity with a smart contract for betting functionality.",
      "Smart Contract Development: Created a Solidity smart contract to manage betting sessions, player actions, and winner payouts with events like BetPlaced and WinnerPaid.",
      "Server Setup: Built a Node.js server (server.js) with Web3.js to handle payment transactions, utilizing environment configuration (config.env) for secure API keys and contract addresses.",
      "Unity Implementation: Developed a payment handler in Unity to connect MetaMask wallets, display balances, and execute ETH transactions (1 ETH bet) with Thirdweb SDK."
    ],
    videoUrl: "https://youtu.be/szGCMO7iAz4?i=KhWhrswwpRtSKOZ7",
    sourceCodeUrl: "https://gitlab.com/trandangtin2003/blockchaingame-photonfusion"
  },
  {
    title: "TRUST MAZE",
    category: "Unity 3D | PC | Online Multiplayer",
    date: "11/2023 - 01/2024",
    description: "Developed a 3D multiplayer maze game using Photon PUN 2 and Photon Voice for real-time networking and voice chat, focusing on cooperative and competitive gameplay mechanics.",
    technologies: ["Unity Engine", "C#", "Photon PUN 2", "Photon Voice"],
    implementations: [
      "Multiplayer Networking: Implemented Photon PUN 2 for room creation, player synchronization, and real-time interactions, including private rooms and a lobby system with up to 5 players per room.",
      "Player and Monster System: Designed a role-based system where one player becomes a monster with a cooldown-based ability to spawn monster entity, while others must find a gate and avoid it to survive.",
      "Movement and Camera: Built player movement with walking, running, and camera rotation, synced across the network, with billboard effects for UI elements.",
      "Gameplay Mechanics: Added teleportation gates for strategic movement and a time-based game over system, determining winners (humans or monster) based on survival.",
      "Room Settings: Created a settings menu to adjust room duration, synchronized across all players using Photon's custom properties."
    ],
    videoUrl: "https://youtu.be/teqmqQYeYOQ?si=n5_EOLNHo985Ghpq",
    sourceCodeUrl: "https://gitlab.com/trandangtin2003/trust-maze-1"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "HIFIVEPLUS Technology Solutions Joint Stock Company",
    role: "Game Developer - Fresher",
    period: "November 2025 - Present",
    project: "Beekids Educational Game Platform",
    description: "Design and implement 2D educational minigames for Beekids platform using Cocos Creator (TypeScript/JavaScript).",
    tasks: [
      "Develop, standalone minigames for https://bstories.beekids.edu.vn/ integrated with learning content.",
      "Update and upgrade existing minigames on https://bkids.edu.vn/ based on Education team requirements.",
      "Research and implement game version upgrades and optimization strategies.",
      "Conduct code reviews and provide technical support to team members."
    ]
  },
  {
    company: "TNT Media & Isocial Co., Ltd.",
    role: "Game Developer - Fresher",
    period: "June 2025 - September 2025",
    description: "Integrated and assembled disparate game modules, assets, and scripts into complete, playable builds using Unity and Cocos Creator.",
    tasks: [
      "Analyzed and understood existing project codebases to connect UI, gameplay logic, audio, and level components into cohesive prototypes and final products.",
      "Collaborated with team members to resolve integration issues, debug cross-engine compatibility problems, and ensure stable, functional game deliveries."
    ]
  },
  {
    company: "Startup Game Team",
    role: "Game Developer - Intern",
    period: "January 2023 - June 2023",
    description: "Developed core puzzle mechanics, level features, and asset integration for a Unity-based puzzle game prototype in a startup environment, gaining hands-on experience with C#, Git, debugging, and agile workflows.",
    tasks: []
  }
];

export const SKILLS: SkillCategory[] = [
  { title: "Game Engines", skills: ["Unity", "Unreal", "Cocos Creator", "Roblox Studio"] },
  { title: "Programming", skills: ["C#", "C++", "Lua", "Solidity", "TypeScript", "JavaScript", "Node.js"] },
  { title: "Game Development", skills: ["2D/3D", "Cross-platform", "Scene Management", "Educational Games", "Casual Games", "UI System"] },
  { title: "Networking", skills: ["Photon PUN 2/Voice/Fusion", "Real-time Multiplayer"] },
  { title: "Mobile", skills: ["Android/iOS", "Google Play Publishing", "Performance Optimization"] },
  { title: "Performance", skills: ["Object Pooling", "LOD", "Occlusion Culling", "Memory Management"] },
  { title: "Web3/Blockchain", skills: ["Smart Contracts", "MetaMask", "Hardhat", "Web3.js"] },
  { title: "Backend", skills: ["Firebase", "AES Encryption", "RESTful APIs", "Data Synchronization"] },
  { title: "AI", skills: ["NavMeshAgent", "State-based Systems", "Pathfinding"] },
  { title: "Monetization", skills: ["Google AdMob", "In-app Purchases"] },
  { title: "3D/Art", skills: ["Blender Modeling"] },
  { title: "Tools", skills: ["Git", "Unity Addressables", "Async Loading", "Git Submodules", "Hot Update Pipeline"] }
];
