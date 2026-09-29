"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  CircleAlert,
  Clock3,
  Database,
  DollarSign,
  FileCode2,
  LockKeyhole,
  ShieldCheck,
  UserCheck,
  X,
  Zap,
} from "lucide-react";

type Decision = "ALLOW" | "APPROVAL" | "BLOCK";

type DemoAction = {
  id: string;
  agent: string;
  role: string;
  action: string;
  target: string;
  amount?: string;
  icon: typeof DollarSign;
  decision: Decision;
  reason: string;
  intent: string;
  risk: string;
  policy: string;
};

const actions: DemoAction[] = [
  {
    id: "payment",
    agent: "Finance Agent",
    role: "PAYMENTS",
    action: "Create payment",
    target: "Stripe Production",
    amount: "$420",
    icon: DollarSign,
    decision: "ALLOW",
    reason:
      "Action matches the agent's declared purpose and configured payment policy.",
    intent: "Process approved customer payments",
    risk: "LOW",
    policy: "Payments ≤ $500 allowed",
  },
  {
    id: "large-payment",
    agent: "Finance Agent",
    role: "PAYMENTS",
    action: "Create payment",
    target: "Stripe Production",
    amount: "$8,400",
    icon: DollarSign,
    decision: "APPROVAL",
    reason:
      "Payment exceeds the configured autonomous spending threshold.",
    intent: "Process approved customer payments",
    risk: "MEDIUM",
    policy: "Payments > $500 require approval",
  },
  {
    id: "deploy",
    agent: "Coding Agent",
    role: "ENGINEERING",
    action: "Deploy production",
    target: "Production Cluster",
    icon: FileCode2,
    decision: "BLOCK",
    reason:
      "Production deployment is outside this agent's permitted operational scope.",
    intent: "Write, test and review application code",
    risk: "HIGH",
    policy: "Production deployment prohibited",
  },
  {
    id: "customer-data",
    agent: "Support Agent",
    role: "CUSTOMER SUCCESS",
    action: "Export customer records",
    target: "Customer Database",
    icon: Database,
    decision: "BLOCK",
    reason:
      "Bulk data export does not match the agent's declared support purpose.",
    intent: "Answer customer questions and resolve support requests",
    risk: "HIGH",
    policy: "Bulk customer export prohibited",
  },
];

const decisionConfig = {
  ALLOW: {
    label: "ACTION ALLOWED",
    description: "Sentinel permits the action.",
  },
  APPROVAL: {
    label: "HUMAN APPROVAL REQUIRED",
    description: "Sentinel pauses the action for human review.",
  },
  BLOCK: {
    label: "ACTION BLOCKED",
    description: "Sentinel prevents the action from executing.",
  },
};

function StatusDot({
  color = "blue",
}: {
  color?: "blue" | "green" | "amber" | "red";
}) {
  const classes = {
    blue: "bg-blue-300 shadow-[0_0_12px_rgba(96,165,250,0.7)]",
    green: "bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.7)]",
    amber: "bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.7)]",
    red: "bg-red-300 shadow-[0_0_12px_rgba(248,113,113,0.7)]",
  };

  return (
    <span className={`h-1.5 w-1.5 rounded-full ${classes[color]}`} />
  );
}

function DecisionIcon({ decision }: { decision: Decision }) {
  if (decision === "ALLOW") {
    return <Check className="h-5 w-5" />;
  }

  if (decision === "APPROVAL") {
    return <UserCheck className="h-5 w-5" />;
  }

  return <X className="h-5 w-5" />;
}

