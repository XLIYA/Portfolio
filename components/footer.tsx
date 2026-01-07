"use client"

import { easeOut, motion } from "framer-motion"

export default function Footer() {
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  }

  return (
    <footer className="border-t border-border bg-card py-12 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { label: "GitHub", href: "https://github.com/XLIYA" },
            { label: "LinkedIn", href: "https://linkedin.com/in/ilya-ag" },
            { label: "Email", href: "mailto:xilyag@gmail.com" },
          ].map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-foreground/60 hover:text-foreground transition"
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
        <motion.p
          className="text-sm text-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          © 2026 Ilya Aghaei. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}
