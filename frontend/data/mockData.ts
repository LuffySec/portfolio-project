// Definisi Interface
export interface Project {
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  image: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  stars: number;
}

// Mock Data Arrays
const projects: Project[] = [
  { title: "Relawan Pendidikan Indonesia", category: "Web Dev", description: "Membuat platform untuk komunitas Relawan Pendidikan Indonesia", githubUrl: "#", image: "/project1.png" },
  { title: "Task Management App", category: "Mobile App", description: "Application for employee tracking and task management.", githubUrl: "#", image: "/project1.png" },
  // Tambahkan data proyek lainnya sesuai kebutuhan...
];

const skills: Skill[] = [
  { name: "React / Next.js", percentage: 90 },
  { name: "TypeScript", percentage: 85 },
  { name: "Tailwind CSS", percentage: 95 },
  { name: "Cyber Security", percentage: 88 },
  // Tambahkan data skill lainnya sesuai kebutuhan...
];

const certificates: Certificate[] = [
  {
    name: "Juara 1 International Blue Arena CTF Competition",
    issuer: "International Blue Arena",
    date: "2025",
    image: "/certificate1.png",
  },
  {
    name: "Medallion For Excellence Bidang Teknologi Keamanan Siber",
    issuer: "Lomba Kompetensi Siswa Tingkat Nasional Puspresnas",
    date: "2025",
    image: "/certificate2.png",
  },
  {
    name: "BNSP Sertifikat Kompetensi Cyber Security",
    issuer: "Badan Nasional Sertifikasi Profesi",
    date: "2025",
    image: "/certificate3.png",
  },
  {
    name: "Juara 3 Lomba Web Design",
    issuer: "Politeknik Negeri Ujung Pandang",
    date: "2024",
    image: "/certificate4.png",
  },
  {
    name: "Sertifikat Apresiasi Diskominfo Kota Batam",
    issuer: "Diskominfo Kota Batam",
    date: "2025",
    image: "/certificate5.png",
  },
  {
    name: "Sertifikat Apresiasi Diskominfo Kota Bandung",
    issuer: "Diskominfo Kota Bandung",
    date: "2025",
    image: "/certificate6.png",
  },
  {
    name: "Finalis Lomba Capture The Flag SRIFOTON",
    issuer: "Universitas Sriwijaya",
    date: "2025",
    image: "/certificate7.png",
  },
  {
    name: "Sertifikat Apresiasi Diskominfo Kota Pontianak",
    issuer: "Diskominfo Kota Pontianak",
    date: "2025",
    image: "/certificate8.png",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Erlan Yusuf Rafif",
    role: "Project Coordinator",
    company: "PT Digital Nusantara",
    quote: "Kerja timnya cepat tanggap dan desainnya rapi, sangat membantu presentasi klien kami.",
    stars: 5,
  },
  {
    name: "Christian Renato Wongkar",
    role: "IT Supervisor",
    company: "CyberSolusi",
    quote: "Sangat profesional, hasilnya bersih dan mudah digunakan. Review teknisnya juga sangat detail.",
    stars: 4,
  },
];

// Simulasi Delay untuk Fetching Data
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Fungsi Fetching Asinkron
export async function getProjects(): Promise<Project[]> {
  await delay(1000);
  return projects;
}

export async function getSkills(): Promise<Skill[]> {
  await delay(1000);
  return skills;
}

export async function getCertificates(): Promise<Certificate[]> {
  await delay(1000);
  return certificates;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await delay(1000);
  return testimonials;
}