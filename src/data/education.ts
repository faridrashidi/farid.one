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
    degree: "NIH Graduate Partnership Program (GPP)",
    href: "https://www.nih.gov/",
    logoScale: "1.15",
    logoSrc: "https://cdn.farid.one/farid/logo_nih.svg",
  },
  {
    institution: "Indiana University",
    degree: "Ph.D. in Computer Science",
    href: "https://www.iu.edu/",
    logoOffsetY: "-3px",
    logoScale: "0.9",
    logoSrc: "https://cdn.farid.one/farid/logo_iu.svg",
  },
  {
    institution: "Sharif University of Technology",
    degree: "M.S. in Artificial Intelligence and Robotics",
    href: "https://www.sharif.ir/",
    markPadding: "0.22rem",
    logoSrc: "https://cdn.farid.one/farid/logo_sut.svg",
  },
  {
    institution: "Amirkabir University of Technology",
    degree: "B.S. in Software Engineering",
    href: "https://aut.ac.ir/en",
    markPadding: "0.18rem",
    logoSrc: "https://cdn.farid.one/farid/logo_aut.svg",
  },
];

export const educationPhotos = [
  {
    alt: "Illustrated graduation portrait holding an Indiana University diploma",
    label: "Indiana University",
    src: "https://cdn.farid.one/farid/graduation_iub.webp",
    width: 768,
    height: 1024,
  },
  {
    alt: "Illustrated graduation portrait in a blue cap and gown",
    label: "Sharif University",
    src: "https://cdn.farid.one/farid/graduation_sut.webp",
    width: 768,
    height: 1024,
  },
];
