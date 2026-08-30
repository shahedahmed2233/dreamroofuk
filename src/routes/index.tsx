import { createFileRoute } from "@tanstack/react-router";
import {
  Layers,
  Square,
  Wrench,
  Droplets,
  Hammer,
  MapPin,
  Mail,
  Clock,
  ShieldCheck,
  Handshake,
  PlayCircle,
} from "lucide-react";

import { Header, NAV_LINKS } from "@/components/site/Header";
import { ContactForm } from "@/components/site/ContactForm";
import { BeforeAfterCard } from "@/components/site/BeforeAfter";

import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

const TITLE = "Dream Roof UK — Professional Roofing Services in London";
const DESCRIPTION =
  "Dream Roof UK provides professional roofing services in London and surrounding areas. Slate roofing, flat roofs, roof repairs, guttering and lead work with 20+ years of experience.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  {
    icon: Layers,
    title: "Slate Roofing",
    text: "New slate roofs and slate re-roofing, laid to a neat, weather-tight finish.",
  },
  {
    icon: Square,
    title: "Flat Roofs",
    text: "Flat roof installation and replacement for extensions, dormers and outbuildings.",
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    text: "Leak investigation, slipped tiles, flashing faults and storm damage repairs.",
  },
  {
    icon: Droplets,
    title: "Guttering",
    text: "Gutter, fascia and downpipe repairs and replacement to keep water moving away.",
  },
  {
    icon: Hammer,
    title: "Lead Work",
    text: "Hand-dressed lead flashings, valleys and chimney details finished properly.",
  },
];

const REASONS = [
  { icon: Clock, title: "20+ Years Experience", text: "Experienced roofing specialists." },
  { icon: Hammer, title: "Specialist Workmanship", text: "Slate, lead work, flat roofs and repairs." },
  { icon: MapPin, title: "London Based Service", text: "Serving London and surrounding areas." },
  { icon: Handshake, title: "Professional Service", text: "Reliable and straightforward approach." },
];

