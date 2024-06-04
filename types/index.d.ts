interface Project {
  name: string;
  description: string;
  url: string;
  deploy: string;
  tech: string[];
  thumbnail: string;
  isTeam: boolean;
}

interface Career {
  company: string;
  maskingName: string;
  level: string;
  startDate: string;
  endDate: string;
  jobs: string[];
  skills: string[];
  position: string;
  team: string;
}

interface Skill {
  name: string;
  image?: string;
}

interface Guest {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  email: string;
  password: string;
  message: string;
}
