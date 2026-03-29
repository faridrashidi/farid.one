export type EducationEntry = {
  degree: string;
  href?: string;
  institution: string;
  markPadding?: string;
  logoOffsetY?: string;
  logoScale?: string;
  logoSrc: string;
};

export const education: EducationEntry[] = [
  {
    institution: "National Institutes of Health",
    degree: "Predoctoral Research Fellow",
    href: "https://www.nih.gov/",
    logoScale: "1.15",
    logoSrc: "https://images.farid.one/logo/nih.svg",
  },
  {
    institution: "Indiana University",
    degree: "Ph.D. in Computer Science",
    href: "https://www.iu.edu/",
    logoOffsetY: "-3px",
    logoScale: "0.9",
    logoSrc: "https://images.farid.one/logo/iu.svg",
  },
  {
    institution: "Sharif University of Technology",
    degree: "M.S. in Artificial Intelligence and Robotics",
    href: "https://www.sharif.ir/",
    markPadding: "0.22rem",
    logoSrc: "https://images.farid.one/logo/sut.svg",
  },
  {
    institution: "Amirkabir University of Technology",
    degree: "B.S. in Software Engineering",
    href: "https://aut.ac.ir/",
    markPadding: "0.18rem",
    logoSrc: "https://images.farid.one/logo/aut.svg",
  },
];
