import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { EXPERIENCE } from '../data/constants';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Experience & Activities"
          subtitle="Practical involvement in the tech community and open source."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl border-white/5 group hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 text-accent rounded-lg group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                  <p className="text-slate-400 text-sm">{exp.organization}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="text-accent text-xs font-medium">
                {exp.period}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
