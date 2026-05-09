import { useEffect, useState } from "react";

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage: string | null;
  topics: string[];
  updated_at: string;
}

interface UseGithubReposResult {
  repos: GithubRepo[];
  loading: boolean;
  error: string | null;
}

export function useGithubRepos(username: string): UseGithubReposResult {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repos");
        return res.json();
      })
      .then((data: GithubRepo[]) => {
        // exclude the portfolio repo itself
        setRepos(data.filter((r) => r.name !== username.toLowerCase() && r.name !== "muazzem-hossain"));
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  return { repos, loading, error };
}
