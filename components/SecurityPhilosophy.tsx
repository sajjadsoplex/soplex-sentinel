"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Shield,
  Lock,
  BrainCircuit,
  Zap,
} from "lucide-react";

const flow = [
  {
    label: "CAPABILITY",
    description: "What the AI agent can technically do.",
    icon: Zap,
  },
  {
    label: "AGENT",
    description: "The autonomous system making the request.",
    icon: BrainCircuit,
  },
  {
    label: "SENTINEL",
    description: "The control layer evaluating every action.",
    icon: Shield,
  },
];

const decisions = [
  {
    title: "ALLOW",
    description: "The action matches the agent's identity, intent and policy.",
  },
  {
    title: "APPROVE",
    description: "The action may be legitimate, but requires human authorization.",
  },
  {
    title: "BLOCK",
    description: "The action violates policy or presents unacceptable risk.",
  },
];

export default function SecurityPhilosophy() {
  return (
    <section
      id="security"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070b] py-28 sm:py-36"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.05] blur-[140px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2 text-[10px] font-medium tracking-[0.28em] text-blue-300"
          >
            <Lock className="h-3.5 w-3.5" />
            SECURITY PHILOSOPHY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl"
          >
            AI doesn&apos;t need fewer
            <br />
            <span className="text-white/40">capabilities.</span>
            <br />
            It needs better boundaries.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base"
          >
            Sentinel is not designed to make AI less autonomous. It is
            designed to make autonomy accountable — so agents can move fast
            without moving beyond the boundaries of your business.
          </motion.p>
        </div>

        {/* Architecture flow */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1.15fr] md:items-center">
            {flow.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="contents">
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    className={`group relative overflow-hidden rounded-2xl border p-6 ${
                      item.label === "SENTINEL"
                        ? "border-blue-400/30 bg-blue-500/[0.08]"
                        : "border-white/[0.08] bg-white/[0.025]"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      <div
                        className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl border ${
                          item.label === "SENTINEL"
                            ? "border-blue-400/30 bg-blue-400/10 text-blue-300"
                            : "border-white/10 bg-white/[0.04] text-white/60"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <p className="text-[10px] font-medium tracking-[0.25em] text-white/35">
                        {item.label}
                      </p>

                      <p className="mt-3 text-sm leading-6 text-white/55">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                  {index < flow.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.15 + 0.2,
                      }}
                      className="hidden origin-left md:block"
                    >
                      <ArrowRight className="h-5 w-5 text-blue-400/40" />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Decision line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-5 h-px max-w-4xl bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {decisions.map((decision, index) => (
              <motion.div
                key={decision.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 * index,
                }}
                className="group rounded-2xl border border-white/[0.07] bg-black/30 p-6 transition-all duration-500 hover:border-blue-400/20 hover:bg-white/[0.03]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.25em] text-white/70">
                    {decision.title}
                  </span>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <Check className="h-3.5 w-3.5 text-blue-300" />
                  </div>
                </div>

                <p className="text-sm leading-6 text-white/40">
                  {decision.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-24 max-w-3xl text-center"
        >
          <div className="mx-auto mb-7 h-px w-16 bg-blue-400/50" />

          <p className="text-2xl font-light tracking-[-0.02em] text-white/80 sm:text-3xl">
            Capability belongs to the agent.
            <br />
            <span className="text-blue-300">Control belongs to you.</span>
          </p>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/35">
            That is the boundary Sentinel exists to protect.
          </p>
        </motion.div>
      </div>
    </section>
  );
}