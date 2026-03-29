export type NavigationLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: "github" | "email";
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
  avatar:
    "https://www.gravatar.com/avatar/42125cfaaf0a859652acd4832533745d?s=512",
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
  sport: {
    paragraphs: [
      "Karate has been one of the most defining parts of my life outside work. I hold a 2nd Dan black belt and have competed internationally, with multiple podium finishes including gold medals at the 8th and 9th AMA International Karate Open in England (2006 and 2007) and a bronze medal at the Budo-Nord Karate Open World Cup in Sweden (2005).",
      "Beyond karate, I enjoy staying active and sharp in different ways. I am a certified lifeguard, an avid tennis player, a competitive chess enthusiast, and I am passionate about social deduction and strategy games.",
    ],
  },
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