const GALLERY = [
  { src: work1, alt: "Completed slate roof on a London home" },
  { src: work2, alt: "Scaffolded property during a roof replacement" },
  { src: work3, alt: "Lead flashing detail at a chimney stack" },
  { src: work4, alt: "Newly finished flat roof on an extension" },
  { src: work5, alt: "New guttering and fascia along the eaves" },
  { src: work6, alt: "London rooftops with slate roofs and chimney pots" },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section id="home" className="relative isolate">
        <img
          src={hero}
          alt="Newly completed slate roof on a London terraced house"
          width={1600}
          height={1000}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-charcoal/78" />
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:pb-36 lg:pt-52">
          <p className="eyebrow">Roofing London 🇬🇧</p>
          <h1 className="mt-5 max-w-4xl text-4xl text-charcoal-foreground sm:text-6xl lg:text-7xl">
            Professional Roofing Services in London
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal-foreground/80 sm:text-lg">
            Slate, lead work, flat roofs &amp; repairs. 20+ years of experience serving London and
            surrounding areas.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="bg-accent px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get a Free Quote
            </a>
            <a
              href="#work"
              className="border border-charcoal-foreground/40 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-charcoal-foreground transition-colors hover:border-accent hover:text-accent"
            >
              View Our Work
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-charcoal-foreground/20 pt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal-foreground/75">
            <span>20+ Years Experience</span>
            <span className="text-accent">•</span>
            <span>Roofing Specialists</span>
            <span className="text-accent">•</span>
            <span>London &amp; Surrounding Areas</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <img
              src={about}
              alt="Roofer laying slate tiles on a pitched roof"
              loading="lazy"
              width={1200}
              height={1000}
              className="aspect-4/3 w-full object-cover"
            />
            <div className="absolute -bottom-5 -right-2 hidden bg-charcoal px-7 py-5 sm:block">
              <p className="font-display text-4xl text-accent">20+</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal-foreground/80">
                Years Experience
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow">About Us</p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Roofing Expertise You Can Rely On</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Dream Roof UK is a roofing company working across London and the surrounding areas.
                With more than 20 years of hands-on experience, we handle everything from small
                repairs through to full slate re-roofs, always with the same careful approach.
              </p>
              <p>
                Our work covers slate roofing, flat roofs, roof repairs, guttering and lead work. That
                specialist mix means we understand how London's older housing stock is built, and how
                traditional details such as valleys, flashings and chimney stacks should be finished.
              </p>
              <p>
                We keep things straightforward: look at the roof properly, explain what needs doing,
                and carry out the work to a standard we're happy to put our name to.
              </p>
            </div>
            <a
              href="#services"
              className="mt-8 inline-block border border-foreground/20 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-accent hover:text-accent"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Our Roofing Services</h2>
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="group bg-card p-8 transition-colors hover:bg-background">
                <s.icon className="size-7 text-accent" strokeWidth={1.5} />
                <h3 className="mt-6 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            ))}
            <article className="flex flex-col justify-between bg-charcoal p-8">
              <div>
                <h3 className="text-xl text-charcoal-foreground">Not Sure What You Need?</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-foreground/70">
                  Describe the problem and we'll advise on the right approach for your roof.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-block self-start bg-accent px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-opacity hover:opacity-90"
              >
                Get a Free Quote
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow">Why Choose Dream Roof UK</p>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Why Choose Us</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r) => (
            <div key={r.title} className="rule-accent">
              <r.icon className="mb-4 size-6 text-accent" strokeWidth={1.5} />
              <h3 className="text-lg">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section id="before-after" className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow">The Difference</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Before &amp; After</h2>
          <p className="mt-4 max-w-2xl text-[15px] text-muted-foreground">
            See the difference professional roofing work can make.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <BeforeAfterCard
              label="Roof Repair"
              before={before1}
              after={after1}
              beforeAlt="Damaged slate roof with missing tiles"
              afterAlt="Repaired slate roof with a neat finish"
            />
            <BeforeAfterCard
              label="Roof Renovation"
              before={before2}
              after={after2}
              beforeAlt="Worn felt flat roof with cracks and ponding water"
              afterAlt="New flat roof with a clean, sealed surface"
            />
            <BeforeAfterCard
              label="Roofing Improvement"
              before={before3}
              after={after3}
              beforeAlt="Rusted, sagging guttering on a brick house"
              afterAlt="New black guttering neatly installed"
            />
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            Images shown are illustrative examples of roofing work, not photographs of Dream Roof UK
            projects.
          </p>
        </div>
      </section>

      {/* OUR WORK */}
      <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow">Gallery</p>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Our Recent Work</h2>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {GALLERY.map((g) => (
            <div key={g.alt} className="overflow-hidden">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={900}
                height={900}
                className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section id="videos" className="bg-charcoal py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow">Video</p>
          <h2 className="mt-4 text-3xl text-charcoal-foreground sm:text-4xl lg:text-5xl">
            See Our Work In Action
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] text-charcoal-foreground/70">
            Watch our latest roofing projects and work in action.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="flex aspect-video flex-col items-center justify-center border border-charcoal-foreground/15 bg-slate-deep/60 text-center"
              >
                <PlayCircle className="size-12 text-accent" strokeWidth={1.2} />
                <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-charcoal-foreground/80">
                  Video Coming Soon
                </p>
                <p className="mt-1 text-xs text-charcoal-foreground/45">Project {n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 border border-border bg-card p-10 sm:p-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Service Area</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Roofing Services Across London</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              We work on homes and commercial properties throughout the capital and the towns that
              border it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {["London", "Greater London", "Surrounding Areas"].map((area) => (
              <span
                key={area}
                className="flex items-center gap-2 border border-border px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em]"
              >
                <MapPin className="size-4 text-accent" strokeWidth={1.5} />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Need Roofing Work? Get In Touch</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Contact Dream Roof UK today to discuss your roofing requirements and request a quote.
            </p>
            <a
              href="mailto:info@dream-roof.co.uk"
              className="mt-8 inline-flex items-center gap-3 border border-border bg-card px-5 py-4 text-sm font-medium transition-colors hover:border-accent"
            >
              <Mail className="size-5 text-accent" strokeWidth={1.5} />
              info@dream-roof.co.uk
            </a>
            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-3">
                <MapPin className="size-4 text-accent" strokeWidth={1.5} />
                London &amp; surrounding areas
              </p>
              <p className="flex items-center gap-3">
                <ShieldCheck className="size-4 text-accent" strokeWidth={1.5} />
                Slate • Flat roofs • Repairs • Guttering • Lead work
              </p>
            </div>
          </div>
          <div className="border border-border bg-card p-7 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-display text-2xl font-bold tracking-[0.12em] text-charcoal-foreground">
                DREAM ROOF <span className="text-accent">UK</span>
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-foreground/65">
                Professional roofing services in London &amp; surrounding areas.
              </p>
            </div>
            <div>
              <h3 className="text-sm tracking-[0.16em] text-charcoal-foreground">Navigate</h3>
              <ul className="mt-4 grid grid-cols-2 gap-y-2.5">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-charcoal-foreground/65 transition-colors hover:text-accent"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm tracking-[0.16em] text-charcoal-foreground">Contact</h3>
              <a
                href="mailto:info@dream-roof.co.uk"
                className="mt-4 inline-block text-sm text-charcoal-foreground/65 transition-colors hover:text-accent"
              >
                info@dream-roof.co.uk
              </a>
              <p className="mt-3 text-sm text-charcoal-foreground/65">London • Greater London</p>
            </div>
          </div>
          <div className="mt-12 border-t border-charcoal-foreground/15 pt-6 text-xs text-charcoal-foreground/50">
            © 2026 Dream Roof UK. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
