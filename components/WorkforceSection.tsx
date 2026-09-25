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
      className="relative overflow-hidden bg-[#030711] px-6 py-32 lg:px-8 lg:py-44"
    >
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/[0.045] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(80,150,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(80,150,255,0.15) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex items-center justify-center gap-3 text-[10px] font-medium tracking-[0.3em] text-blue-400"
          >
            <span className="h-px w-8 bg-blue-500/50" />
            THE NEW DIGITAL WORKFORCE
            <span className="h-px w-8 bg-blue-500/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            AI agents aren't just
            <br />
            <span className="text-slate-500">
              answering questions anymore.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg"
          >
            AI is moving from conversation to execution. Agents can now
            interact with the systems that run your business.
          </motion.p>
        </div>

        {/* Capability cards */}
        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-28 lg:grid-cols-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  borderColor: "rgba(59,130,246,0.35)",
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018] p-5 transition-colors duration-500 hover:bg-blue-500/[0.035]"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.2em] text-slate-700">
                    {item.number}
                  </span>

                  <Icon className="h-4 w-4 text-slate-600 transition-colors duration-500 group-hover:text-blue-400" />
                </div>

                {/* Content */}
                <div className="mt-12">
                  <div className="text-xl font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </div>

                  <div className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </div>
                </div>

                {/* Hover glow */}
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-blue-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>

        {/* Transition statement */}
        <div className="relative mt-32 text-center lg:mt-44">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] shadow-[0_0_60px_rgba(0,119,255,0.12)]">
              <Bot className="h-7 w-7 text-blue-400" />
            </div>

            <p className="mt-8 text-sm font-medium tracking-[0.2em] text-slate-600">
              THE SHIFT
            </p>

            <h3 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl md:text-8xl">
              They can{" "}
              <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                act.
              </span>
            </h3>
          </motion.div>

          {/* Downward signal */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto mt-12 flex w-px flex-col items-center bg-gradient-to-b from-blue-400/60 to-transparent"
          >
            <ArrowDown className="mt-auto h-4 w-4 translate-y-2 text-blue-400" />
          </motion.div>
        </div>

        {/* Boundaries statement */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-20 max-w-4xl text-center lg:mt-28"
        >
          <p className="text-sm tracking-[0.2em] text-blue-400">
            WHICH MEANS ONE THING
          </p>

          <h3 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            So they need
            <br />
            <span className="text-slate-500">boundaries.</span>
          </h3>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-slate-500">
            Capability without control creates risk. Soplex Sentinel gives
            every AI agent enforceable boundaries before it takes action.
          </p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-10 flex w-fit items-center gap-3 text-xs tracking-[0.18em] text-blue-400"
          >
            <span className="h-px w-12 bg-blue-500/40" />
            <span className="flex items-center gap-2">
              ENTER SENTINEL
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <span className="h-px w-12 bg-blue-500/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}