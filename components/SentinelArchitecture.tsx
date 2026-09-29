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

const agents = [
  {
    name: "Sales Agent",
    icon: Bot,
  },
  {
    name: "Finance Agent",
    icon: Wallet,
  },
  {
    name: "Coding Agent",
    icon: FileCode2,
  },
];

export default function SentinelArchitecture() {
  return (
    <section
      id="product"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#030711] px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.035] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(80,150,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(80,150,255,0.16) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center justify-center gap-3 text-[10px] font-medium tracking-[0.3em] text-blue-300"
          >
            <span className="h-px w-8 bg-blue-400/60" />

            INSIDE SENTINEL

            <span className="h-px w-8 bg-blue-400/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            One control layer
            <br />

            <span className="text-white/65">
              between AI and action.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-white/68 sm:text-base sm:leading-7 lg:text-lg"
          >
            Sentinel evaluates what an AI agent is trying to do before the
            requested action reaches the systems behind your business.
          </motion.p>
        </div>

        {/* =========================================================
            MAIN ARCHITECTURE
        ========================================================= */}

        <div className="relative mx-auto mt-16 max-w-6xl sm:mt-18 lg:mt-20">
          {/* =====================================================
              AI WORKFORCE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-3 text-center text-[9px] font-medium tracking-[0.3em] text-white/48">
              AI WORKFORCE
            </div>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {agents.map((agent, index) => {
                const Icon = agent.icon;

                return (
                  <motion.div
                    key={agent.name}
                    initial={{
                      opacity: 0,
                      scale: 0.94,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -4,
                      borderColor: "rgba(59,130,246,0.3)",
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.022] p-4 text-center transition-all duration-300 hover:bg-blue-500/[0.035] sm:p-5"
                  >
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="mt-3 text-xs font-medium text-white/82 sm:text-sm">
                      {agent.name}
                    </div>

                    <div className="mt-1 text-[9px] font-medium tracking-[0.15em] text-emerald-300/80">
                      ACTIVE
                    </div>

                    <div className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-400/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* =====================================================
              CONNECTION
          ===================================================== */}

          <div className="flex justify-center py-5 sm:py-6">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 42 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-px bg-gradient-to-b from-blue-500/60 via-blue-400/45 to-blue-500/10"
            >
              <motion.span
                animate={{
                  y: [0, 32],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -left-[2px] top-0 h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.9)]"
              />
            </motion.div>
          </div>

          {/* =====================================================
              SENTINEL CORE
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.75,
            }}
            className="relative mx-auto max-w-5xl"
          >
            <div className="absolute inset-0 rounded-[32px] bg-blue-500/[0.055] blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-blue-400/20 bg-[#07111f]/95 shadow-[0_0_90px_rgba(0,119,255,0.07)] sm:rounded-[32px]">
              {/* =================================================
                  CORE HEADER
              ================================================= */}

              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-7 sm:py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/20">
                    <Shield className="h-5 w-5 text-blue-300" />
                  </div>

                  <div>
                    <div className="text-sm font-semibold tracking-wide text-white">
                      SOPLEX SENTINEL
                    </div>

                    <div className="mt-0.5 text-[9px] font-medium tracking-[0.2em] text-blue-300">
                      INTENT-BASED RUNTIME ENFORCEMENT
                    </div>
                  </div>
                </div>

                <div className="hidden items-center gap-2 text-[9px] font-medium tracking-[0.2em] text-emerald-300 sm:flex">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  PROTECTION ACTIVE
                </div>
              </div>

              {/* =================================================
                  FIVE SECURITY LAYERS
              ================================================= */}

              <div className="grid gap-px bg-white/[0.05] md:grid-cols-5">
                {layers.map((layer, index) => {
                  const Icon = layer.icon;

                  return (
                    <motion.div
                      key={layer.number}
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.07,
                      }}
                      className="group relative bg-[#07111f] p-4 transition-colors duration-300 hover:bg-[#0a1829] sm:p-5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-medium tracking-[0.2em] text-white/42">
                          {layer.number}
                        </span>

                        <Icon className="h-4 w-4 text-blue-300/70 transition-colors duration-300 group-hover:text-blue-300" />
                      </div>

                      <div className="mt-7 text-[11px] font-semibold tracking-[0.16em] text-white">
                        {layer.title}
                      </div>

                      <div className="mt-2 text-xs font-medium leading-5 text-blue-300">
                        {layer.question}
                      </div>

                      <p className="mt-3 text-[11px] leading-5 text-white/62">
                        {layer.description}
                      </p>

                      <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
                    </motion.div>
                  );
                })}
              </div>

              {/* =================================================
                  DECISION LAYER
              ================================================= */}

              <div className="border-t border-white/[0.07] p-5 sm:p-7">
                <div className="mb-4 text-center text-[9px] font-medium tracking-[0.25em] text-white/48">
                  RUNTIME DECISION
                </div>

                <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-3">
                  {/* Allow */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.025] p-5 text-center transition-colors hover:bg-emerald-400/[0.04]"
                  >
                    <Check className="mx-auto h-5 w-5 text-emerald-300" />

                    <div className="mt-3 text-sm font-semibold text-emerald-300">
                      ALLOW
                    </div>

                    <p className="mt-2 text-[10px] leading-4 text-white/60">
                      Action matches identity, intent and policy.
                    </p>
                  </motion.div>

                  {/* Approval */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.025] p-5 text-center transition-colors hover:bg-yellow-400/[0.04]"
                  >
                    <UserCheck className="mx-auto h-5 w-5 text-yellow-300" />

                    <div className="mt-3 text-sm font-semibold text-yellow-300">
                      APPROVAL
                    </div>

                    <p className="mt-2 text-[10px] leading-4 text-white/60">
                      Human authorization is required before execution.
                    </p>
                  </motion.div>

                  {/* Block */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="rounded-2xl border border-red-400/15 bg-red-400/[0.025] p-5 text-center transition-colors hover:bg-red-400/[0.04]"
                  >
                    <ShieldAlert className="mx-auto h-5 w-5 text-red-300" />

                    <div className="mt-3 text-sm font-semibold text-red-300">
                      BLOCK
                    </div>

                    <p className="mt-2 text-[10px] leading-4 text-white/60">
                      Action violates a protected boundary.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              CONNECTION TO BUSINESS SYSTEMS
          ===================================================== */}

          <div className="flex justify-center py-5 sm:py-6">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 42 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-px bg-gradient-to-b from-blue-500/35 via-blue-400/30 to-transparent"
            >
              <motion.span
                animate={{
                  y: [0, 32],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -left-[2px] top-0 h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.9)]"
              />
            </motion.div>
          </div>

          {/* =====================================================
              BUSINESS SYSTEMS
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
            }}
          >
            <div className="mb-3 text-center text-[9px] font-medium tracking-[0.3em] text-white/48">
              PROTECTED BUSINESS SYSTEMS
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
              {systems.map((system, index) => {
                const Icon = system.icon;

                return (
                  <motion.div
                    key={system.name}
                    initial={{
                      opacity: 0,
                      scale: 0.94,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    whileHover={{
                      y: -3,
                      borderColor: "rgba(59,130,246,0.25)",
                    }}
                    className="group flex items-center justify-center gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.018] px-4 py-4 transition-all duration-300 hover:bg-blue-500/[0.03] sm:py-5"
                  >
                    <Icon className="h-4 w-4 text-white/55 transition-colors group-hover:text-blue-300" />

                    <span className="text-xs font-medium tracking-[0.12em] text-white/70">
                      {system.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mt-20 max-w-3xl text-center lg:mt-24"
        >
          <div className="mx-auto flex h-13 w-13 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/[0.05]">
            <Shield className="h-5 w-5 text-blue-300" />
          </div>

          <p className="mt-6 text-[10px] font-medium tracking-[0.3em] text-blue-300">
            CONTROL BEFORE EXECUTION
          </p>

          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            AI gets the capability.
            <br />

            <span className="text-white/65">
              Your business keeps the control.
            </span>
          </h3>

          <div className="mt-6 flex items-center justify-center gap-3 text-[10px] font-medium tracking-[0.15em] text-white/48">
            <span>AGENT</span>

            <ArrowRight className="h-3.5 w-3.5 text-blue-300" />

            <span className="text-blue-300">SENTINEL</span>

            <ArrowRight className="h-3.5 w-3.5 text-blue-300" />

            <span>SYSTEM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}