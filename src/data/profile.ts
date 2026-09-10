export type NavigationLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: "github" | "telegram" | "email";
};

export type BiographyPart =
  | {
      type: "text";
      value: string;
    }
  | {
      external?: boolean;
      href: string;
      type: "link";
      value: string;
    };

export const siteConfig = {
  avatar: "https://cdn.farid.one/farid/profile.webp",
  description:
    "Farid Rashidi personal website | وبسایت شخصی فرید رشیدی",
  headline: "Farid Rashidi | فرید رشیدی",
  title: "Farid Rashidi",
};

export const siteFeatures = {
  blogEnabled: false,
  sportEnabled: true,
  educationEnabled: true,
};

export const navigationLinks: NavigationLink[] = [
  { href: "/about", label: "About" },
  ...(siteFeatures.blogEnabled ? [{ href: "/blog", label: "Blog" }] : []),
];

export const footerLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/faridrashidi",
    icon: "github",
  },
  {
    name: "Telegram",
    url: "https://t.me/FarNoID",
    icon: "telegram",
  },
  {
    name: "Email",
    url: "mailto:hi@farid.one",
    icon: "email",
  },
];

export const biography = {
  greeting: "Hi, I'm Farid Rashidi.",
  paragraphs: [
    [
      {
        type: "text",
        value:
          "I'm a computer scientist with expertise in computational biology and cancer genomics.",
      },
    ],
    [
      {
        type: "text",
        value:
          "I do research, publish scientific work, and love open-source programming. ",
      },
      { type: "link", value: "More about me", href: "/about" },
    ],
  ],
} satisfies {
  greeting: string;
  paragraphs: BiographyPart[][];
};

export const aboutContent = {
  whoAmI: [
    "I have a Ph.D. in Computer Science and a M.S. in Artificial Intelligence, with expertise in computational biology, machine learning and cancer genomics.",
    "My work focuses on cancer research, where I develop tools, analyze data, and write and publish scientific publications.",
    "I love programming and building practical software, and I enjoy creating open-source projects.",
  ],
  travel: {
    homeCountry: "Iran",
    intro: [
      "I've been lucky enough to discover many countries around the world.",
      "These are the ones that I visited.",
    ],
    visitedCountries: [
      "United States",
      "Iran",
      "Bahrain",
      "United Kingdom",
      "Austria",
      "Denmark",
      "Sweden",
      "Turkey",
      "India",
      "China",
      "Russia",
      "Armenia",
      "United Arab Emirates",
      "France",
      "Qatar",
      "Canada",
    ],
  },
};
