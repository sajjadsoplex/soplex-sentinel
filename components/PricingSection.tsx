"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Developer",
    description: "For developers securing their first AI agents.",
    monthly: 49,
    annual: 490,
    agents: "3 agents",
    actions: "50K protected actions / month",
    featured: false,
    features: [
      "Agent identity",
      "Intent-based policies",
      "Runtime ALLOW / BLOCK",
      "Audit logs",
      "REST API",
      "MCP support",
    ],
  },
  {
    name: "Team",
    description: "For teams operating AI across real workflows.",
    monthly: 199,
    annual: 1990,
    agents: "15 agents",
    actions: "500K protected actions / month",
    featured: true,
    features: [
      "Everything in Developer",
      "Human approval workflows",
      "Intent drift detection",
      "Advanced policy controls",
      "Risk evaluation",
      "Priority support",
    ],
  },
  {
    name: "Business",
    description: "For organizations scaling autonomous AI operations.",
    monthly: 599,
    annual: 5990,
    agents: "50 agents",
    actions: "2M protected actions / month",
    featured: false,
    features: [
      "Everything in Team",
      "Advanced agent controls",
      "Business impact analysis",
      "Agent trust graph",
      "Advanced audit & reporting",
      "Dedicated support",
    ],
  },
];

const faqs = [
  {
    question: "What counts as a protected action?",
    answer:
      "A protected action is a tool, API, data, code, payment, or system operation evaluated by Sentinel before execution.",
  },
  {
    question: "Can I start with only one AI agent?",
    answer:
      "Yes. The Developer plan is designed for small deployments and early agent-security implementations.",
  },
  {
    question: "What happens when I exceed my action limit?",
    answer:
      "Usage limits can be expanded as your deployment grows. Enterprise deployments can use custom action volumes and commercial terms.",
  },
  {
    question: "Can Sentinel require human approval?",
    answer:
      "Yes. Policies can route sensitive or high-impact actions into a human approval workflow instead of allowing the agent to execute autonomously.",
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#03060b] py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[550px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/[0.035] blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-6 lg:px-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-blue-400/40" />

            <span className="text-[10px] tracking-[0.3em] text-blue-300/70">
              PRICING
            </span>

            <div className="h-px w-8 bg-blue-400/40" />
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Secure the workforce
            <br />
            <span className="text-white/30">you have today.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
            Start with a few agents. Expand your security layer as your
            autonomous workforce grows.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.025] p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-2 text-[10px] transition-all ${
                !annual
                  ? "bg-white text-black"
                  : "text-white/35 hover:text-white/60"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-[10px] transition-all ${
                annual
                  ? "bg-white text-black"
                  : "text-white/35 hover:text-white/60"
              }`}
            >
              Annual

              <span
                className={`rounded-full px-1.5 py-0.5 text-[8px] ${
                  annual
                    ? "bg-black/10 text-black/60"
                    : "bg-emerald-400/10 text-emerald-300"
                }`}
              >
                SAVE
              </span>
            </button>
          </div>
        </motion.div>

        {/* =====================================================
            PRICING CARDS
        ===================================================== */}

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const price = annual ? plan.annual : plan.monthly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className={`relative rounded-[28px] border p-7 sm:p-8 ${
                  plan.featured
                    ? "border-blue-400/25 bg-blue-400/[0.035]"
                    : "border-white/10 bg-[#070b12]"
                }`}
              >
                {/* Featured glow */}
                {plan.featured && (
                  <>
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
                      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/[0.08] blur-[90px]" />
                    </div>

                    <div className="absolute right-6 top-6 rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-3 py-1.5 text-[8px] tracking-[0.15em] text-blue-200">
                      MOST USED
                    </div>
                  </>
                )}

                <div className="relative">
                  {/* Plan */}
                  <p
                    className={`text-[10px] tracking-[0.25em] ${
                      plan.featured
                        ? "text-blue-300/70"
                        : "text-white/25"
                    }`}
                  >
                    {plan.name.toUpperCase()}
                  </p>

                  <p className="mt-4 max-w-xs text-sm leading-6 text-white/40">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-7 flex items-end gap-2">
                    <span className="text-5xl font-semibold tracking-[-0.06em] text-white">
                      ${price}
                    </span>

                    <span className="mb-2 text-xs text-white/25">
                      /month
                    </span>
                  </div>

                  {annual && (
                    <p className="mt-2 text-[9px] text-emerald-300/60">
                      Billed annually
                    </p>
                  )}

                  {/* Capacity */}
                  <div className="mt-7 grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-white/7 bg-black/20 p-3">
                      <p className="text-[8px] tracking-[0.15em] text-white/20">
                        AGENTS
                      </p>

                      <p className="mt-1 text-xs text-white/65">
                        {plan.agents}
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/7 bg-black/20 p-3">
                      <p className="text-[8px] tracking-[0.15em] text-white/20">
                        ACTIONS
                      </p>

                      <p className="mt-1 text-xs text-white/65">
                        {plan.actions.split(" ")[0]}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`group mt-7 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-[10px] font-medium tracking-[0.08em] transition-all ${
                      plan.featured
                        ? "bg-white text-black hover:bg-blue-100"
                        : "border border-white/10 bg-white/[0.025] text-white/60 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    {plan.name === "Business"
                      ? "START BUSINESS"
                      : "GET STARTED"}

                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  {/* Divider */}
                  <div className="my-7 h-px bg-white/[0.06]" />

                  {/* Features */}
                  <p className="mb-4 text-[8px] tracking-[0.2em] text-white/20">
                    INCLUDED
                  </p>

                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-400/[0.06]">
                          <Check className="h-2.5 w-2.5 text-emerald-300/80" />
                        </div>

                        <span className="text-[10px] leading-5 text-white/40">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            ENTERPRISE
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative mt-5 overflow-hidden rounded-[28px] border border-white/10 bg-[#070b12]"
        >
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/[0.045] blur-[100px]" />

          <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:p-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.05]">
                  <ShieldCheck className="h-5 w-5 text-blue-300" />
                </div>

                <div>
                  <p className="text-[9px] tracking-[0.25em] text-blue-300/60">
                    ENTERPRISE
                  </p>

                  <p className="mt-1 text-xs text-white/45">
                    For large-scale autonomous operations
                  </p>
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                Security architecture built around your AI workforce.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/35">
                Custom agent volumes, protected action capacity, advanced
                enforcement, deployment requirements, security assessments,
                and enterprise support.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Custom policies",
                  "Advanced controls",
                  "Security assessments",
                  "Dedicated support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <Check className="h-3 w-3 text-blue-300/70" />

                    <span className="text-[9px] text-white/35">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:flex lg:justify-end">
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-6 py-3.5 text-[10px] font-medium tracking-[0.08em] text-white/65 transition-all hover:border-white/20 hover:bg-white/[0.05] hover:text-white lg:w-auto"
              >
                TALK TO SALES

                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            ASSESSMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5 rounded-[24px] border border-white/7 bg-white/[0.018] p-6 sm:p-7"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/[0.025]">
                <Sparkles className="h-4 w-4 text-blue-300/60" />
              </div>

              <div>
                <p className="text-[9px] tracking-[0.2em] text-white/25">
                  SECURITY ASSESSMENTS
                </p>

                <p className="mt-1 text-xs text-white/45">
                  AI-agent security assessments available separately.
                </p>
              </div>
            </div>

            <span className="text-[10px] text-white/25">
              $2,500 – $10,000
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-24 max-w-3xl"
        >
          <div className="text-center">
            <p className="text-[9px] tracking-[0.25em] text-white/20">
              QUESTIONS
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              Before you deploy.
            </h3>
          </div>

          <div className="mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div key={faq.question}>
                  <button
                    onClick={() =>
                      setOpenFaq(open ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-sm text-white/60 transition-colors hover:text-white/80">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-white/20 transition-transform duration-300 ${
                        open ? "rotate-180 text-blue-300/60" : ""
                      }`}
                    />
                  </button>

                  <AnimateHeight open={open}>
                    <p className="pb-5 pr-10 text-xs leading-6 text-white/30">
                      {faq.answer}
                    </p>
                  </AnimateHeight>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            FOOTNOTE
        ===================================================== */}

        <p className="mt-12 text-center text-[9px] leading-5 text-white/15">
          Pricing shown is proposed launch pricing and may change as
          Sentinel evolves.
        </p>
      </div>
    </section>
  );
}

/* =============================================================
   FAQ ANIMATION
============================================================= */

function AnimateHeight({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
}