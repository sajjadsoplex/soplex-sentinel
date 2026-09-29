"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  Database,
  Fingerprint,
  LockKeyhole,
  ShieldCheck,
  TriangleAlert,
  UserCheck,
  X,
  Zap,
} from "lucide-react";

const steps = [
  {
    number: "01",
    label: "IDENTITY",
    title: "Know who's acting.",
    description:
      "Every AI worker gets a verifiable identity before it can interact with protected systems.",
    icon: Fingerprint,
    detail: "Agent identity verified",
  },
  {
    number: "02",
    label: "INTENT",
    title: "Know what it's supposed to do.",
    description:
      "Sentinel compares the requested action against the agent's declared purpose and operating scope.",
    icon: Zap,
    detail: "Requested action matches intent",
  },
  {
    number: "03",
    label: "POLICY",
    title: "Define what is allowed.",
    description:
      "Business rules determine exactly which tools, data, systems, limits, and actions an agent can access.",
    icon: LockKeyhole,
    detail: "Policy evaluation complete",
  },
  {
    number: "04",
    label: "RISK",
    title: "Understand what could happen.",
    description:
      "Sentinel evaluates the potential impact of the requested action before execution.",
    icon: TriangleAlert,
    detail: "Risk level calculated",
  },
  {
    number: "05",
    label: "ENFORCEMENT",
    title: "Decide what happens next.",
    description:
      "The action is allowed, paused for human approval, or blocked — before reaching the target system.",
    icon: ShieldCheck,
    detail: "Runtime decision enforced",
  },
];

const decisions = [
  {
    label: "ALLOW",
    description: "Action proceeds",
    icon: Check,
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/[0.035]",
    iconBg: "bg-emerald-400/[0.08]",
    iconColor: "text-emerald-300",
  },
  {
    label: "APPROVAL",
    description: "Human reviews",
    icon: UserCheck,
    border: "border-amber-400/20",
    bg: "bg-amber-400/[0.035]",
    iconBg: "bg-amber-400/[0.08]",
    iconColor: "text-amber-300",
  },
  {
    label: "BLOCK",
    description: "Action stopped",
    icon: X,
    border: "border-red-400/20",
    bg: "bg-red-400/[0.035]",
    iconBg: "bg-red-400/[0.08]",
    iconColor: "text-red-300",
  },
];

