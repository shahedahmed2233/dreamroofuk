import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

type Props = {
  label: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

export function BeforeAfterCard({ label, before, after, beforeAlt, afterAlt }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      setDragging(true);
      updateFromClientX(e.clientX);
    },
    [updateFromClientX],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragging) return;
      updateFromClientX(e.clientX);
    },
    [dragging, updateFromClientX],
  );

  const stopDragging = useCallback(() => setDragging(false), []);

  return (
    <figure className="border border-border bg-card shadow-sm">
      <div
        ref={containerRef}
        role="slider"
        aria-label={`${label} before and after comparison`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
          if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
        }}
        className={`relative aspect-4/3 w-full touch-none select-none overflow-hidden outline-none ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {/* After image (base layer, fully visible) */}
        <img
          src={after}
          alt={afterAlt}
          loading="lazy"
          width={900}
          height={700}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Before image clipped from the left */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt={beforeAlt}
            loading="lazy"
            width={900}
            height={700}
            draggable={false}
            className="absolute inset-0 h-full object-cover"
            style={{ width: containerRef.current?.clientWidth ?? "100%" }}
          />
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute left-3 top-3 bg-charcoal/85 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-charcoal-foreground">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 bg-accent px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-foreground">
          After
        </span>

        {/* Divider line + handle */}
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${position}%` }}
        >
          <div className="absolute inset-y-0 -ml-px w-0.5 bg-accent shadow-[0_0_8px_rgba(0,0,0,0.4)]" />
          <div
            className={`absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-accent bg-charcoal text-accent shadow-lg transition-transform ${
              dragging ? "scale-110" : ""
            }`}
          >
            <ChevronsLeftRight className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
      </div>
      <figcaption className="border-t border-border px-5 py-4">
        <h3 className="text-lg text-foreground">{label}</h3>
        <p className="mt-1 text-xs text-muted-foreground">Drag the handle to compare before and after.</p>
      </figcaption>
    </figure>
  );
}
