export type NavigationLink = {
  href: string;
  label: string;
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
