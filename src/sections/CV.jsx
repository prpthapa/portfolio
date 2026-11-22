import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../data/constants';

const CV = () => {
  return (
    <section id="cv" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle
          title="Resume"
          subtitle="Detailed professional background and technical qualifications."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 text-accent/20">
            <FileText size={120} />
          </div>

          <div className="relative z-10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Resume</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                Interested in AI/ML and software engineering, with hands-on experience building machine-learning, computer-vision, and web-development projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = SITE_CONFIG.cvUrl;
                  link.download = `CV_${SITE_CONFIG.name}.pdf`;
                  link.click();
                }}
              >
                <Download size={20} className="mr-2" /> Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.open(SITE_CONFIG.cvUrl, '_blank')}
              >
                <ExternalLink size={20} className="mr-2" /> Open CV
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CV;
