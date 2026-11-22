import React from 'react';
import SocialLinks from './SocialLinks';
import { SITE_CONFIG } from '../data/constants';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Built with React.
          </p>
        </div>
        <SocialLinks className="flex items-center gap-4" />
      </div>
    </footer>
  );
};

export default Footer;
