import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="px-4 py-2 glass rounded-xl text-center text-sm font-medium text-slate-300 border border-white/5 hover:border-accent/30 transition-colors duration-200"
    >
      {skill}
    </motion.div>
  );
};

export default SkillCard;
