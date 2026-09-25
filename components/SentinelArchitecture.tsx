"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Bot,
  Check,
  Database,
  FileCode2,
  LockKeyhole,
  Network,
  Shield,
  ShieldAlert,
  UserCheck,
  Wallet,
} from "lucide-react";

const layers = [
  {
    number: "01",
    title: "IDENTITY",
    question: "Who is acting?",
    description:
      "Every AI worker gets a distinct identity and controlled access to the systems it needs.",
    icon: UserCheck,
  },
  {
    number: "02",
    title: "INTENT",
    question: "What is it supposed to do?",
    description:
      "Define the business purpose of an agent before it starts taking real-world actions.",
    icon: FileCode2,
  },
  {
    number: "03",
    title: "POLICY",
    question: "What is it allowed to do?",
    description:
      "Turn business rules into enforceable boundaries for every protected action.",
    icon: LockKeyhole,
  },
  {
    number: "04",
    title: "RISK",
    question: "What could happen?",
    description:
      "Evaluate the action, context, target, scale and potential business impact.",
    icon: Activity,
  },
  {
    number: "05",
    title: "ENFORCEMENT",
    question: "What happens next?",
    description:
      "Allow safe actions, request human approval, or block actions that violate policy.",
    icon: Shield,
  },
];

const systems = [
  {
    name: "APIs",
    icon: Network,
  },
  {
    name: "DATA",
    icon: Database,
  },
  {
    name: "CODE",
    icon: FileCode2,
  },
  {
    name: "PAYMENTS",
    icon: Wallet,
  },
];

