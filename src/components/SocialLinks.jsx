import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './icons';
import { SITE_CONFIG } from '../data/constants';
import { motion } from 'framer-motion';

const SocialLinks = ({ className }) => {
  const links = [
    { icon: Github, href: `https://github.com/${SITE_CONFIG.github}`, label: 'GitHub' },
    { icon: Linkedin, href: SITE_CONFIG.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${SITE_CONFIG.email}`, label: 'Email' },
  ];

  return (
    <div className={className}>
      {links.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="p-2 text-slate-400 hover:text-accent transition-colors duration-200"
          aria-label={link.label}
        >
          <link.icon size={24} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
