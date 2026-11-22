import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const interests = [
    "Artificial Intelligence",
    "Machine Learning",
    "Full-Stack Development",
    "Cloud Computing",
    "Software Engineering",
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about building intelligent systems and scalable applications."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-slate-400 leading-relaxed space-y-6"
          >
            <p>
              I am a <span className="text-white font-medium">Computer Engineering student</span> dedicated to mastering the art of software development and artificial intelligence.
            </p>
            <p>
              My journey is driven by a curiosity to understand how things work under the hood and a desire to create tools that solve real-world problems. I believe in <span className="text-white font-medium">learning by doing</span>, which is why I spend most of my time building practical projects.
            </p>
            <p>
              Whether it's training a machine learning model to recognize patterns or architecting a full-stack web application, I strive for clean code, efficient performance, and a great user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {interests.map((interest) => (
              <div
                key={interest}
                className="p-4 glass rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="text-slate-300 font-medium group-hover:text-accent transition-colors duration-200">
                  {interest}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
