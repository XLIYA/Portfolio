"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "Primary Stack",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "React Query"],
    },
    {
      title: "Supporting Skills",
      skills: ["JWT & Cookies", "REST APIs", "WebSockets", "GraphQL", "Git & Gitflow", "Node.js"],
    },
    {
      title: "Performance & Tools",
      skills: ["Caching Strategies", "Optimization", "Figma", "Testing", "State Management", "SSR/ISR/CSR"],
    },
  ]

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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-6 bg-card border-y border-border">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Core Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} className="space-y-4" variants={categoryVariants}>
              <h3 className="text-lg font-bold text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sidx) => (
                  <motion.span
                    key={sidx}
                    className="px-3 py-1 bg-background border border-border rounded-full text-sm text-foreground/80 cursor-default"
                    variants={skillVariants}
                    whileHover={{ scale: 1.1, borderColor: "var(--accent)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
