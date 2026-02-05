
export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  implementations: string[];
  videoUrl: string;
  playUrl?: string;
  googlePlayUrl?: string;
  sourceCodeUrl?: string;
  date?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  project?: string;
  tasks: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
