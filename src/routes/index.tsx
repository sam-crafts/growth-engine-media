import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";

const WEBHOOK_URL = "https://hook.us1.make.com/REPLACE_ME";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Pricing />
        <SocialProof />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[color:var(--background)]/75 border-b border-[color:var(--border)]"
          : ""
      }`}
    >
      <div className="container-page flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]" />
          Apex Media
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <a href="#get-started" className="btn-ghost text-sm !py-2 !px-4">Get Started</a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="container-page text-center max-w-4xl">
        <div className="fade-up">
          <span className="eyebrow mb-6">Performance-guaranteed growth</span>
        </div>
        <h1 className="fade-up text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mt-4">
          Get <span className="text-primary">20+ Qualified Leads</span> a Month
          — Or We Work For Free Until You Do.
        </h1>
        <p
          className="fade-up mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          style={{ animationDelay: "80ms" }}
        >
          Done-for-you social media marketing for local service businesses and e-commerce
          brands. No fluff, no long contracts — just measurable pipeline, launched in 14 days.
        </p>
        <div
          className="fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "160ms" }}
        >
          <a href="#get-started" className="btn-primary">
            Get My Free Growth Plan
            <span aria-hidden>→</span>
          </a>
          <a href="#pricing" className="btn-ghost">See what's included</a>
        </div>

        <div
          className="fade-up mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl mx-auto"
          style={{ animationDelay: "240ms" }}
        >
          <TrustStat value="30+" label="Businesses served" />
          <TrustStat value="4.2×" label="Average ROAS" />
          <TrustStat value="12,400+" label="Leads generated" />
          <TrustStat value="< 24h" label="Response time" />
        </div>
      </div>
    </section>
  );
}

function TrustStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-2xl md:text-3xl font-bold text-foreground">{value}</div>
      <div className="text-xs md:text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

/* ---------------- Problem ---------------- */
function Problem() {
  const pains = [
    {
      title: "Leads dry up the moment you stop posting.",
      body: "You're stuck being the marketer, the operator, and the closer — and it's costing you booked jobs.",
    },
    {
      title: "You've burned money on ads that never converted.",
      body: "Agencies promised the world, showed you vanity metrics, and left you with a bigger credit card bill.",
    },
    {
      title: "You have no idea what's actually working.",
      body: "No dashboards, no reports, no clue which channel is driving real revenue this month.",
    },
  ];
  return (
    <section className="py-20 md:py-28 border-t border-[color:var(--border)]">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">The problem</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Sound familiar?
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {pains.map((p) => (
            <div key={p.title} className="card-surface">
              <div className="text-primary text-2xl font-display font-bold">—</div>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    {
      tag: "01",
      title: "Paid Ads Management",
      outcome:
        "We manage your ad spend across Meta, TikTok, and Google to consistently generate leads under $35 each.",
    },
    {
      tag: "02",
      title: "Content & Social Growth",
      outcome:
        "Weekly short-form content and organic strategy that turns your feed into a lead-generating asset — not a hobby.",
    },
    {
      tag: "03",
      title: "Lead Generation Systems",
      outcome:
        "Landing pages, CRM automation, and follow-up sequences that convert clicks into booked calls on autopilot.",
    },
  ];
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            One team. Three levers. Real pipeline.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="card-surface group hover:border-[color:var(--primary)] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">{s.tag}</span>
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  →
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
function Pricing() {
  const stack = [
    { name: "Paid Ad Campaign Setup & Management", value: "$1,500" },
    { name: "Landing Page + Funnel Build", value: "$1,000" },
    { name: "Weekly Reporting & Optimization", value: "$500/mo" },
    { name: "Lead Follow-Up Automation System", value: "$750" },
  ];
  return (
    <section id="pricing" className="py-20 md:py-28 border-t border-[color:var(--border)]">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">The offer</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Everything you need to scale — one flat monthly rate.
          </h2>
          <p className="mt-4 text-muted-foreground">
            No agency runaround. No à la carte pricing games. One package built to make you money.
          </p>
        </div>

        <div className="mt-14 max-w-2xl mx-auto card-surface !p-0 overflow-hidden">
          <div className="p-8 md:p-10 border-b border-[color:var(--border)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-display text-2xl font-bold">The Growth Engine</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Full-service. Launched in 14 days.
                </div>
              </div>
              <span className="text-xs bg-primary text-primary-foreground font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
          </div>

          <ul className="divide-y divide-[color:var(--border)]">
            {stack.map((s) => (
              <li key={s.name} className="flex items-center justify-between px-8 md:px-10 py-4">
                <span className="flex items-center gap-3 text-sm md:text-base">
                  <span className="text-primary">✓</span> {s.name}
                </span>
                <span className="text-sm text-muted-foreground">{s.value} value</span>
              </li>
            ))}
          </ul>

          <div className="px-8 md:px-10 py-6 bg-[color:var(--surface-elevated)] flex items-baseline justify-between flex-wrap gap-3">
            <span className="text-sm text-muted-foreground">Total value</span>
            <span className="line-through text-muted-foreground">$3,750</span>
          </div>

          <div className="px-8 md:px-10 py-8 text-center">
            <div className="text-sm uppercase tracking-widest text-muted-foreground">
              Today's Investment
            </div>
            <div className="mt-2 font-display text-5xl md:text-6xl font-bold text-primary">
              $997<span className="text-xl text-muted-foreground font-medium">/mo</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
              <strong className="text-foreground">Our guarantee:</strong> if we don't deliver
              20+ qualified leads in your first 30 days, you don't pay another cent until we do.
            </p>
            <a href="#get-started" className="btn-primary mt-6">
              Claim Your Spot
              <span aria-hidden>→</span>
            </a>
            <div className="mt-3 text-xs text-muted-foreground">
              Only 3 new client slots this month.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Social Proof ---------------- */
function SocialProof() {
  const testimonials = [
    {
      quote:
        "We went from 4 booked jobs a week to 22. Apex rebuilt our whole funnel and it just prints leads now.",
      name: "Marcus Reed",
      role: "Owner, Reed Roofing Co.",
      stat: "+450% booked jobs",
    },
    {
      quote:
        "Our cost per lead dropped from $84 to $19 in the first six weeks. I finally trust an agency again.",
      name: "Sofia Álvarez",
      role: "Founder, Bloom Skincare (DTC)",
      stat: "$19 CPL",
    },
    {
      quote:
        "They launched everything in under two weeks. We closed $46K in new contracts the first month.",
      name: "Danny Chen",
      role: "Ops Lead, Chen HVAC",
      stat: "$46K in month one",
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Results</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Real numbers from real operators.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-surface flex flex-col">
              <div className="text-primary font-display text-2xl font-bold">{t.stat}</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-[color:var(--border)] text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-muted-foreground text-xs">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Lead Form ---------------- */
type FormState = "idle" | "submitting" | "success" | "error";

function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);
    const payload = {
      name: fd.get("name"),
      businessName: fd.get("businessName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      monthlyAdSpend: fd.get("monthlyAdSpend"),
      challenge: fd.get("challenge"),
      submittedAt: new Date().toISOString(),
    };
    setState("submitting");
    setErrorMsg("");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setState("success");
    } catch (err) {
      setState("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <section id="get-started" className="py-20 md:py-28 border-t border-[color:var(--border)]">
      <div className="container-page grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <span className="eyebrow">Get started</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Book your free growth plan.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your business and we'll send back a personalized breakdown of what
            we'd do in the first 30 days — no obligation, no pitch decks.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Custom lead-flow audit within 24 hours",
              "Ad spend & offer recommendations",
              "Zero cost, zero commitment",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="text-primary mt-0.5">✓</span> {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 card-surface">
          {state === "success" ? (
            <div className="text-center py-8">
              <div className="mx-auto h-14 w-14 rounded-full bg-primary/15 flex items-center justify-center text-primary text-2xl">
                ✓
              </div>
              <h3 className="mt-6 text-2xl font-display font-bold">You're in.</h3>
              <p className="mt-3 text-muted-foreground">
                We'll be in touch within 24 hours with your custom growth plan.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={onSubmit} className="grid gap-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your name" name="name" required />
                <Field label="Business name" name="businessName" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <SelectField
                label="Monthly ad spend"
                name="monthlyAdSpend"
                required
                options={[
                  "Not running ads yet",
                  "Under $1,000 / mo",
                  "$1,000 – $5,000 / mo",
                  "$5,000 – $20,000 / mo",
                  "$20,000+ / mo",
                ]}
              />
              <SelectField
                label="Biggest marketing challenge"
                name="challenge"
                required
                options={[
                  "Not enough qualified leads",
                  "Ad spend isn't converting",
                  "No visibility into what's working",
                  "Can't keep up with content",
                  "Scaling past current revenue plateau",
                ]}
              />

              <button
                type="submit"
                disabled={state === "submitting"}
                className="btn-primary mt-2 w-full"
              >
                {state === "submitting" ? "Sending..." : "Get My Free Growth Plan"}
                {state !== "submitting" && <span aria-hidden>→</span>}
              </button>

              {state === "error" && (
                <p className="text-sm text-[color:var(--destructive)] mt-1">
                  {errorMsg || "Couldn't submit. Please try again or email hello@apexmedia.co."}
                </p>
              )}
              <p className="text-xs text-muted-foreground text-center">
                Your info is safe. We'll never spam or sell it.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="text-muted-foreground">{label}{required && " *"}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg bg-[color:var(--input)] border border-[color:var(--border)] px-4 py-3 text-foreground outline-none focus:border-[color:var(--primary)] focus:ring-2 focus:ring-[color:var(--primary)]/30 transition"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="text-muted-foreground">{label}{required && " *"}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-1.5 w-full rounded-lg bg-[color:var(--input)] border border-[color:var(--border)] px-4 py-3 text-foreground outline-none focus:border-[color:var(--primary)] focus:ring-2 focus:ring-[color:var(--primary)]/30 transition"
      >
        <option value="" disabled>Select an option</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "How long is the contract?",
      a: "Month-to-month. No long-term lock-ins. We earn your business every 30 days — if we're not delivering, you walk. Simple as that.",
    },
    {
      q: "What if it doesn't work?",
      a: "Our guarantee is 20+ qualified leads in your first 30 days. If we miss that mark, you don't pay another cent until we hit it. Your risk is zero.",
    },
    {
      q: "How fast will I see results?",
      a: "Campaigns typically launch within 14 days of onboarding. Most clients see their first qualified leads within the first 7–10 days of ads going live.",
    },
    {
      q: "Do I need existing ad accounts or a big following?",
      a: "No. We set up ad accounts, pixels, tracking, and everything else from scratch if needed. Following size doesn't matter — we're focused on paid distribution and conversion.",
    },
    {
      q: "What industries do you work with?",
      a: "We specialize in local service businesses (home services, healthcare, fitness, real estate) and e-commerce brands doing $10K–$500K/mo. If we're not a fit, we'll tell you.",
    },
  ];
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Answers to the stuff you're actually wondering.
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="card-surface !py-5 !px-6 group"
              open={i === 0}
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-base">
                {f.q}
                <span className="text-primary text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#get-started" className="btn-primary">
            Get My Free Growth Plan
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] py-12 mt-10">
      <div className="container-page flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]" />
            Apex Media
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Performance marketing for operators who'd rather run their business.
          </p>
          <a
            href="mailto:hello@apexmedia.co"
            className="text-sm text-foreground/90 hover:text-primary transition mt-2 inline-block"
          >
            hello@apexmedia.co
          </a>
        </div>
        <div className="flex items-center gap-3">
          {[
            { label: "Instagram", icon: "IG" },
            { label: "LinkedIn", icon: "IN" },
            { label: "X / Twitter", icon: "X" },
            { label: "YouTube", icon: "YT" },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="h-10 w-10 rounded-full border border-[color:var(--border)] flex items-center justify-center text-xs text-muted-foreground hover:text-primary hover:border-[color:var(--primary)] transition"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="container-page mt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Apex Media. All rights reserved.
      </div>
    </footer>
  );
}
