import { SITE_CONFIG } from '../data/constants';

export const fetchGitHubRepos = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${SITE_CONFIG.github}/repos?sort=updated&per_page=100`
    );
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    const data = await response.json();
    return data.map((repo) => ({
      title: repo.name,
      description: repo.description || 'No description provided.',
      tech: repo.language ? [repo.language] : [],
      github: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updatedAt: repo.updated_at,
      topics: repo.topics || [],
    }));
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error);
    throw error;
  }
};
