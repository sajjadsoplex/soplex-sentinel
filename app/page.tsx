"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import WorkforceSection from "@/components/WorkforceSection";
import SentinelArchitecture from "@/components/SentinelArchitecture";
import FeatureCarousel from "@/components/FeatureCarousel";
import SentinelDemo from "@/components/SentinelDemo";
import HowSentinelWorks from "@/components/HowSentinelWorks";
import PricingSection from "@/components/PricingSection";
import FounderSection from "@/components/FounderSection";
import SecurityPhilosophy from "@/components/SecurityPhilosophy";

const decisionItems = [
  {
    label: "Agent Identity",
    status: "VERIFIED",
  },
  {
    label: "Declared Intent",
    status: "VERIFIED",
  },
  {
    label: "Policy Check",
    status: "VERIFIED",
  },
  {
    label: "Risk Assessment",
    status: "REVIEW",
  },
];

const navItems = [
  {
    label: "Product",
    href: "#product",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#03060b] text-white selection:bg-blue-400/20 selection:text-blue-100">
      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#03060b]/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-10">
          {/* Logo */}
          <a
            href="#"
            onClick={closeMobileMenu}
            className="group flex items-center gap-3"
            aria-label="Soplex Sentinel home"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-[#050912]">
              <Image
                src="/logo/soplex-sentinel.png"
                alt="Soplex Sentinel"
                width={420}
                height={420}
                priority
                className="h-full w-full object-contain"
              />

              <div className="pointer-events-none absolute inset-0 bg-blue-400/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="hidden leading-none sm:block">
              <div className="text-[13px] font-semibold tracking-[0.16em] text-white">
                SOPLEX
                <span className="text-blue-400">.</span>
              </div>

              <div className="mt-1 text-[7px] tracking-[0.4em] text-white/35">
                SENTINEL
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex lg:gap-9">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-2 text-xs text-white/45 transition-colors duration-300 hover:text-white"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2.5 text-xs text-blue-200 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-400/[0.1] sm:flex"
          >
            Get Started
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/70 transition-colors hover:bg-white/[0.05] hover:text-white md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          className="overflow-hidden border-t border-white/[0.06] bg-[#03060b]/95 backdrop-blur-2xl md:hidden"
        >
          <div className="px-5 pb-5 pt-3">
            <nav className="flex flex-col">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="border-b border-white/[0.05] py-4 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <span className="mr-3 font-mono text-[9px] text-blue-400/50">
                    0{index + 1}
                  </span>
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-xs font-medium text-black transition-colors hover:bg-blue-100"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        </motion.div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="home"
        className="relative min-h-screen scroll-mt-20 pt-[72px] sm:pt-20"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-blue-500/[0.045] blur-[150px] sm:h-[650px] sm:w-[900px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:70px_70px] sm:bg-[size:80px_80px]" />

          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#03060b] to-transparent sm:h-80" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-[1500px] flex-col px-5 pb-14 pt-12 sm:min-h-[calc(100vh-80px)] sm:px-6 sm:pb-20 sm:pt-20 lg:px-10 lg:pt-24">
          <div className="grid flex-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Hero copy */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-2xl"
            >
              {/* Status */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/[0.04] px-3 py-1.5 sm:mb-7">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                </span>

                <span className="text-[8px] font-medium tracking-[0.2em] text-blue-200/70 sm:text-[9px] sm:tracking-[0.22em]">
                  AI AGENT RUNTIME SECURITY
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-4xl text-[clamp(2.8rem,10vw,5.1rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white">
                AI can act.
                <br />
                <span className="text-white/35">Sentinel decides.</span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/45 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
                Soplex Sentinel gives AI agents identity, intent, and
                enforceable boundaries — so autonomous systems can work
                without taking control away from your business.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col items-stretch gap-3 xs:flex-row xs:flex-wrap xs:items-center sm:mt-9 sm:flex-row">
                <a
                  href="#product"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-medium text-black transition-all duration-300 hover:bg-blue-100"
                >
                  Explore Sentinel
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-xs text-white/65 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                >
                  See How It Works
                </a>
              </div>

              {/* Small trust line */}
              <div className="mt-8 flex items-center gap-3 text-[9px] tracking-[0.1em] text-white/25 sm:mt-9 sm:text-[10px] sm:tracking-[0.12em]">
                <Zap className="h-3.5 w-3.5 shrink-0 text-blue-300/50" />
                <span>BUILT FOR THE AUTONOMOUS AI WORKFORCE</span>
              </div>
            </motion.div>

            {/* Security Pipeline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[650px] lg:max-w-none"
            >
              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[100px] sm:h-[450px] sm:w-[450px] sm:blur-[120px]" />

              <div className="relative rounded-[24px] border border-white/10 bg-[#070b12]/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:rounded-[30px] sm:p-7">
                {/* Top bar */}
                <div className="mb-4 flex items-center justify-between sm:mb-5">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-blue-400/20 bg-blue-400/[0.06]">
                      <Image
                        src="/logo/soplex-sentinel.png"
                        alt=""
                        width={420}
                        height={420}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div>
                      <p className="text-[8px] tracking-[0.2em] text-white/30 sm:text-[9px]">
                        SOPLEX SENTINEL
                      </p>

                      <p className="mt-1 text-[9px] text-white/60 sm:text-[10px]">
                        Runtime Decision Engine
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-2.5 py-1 text-[7px] tracking-wider text-emerald-300 sm:text-[8px]">
                    ACTIVE
                  </span>
                </div>

                {/* Agent */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3.5 sm:p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[8px] tracking-[0.18em] text-white/25 sm:text-[9px]">
                        AI AGENT
                      </p>

                      <p className="mt-1 text-sm font-medium text-white/80">
                        Finance Agent
                      </p>
                    </div>

                    <div className="rounded-lg border border-blue-400/15 bg-blue-400/[0.05] px-2 py-1 font-mono text-[8px] text-blue-200/70">
                      FIN-07
                    </div>
                  </div>
                </div>

                {/* Connection */}
                <div className="relative flex justify-center py-3.5 sm:py-4">
                  <motion.div
                    animate={{ opacity: [0.25, 1, 0.25] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-7 w-px bg-gradient-to-b from-blue-400/20 via-blue-400 to-blue-400/20 sm:h-8"
                  />

                  <motion.div
                    animate={{ y: [0, 26, 0] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1 h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(96,165,250,0.8)]"
                  />
                </div>

                {/* Requested action */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3.5 sm:p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[8px] tracking-[0.18em] text-white/25 sm:text-[9px]">
                        REQUESTED ACTION
                      </p>

                      <p className="mt-1 text-sm text-white/80">
                        Create Payment
                      </p>
                    </div>

                    <Sparkles className="h-4 w-4 text-blue-300/60" />
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4">
                    <div className="rounded-lg border border-white/5 bg-black/20 p-2.5">
                      <p className="text-[8px] text-white/25">SYSTEM</p>

                      <p className="mt-1 text-[9px] text-white/55 sm:text-[10px]">
                        Stripe Production
                      </p>
                    </div>

                    <div className="rounded-lg border border-white/5 bg-black/20 p-2.5">
                      <p className="text-[8px] text-white/25">AMOUNT</p>

                      <p className="mt-1 text-[9px] text-white/55 sm:text-[10px]">
                        $8,400
                      </p>
                    </div>
                  </div>
                </div>

                {/* Evaluation */}
                <div className="mt-3 rounded-2xl border border-blue-400/10 bg-blue-400/[0.025] p-3.5 sm:mt-4 sm:p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[8px] tracking-[0.18em] text-blue-200/45 sm:text-[9px]">
                      SENTINEL EVALUATION
                    </span>

                    <span className="font-mono text-[8px] text-white/20">
                      42ms
                    </span>
                  </div>

                  <div className="space-y-2">
                    {decisionItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.6 + index * 0.12,
                          duration: 0.4,
                        }}
                        className="flex items-center justify-between rounded-lg border border-white/5 bg-black/20 px-3 py-2"
                      >
                        <div className="flex items-center gap-2">
                          <Check
                            className={`h-3 w-3 ${
                              item.status === "REVIEW"
                                ? "text-amber-300"
                                : "text-emerald-300"
                            }`}
                          />

                          <span className="text-[8px] text-white/45 sm:text-[9px]">
                            {item.label}
                          </span>
                        </div>

                        <span
                          className={`text-[7px] tracking-wider sm:text-[8px] ${
                            item.status === "REVIEW"
                              ? "text-amber-300"
                              : "text-emerald-300"
                          }`}
                        >
                          {item.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decision */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="mt-3 rounded-2xl border border-amber-400/20 bg-amber-400/[0.035] p-3.5 sm:mt-4 sm:p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[8px] tracking-[0.18em] text-amber-200/45 sm:text-[9px]">
                        DECISION
                      </p>

                      <p className="mt-1 text-sm font-medium text-amber-100">
                        HUMAN APPROVAL
                        <span className="hidden sm:inline"> Required</span>
                      </p>
                    </div>

                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-amber-300 shadow-[0_0_14px_rgba(251,191,36,0.5)]" />
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4">
                    <button
                      type="button"
                      className="rounded-lg border border-emerald-400/20 bg-emerald-400/[0.04] py-2.5 text-[8px] tracking-wider text-emerald-300 transition-colors hover:bg-emerald-400/[0.08] sm:text-[9px]"
                    >
                      APPROVE
                    </button>

                    <button
                      type="button"
                      className="rounded-lg border border-red-400/15 bg-red-400/[0.03] py-2.5 text-[8px] tracking-wider text-red-300 transition-colors hover:bg-red-400/[0.07] sm:text-[9px]"
                    >
                      BLOCK
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.a
            href="#workforce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mx-auto mt-10 flex flex-col items-center gap-2 text-white/20 transition-colors hover:text-white/40 sm:mt-12"
          >
            <span className="text-[8px] tracking-[0.3em]">
              SCROLL TO EXPLORE
            </span>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.a>
        </div>
      </section>

      {/* =========================================================
          AI WORKFORCE
      ========================================================= */}

      <div id="workforce" className="scroll-mt-20">
        <WorkforceSection />
      </div>

      {/* =========================================================
          SENTINEL ARCHITECTURE
      ========================================================= */}

      <div id="product" className="scroll-mt-20">
        <SentinelArchitecture />
      </div>

      {/* =========================================================
          FEATURE EXPERIENCE
      ========================================================= */}

      <div id="features" className="scroll-mt-20">
        <FeatureCarousel />
      </div>

      {/* =========================================================
          INTERACTIVE DEMO
      ========================================================= */}

      <div id="demo" className="scroll-mt-20">
        <SentinelDemo />
      </div>

      {/* =========================================================
          HOW SENTINEL WORKS
      ========================================================= */}

      <div id="how-it-works" className="scroll-mt-20">
        <HowSentinelWorks />
      </div>

      {/* =========================================================
          PRICING
      ========================================================= */}

      <div id="pricing" className="scroll-mt-20">
        <PricingSection />
      </div>

      {/* =========================================================
          FOUNDER
      ========================================================= */}

      <div id="founder" className="scroll-mt-20">
        <FounderSection />
      </div>

      {/* =========================================================
          SECURITY PHILOSOPHY
      ========================================================= */}

      <div id="security" className="scroll-mt-20">
        <SecurityPhilosophy />
      </div>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#03060b] py-28 sm:py-36"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.05] blur-[130px] sm:h-[600px] sm:w-[900px] sm:blur-[140px]" />

        {/* Top light */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-6 lg:px-8">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/[0.05] px-4 py-2 sm:px-5 sm:py-2.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
            </span>

            <span className="text-[9px] font-medium tracking-[0.25em] text-blue-300 sm:text-[10px] sm:tracking-[0.3em]">
              SENTINEL · COMING SOON
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mx-auto max-w-5xl text-[clamp(2.8rem,9vw,7rem)] font-medium leading-[0.94] tracking-[-0.055em] text-white"
          >
            The next era of
            <br />
            <span className="bg-gradient-to-r from-white via-white to-blue-300 bg-clip-text text-transparent">
              AI security
            </span>
            <br />
            is coming.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base"
          >
            AI agents are becoming part of the workforce.
            <br className="hidden sm:block" />
            Sentinel is being built to make that workforce accountable.
          </motion.p>

          {/* Launch card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mx-auto mt-12 max-w-2xl sm:mt-14"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] p-6 backdrop-blur-xl sm:p-10">
              {/* Card glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-transparent opacity-70" />

              {/* Animated top line */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              />

              <div className="relative">
                {/* Logo */}
                <div className="mx-auto h-16 w-16 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050912] sm:h-20 sm:w-20">
                  <Image
                    src="/logo/soplex-sentinel.png"
                    alt="Soplex Sentinel"
                    width={420}
                    height={420}
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="mt-6 text-[9px] font-medium tracking-[0.3em] text-white/30">
                  LAUNCH STATUS
                </p>

                <h3 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  Sentinel is almost ready.
                </h3>

                <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/40">
                  We&apos;re building the control layer for the autonomous
                  workforce. Early access will open soon.
                </p>

                {/* Status indicator */}
                <div className="mx-auto mt-7 flex max-w-sm items-center justify-center gap-3 rounded-xl border border-white/[0.07] bg-black/30 px-4 py-3.5 sm:mt-8 sm:px-5 sm:py-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
                  </span>

                  <span className="text-[8px] tracking-[0.14em] text-white/50 sm:text-xs sm:tracking-[0.18em]">
                    EARLY ACCESS · OPENING SOON
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 sm:mt-20"
          >
            <p className="text-sm tracking-wide text-white/25">
              Your AI workforce is coming.
            </p>

            <p className="mt-3 text-lg font-light text-white/60 sm:text-xl">
              Give it boundaries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-white/[0.06] bg-[#02050a]">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-5 py-9 sm:px-6 lg:px-10">
          {/* Top */}
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-xl border border-white/[0.08] bg-[#050912]">
                  <Image
                    src="/logo/soplex-sentinel.png"
                    alt="Soplex Sentinel"
                    width={420}
                    height={420}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <div className="text-xs font-semibold tracking-[0.2em] text-white/75">
                    SOPLEX
                    <span className="text-blue-400">.</span>
                    SENTINEL
                  </div>

                  <p className="mt-1 max-w-xs text-[8px] leading-5 tracking-[0.1em] text-white/20">
                    INTENT-BASED RUNTIME ENFORCEMENT FOR AI AGENTS
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-[10px] text-white/30 sm:flex sm:flex-wrap sm:items-center sm:gap-5">
              <a
                href="#product"
                className="transition-colors hover:text-white/70"
              >
                Product
              </a>

              <a
                href="#features"
                className="transition-colors hover:text-white/70"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="transition-colors hover:text-white/70"
              >
                How It Works
              </a>

              <a
                href="#pricing"
                className="transition-colors hover:text-white/70"
              >
                Pricing
              </a>

              <a
                href="#founder"
                className="transition-colors hover:text-white/70"
              >
                Founder
              </a>

              <a
                href="mailto:hello@soplexai.com"
                className="transition-colors hover:text-white/70"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-3 border-t border-white/[0.05] pt-6 text-[9px] text-white/20 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} SoplexAI</span>

            <span className="tracking-[0.12em]">
              AI AGENT RUNTIME SECURITY
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}