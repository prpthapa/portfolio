import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { SITE_CONFIG } from '../data/constants';
import { Mail, Send } from 'lucide-react';
import { Github, Linkedin } from '../components/icons';
import Button from '../components/Button';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Get In Touch"
          subtitle="I'm open to collaborations, internships, or just a friendly technical chat."
        />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-medium">Email</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-200 hover:text-accent transition-colors">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-lg">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-medium">GitHub</p>
                    <a href={`https://github.com/${SITE_CONFIG.github}`} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-accent transition-colors">
                      github.com/{SITE_CONFIG.github}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-lg">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-medium">LinkedIn</p>
                    <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-accent transition-colors">
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2 bg-primary border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2 bg-primary border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2 bg-primary border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <Button
                variant="primary"
                className="w-full"
                isLoading={isSubmitting}
                type="submit"
              >
                <Send size={18} className="mr-2" /> Send Message
              </Button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-accent font-medium py-2"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
