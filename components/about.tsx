"use client"

import { easeOut, motion } from "framer-motion"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  }

  const strengthVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  }

  return (
    <section id="about" className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6 text-foreground/80 leading-relaxed"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants}>
              I work best in collaborative engineering environments where ideas are challenged, refined, and turned into
              practical solutions. I take full ownership of the features I build—from technical decisions to final
              delivery.
            </motion.p>
            <motion.p variants={itemVariants}>
              My approach to front-end development is engineering-driven: clean architecture, predictable state
              management, and long-term maintainability over short-term hacks. I continuously strengthen my technical
              depth and remain effective under pressure.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-card border border-border rounded-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ borderColor: "var(--accent)", boxShadow: "0 0 20px rgba(80, 160, 255, 0.1)" }}
          >
            <h3 className="font-bold text-lg mb-6">Key Strengths</h3>
            <ul className="space-y-3 text-foreground/80">
              {[
                "Scalable architecture design and optimization",
                "Production-ready code quality and testing",
                "Performance optimization and caching strategies",
                "Ownership and independent problem solving",
              ].map((strength, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3"
                  variants={strengthVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <span className="text-accent mt-1">→</span>
                  <span>{strength}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
