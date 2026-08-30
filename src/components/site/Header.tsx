import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Before & After", href: "#before-after" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/95 backdrop-blur"
          : "border-transparent bg-charcoal/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className={`font-display text-xl font-bold tracking-[0.12em] sm:text-2xl ${
            scrolled ? "text-foreground" : "text-charcoal-foreground"
          }`}

        >
          DREAM ROOF <span className="text-accent">UK</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium tracking-wide transition-colors hover:text-accent ${
                scrolled ? "text-muted-foreground" : "text-charcoal-foreground/85"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden bg-accent px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Get a Free Quote
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden ${scrolled ? "text-foreground" : "text-charcoal-foreground"}`}
          >
            {open ? <Menu className="hidden" /> : null}
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-3 text-sm font-medium text-foreground last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="my-4 bg-accent px-5 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-foreground"
            >
              Get a Free Quote
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
