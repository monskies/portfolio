type MarqueeProps = {
  items: string[];
  direction: "ltr" | "rtl";
  duration?: number; // seconds per loop
  repeat?: number;
  itemClassName?: string;
  className?: string;
};

export default function Marquee({
  items,
  direction,
  duration = 30,
  repeat = 2,
  itemClassName = "",
  className = "",
}: MarqueeProps) {
  const group = Array.from({ length: repeat }).flatMap((_, r) =>
    items.map((text, i) => (
      <span key={`${r}-${i}`} className={`shrink-0 whitespace-nowrap ${itemClassName}`}>
        {text}
      </span>
    ))
  );

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="marquee-track"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction === "ltr" ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center">{group}</div>
        <div className="flex shrink-0 items-center" aria-hidden>{group}</div>
      </div>
    </div>
  );
}
