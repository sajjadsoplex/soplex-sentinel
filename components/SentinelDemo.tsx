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
    reason: "Action matches the agent's declared purpose and configured payment policy.",
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
    reason: "Payment exceeds the configured autonomous spending threshold.",
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
    reason: "Production deployment is outside this agent's permitted operational scope.",
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
    reason: "Bulk data export does not match the agent's declared support purpose.",
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

function StatusDot({ color = "blue" }: { color?: "blue" | "green" | "amber" | "red" }) {
  const classes = {
    blue: "bg-blue-300 shadow-[0_0_12px_rgba(96,165,250,0.7)]",
    green: "bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.7)]",
    amber: "bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.7)]",
    red: "bg-red-300 shadow-[0_0_12px_rgba(248,113,113,0.7)]",
  };

  return <span className={`h-1.5 w-1.5 rounded-full ${classes[color]}`} />;
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
      transition={{ duration: 0.35 }}
      className={`flex items-center justify-between rounded-xl border ${style.border} ${style.bg} px-3.5 py-3`}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[9px] text-white/20">
          {number}
        </span>

        <span className="text-[10px] text-white/55">
          {title}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <StatusDot color={style.dot} />

        <span className={`text-[9px] tracking-wider ${style.text}`}>
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
    () => actions.find((action) => action.id === selectedId) ?? actions[0],
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
      muted: "text-emerald-300/45",
      glow: "bg-emerald-400/[0.06]",
    },
    APPROVAL: {
      border: "border-amber-400/20",
      bg: "bg-amber-400/[0.045]",
      text: "text-amber-100",
      muted: "text-amber-300/45",
      glow: "bg-amber-400/[0.06]",
    },
    BLOCK: {
      border: "border-red-400/20",
      bg: "bg-red-400/[0.045]",
      text: "text-red-100",
      muted: "text-red-300/45",
      glow: "bg-red-400/[0.06]",
    },
  };

  const currentStyle = decisionStyles[decision];

  return (
    <section
      id="demo"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#02050a] py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] transition-colors duration-700 ${currentStyle.glow}`}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-6 lg:px-10">
        {/* =====================================================
            SECTION HEADER
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
              SEE SENTINEL IN ACTION
            </span>

            <div className="h-px w-8 bg-blue-400/40" />
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Before the agent acts,
            <br />
            <span className="text-white/30">
              Sentinel decides.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
            Choose an AI action below. Watch Sentinel evaluate identity,
            intent, policy, and risk — then decide what happens next.
          </p>
        </motion.div>

        {/* =====================================================
            DEMO
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-20"
        >
          {/* Top control bar */}
          <div className="mb-4 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#070b12]/90 p-4 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.05]">
                <Bot className="h-4 w-4 text-blue-300" />
              </div>

              <div>
                <p className="text-[9px] tracking-[0.2em] text-white/25">
                  INTERACTIVE SIMULATION
                </p>

                <p className="mt-1 text-xs text-white/60">
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
                        : "border-white/7 bg-white/[0.02] text-white/35 hover:border-white/15 hover:bg-white/[0.04] hover:text-white/65"
                    }`}
                  >
                    <Icon
                      className={`h-3.5 w-3.5 ${
                        active ? "text-blue-300" : "text-white/25"
                      }`}
                    />

                    <span className="text-[9px]">
                      {action.action}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main simulator */}
          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#060a11] shadow-2xl shadow-black/40">
            <div className="grid min-h-[650px] lg:grid-cols-[0.85fr_1.15fr]">
              {/* =================================================
                  LEFT — AGENT REQUEST
              ================================================= */}

              <div className="relative border-b border-white/[0.06] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/[0.035] blur-[100px]" />

                <div className="relative flex h-full flex-col">
                  {/* Agent header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] tracking-[0.25em] text-white/25">
                        AI WORKER
                      </p>

                      <div className="mt-2 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-30" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                        </span>

                        <span className="text-sm font-medium text-white/80">
                          {selectedAction.agent}
                        </span>
                      </div>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-1 text-[8px] tracking-[0.15em] text-white/30">
                      {selectedAction.role}
                    </span>
                  </div>

                  {/* Agent identity */}
                  <div className="mt-10">
                    <p className="mb-3 text-[9px] tracking-[0.2em] text-white/25">
                      AGENT IDENTITY
                    </p>

                    <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.05]">
                          <Bot className="h-5 w-5 text-blue-300" />
                        </div>

                        <div>
                          <p className="text-xs text-white/70">
                            {selectedAction.agent}
                          </p>

                          <p className="mt-1 font-mono text-[9px] text-white/25">
                            AGT-{selectedAction.id.toUpperCase()}-07
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Requested action */}
                  <div className="mt-8">
                    <p className="mb-3 text-[9px] tracking-[0.2em] text-white/25">
                      REQUESTED ACTION
                    </p>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedAction.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-2xl border border-white/10 bg-[#080d15] p-5"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-lg font-medium tracking-[-0.02em] text-white/90">
                              {selectedAction.action}
                            </p>

                            <p className="mt-2 text-xs text-white/35">
                              {selectedAction.target}
                            </p>
                          </div>

                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/[0.025]">
                            <selectedAction.icon className="h-4 w-4 text-blue-300" />
                          </div>
                        </div>

                        {selectedAction.amount && (
                          <div className="mt-5 border-t border-white/5 pt-4">
                            <p className="text-[8px] tracking-[0.2em] text-white/20">
                              TRANSACTION VALUE
                            </p>

                            <p className="mt-1 font-mono text-2xl text-white/80">
                              {selectedAction.amount}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Intent */}
                  <div className="mt-auto pt-8">
                    <p className="mb-3 text-[9px] tracking-[0.2em] text-white/25">
                      DECLARED INTENT
                    </p>

                    <div className="rounded-xl border border-white/7 bg-white/[0.02] p-4">
                      <div className="flex gap-3">
                        <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-300/60" />

                        <p className="text-[11px] leading-5 text-white/45">
                          {selectedAction.intent}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  RIGHT — SENTINEL
              ================================================= */}

              <div className="relative p-6 sm:p-8 lg:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.055),transparent_55%)]" />

                <div className="relative flex h-full flex-col">
                  {/* Sentinel header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.06]">
                        <ShieldCheck className="h-5 w-5 text-blue-300" />
                      </div>

                      <div>
                        <p className="text-[9px] tracking-[0.22em] text-blue-200/45">
                          SOPLEX SENTINEL
                        </p>

                        <p className="mt-1 text-xs text-white/55">
                          Runtime Decision Engine
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.025] px-3 py-1.5">
                      <StatusDot color="green" />

                      <span className="text-[8px] tracking-[0.15em] text-emerald-300/70">
                        PROTECTING
                      </span>
                    </div>
                  </div>

                  {/* Evaluation */}
                  <div className="mt-10">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-[9px] tracking-[0.22em] text-white/25">
                          RUNTIME EVALUATION
                        </p>

                        <p className="mt-1 text-xs text-white/50">
                          Evaluating requested action
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock3 className="h-3 w-3 text-white/20" />

                        <span className="font-mono text-[9px] text-white/25">
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
                  <div className="mt-8">
                    <div className="mb-3 flex items-center gap-2">
                      <LockKeyhole className="h-3.5 w-3.5 text-white/25" />

                      <span className="text-[9px] tracking-[0.2em] text-white/25">
                        ACTIVE POLICY
                      </span>
                    </div>

                    <div className="rounded-xl border border-white/7 bg-white/[0.02] p-4">
                      <p className="text-[11px] text-white/50">
                        {selectedAction.policy}
                      </p>
                    </div>
                  </div>

                  {/* Decision */}
                  <div className="mt-auto pt-8">
                    <AnimatePresence mode="wait">
                      {isEvaluating ? (
                        <motion.div
                          key="evaluating"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex min-h-[150px] items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-400/[0.025]"
                        >
                          <div className="text-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/20 border-t-blue-300"
                            >
                              <ShieldCheck className="h-3.5 w-3.5 text-blue-300" />
                            </motion.div>

                            <p className="text-[9px] tracking-[0.2em] text-blue-200/50">
                              EVALUATING ACTION
                            </p>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={selectedAction.id}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className={`rounded-2xl border ${currentStyle.border} ${currentStyle.bg} p-5`}
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
                                  className={`text-[9px] tracking-[0.2em] ${currentStyle.muted}`}
                                >
                                  FINAL DECISION
                                </p>

                                <p
                                  className={`mt-1 text-lg font-medium ${currentStyle.text}`}
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

                          <p className="mt-4 text-[11px] leading-5 text-white/40">
                            {selectedAction.reason}
                          </p>

                          {decision === "APPROVAL" && (
                            <div className="mt-4 grid grid-cols-2 gap-2">
                              <button className="rounded-lg border border-emerald-400/15 bg-emerald-400/[0.04] py-2.5 text-[9px] tracking-wider text-emerald-300 transition-colors hover:bg-emerald-400/[0.08]">
                                APPROVE
                              </button>

                              <button className="rounded-lg border border-red-400/15 bg-red-400/[0.03] py-2.5 text-[9px] tracking-wider text-red-300 transition-colors hover:bg-red-400/[0.07]">
                                BLOCK
                              </button>
                            </div>
                          )}

                          <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                            <span className="text-[8px] tracking-[0.15em] text-white/20">
                              DECISION RECORDED
                            </span>

                            <span className={`text-[8px] ${currentStyle.text}`}>
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

          {/* Bottom explanation */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
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

        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-sm tracking-[0.05em] text-white/30">
            The agent has the capability.
            <span className="mx-2 text-blue-300/50">•</span>
            Sentinel controls the action.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

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
    <div className="rounded-2xl border border-white/7 bg-white/[0.018] p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 bg-white/[0.025]">
          <Icon className="h-3.5 w-3.5 text-blue-300/60" />
        </div>

        <span className="text-[9px] tracking-[0.2em] text-white/30">
          {title}
        </span>
      </div>

      <p className="mt-3 text-[10px] leading-5 text-white/30">
        {text}
      </p>
    </div>
  );
}