import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { FEATURED_PROJECTS } from '../data/constants';
import { fetchGitHubRepos } from '../services/githubService';
import { Search, Filter } from 'lucide-react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLanguage, setFilterLanguage] = useState('All');

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const data = await fetchGitHubRepos();
        setRepos(data);
      } catch {
        setError('Could not load GitHub projects. Please check back later.');
      } finally {
        setLoading(false);
      }
    };
    loadRepos();
  }, []);

  const languages = ['All', ...new Set(repos.flatMap(r => r.tech))];

  const filteredRepos = repos.filter(repo => {
    const matchesSearch = repo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          repo.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLang = filterLanguage === 'All' || repo.tech.includes(filterLanguage);
    return matchesSearch && matchesLang;
  });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Featured Projects"
          subtitle="Highlighted works that showcase my core capabilities."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <SectionTitle
            title="All Public Repositories"
            subtitle="Everything I've shared with the world on GitHub."
          />

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 glass rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2">
              <Filter size={18} className="text-slate-500 shrink-0" />
              {languages.map(lang => (
                <button
                  key={lang}
                  onClick={() => setFilterLanguage(lang)}
                  className={cn(
                    'px-4 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap',
                    filterLanguage === lang ? 'bg-accent text-primary' : 'bg-secondary text-slate-400 hover:text-white'
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-12 glass rounded-2xl text-slate-400">
              {error}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRepos.length > 0 ? (
                filteredRepos.map((repo, idx) => (
                  <motion.div
                    key={repo.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  >
                    <ProjectCard {...repo} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-slate-500">
                  No projects found matching your search.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default Projects;
