import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { EDUCATION } from '../data/constants';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Education"
          subtitle="Academic foundation in computer engineering and technology."
        />

        <div className="space-y-8">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl border-white/5 relative pl-16"
            >
              <div className="absolute left-6 top-6 text-accent">
                <GraduationCap size={32} />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-slate-400">{edu.institution} | {edu.university}</p>
                </div>
                <div className="text-accent font-medium text-sm px-3 py-1 bg-accent/10 rounded-full h-fit">
                  Expected {edu.graduationYear}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
