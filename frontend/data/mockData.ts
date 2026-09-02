export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
}

export interface Testimony {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
  quote: string;
}

// 1. Projects Data
const projects: Project[] = [
  {
    id: 1,
    title: "Relawan Pendidikan Indonesia",
    category: "Web Dev",
    description: "Membuat platform untuk komunitas Relawan Pendidikan Indonesia",
    tech: ["React.js", "Next.js", "Tailwind"], 
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Mobile App",
    description: "Application for employee tracking and task management.",
    tech: ["React Native", "Express.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

// 2. Skills Data
const skillGroups: SkillGroup[] = [
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      {
        name: "React / Next.js",
        level: "Advanced",
        percentage: 90,
      },
      {
        name: "Express JS",
        level: "Advanced",
        percentage: 85,
      },
    ],
  },
  {
    title: "Cyber Security & Pentesting",
    icon: "🛡️",
    skills: [
      {
        name: "Cyber Security",
        level: "Expert",
        percentage: 100,
      },
      {
        name: "Penetration Testing",
        level: "Expert",
        percentage: 95,
      },
    ],
  },
];

// 3. Certificate Data
const certificates: Certificate[] = [
  {
    id: 1,
    title: "Juara 1 International Blue Arena CTF Competition",
    issuer: "International Blue Arena",
    date: "2025",
    credentialId: "N/A",
    verificationUrl: "#",
  },
  {
    id: 2,
    title: "Medallion For Excellence Bidang Teknologi Keamanan Siber",
    issuer: "Lomba Kompetensi Siswa Tingkat Nasional Puspresnas",
    date: "2025",
    credentialId: "N/A",
    verificationUrl: "#",
  },
  {
    id: 3,
    title: "BNSP Sertifikat Kompetensi Cyber Security",
    issuer: "Badan Nasional Sertifikasi Profesi",
    date: "2025",
    credentialId: "N/A",
    verificationUrl: "#",
  },
  {
    id: 4,
    title: "Juara 3 Lomba Web Design",
    issuer: "Politeknik Negeri Ujung Pandang",
    date: "2024",
    credentialId: "N/A",
    verificationUrl: "#",
  },
  {
    id: 5,
    title: "Sertifikat Apresiasi Diskominfo Kota Batam",
    issuer: "Diskominfo Kota Batam",
    date: "2025",
    credentialId: "N/A",
    verificationUrl: "#",
  },
  {
    id: 6,
    title: "Sertifikat Apresiasi Diskominfo Kota Bandung",
    issuer: "Diskominfo Kota Bandung",
    date: "2025",
    credentialId: "N/A",
    verificationUrl: "#",
  },
  {
    id: 7,
    title: "Finalis Lomba Capture The Flag SRIFOTON",
    issuer: "Universitas Sriwijaya",
    date: "2025",
    credentialId: "N/A",
    verificationUrl: "#",
  },
  {
    id: 8,
    title: "Sertifikat Apresiasi Diskominfo Kota Pontianak",
    issuer: "Diskominfo Kota Pontianak",
    date: "2025",
    credentialId: "N/A",
    verificationUrl: "#",
  },
];

// 4. Testimony Data
const testimony: Testimony[] = [
  {
    id: 1,
    name: "Erlan Yusuf Rafif",
    role: "Project Coordinator",
    company: "PT Digital Nusantara",
    avatar: "👨‍💻",
    stars: 5,
    quote:
      "Kerja timnya cepat tanggap dan desainnya rapi, sangat membantu presentasi klien kami.",
  },
  {
    id: 2,
    name: "Christian Renato Wongkar",
    role: "IT Supervisor",
    company: "CyberSolusi",
    avatar: "👨‍💼",
    stars: 4,
    quote:
      "Sangat profesional, hasilnya bersih dan mudah digunakan. Review teknisnya juga sangat detail.",
  },
];

// Simulasi delay loading
const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Get Projects
export async function getProjects(): Promise<Project[]> {
  await delay(1200);
  return projects;
}

// Get Skills
export async function getSkills(): Promise<SkillGroup[]> {
  await delay(1000);
  return skillGroups;
}

// Get Certificates
export async function getCertificates(): Promise<Certificate[]> {
  await delay(1200);
  return certificates;
}

// Get Testimony
export async function getTestimony(): Promise<Testimony[]> {
  await delay(800);
  return testimony;
}