export default function SentinelArchitecture() {
  return (
    <section
      id="product"
      className="relative overflow-hidden bg-[#030711] px-6 py-32 lg:px-8 lg:py-48"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.035] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(80,150,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(80,150,255,0.15) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex items-center justify-center gap-3 text-[10px] tracking-[0.3em] text-blue-400"
          >
            <span className="h-px w-8 bg-blue-500/50" />
            INSIDE SENTINEL
            <span className="h-px w-8 bg-blue-500/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            One control layer
            <br />
            <span className="text-slate-500">
              between AI and action.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg"
          >
            Sentinel evaluates what an AI agent is trying to do before the
            requested action reaches the systems behind your business.
          </motion.p>
        </div>

        {/* Main architecture */}
        <div className="relative mx-auto mt-24 max-w-6xl">
          {/* AI WORKFORCE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-4 text-center text-[9px] tracking-[0.3em] text-slate-600">
              AI WORKFORCE
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "Sales Agent", icon: Bot },
                { name: "Finance Agent", icon: Wallet },
                { name: "Coding Agent", icon: FileCode2 },
              ].map((agent, index) => {
                const Icon = agent.icon;

                return (
                  <motion.div
                    key={agent.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 text-center transition hover:border-blue-400/25 hover:bg-blue-500/[0.035]"
                  >
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-400/15">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="mt-3 text-xs font-medium text-slate-300">
                      {agent.name}
                    </div>

                    <div className="mt-1 text-[9px] tracking-[0.15em] text-green-400/70">
                      ACTIVE
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Connection */}
          <div className="flex justify-center py-8">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 55 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-px bg-gradient-to-b from-blue-500/50 via-blue-400/40 to-blue-500/10"
            >
              <motion.span
                animate={{ y: [0, 45], opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -left-[2px] top-0 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]"
              />
            </motion.div>
          </div>

          {/* SENTINEL CORE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-5xl"
          >
            <div className="absolute inset-0 rounded-[32px] bg-blue-500/[0.07] blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-blue-400/20 bg-[#07111f]/95 shadow-[0_0_100px_rgba(0,119,255,0.08)]">
              {/* Core header */}
              <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5 sm:px-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/20">
                    <Shield className="h-5 w-5 text-blue-400" />
                  </div>

                  <div>
                    <div className="text-sm font-semibold">
                      SOPLEX SENTINEL
                    </div>

                    <div className="mt-0.5 text-[9px] tracking-[0.2em] text-blue-400">
                      INTENT-BASED RUNTIME ENFORCEMENT
                    </div>
                  </div>
                </div>

                <div className="hidden items-center gap-2 text-[9px] tracking-[0.2em] text-green-400 sm:flex">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                  PROTECTION ACTIVE
                </div>
              </div>

              {/* Five layers */}
              <div className="grid gap-px bg-white/[0.04] md:grid-cols-5">
                {layers.map((layer, index) => {
                  const Icon = layer.icon;

                  return (
                    <motion.div
                      key={layer.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="group relative bg-[#07111f] p-5 transition hover:bg-[#0a1829]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] tracking-[0.2em] text-slate-700">
                          {layer.number}
                        </span>

                        <Icon className="h-4 w-4 text-blue-400/60 transition group-hover:text-blue-400" />
                      </div>

                      <div className="mt-8 text-[11px] font-semibold tracking-[0.16em] text-white">
                        {layer.title}
                      </div>

                      <div className="mt-2 text-xs font-medium text-blue-400">
                        {layer.question}
                      </div>

                      <p className="mt-4 text-[11px] leading-5 text-slate-600">
                        {layer.description}
                      </p>

                      <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Decision */}
              <div className="border-t border-white/[0.07] p-6 sm:p-8">
                <div className="mb-5 text-center text-[9px] tracking-[0.25em] text-slate-600">
                  RUNTIME DECISION
                </div>

                <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-3">
                  {/* Allow */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-green-400/15 bg-green-400/[0.025] p-5 text-center"
                  >
                    <Check className="mx-auto h-5 w-5 text-green-400" />

                    <div className="mt-3 text-sm font-semibold text-green-300">
                      ALLOW
                    </div>

                    <p className="mt-2 text-[10px] leading-4 text-slate-600">
                      Action matches identity, intent and policy.
                    </p>
                  </motion.div>

                  {/* Approval */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.025] p-5 text-center"
                  >
                    <UserCheck className="mx-auto h-5 w-5 text-yellow-400" />

                    <div className="mt-3 text-sm font-semibold text-yellow-300">
                      APPROVAL
                    </div>

                    <p className="mt-2 text-[10px] leading-4 text-slate-600">
                      Human authorization is required before execution.
                    </p>
                  </motion.div>

                  {/* Block */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-red-400/15 bg-red-400/[0.025] p-5 text-center"
                  >
                    <ShieldAlert className="mx-auto h-5 w-5 text-red-400" />

                    <div className="mt-3 text-sm font-semibold text-red-300">
                      BLOCK
                    </div>

                    <p className="mt-2 text-[10px] leading-4 text-slate-600">
                      Action violates a protected boundary.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connection */}
          <div className="flex justify-center py-8">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 55 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-px bg-gradient-to-b from-blue-500/30 via-blue-400/30 to-transparent"
            >
              <motion.span
                animate={{ y: [0, 45], opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -left-[2px] top-0 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]"
              />
            </motion.div>
          </div>

          {/* Business systems */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 text-center text-[9px] tracking-[0.3em] text-slate-600">
              PROTECTED BUSINESS SYSTEMS
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
              {systems.map((system, index) => {
                const Icon = system.icon;

                return (
                  <motion.div
                    key={system.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="flex items-center justify-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.018] px-4 py-5"
                  >
                    <Icon className="h-4 w-4 text-slate-500" />
                    <span className="text-xs tracking-[0.12em] text-slate-400">
                      {system.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-32 max-w-3xl text-center lg:mt-44"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/[0.05]">
            <Shield className="h-6 w-6 text-blue-400" />
          </div>

          <p className="mt-7 text-[10px] tracking-[0.3em] text-blue-400">
            CONTROL BEFORE EXECUTION
          </p>

          <h3 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">
            AI gets the capability.
            <br />
            <span className="text-slate-500">
              Your business keeps the control.
            </span>
          </h3>

          <div className="mt-8 flex items-center justify-center gap-3 text-xs tracking-[0.15em] text-slate-600">
            <span>AGENT</span>
            <ArrowRight className="h-3.5 w-3.5 text-blue-400" />
            <span className="text-blue-400">SENTINEL</span>
            <ArrowRight className="h-3.5 w-3.5 text-blue-400" />
            <span>SYSTEM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}