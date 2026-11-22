import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, GitFork } from 'lucide-react';
import { Github } from './icons';
import Button from './Button';

const ProjectCard = ({
  title,
  description,
  tech,
  github,
  demo,
  image,
  stars,
  forks,
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass rounded-2xl overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center text-slate-500">
            No Preview Available
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-wider px-2 py-1 bg-accent/10 text-accent rounded-md border border-accent/20"
            >
              {t}
            </span>
          ))}
        </div>

        {(stars !== undefined || forks !== undefined) && (
          <div className="flex items-center gap-4 mb-6 text-slate-500 text-xs">
            {stars !== undefined && (
              <div className="flex items-center gap-1">
                <Star size={14} /> {stars}
              </div>
            )}
            {forks !== undefined && (
              <div className="flex items-center gap-1">
                <GitFork size={14} /> {forks}
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => window.open(github, '_blank')}
          >
            <Github size={16} className="mr-2" /> GitHub
          </Button>
          {demo && (
            <Button
              variant="primary"
              size="sm"
              className="flex-1"
              onClick={() => window.open(demo, '_blank')}
            >
              <ExternalLink size={16} className="mr-2" /> Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
