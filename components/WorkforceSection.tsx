"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Code2,
  Database,
  Mail,
  Network,
  WalletCards,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "SEND",
    description: "emails",
    icon: Mail,
  },
  {
    number: "02",
    title: "READ",
    description: "data",
    icon: Database,
  },
  {
    number: "03",
    title: "WRITE",
    description: "code",
    icon: Code2,
  },
  {
    number: "04",
    title: "MOVE",
    description: "money",
    icon: WalletCards,
  },
  {
    number: "05",
    title: "CALL",
    description: "APIs",
    icon: Network,
  },
  {
    number: "06",
    title: "OPERATE",
    description: "systems",
    icon: Bot,
  },
];

export default function WorkforceSection() {
  return (
    <section
      id="workforce"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#030711] px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* =========================================================
          ATMOSPHERIC BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Central glow */}
        <div className="absolute left-1/2 top-[30%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/[0.045] blur-[140px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(80,150,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(80,150,255,0.18) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            SECTION INTRODUCTION
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

            THE NEW DIGITAL WORKFORCE

            <span className="h-px w-8 bg-blue-400/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            AI agents aren't just
            <br />

            <span className="text-white/65">
              answering questions anymore.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-white/68 sm:text-base"
          >
            AI is moving from conversation to execution. Agents can now
            interact with the systems that run your business.
          </motion.p>
        </div>

        {/* =========================================================
            CAPABILITY CARDS
        ========================================================= */}

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-18 lg:grid-cols-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(59,130,246,0.38)",
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.022] p-5 transition-all duration-500 hover:bg-blue-500/[0.035]"
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-medium tracking-[0.2em] text-white/42">
                    {item.number}
                  </span>

                  <Icon className="h-4 w-4 text-white/48 transition-colors duration-500 group-hover:text-blue-300" />
                </div>

                {/* Content */}
                <div className="mt-10">
                  <div className="text-xl font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </div>

                  <div className="mt-1 text-sm text-white/62">
                    {item.description}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-400/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                {/* Hover glow */}
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-blue-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            TRANSITION — THEY CAN ACT
        ========================================================= */}

        <div className="relative mt-20 text-center lg:mt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-500/[0.07] shadow-[0_0_50px_rgba(0,119,255,0.1)]">
              <Bot className="h-6 w-6 text-blue-300" />
            </div>

            <p className="mt-6 text-[10px] font-medium tracking-[0.22em] text-white/48">
              THE SHIFT
            </p>

            <h3 className="mt-4 text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl md:text-7xl">
              They can{" "}
              <span className="bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent">
                act.
              </span>
            </h3>
          </motion.div>

          {/* Downward signal */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: 58 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-8 flex w-px flex-col items-center bg-gradient-to-b from-blue-400/65 to-transparent"
          >
            <ArrowDown className="mt-auto h-4 w-4 translate-y-2 text-blue-300" />
          </motion.div>
        </div>

        {/* =========================================================
            BOUNDARIES STATEMENT
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 max-w-4xl text-center lg:mt-18"
        >
          <p className="text-[10px] font-medium tracking-[0.22em] text-blue-300">
            WHICH MEANS ONE THING
          </p>

          <h3 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
            So they need
            <br />

            <span className="text-white/65">boundaries.</span>
          </h3>

          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-white/65 sm:text-base">
            Capability without control creates risk. Soplex Sentinel gives
            every AI agent enforceable boundaries before it takes action.
          </p>

          {/* Enter Sentinel */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-8 flex w-fit items-center gap-3 text-[10px] font-medium tracking-[0.18em] text-blue-300"
          >
            <span className="h-px w-10 bg-blue-400/45" />

            <span className="flex items-center gap-2">
              ENTER SENTINEL
              <ArrowRight className="h-3.5 w-3.5" />
            </span>

            <span className="h-px w-10 bg-blue-400/45" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}