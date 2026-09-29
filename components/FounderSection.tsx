"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const beliefs = [
  {
    icon: Brain,
    number: "01",
    title: "Capability",
    text: "AI should be capable enough to do meaningful work.",
  },
  {
    icon: Target,
    number: "02",
    title: "Purpose",
    text: "Every AI worker should have a clear reason for what it is allowed to do.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Control",
    text: "Businesses should remain in control of every consequential action.",
  },
];

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#03060b] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-1/3 h-[450px] w-[450px] rounded-full bg-blue-500/[0.035] blur-[140px] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute bottom-0 right-[5%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.025] blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:70px_70px] sm:bg-[size:80px_80px]" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-6 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 flex items-center justify-between sm:mb-14"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-7 bg-blue-400/50 sm:w-8" />

            <span className="text-[9px] font-medium tracking-[0.24em] text-blue-300/85 sm:text-[10px] sm:tracking-[0.3em]">
              THE PERSON BEHIND SENTINEL
            </span>
          </div>

          <span className="hidden font-mono text-[9px] tracking-[0.15em] text-white/40 sm:block">
            SOPLEXAI / FOUNDER
          </span>
        </motion.div>

        {/* =====================================================
            MAIN FOUNDER AREA
        ===================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 xl:gap-24">
          {/* =================================================
              FOUNDER PORTRAIT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[460px]"
          >
            {/* Ambient glow */}

            <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/[0.09] blur-[110px]" />

            {/* Portrait frame */}

            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#070b12] shadow-2xl shadow-black/30 sm:rounded-[32px]">
              {/* Image */}

              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/soplex-sentinel/founder/sajjad-ullah.png"
                  alt="Sajjad Ullah — Founder & CEO of SoplexAI"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 38vw"
                  className="object-cover object-[center_15%] transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                />

                {/* Dark lower gradient */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03060b] via-transparent to-transparent opacity-95" />

                {/* Subtle blue light */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-transparent" />

                {/* Vignette */}

                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.28)]" />
              </div>

              {/* Corner details */}

              <div className="absolute left-5 top-5 h-5 w-5 border-l border-t border-blue-400/45" />
              <div className="absolute right-5 top-5 h-5 w-5 border-r border-t border-blue-400/45" />
              <div className="absolute bottom-5 left-5 h-5 w-5 border-b border-l border-blue-400/45" />
              <div className="absolute bottom-5 right-5 h-5 w-5 border-b border-r border-blue-400/45" />

              {/* Founder identity */}

              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-2xl border border-white/[0.12] bg-[#03060b]/72 p-4 backdrop-blur-xl sm:p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[8px] font-medium tracking-[0.25em] text-blue-300/90 sm:text-[9px]">
                        FOUNDER & CEO
                      </p>

                      <p className="mt-1.5 text-lg font-semibold tracking-[-0.02em] text-white sm:text-xl">
                        Sajjad Ullah
                      </p>

                      <p className="mt-1 text-[8px] font-medium tracking-[0.2em] text-white/55 sm:text-[9px]">
                        SOPLEXAI
                      </p>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.08]">
                      <Sparkles className="h-4 w-4 text-blue-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              FOUNDER STORY
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="max-w-3xl">
              <p className="text-[10px] font-medium tracking-[0.24em] text-blue-300/80">
                WHY SENTINEL EXISTS
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Built by someone who believes AI should be powerful —
                <span className="text-white/60"> and controlled.</span>
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-white/68 sm:text-base">
                <p>
                  AI agents are becoming part of how businesses operate. They
                  can communicate, write code, access systems, move data, and
                  make decisions.
                </p>

                <p>
                  But capability without boundaries creates a new security
                  problem: what happens when an AI agent takes an action it
                  was never supposed to take?
                </p>

                <p>
                  Sentinel is being built around a simple principle:
                  <span className="text-white">
                    {" "}
                    AI should have the capability to work, while businesses
                    retain the authority to decide what that capability can
                    actually do.
                  </span>
                </p>
              </div>
            </div>

            {/* Beliefs */}

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {beliefs.map((belief, index) => {
                const Icon = belief.icon;

                return (
                  <motion.div
                    key={belief.number}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group rounded-2xl border border-white/10 bg-white/[0.018] p-4 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-400/[0.025]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.06]">
                        <Icon className="h-4 w-4 text-blue-300" />
                      </div>

                      <span className="font-mono text-[9px] text-white/35">
                        {belief.number}
                      </span>
                    </div>

                    <h3 className="mt-4 text-sm font-semibold text-white">
                      {belief.title}
                    </h3>

                    <p className="mt-2 text-[11px] leading-5 text-white/58">
                      {belief.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Closing statement */}

            <div className="mt-9 border-l border-blue-400/40 pl-5">
              <p className="text-lg font-medium leading-7 tracking-[-0.02em] text-white/90 sm:text-xl">
                “The future of AI isn't about giving machines unlimited
                freedom.
                <span className="text-blue-300">
                  {" "}
                  It's about giving them meaningful boundaries.
                </span>
                ”
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="h-px w-8 bg-blue-400/40" />

                <span className="text-[9px] font-medium tracking-[0.18em] text-white/55">
                  SAJJAD ULLAH · FOUNDER & CEO
                </span>
              </div>
            </div>

            {/* Founder CTA */}

            <motion.a
              href="#contact"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="group mt-7 inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-blue-300/90 transition-colors hover:text-blue-200"
            >
              LEARN MORE ABOUT SOPLEXAI
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM LINE
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 sm:mt-16"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}