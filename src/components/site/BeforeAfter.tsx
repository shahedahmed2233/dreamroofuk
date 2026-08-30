type Props = {
  label: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

export function BeforeAfterCard({ label, before, after, beforeAlt, afterAlt }: Props) {
  return (
    <figure className="border border-border bg-card">
      <div className="grid grid-cols-2">
        <div className="relative">
          <img
            src={before}
            alt={beforeAlt}
            loading="lazy"
            width={900}
            height={700}
            className="aspect-4/3 w-full object-cover"
          />
          <span className="absolute left-0 top-0 bg-charcoal/85 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-charcoal-foreground">
            Before
          </span>
        </div>
        <div className="relative border-l border-border">
          <img
            src={after}
            alt={afterAlt}
            loading="lazy"
            width={900}
            height={700}
            className="aspect-4/3 w-full object-cover"
          />
          <span className="absolute left-0 top-0 bg-accent px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-foreground">
            After
          </span>
        </div>
      </div>
      <figcaption className="border-t border-border px-5 py-4">
        <h3 className="text-lg text-foreground">{label}</h3>
        <p className="mt-1 text-xs text-muted-foreground">Illustrative example of the type of work carried out.</p>
      </figcaption>
    </figure>
  );
}
