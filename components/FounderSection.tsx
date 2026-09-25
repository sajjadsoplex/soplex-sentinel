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
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#03060b] py-24 sm:py-32 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-1/3 h-[450px] w-[450px] rounded-full bg-blue-500/[0.035] blur-[140px] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute bottom-0 right-[5%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.025] blur-[140px] sm:h-[500px] sm:w-[500px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:70px_70px] sm:bg-[size:80px_80px]" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-6 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-center justify-between sm:mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-blue-400/40 sm:w-8" />

            <span className="text-[9px] tracking-[0.24em] text-blue-300/60 sm:text-[10px] sm:tracking-[0.3em]">
              THE PERSON BEHIND SENTINEL
            </span>
          </div>

          <span className="hidden font-mono text-[9px] tracking-[0.15em] text-white/15 sm:block">
            SOPLEXAI / FOUNDER
          </span>
        </motion.div>

        {/* =====================================================
            MAIN FOUNDER AREA
        ===================================================== */}

        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* =================================================
              REAL FOUNDER PORTRAIT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[500px]"
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
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                />

                {/* Cinematic overlays */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03060b] via-transparent to-transparent opacity-90" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-transparent" />

                {/* Subtle image vignette */}
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]" />
              </div>

              {/* Corner details */}
              <div className="absolute left-5 top-5 h-5 w-5 border-l border-t border-blue-400/40" />
              <div className="absolute right-5 top-5 h-5 w-5 border-r border-t border-blue-400/40" />
              <div className="absolute bottom-5 left-5 h-5 w-5 border-b border-l border-blue-400/40" />
              <div className="absolute bottom-5 right-5 h-5 w-5 border-b border-r border-blue-400/40" />

              {/* Founder identity overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-2xl border border-white/[0.1] bg-[#03060b]/65 p-4 backdrop-blur-xl sm:p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[8px] tracking-[0.25em] text-blue-300/70 sm:text-[9px]">
                        FOUNDER & CEO
                      </p>

                      <p className="mt-1.5 text-lg font-medium tracking-[-0.02em] text-white sm:text-xl">
                        Sajjad Ullah
                      </p>

                      <p className="mt-1 text-[8px] tracking-[0.2em] text-white/30 sm:text-[9px]">
                        SOPLEXAI
                      </p>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.06]">
                      <ShieldCheck className="h-4 w-4 text-blue-300/70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating identity card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-5 -right-3 hidden w-48 rounded-2xl border border-white/10 bg-[#080c13]/95 p-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-400/15 bg-blue-400/[0.05]">
                  <ShieldCheck className="h-4 w-4 text-blue-300" />
                </div>

                <div>
                  <p className="text-[8px] tracking-[0.15em] text-white/20">
                    BUILDING
                  </p>

                  <p className="mt-1 text-[10px] text-white/55">
                    AI Security
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              FOUNDER STORY
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-blue-300/60" />

              <span className="text-[9px] tracking-[0.25em] text-blue-300/60">
                A SIMPLE BELIEF
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.03] tracking-[-0.055em] text-white sm:mt-6 sm:text-5xl lg:text-6xl">
              AI should be
              <br />
              <span className="text-white/30">
                powerful — and controlled.
              </span>
            </h2>

            <div className="mt-7 max-w-2xl space-y-5 text-sm leading-7 text-white/40 sm:mt-8 sm:leading-8">
              <p>
                AI agents are moving beyond chat. They are beginning to write
                code, send messages, access data, operate software, move
                money, and make decisions.
              </p>

              <p>That changes the security problem.</p>

              <p>
                The question is no longer only whether an AI model is secure.
                The question is whether an AI worker can be trusted when it
                has the ability to act.
              </p>

              <p className="text-white/55">
                Soplex Sentinel was built around that idea:
                <span className="text-blue-200/80">
                  {" "}
                  give AI the capability to work while keeping humans in
                  control of consequential actions.
                </span>
              </p>
            </div>

            {/* Founder identity */}
            <div className="mt-8 flex items-center gap-4 sm:mt-9">
              <div className="h-px w-8 bg-blue-400/30 sm:w-10" />

              <div>
                <p className="text-sm font-medium text-white/80">
                  Sajjad Ullah
                </p>

                <p className="mt-1 text-[8px] tracking-[0.2em] text-white/25 sm:text-[9px]">
                  FOUNDER & CEO · SOPLEXAI
                </p>
              </div>
            </div>

            {/* Founder CTA */}
            <div className="mt-8 sm:mt-9">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-[9px] tracking-[0.08em] text-white/55 transition-all duration-300 hover:border-blue-400/25 hover:bg-blue-400/[0.05] hover:text-white"
              >
                CONNECT WITH SOPLEXAI

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BELIEFS
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-24 sm:mt-28"
        >
          <div className="mb-7 flex items-center justify-between sm:mb-8">
            <p className="text-[9px] tracking-[0.25em] text-white/20">
              THE PRINCIPLES
            </p>

            <p className="hidden text-[9px] tracking-[0.15em] text-white/15 sm:block">
              03 / FOUNDING BELIEFS
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {beliefs.map((belief, index) => {
              const Icon = belief.icon;

              return (
                <motion.div
                  key={belief.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -4 }}
                  className="group rounded-[22px] border border-white/[0.08] bg-[#070b12] p-5 transition-colors duration-300 hover:border-blue-400/15 sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] transition-colors group-hover:border-blue-400/20 group-hover:bg-blue-400/[0.05]">
                      <Icon className="h-4 w-4 text-white/35 transition-colors group-hover:text-blue-300" />
                    </div>

                    <span className="font-mono text-3xl text-white/[0.06]">
                      {belief.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-medium tracking-[-0.02em] text-white/75">
                    {belief.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/30">
                    {belief.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 text-center sm:mt-28"
        >
          <div className="mx-auto flex max-w-xl items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

            <ShieldCheck className="h-4 w-4 text-blue-300/40" />

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <p className="mt-7 text-xl font-medium tracking-[-0.02em] text-white/45 sm:text-2xl">
            Build AI that can act.
            <br />
            <span className="text-white/20">
              Never lose control of what it can do.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}