import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { LEARNING_JOURNEY } from '../data/constants';

const LearningJourney = () => {
  return (
    <section id="learning" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Learning Journey"
          subtitle="Always evolving. Here is what I am currently diving into."
        />

        <div className="flex flex-wrap justify-center gap-4">
          {LEARNING_JOURNEY.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="px-6 py-3 glass rounded-full text-slate-300 border border-white/5 flex items-center gap-2 hover:text-accent hover:border-accent/50 transition-all duration-300 cursor-default"
            >
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