function EvaluationRow({
  number,
  title,
  value,
  status,
}: {
  number: string;
  title: string;
  value: string;
  status: "verified" | "review" | "blocked";
}) {
  const statusStyles = {
    verified: {
      text: "text-emerald-300",
      border: "border-emerald-400/10",
      bg: "bg-emerald-400/[0.025]",
      dot: "green" as const,
    },
    review: {
      text: "text-amber-300",
      border: "border-amber-400/10",
      bg: "bg-amber-400/[0.025]",
      dot: "amber" as const,
    },
    blocked: {
      text: "text-red-300",
      border: "border-red-400/10",
      bg: "bg-red-400/[0.025]",
      dot: "red" as const,
    },
  };

  const style = statusStyles[status];

  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center justify-between rounded-xl border ${style.border} ${style.bg} px-3.5 py-3`}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[9px] text-white/42">
          {number}
        </span>

        <span className="text-[10px] font-medium text-white/72">
          {title}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <StatusDot color={style.dot} />

        <span className={`text-[9px] font-medium tracking-wider ${style.text}`}>
          {value}
        </span>
      </div>
    </motion.div>
  );
}

export default function SentinelDemo() {
  const [selectedId, setSelectedId] = useState(actions[0].id);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showDecision, setShowDecision] = useState(true);

  const selectedAction = useMemo(
    () =>
      actions.find((action) => action.id === selectedId) ??
      actions[0],
    [selectedId]
  );

  const handleActionChange = (id: string) => {
    if (id === selectedId) return;

    setIsEvaluating(true);
    setShowDecision(false);
    setSelectedId(id);

    window.setTimeout(() => {
      setIsEvaluating(false);
      setShowDecision(true);
    }, 550);
  };

  const decision = selectedAction.decision;
  const config = decisionConfig[decision];

  const decisionStyles = {
    ALLOW: {
      border: "border-emerald-400/20",
      bg: "bg-emerald-400/[0.045]",
      text: "text-emerald-200",
      muted: "text-emerald-300/65",
      glow: "bg-emerald-400/[0.055]",
    },
    APPROVAL: {
      border: "border-amber-400/20",
      bg: "bg-amber-400/[0.045]",
      text: "text-amber-100",
      muted: "text-amber-300/65",
      glow: "bg-amber-400/[0.055]",
    },
    BLOCK: {
      border: "border-red-400/20",
      bg: "bg-red-400/[0.045]",
      text: "text-red-100",
      muted: "text-red-300/65",
      glow: "bg-red-400/[0.055]",
    },
  };

  const currentStyle = decisionStyles[decision];

  return (
    <section
      id="demo"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#02050a] px-0 py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-1/2 top-1/2 h-[520px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] transition-colors duration-700 ${currentStyle.glow}`}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-6 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-blue-400/50" />

            <span className="text-[10px] font-medium tracking-[0.3em] text-blue-300">
              SEE SENTINEL IN ACTION
            </span>

            <div className="h-px w-8 bg-blue-400/50" />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Before the agent acts,
            <br />
            <span className="text-white/68">
              Sentinel decides.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/68 sm:text-base">
            Choose an AI action below. Watch Sentinel evaluate identity,
            intent, policy, and risk — then decide what happens next.
          </p>
        </motion.div>

        {/* =========================================================
            DEMO
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-14 sm:mt-16"
        >
          {/* =======================================================
              CONTROL BAR
          ======================================================= */}

          <div className="mb-3 flex flex-col gap-4 rounded-2xl border border-white/[0.09] bg-[#070b12]/95 p-4 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.05]">
                <Bot className="h-4 w-4 text-blue-300" />
              </div>

              <div>
                <p className="text-[9px] font-medium tracking-[0.2em] text-white/52">
                  INTERACTIVE SIMULATION
                </p>

                <p className="mt-1 text-xs text-white/75">
                  Select an agent action
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {actions.map((action) => {
                const Icon = action.icon;
                const active = action.id === selectedId;

                return (
                  <button
                    key={action.id}
                    onClick={() => handleActionChange(action.id)}
                    className={`group flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left transition-all duration-300 ${
                      active
                        ? "border-blue-400/30 bg-blue-400/[0.08] text-white"
                        : "border-white/[0.08] bg-white/[0.02] text-white/58 hover:border-white/15 hover:bg-white/[0.04] hover:text-white/85"
                    }`}
                  >
                    <Icon
                      className={`h-3.5 w-3.5 ${
                        active ? "text-blue-300" : "text-white/45"
                      }`}
                    />

                    <span className="text-[9px] font-medium">
                      {action.action}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =======================================================
              MAIN SIMULATOR
          ======================================================= */}

          <div className="overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#060a11] shadow-2xl shadow-black/40">
            <div className="grid min-h-[570px] lg:grid-cols-[0.88fr_1.12fr]">
              {/* ===================================================
                  LEFT — AGENT REQUEST
              =================================================== */}

              <div className="relative border-b border-white/[0.06] p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
                <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-500/[0.035] blur-[90px]" />

                <div className="relative flex h-full flex-col">
                  {/* Agent header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-medium tracking-[0.25em] text-white/52">
                        AI WORKER
                      </p>

                      <div className="mt-2 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-30" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                        </span>

                        <span className="text-sm font-medium text-white/88">
                          {selectedAction.agent}
                        </span>
                      </div>
                    </div>

                    <span className="rounded-full border border-white/[0.09] bg-white/[0.025] px-2.5 py-1 text-[8px] font-medium tracking-[0.15em] text-white/58">
                      {selectedAction.role}
                    </span>
                  </div>

                  {/* Agent identity */}
                  <div className="mt-7">
                    <p className="mb-2 text-[9px] font-medium tracking-[0.2em] text-white/52">
                      AGENT IDENTITY
                    </p>

                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.05]">
                          <Bot className="h-5 w-5 text-blue-300" />
                        </div>

                        <div>
                          <p className="text-xs font-medium text-white/82">
                            {selectedAction.agent}
                          </p>

                          <p className="mt-1 font-mono text-[9px] text-white/48">
                            AGT-{selectedAction.id.toUpperCase()}-07
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Requested action */}
                  <div className="mt-6">
                    <p className="mb-2 text-[9px] font-medium tracking-[0.2em] text-white/52">
                      REQUESTED ACTION
                    </p>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedAction.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-2xl border border-white/[0.09] bg-[#080d15] p-4 sm:p-5"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-base font-medium tracking-[-0.02em] text-white/92 sm:text-lg">
                              {selectedAction.action}
                            </p>

                            <p className="mt-1.5 text-xs text-white/62">
                              {selectedAction.target}
                            </p>
                          </div>

                          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025]">
                            <selectedAction.icon className="h-4 w-4 text-blue-300" />
                          </div>
                        </div>

                        {selectedAction.amount && (
                          <div className="mt-4 border-t border-white/[0.06] pt-3">
                            <p className="text-[8px] font-medium tracking-[0.2em] text-white/48">
                              TRANSACTION VALUE
                            </p>

                            <p className="mt-1 font-mono text-xl text-white/88 sm:text-2xl">
                              {selectedAction.amount}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Intent */}
                  <div className="mt-auto pt-6">
                    <p className="mb-2 text-[9px] font-medium tracking-[0.2em] text-white/52">
                      DECLARED INTENT
                    </p>

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5">
                      <div className="flex gap-3">
                        <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-300/75" />

                        <p className="text-[11px] leading-5 text-white/70">
                          {selectedAction.intent}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===================================================
                  RIGHT — SENTINEL
              =================================================== */}

              <div className="relative p-5 sm:p-7 lg:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.05),transparent_55%)]" />

                <div className="relative flex h-full flex-col">
                  {/* Sentinel header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.06]">
                        <ShieldCheck className="h-5 w-5 text-blue-300" />
                      </div>

                      <div>
                        <p className="text-[9px] font-medium tracking-[0.22em] text-blue-200/75">
                          SOPLEX SENTINEL
                        </p>

                        <p className="mt-1 text-xs text-white/72">
                          Runtime Decision Engine
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.025] px-3 py-1.5">
                      <StatusDot color="green" />

                      <span className="text-[8px] font-medium tracking-[0.15em] text-emerald-300/85">
                        PROTECTING
                      </span>
                    </div>
                  </div>

                  {/* Evaluation */}
                  <div className="mt-7">
                    <div className="mb-3 flex items-center justify-between">
                      <div>
                        <p className="text-[9px] font-medium tracking-[0.22em] text-white/52">
                          RUNTIME EVALUATION
                        </p>

                        <p className="mt-1 text-xs text-white/65">
                          Evaluating requested action
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock3 className="h-3 w-3 text-white/48" />

                        <span className="font-mono text-[9px] text-white/52">
                          {isEvaluating ? "..." : "42ms"}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <EvaluationRow
                        number="01"
                        title="Agent Identity"
                        value="VERIFIED"
                        status="verified"
                      />

                      <EvaluationRow
                        number="02"
                        title="Declared Intent"
                        value={
                          selectedAction.decision === "BLOCK"
                            ? "MISMATCH"
                            : "VERIFIED"
                        }
                        status={
                          selectedAction.decision === "BLOCK"
                            ? "blocked"
                            : "verified"
                        }
                      />

                      <EvaluationRow
                        number="03"
                        title="Policy Check"
                        value={
                          selectedAction.decision === "ALLOW"
                            ? "PASSED"
                            : selectedAction.decision === "APPROVAL"
                              ? "THRESHOLD"
                              : "VIOLATION"
                        }
                        status={
                          selectedAction.decision === "ALLOW"
                            ? "verified"
                            : selectedAction.decision === "APPROVAL"
                              ? "review"
                              : "blocked"
                        }
                      />

                      <EvaluationRow
                        number="04"
                        title="Risk Assessment"
                        value={selectedAction.risk}
                        status={
                          selectedAction.risk === "LOW"
                            ? "verified"
                            : selectedAction.risk === "MEDIUM"
                              ? "review"
                              : "blocked"
                        }
                      />
                    </div>
                  </div>

                  {/* Policy */}
                  <div className="mt-6">
                    <div className="mb-2 flex items-center gap-2">
                      <LockKeyhole className="h-3.5 w-3.5 text-white/52" />

                      <span className="text-[9px] font-medium tracking-[0.2em] text-white/52">
                        ACTIVE POLICY
                      </span>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5">
                      <p className="text-[11px] leading-5 text-white/70">
                        {selectedAction.policy}
                      </p>
                    </div>
                  </div>

                  {/* Decision */}
                  <div className="mt-auto pt-6">
                    <AnimatePresence mode="wait">
                      {isEvaluating ? (
                        <motion.div
                          key="evaluating"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex min-h-[130px] items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-400/[0.025]"
                        >
                          <div className="text-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/20 border-t-blue-300"
                            >
                              <ShieldCheck className="h-3.5 w-3.5 text-blue-300" />
                            </motion.div>

                            <p className="text-[9px] font-medium tracking-[0.2em] text-blue-200/75">
                              EVALUATING ACTION
                            </p>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={selectedAction.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35 }}
                          className={`rounded-2xl border ${currentStyle.border} ${currentStyle.bg} p-4 sm:p-5`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3">
                              <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${currentStyle.border} ${currentStyle.bg} ${currentStyle.text}`}
                              >
                                <DecisionIcon decision={decision} />
                              </div>

                              <div>
                                <p
                                  className={`text-[9px] font-medium tracking-[0.2em] ${currentStyle.muted}`}
                                >
                                  FINAL DECISION
                                </p>

                                <p
                                  className={`mt-1 text-base font-medium sm:text-lg ${currentStyle.text}`}
                                >
                                  {config.label}
                                </p>
                              </div>
                            </div>

                            <StatusDot
                              color={
                                decision === "ALLOW"
                                  ? "green"
                                  : decision === "APPROVAL"
                                    ? "amber"
                                    : "red"
                              }
                            />
                          </div>

                          <p className="mt-3 text-[11px] leading-5 text-white/70">
                            {selectedAction.reason}
                          </p>

                          {decision === "APPROVAL" && (
                            <div className="mt-3 grid grid-cols-2 gap-2">
                              <button className="rounded-lg border border-emerald-400/15 bg-emerald-400/[0.04] py-2.5 text-[9px] font-medium tracking-wider text-emerald-300 transition-colors hover:bg-emerald-400/[0.08]">
                                APPROVE
                              </button>

                              <button className="rounded-lg border border-red-400/15 bg-red-400/[0.03] py-2.5 text-[9px] font-medium tracking-wider text-red-300 transition-colors hover:bg-red-400/[0.07]">
                                BLOCK
                              </button>
                            </div>
                          )}

                          <div className="mt-3 flex flex-col gap-1.5 border-t border-white/[0.06] pt-3 sm:flex-row sm:items-center sm:justify-between">
                            <span className="text-[8px] font-medium tracking-[0.15em] text-white/45">
                              DECISION RECORDED
                            </span>

                            <span
                              className={`text-[8px] ${currentStyle.text}`}
                            >
                              {config.description}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =======================================================
              PRINCIPLES
          ======================================================= */}

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <DemoPrinciple
              icon={ShieldCheck}
              title="IDENTITY"
              text="Know exactly which agent is acting."
            />

            <DemoPrinciple
              icon={Zap}
              title="INTENT"
              text="Understand what the agent is supposed to do."
            />

            <DemoPrinciple
              icon={LockKeyhole}
              title="ENFORCEMENT"
              text="Decide what happens before the action executes."
            />
          </div>
        </motion.div>

        {/* =========================================================
            FINAL STATEMENT
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 text-center"
        >
          <p className="text-xs font-medium tracking-[0.05em] text-white/58 sm:text-sm">
            The agent has the capability.
            <span className="mx-2 text-blue-300/70">•</span>
            Sentinel controls the action.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   DEMO PRINCIPLE
========================================================= */

function DemoPrinciple({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof ShieldCheck;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.018] p-4 sm:p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025]">
          <Icon className="h-3.5 w-3.5 text-blue-300/80" />
        </div>

        <span className="text-[9px] font-medium tracking-[0.2em] text-white/60">
          {title}
        </span>
      </div>

      <p className="mt-2.5 text-[10px] leading-5 text-white/62">
        {text}
      </p>
    </div>
  );
}