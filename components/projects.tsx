"use client"

import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "Asman Web Platform",
      subtitle: "Follow Part System (Internal Parts Tracking)",
      description:
        "Designed and implemented complete front-end architecture for automotive parts lifecycle management. Built with React and Next.js to support server-side rendering and reliable data fetching.",
      outcome: "Reduced manual follow-ups and significantly improved operational transparency for dealership staff.",
      techs: ["React", "Next.js", "TypeScript", "Redux"],
    },
    {
      title: "Asman Web Platform",
      subtitle: "Customer Follow-Up System (Client Portal)",
      description:
        "Built a customer-facing web application focused on clarity and usability. Separated this system from internal dashboard to enforce clear data boundaries with API-driven status updates.",
      outcome: "Reduced customer support load and provided real-time visibility into order and service progress.",
      techs: ["React", "Next.js", "Responsive UI", "API Integration"],
    },
  ]

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Selected Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="border border-border rounded-lg p-8 hover:border-accent/50 transition"
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ boxShadow: "0 0 30px rgba(80, 160, 255, 0.1)", y: -5 }}
            >
              <motion.div
                className="space-y-4 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-accent font-medium">{project.subtitle}</p>
              </motion.div>

              <motion.p
                className="text-foreground/80 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="bg-card rounded p-4 mb-6 border border-border/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-sm font-medium text-foreground/70">Outcome:</p>
                <p className="text-foreground/80">{project.outcome}</p>
              </motion.div>

              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech, tidx) => (
                  <motion.span
                    key={tidx}
                    className="text-xs px-2 py-1 bg-background border border-border rounded text-foreground/70"
                    variants={techVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + tidx * 0.05 }}
                    whileHover={{ scale: 1.05, borderColor: "var(--accent)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
