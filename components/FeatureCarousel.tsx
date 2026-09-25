"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleAlert,
  FileText,
  Fingerprint,
  LockKeyhole,
  ShieldCheck,
  UserCheck,
  Zap,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Agent Identity",
    description: "Know exactly which AI worker is acting.",
    label: "IDENTITY LAYER",
    icon: Fingerprint,
    accent: "blue",
    visual: "identity",
  },
  {
    number: "02",
    title: "Intent-Based Security",
    description:
      "Does the requested action actually match what this agent is supposed to do?",
    label: "INTENT ENGINE",
    icon: ShieldCheck,
    accent: "cyan",
    visual: "intent",
  },
  {
    number: "03",
    title: "Runtime Enforcement",
    description:
      "Every sensitive action is evaluated before it reaches the real system.",
    label: "ACTION FIREWALL",
    icon: LockKeyhole,
    accent: "blue",
    visual: "enforcement",
  },
  {
    number: "04",
    title: "Human Approval",
    description:
      "Keep people in control when an AI action crosses a defined boundary.",
    label: "HUMAN-IN-THE-LOOP",
    icon: UserCheck,
    accent: "cyan",
    visual: "approval",
  },
  {
    number: "05",
    title: "Intent Drift",
    description:
      "Detect when an agent's behavior starts moving beyond its original purpose.",
    label: "BEHAVIOR MONITOR",
    icon: CircleAlert,
    accent: "blue",
    visual: "drift",
  },
  {
    number: "06",
    title: "Audit Trail",
    description:
      "Every important action, decision, and reason is recorded.",
    label: "FULL TRACEABILITY",
    icon: FileText,
    accent: "cyan",
    visual: "audit",
  },
];

function IdentityVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#070b13] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.16),transparent_55%)]" />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-medium tracking-[0.2em] text-white/35">
            AGENT REGISTRY
          </span>

          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2 py-1 text-[9px] tracking-wider text-emerald-300">
            VERIFIED
          </span>
        </div>

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/5">
          <Fingerprint className="h-10 w-10 text-blue-300" />
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs text-white/50">Agent</span>
            <span className="font-mono text-xs text-white">
              FIN-AGENT-07
            </span>
          </div>

          <div className="mb-3 h-px bg-white/5" />

          <div className="grid grid-cols-2 gap-3 text-[10px]">
            <div>
              <p className="text-white/30">Role</p>
              <p className="mt-1 text-white/70">Finance Worker</p>
            </div>

            <div>
              <p className="text-white/30">Trust</p>
              <p className="mt-1 text-emerald-300">Verified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntentVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#070b13] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.12),transparent_55%)]" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span className="text-[10px] tracking-[0.2em] text-white/35">
            INTENT ANALYSIS
          </span>

          <Zap className="h-4 w-4 text-cyan-300" />
        </div>

        <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.025] p-4">
          <p className="text-[9px] tracking-[0.15em] text-white/30">
            DECLARED INTENT
          </p>

          <p className="mt-2 text-sm text-white/80">
            Process approved customer payments.
          </p>
        </div>

        <div className="my-4 flex justify-center">
          <div className="h-8 w-px bg-gradient-to-b from-cyan-400/40 to-transparent" />
        </div>

        <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10">
              <ShieldCheck className="h-4 w-4 text-cyan-300" />
            </div>

            <div>
              <p className="text-[9px] tracking-[0.15em] text-cyan-300/60">
                REQUESTED ACTION
              </p>

              <p className="mt-1 text-xs text-white/80">
                Create payment
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-emerald-300" />

            <span className="text-[10px] text-emerald-300">
              Intent aligned
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EnforcementVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#070b13] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.12),transparent_60%)]" />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[10px] tracking-[0.2em] text-white/35">
            RUNTIME DECISION
          </span>

          <span className="font-mono text-[9px] text-white/25">
            14:32:09.421
          </span>
        </div>

        <div className="space-y-2">
          <DecisionRow label="IDENTITY" value="VERIFIED" ok />
          <DecisionRow label="INTENT" value="MATCHED" ok />
          <DecisionRow label="POLICY" value="CHECKED" ok />
          <DecisionRow label="RISK" value="REVIEW" />
        </div>

        <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.04] p-4">
          <div className="flex items-center justify-between">
            <span className="text-[9px] tracking-[0.2em] text-amber-300/60">
              FINAL DECISION
            </span>

            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-300" />
          </div>

          <p className="mt-2 text-lg font-medium text-amber-200">
            APPROVAL REQUIRED
          </p>
        </div>
      </div>
    </div>
  );
}

function ApprovalVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#070b13] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.1),transparent_60%)]" />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[10px] tracking-[0.2em] text-white/35">
            HUMAN APPROVAL
          </span>

          <UserCheck className="h-4 w-4 text-cyan-300" />
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
          <p className="text-[9px] tracking-[0.15em] text-white/30">
            SENSITIVE ACTION
          </p>

          <p className="mt-2 text-sm text-white/80">
            Transfer $8,400
          </p>

          <div className="mt-4 flex items-center gap-2 text-[10px] text-amber-300">
            <CircleAlert className="h-3.5 w-3.5" />
            Above configured threshold
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 py-2.5 text-[10px] text-emerald-300">
            APPROVE
          </button>

          <button className="rounded-lg border border-red-400/20 bg-red-400/5 py-2.5 text-[10px] text-red-300">
            BLOCK
          </button>
        </div>
      </div>
    </div>
  );
}

function DriftVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#070b13] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(37,99,235,0.12),transparent_60%)]" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span className="text-[10px] tracking-[0.2em] text-white/35">
            BEHAVIOR MONITOR
          </span>

          <CircleAlert className="h-4 w-4 text-amber-300" />
        </div>

        <div className="relative mt-6 flex-1">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/5" />

          <svg
            viewBox="0 0 320 130"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 92 C35 90, 45 84, 70 87 S110 90, 135 76 S170 70, 195 74 S225 65, 245 48 S275 34, 320 18"
              fill="none"
              stroke="rgba(96,165,250,0.8)"
              strokeWidth="2"
            />

            <path
              d="M0 92 C35 90, 45 84, 70 87 S110 90, 135 76"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="4"
            />
          </svg>

          <div className="absolute bottom-2 left-0 text-[9px] text-white/25">
            EXPECTED BEHAVIOR
          </div>

          <div className="absolute right-0 top-0 text-[9px] text-amber-300/70">
            DRIFT DETECTED
          </div>
        </div>

        <div className="rounded-xl border border-amber-400/15 bg-amber-400/[0.035] p-3">
          <p className="text-[10px] text-amber-200">
            Agent behavior is moving outside its declared purpose.
          </p>
        </div>
      </div>
    </div>
  );
}