export default function HowSentinelWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const step = steps[activeStep];
  const StepIcon = step.icon;

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#03060b] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[850px] -translate-x-1/2 rounded-full bg-blue-500/[0.035] blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-6 lg:px-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-blue-400/40" />

            <span className="text-[10px] font-medium tracking-[0.3em] text-blue-300/80">
              HOW SENTINEL WORKS
            </span>

            <div className="h-px w-8 bg-blue-400/40" />
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Every AI action
            <br />
            <span className="text-white/55">gets a decision.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            Sentinel sits between your AI workforce and the systems they
            operate. Every sensitive action passes through the same runtime
            security layer.
          </p>
        </motion.div>

        {/* =====================================================
            FLOW VISUAL
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 sm:mt-16"
        >
          {/* Desktop flow */}

          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection line */}

              <div className="absolute left-[7%] right-[7%] top-[55px] h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent" />

              <motion.div
                animate={{
                  left: ["7%", "91%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-[52px] z-10 h-[7px] w-[7px] rounded-full bg-blue-300 shadow-[0_0_18px_rgba(96,165,250,0.9)]"
              />

              <div className="grid grid-cols-7 gap-3">
                {/* Agent */}

                <FlowNode
                  icon={Bot}
                  label="AI AGENT"
                  detail="Requests action"
                />

                <FlowConnector />

                {/* Steps */}

                {steps.map((item, index) => (
                  <div key={item.number} className="contents">
                    <FlowNode
                      icon={item.icon}
                      label={item.label}
                      detail={item.detail}
                      active={activeStep === index}
                      onClick={() => setActiveStep(index)}
                    />

                    {index < steps.length - 1 && <FlowConnector />}
                  </div>
                ))}

                <FlowConnector />

                {/* System */}

                <FlowNode
                  icon={Database}
                  label="SYSTEM"
                  detail="Action executes"
                />
              </div>
            </div>
          </div>

          {/* Mobile / tablet flow */}

          <div className="lg:hidden">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute bottom-10 left-[24px] top-10 w-px bg-gradient-to-b from-blue-400/35 via-blue-400/15 to-transparent" />

              <div className="space-y-3">
                <MobileFlowNode
                  icon={Bot}
                  label="AI AGENT"
                  detail="Requests action"
                />

                {steps.map((item, index) => (
                  <div key={item.number}>
                    <div className="ml-[23px] h-4 w-px bg-blue-400/20" />

                    <MobileFlowNode
                      icon={item.icon}
                      label={item.label}
                      detail={item.detail}
                      active={activeStep === index}
                      onClick={() => setActiveStep(index)}
                    />
                  </div>
                ))}

                <div className="ml-[23px] h-4 w-px bg-blue-400/20" />

                <MobileFlowNode
                  icon={Database}
                  label="PROTECTED SYSTEM"
                  detail="Action executes"
                />
              </div>
            </div>
          </div>

          {/* =================================================
              ACTIVE STEP EXPLANATION
          ================================================= */}

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Step selector */}

            <div className="rounded-[24px] border border-white/10 bg-[#070b12] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[9px] font-medium tracking-[0.25em] text-white/50">
                  SENTINEL PIPELINE
                </span>

                <span className="font-mono text-[9px] text-white/45">
                  {String(activeStep + 1).padStart(2, "0")} / 05
                </span>
              </div>

              <div className="space-y-1">
                {steps.map((item, index) => {
                  const Icon = item.icon;
                  const active = activeStep === index;

                  return (
                    <button
                      key={item.number}
                      onClick={() => setActiveStep(index)}
                      className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition-all duration-300 ${
                        active
                          ? "border-blue-400/25 bg-blue-400/[0.07]"
                          : "border-transparent hover:border-white/10 hover:bg-white/[0.025]"
                      }`}
                    >
                      <span
                        className={`font-mono text-[9px] ${
                          active ? "text-blue-300" : "text-white/40"
                        }`}
                      >
                        {item.number}
                      </span>

                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                          active ? "bg-blue-400/10" : "bg-white/[0.035]"
                        }`}
                      >
                        <Icon
                          className={`h-3.5 w-3.5 ${
                            active ? "text-blue-300" : "text-white/45"
                          }`}
                        />
                      </div>

                      <div className="flex-1">
                        <p
                          className={`text-[9px] font-medium tracking-[0.14em] ${
                            active ? "text-blue-200" : "text-white/55"
                          }`}
                        >
                          {item.label}
                        </p>
                      </div>

                      {active && (
                        <motion.div
                          layoutId="active-step"
                          className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanation */}

            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#070b12] p-6 sm:p-8">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/[0.05] blur-[100px]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span className="text-[10px] font-medium tracking-[0.25em] text-blue-300/75">
                        STEP {step.number}
                      </span>

                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                        {step.title}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/[0.06]">
                      <StepIcon className="h-5 w-5 text-blue-300" />
                    </div>
                  </div>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">
                    {step.description}
                  </p>

                  {/* Runtime event */}

                  <div className="mt-7 rounded-xl border border-white/10 bg-black/25 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/[0.07]">
                        <Check className="h-3.5 w-3.5 text-emerald-300" />
                      </div>

                      <div>
                        <p className="text-[8px] font-medium tracking-[0.2em] text-white/45">
                          RUNTIME EVENT
                        </p>

                        <p className="mt-1 text-[10px] text-emerald-300/85">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress */}

                  <div className="mt-7">
                    <div className="mb-2 flex justify-between">
                      <span className="text-[8px] font-medium tracking-[0.15em] text-white/45">
                        SECURITY PIPELINE
                      </span>

                      <span className="font-mono text-[8px] text-white/45">
                        {Math.round(
                          ((activeStep + 1) / steps.length) * 100
                        )}
                        %
                      </span>
                    </div>

                    <div className="h-1 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        animate={{
                          width: `${((activeStep + 1) / steps.length) * 100}%`,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300"
                      />
                    </div>
                  </div>

                  {/* Controls */}

                  <div className="mt-7 flex items-center justify-between">
                    <button
                      disabled={activeStep === 0}
                      onClick={() =>
                        setActiveStep((current) => Math.max(0, current - 1))
                      }
                      className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[9px] font-medium tracking-wider text-white/55 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-20"
                    >
                      PREVIOUS
                    </button>

                    <button
                      disabled={activeStep === steps.length - 1}
                      onClick={() =>
                        setActiveStep((current) =>
                          Math.min(steps.length - 1, current + 1)
                        )
                      }
                      className="group flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2 text-[9px] font-medium tracking-wider text-blue-200/85 transition-colors hover:border-blue-400/35 hover:text-blue-100 disabled:cursor-not-allowed disabled:opacity-20"
                    >
                      NEXT STEP
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            DECISION LAYER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <div className="mx-auto mb-7 max-w-2xl text-center">
            <p className="text-[9px] font-medium tracking-[0.25em] text-white/50">
              THE FINAL DECISION
            </p>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Sentinel doesn't just detect suspicious behavior.
              <br className="hidden sm:block" /> It can enforce the outcome.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {decisions.map((decision, index) => {
              const Icon = decision.icon;

              return (
                <motion.div
                  key={decision.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className={`rounded-2xl border ${decision.border} ${decision.bg} p-5 transition-transform duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 ${decision.iconBg}`}
                    >
                      <Icon
                        className={`h-4 w-4 ${decision.iconColor}`}
                      />
                    </div>

                    <div>
                      <p
                        className={`text-[10px] font-medium tracking-[0.18em] ${decision.iconColor}`}
                      >
                        {decision.label}
                      </p>

                      <p className="mt-1 text-[10px] text-white/55">
                        {decision.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto flex max-w-2xl items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

            <ShieldCheck className="h-5 w-5 text-blue-300/50" />

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <p className="mt-6 text-sm font-medium tracking-[0.04em] text-white/55">
            Capability belongs to the agent.
            <span className="mx-2 text-blue-300/80">
              Control belongs to you.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* =============================================================
   DESKTOP FLOW NODE
============================================================= */

function FlowNode({
  icon: Icon,
  label,
  detail,
  active = false,
  onClick,
}: {
  icon: typeof Bot;
  label: string;
  detail: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={`group relative z-20 flex flex-col items-center text-center ${
        onClick ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <motion.div
        animate={{
          scale: active ? 1.06 : 1,
        }}
        transition={{ duration: 0.3 }}
        className={`relative flex h-[110px] w-[110px] flex-col items-center justify-center rounded-2xl border transition-all duration-300 ${
          active
            ? "border-blue-400/30 bg-blue-400/[0.07] shadow-[0_0_40px_rgba(59,130,246,0.08)]"
            : "border-white/10 bg-[#070b12] hover:border-white/15"
        }`}
      >
        {active && (
          <motion.div
            layoutId="flow-glow"
            className="absolute inset-0 rounded-2xl border border-blue-400/10"
          />
        )}

        <Icon
          className={`relative h-5 w-5 ${
            active ? "text-blue-300" : "text-white/45"
          }`}
        />

        <span
          className={`relative mt-3 text-[8px] font-medium tracking-[0.18em] ${
            active ? "text-blue-200" : "text-white/50"
          }`}
        >
          {label}
        </span>
      </motion.div>

      <span className="mt-3 max-w-[110px] text-[8px] leading-4 text-white/40">
        {detail}
      </span>
    </button>
  );
}

/* =============================================================
   CONNECTOR
============================================================= */

function FlowConnector() {
  return (
    <div className="flex items-start justify-center pt-[54px]">
      <ArrowRight className="h-3.5 w-3.5 text-white/20" />
    </div>
  );
}

/* =============================================================
   MOBILE NODE
============================================================= */

function MobileFlowNode({
  icon: Icon,
  label,
  detail,
  active = false,
  onClick,
}: {
  icon: typeof Bot;
  label: string;
  detail: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={`relative z-10 flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
        active
          ? "border-blue-400/25 bg-blue-400/[0.05]"
          : "border-white/10 bg-[#070b12]"
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          active ? "bg-blue-400/10" : "bg-white/[0.035]"
        }`}
      >
        <Icon
          className={`h-4 w-4 ${
            active ? "text-blue-300" : "text-white/45"
          }`}
        />
      </div>

      <div className="flex-1">
        <p
          className={`text-[9px] font-medium tracking-[0.18em] ${
            active ? "text-blue-200" : "text-white/55"
          }`}
        >
          {label}
        </p>

        <p className="mt-1 text-[10px] text-white/45">{detail}</p>
      </div>

      {active && (
        <div className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
      )}
    </button>
  );
}