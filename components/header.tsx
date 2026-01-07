"use client"

import { useState } from "react"
import Link from "next/link"
import { easeOut, motion } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Link href="#" className="text-xl font-bold text-slate-600">
            ILYA AGHAEI
          </Link>
        </motion.div>

        <div className="hidden md:flex gap-8">
          {["About", "Skills", "Projects", "Contact"].map((item, i) => (
            <motion.div
              key={item}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm text-foreground/70 hover:text-foreground transition"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-4">
            <Link href="#about" className="block text-foreground/70 hover:text-foreground transition">
              About
            </Link>
            <Link href="#skills" className="block text-foreground/70 hover:text-foreground transition">
              Skills
            </Link>
            <Link href="#projects" className="block text-foreground/70 hover:text-foreground transition">
              Projects
            </Link>
            <Link href="#contact" className="block text-foreground/70 hover:text-foreground transition">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
