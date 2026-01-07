"use client"

import { motion , easeOut } from "framer-motion"

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  }

  return (
    <section id="contact" className="py-20 px-6 border-t border-border">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
            Let's Work Together
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-foreground/70">
            I'm interested in roles where code quality, ownership, and system thinking matter. Let's discuss how I can
            contribute to your team.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:xilyag@gmail.com"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Email
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/ilya-ag"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card transition"
            variants={itemVariants}
            whileHover={{ scale: 1.05, borderColor: "var(--accent)" }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          className="pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm text-foreground/60">Location: Tehran, Iran</p>
        </motion.div>
      </div>
    </section>
  )
}