function AuditVisual() {
  const events = [
    ["14:32:09", "Payment requested", "ALLOW"],
    ["14:32:10", "Risk threshold", "REVIEW"],
    ["14:32:11", "Human approval", "PENDING"],
    ["14:32:14", "Decision recorded", "BLOCK"],
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#070b13] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.08),transparent_55%)]" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span className="text-[10px] tracking-[0.2em] text-white/35">
            EVENT STREAM
          </span>

          <FileText className="h-4 w-4 text-cyan-300" />
        </div>

        <div className="mt-5 flex-1 space-y-2">
          {events.map(([time, event, status]) => (
            <div
              key={time}
              className="grid grid-cols-[58px_1fr_auto] items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
            >
              <span className="font-mono text-[8px] text-white/25">
                {time}
              </span>

              <span className="text-[9px] text-white/65">
                {event}
              </span>

              <span className="text-[8px] tracking-wider text-cyan-300/70">
                {status}
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-[9px] text-white/30">
          Immutable decision context preserved.
        </div>
      </div>
    </div>
  );
}

function DecisionRow({
  label,
  value,
  ok = false,
}: {
  label: string;
  value: string;
  ok?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5">
      <span className="text-[9px] tracking-[0.12em] text-white/30">
        {label}
      </span>

      <div className="flex items-center gap-2">
        {ok && <Check className="h-3 w-3 text-emerald-300" />}

        <span
          className={`text-[9px] ${
            ok ? "text-emerald-300" : "text-amber-300"
          }`}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

function FeatureVisual({ visual }: { visual: string }) {
  switch (visual) {
    case "identity":
      return <IdentityVisual />;
    case "intent":
      return <IntentVisual />;
    case "enforcement":
      return <EnforcementVisual />;
    case "approval":
      return <ApprovalVisual />;
    case "drift":
      return <DriftVisual />;
    case "audit":
      return <AuditVisual />;
    default:
      return null;
  }
}

export default function FeatureCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const activeFeature = features[selectedIndex];

  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#03060b] py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.035] blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-blue-400/40" />

            <span className="text-[10px] font-medium tracking-[0.3em] text-blue-300/70">
              THE SENTINEL LAYER
            </span>

            <div className="h-px w-8 bg-blue-400/40" />
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Security that moves
            <br />
            <span className="text-white/35">with the agent.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            Sentinel doesn't just watch AI agents after they act.
            It evaluates what they are about to do — and enforces your
            boundaries in real time.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative mt-20">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.number}
                    className="min-w-0 flex-[0_0_86%] px-2 sm:flex-[0_0_72%] lg:flex-[0_0_58%] xl:flex-[0_0_52%]"
                  >
                    <motion.div
                      animate={{
                        scale: index === selectedIndex ? 1 : 0.91,
                        opacity: index === selectedIndex ? 1 : 0.42,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative h-[580px] overflow-hidden rounded-[28px] border border-white/10 bg-[#080c14]"
                    >
                      {/* Card glow */}
                      <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/[0.08] blur-[100px]" />
                      </div>

                      <div className="relative grid h-full grid-cols-1 gap-8 p-7 sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
                        {/* Left content */}
                        <div className="flex flex-col">
                          <div className="flex items-start justify-between">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                              <Icon className="h-5 w-5 text-blue-300" />
                            </div>

                            <span className="font-mono text-5xl font-light tracking-[-0.06em] text-white/[0.08]">
                              {feature.number}
                            </span>
                          </div>

                          <div className="mt-auto">
                            <p className="mb-3 text-[9px] font-medium tracking-[0.25em] text-blue-300/60">
                              {feature.label}
                            </p>

                            <h3 className="max-w-md text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                              {feature.title}
                            </h3>

                            <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                              {feature.description}
                            </p>

                            <div className="mt-8 flex items-center gap-2 text-[10px] tracking-[0.16em] text-white/25">
                              <span className="h-px w-8 bg-white/20" />
                              RUNTIME SECURITY
                            </div>
                          </div>
                        </div>

                        {/* Right visual */}
                        <div className="min-h-[280px] lg:min-h-0">
                          <FeatureVisual visual={feature.visual} />
                        </div>
                      </div>

                      {/* Bottom border accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {features.map((feature, index) => (
                <button
                  key={feature.number}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to ${feature.title}`}
                  className="group flex h-8 items-center"
                >
                  <span
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? "w-8 bg-blue-400"
                        : "w-2 bg-white/15 group-hover:bg-white/30"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(features.length).padStart(2, "0")}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={scrollPrev}
                  aria-label="Previous feature"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/50 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>

                <button
                  onClick={scrollNext}
                  aria-label="Next feature"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/50 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-400/[0.06] hover:text-blue-200"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Active feature statement */}
        <div className="mt-20 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.number}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 text-center"
            >
              <ShieldCheck className="h-4 w-4 text-blue-300/60" />

              <span className="text-xs tracking-[0.12em] text-white/30">
                {activeFeature.title.toUpperCase()} · ENFORCED AT RUNTIME
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}