import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../data/constants';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 py-20">
      {/* Background Accents */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">{SITE_CONFIG.name}</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {SITE_CONFIG.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-500 mb-10 max-w-xl mx-auto"
          >
            {SITE_CONFIG.about}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button variant="primary" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Projects
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.open(SITE_CONFIG.cvUrl, '_blank')}>
            Download CV
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <SocialLinks className="flex gap-6" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
