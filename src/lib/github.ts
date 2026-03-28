import type { ProjectEntry } from "../data/projects";

export const GITHUB_USERNAME = "faridrashidi";

export type GitHubRepositoryStats = {
  description: string;
  forks: number;
  homepage: string | null;
  language: string | null;
  name: string;
  stars: number;
  url: string;
};

export type ProjectWithGitHub = ProjectEntry & {
  github?: GitHubRepositoryStats;
};

type GitHubRepositoryResponse = {
  description: string | null;
  forks_count: number;
  homepage: string | null;
  html_url: string;
  language: string | null;
  name: string;
  stargazers_count: number;
};

type GitHubUserResponse = {
  followers: number;
  public_repos: number;
};

type GitHubSnapshot = {
  followers: number;
  publicRepos: number;
  repositories: GitHubRepositoryStats[];
  repositoryMap: Map<string, GitHubRepositoryStats>;
  totalStars: number;
};

const githubHeaders = () => {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "farid.one",
  };

  if (import.meta.env.GITHUB_API_TOKEN) {
    headers.Authorization = `Bearer ${import.meta.env.GITHUB_API_TOKEN}`;
  }

  return headers;
};

const normalizeRepository = (
  repository: GitHubRepositoryResponse,
): GitHubRepositoryStats => ({
  description: repository.description ?? "No description provided yet.",
  forks: repository.forks_count,
  homepage: repository.homepage || null,
  language: repository.language,
  name: repository.name,
  stars: repository.stargazers_count,
  url: repository.html_url,
});

const githubRequest = async <Response>(path: string): Promise<Response> => {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: githubHeaders(),
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed for ${path} (${response.status})`);
  }

  return response.json();
};

export const fetchGitHubSnapshot = async (
  username = GITHUB_USERNAME,
): Promise<GitHubSnapshot> => {
  try {
    const [user, repositoriesResponse] = await Promise.all([
      githubRequest<GitHubUserResponse>(`/users/${username}`),
      githubRequest<GitHubRepositoryResponse[]>(
        `/users/${username}/repos?per_page=100&sort=updated`,
      ),
    ]);

    const repositories = repositoriesResponse.map(normalizeRepository);
    const repositoryMap = new Map(
      repositories.map((repository) => [repository.name.toLowerCase(), repository]),
    );

    return {
      followers: user.followers,
      publicRepos: user.public_repos,
      repositories,
      repositoryMap,
      totalStars: repositories.reduce(
        (sum, repository) => sum + repository.stars,
        0,
      ),
    };
  } catch (error) {
    console.warn("Falling back to empty GitHub data.", error);

    return {
      followers: 0,
      publicRepos: 0,
      repositories: [],
      repositoryMap: new Map(),
      totalStars: 0,
    };
  }
};

export const hydrateProjects = (
  projects: ProjectEntry[],
  repositoryMap: Map<string, GitHubRepositoryStats>,
): ProjectWithGitHub[] =>
  projects.map((project) => ({
    ...project,
    github: project.githubRepo
      ? repositoryMap.get(project.githubRepo.toLowerCase())
      : undefined,
  }));
