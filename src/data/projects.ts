export type ProjectEntry = {
  githubRepo?: string;
  siteUrl: string;
  summary: string;
  summaryLanguage?: "en" | "fa";
  title: string;
  titleLanguage?: "en" | "fa";
};

export const curatedProjects: ProjectEntry[] = [
  {
    title: "Kaggle Solutions",
    summary: "Collection of Kaggle solutions and ideas.",
    siteUrl: "https://kaggle.farid.one/",
    githubRepo: "kaggle-solutions",
  },
  {
    title: "CNSPlots",
    summary: "Plotting toolkit for publication-ready figures.",
    siteUrl: "https://cnsplots.farid.one/",
    githubRepo: "cnsplots",
  },
  {
    title: "scPhylo-Tools",
    summary: "Toolkit for single-cell tumor phylogenetic analysis.",
    siteUrl: "https://scphylo-tools.readthedocs.io/",
    githubRepo: "scphylo-tools",
  },
  {
    title: "Trisicell",
    summary: "Tumor phylogeny inference from single-cell RNA or DNA data.",
    siteUrl: "https://trisicell.readthedocs.io/",
    githubRepo: "trisicell",
  },
  {
    title: "اپ بازی مافیا",
    titleLanguage: "fa",
    summary:
      "اپلیکیشن جامع بازی مافیا با بیش از ۲۵ سناریو و کارت‌های دیجیتال",
    summaryLanguage: "fa",
    siteUrl: "https://mafia.farid.one/",
  },
];
