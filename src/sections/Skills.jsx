import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { SKILLS } from '../data/constants';

const Skills = () => {
  const categories = [
    { title: 'Programming', data: SKILLS.programming },
    { title: 'AI / Machine Learning', data: SKILLS.aiMl },
    { title: 'Web Development', data: SKILLS.webDev },
    { title: 'Tools & Technologies', data: SKILLS.tools },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Technical Skills"
          subtitle="A comprehensive set of tools and technologies I use to bring ideas to life."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.data.map((skill) => (
                  <SkillCard key={skill} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
