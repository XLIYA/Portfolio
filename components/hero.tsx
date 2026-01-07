"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const easing = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: easing } },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.9, ease: easing } },
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-background  lg:pt-50 bg-slate-50 px-5">
      {/* Background texture + gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_70%_40%,oklch(0.7_0.12_240/0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50rem_50rem_at_20%_70%,oklch(0.7_0.12_200/0.10),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute inset-0 opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_72%)] bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.06),transparent)]" />
      </div>

      <div className="mx-auto w-full  lg:max-w-7xl ">
        {/* Top mini nav (optional) */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="mb-10 hidden md:flex items-center justify-end gap-10 text-sm tracking-wide text-foreground/70"
        >
        </motion.div>

        <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          {/* Left: photo circle + social rail */}
          <div className="relative md:col-span-5">
            {/* Social rail */}
            <div className="absolute -left-1 top-6 hidden md:flex flex-col items-center gap-4">
              <span className="h-16 w-px bg-foreground/20" />
              <a
                href="https://github.com/XLIYA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.25em] text-foreground/60 hover:text-foreground transition-colors [writing-mode:vertical-rl]"
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com/in/ilya-ag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.25em] text-foreground/60 hover:text-foreground transition-colors [writing-mode:vertical-rl]"
              >
                LINKEDIN
              </a>
              <a
                href="mailto:xilyag@gmail.com"
                className="text-xs tracking-[0.25em] text-foreground/60 hover:text-foreground transition-colors [writing-mode:vertical-rl]"
              >
                EMAIL
              </a>
              <span className="h-16 w-px bg-foreground/20" />
            </div>

            {/* Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: easing }}
              className="relative mx-auto h-[320px] w-[320px] md:mx-0 md:h-[380px] md:w-[380px]"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full w-full rounded-full"
              >
                {/* halo */}
                <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,oklch(0.7_0.12_220/0.25),transparent_60%)] blur-xl" />
                {/* plate */}
                <div className="absolute inset-0 rounded-full bg-card/30 ring-1 ring-border/40" />
                <div className="absolute inset-[10px] overflow-hidden rounded-full ring-1 ring-border/30">
                  <Image
                    src="/ILYA.png"
                    alt="Hero Photo"
                    fill
                    className="object-cover grayscale contrast-125"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Section number */}
            <div className="mt-10 flex flex-col  items-start lg:flex-row lg:items-end gap-4">
              <div className="text-5xl font-bold tracking-tight text-foreground">01</div>
              <div className="h-px w-28 bg-foreground/25" />
            </div>
          </div>

          {/* Right: typography */}
          <motion.div
            className="md:col-span-7"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="text-sm tracking-[0.35em] text-foreground/60">
              ILYA · FRONTEND
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-[56px] leading-[0.95] tracking-[-0.04em] text-foreground md:text-[84px]"
            >
              <span className="block font-extrabold">CREATIVE</span>
              <span className="mt-2 block text-foreground/85 font-semibold tracking-[0.25em] text-[18px] md:text-[20px]">
                DEVELOPER
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-7 text-foreground/70"
            >
              I build fast, scalable web UIs with Next.js, TypeScript, and motion-first UX.
              Clean architecture, production polish, and zero fluff.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
              >
                Get in touch
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-xl border border-border/60 bg-card/20 px-6 py-3 text-sm font-medium text-foreground transition hover:bg-card/40"
              >
                View work
              </a>
            </motion.div>

            {/* Tagline like sample */}
            <motion.div variants={fadeUp} className="mt-10">
              <div className="text-sm tracking-[0.35em] text-foreground/40">
                SENSIBLE TO FRONTEND
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easing, delay: 0.35 }}
            className="group absolute right-2 top-1/2 hidden -translate-y-1/2 items-center gap-3 md:flex"
          >
            <span className="text-xs tracking-[0.25em] text-foreground/50 group-hover:text-foreground/80 transition-colors [writing-mode:vertical-rl]">
              SCROLL DOWN
            </span>
            <span className="relative h-24 w-px bg-foreground/20 overflow-hidden">
              <motion.span
                className="absolute inset-x-0 top-0 h-10 bg-foreground/70"
                animate={{ y: [0, 56, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
