export const GITHUB_USERNAME = "faridrashidi";
const GITHUB_CACHE_KEY = "github-repositories";
const GITHUB_CACHE_TTL_MS = 30 * 60 * 1000;

export type GitHubRepositoryStats = {
  language: string | null;
  name: string;
  stars: number;
};

type GitHubRepositoryResponse = {
  language: string | null;
  name: string;
  stargazers_count: number;
};

type CachedGitHubRepositories = {
  fetchedAt: number;
  repositories: GitHubRepositoryStats[];
};

const normalizeRepository = (
  repository: GitHubRepositoryResponse,
): GitHubRepositoryStats => ({
  language: repository.language,
  name: repository.name,
  stars: repository.stargazers_count,
});

const buildRepositoryMap = (repositories: GitHubRepositoryStats[]) =>
  new Map(
    repositories.map((repository) => [repository.name.toLowerCase(), repository]),
  );

const githubRequest = async <Result>(path: string): Promise<Result> => {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed for ${path} (${response.status})`);
  }

  return response.json();
};

const fetchGitHubRepositories = async (
  username = GITHUB_USERNAME,
): Promise<GitHubRepositoryStats[]> =>
  (
    await githubRequest<GitHubRepositoryResponse[]>(
      `/users/${username}/repos?per_page=100&sort=updated`,
    )
  ).map(normalizeRepository);

const loadCachedGitHubRepositories = () => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const cachedValue = window.sessionStorage.getItem(GITHUB_CACHE_KEY);

    if (!cachedValue) {
      return null;
    }

    const cachedRepositories = JSON.parse(
      cachedValue,
    ) as CachedGitHubRepositories;

    if (Date.now() - cachedRepositories.fetchedAt > GITHUB_CACHE_TTL_MS) {
      window.sessionStorage.removeItem(GITHUB_CACHE_KEY);
      return null;
    }

    return cachedRepositories.repositories;
  } catch {
    return null;
  }
};

const saveCachedGitHubRepositories = (repositories: GitHubRepositoryStats[]) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(
      GITHUB_CACHE_KEY,
      JSON.stringify({
        fetchedAt: Date.now(),
        repositories,
      } satisfies CachedGitHubRepositories),
    );
  } catch {
    // Ignore storage errors and fall back to a fresh request next time.
  }
};

export const fetchGitHubRepositoryMapCached = async (
  username = GITHUB_USERNAME,
) => {
  const cachedRepositories = loadCachedGitHubRepositories();

  if (cachedRepositories) {
    return buildRepositoryMap(cachedRepositories);
  }

  const repositories = await fetchGitHubRepositories(username);
  saveCachedGitHubRepositories(repositories);

  return buildRepositoryMap(repositories);
};

export const getGitHubLanguageClassName = (language: string) =>
  `project-language-dot--${language.toLowerCase().replace(/\s+/g, "-")}`;
