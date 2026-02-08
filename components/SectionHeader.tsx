export function SectionHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-3">
      {kicker ? (
        <p className="text-xs uppercase tracking-[0.22em] text-bone-100/45">
          {kicker}
        </p>
      ) : null}
      <h1 className="text-3xl sm:text-5xl font-semibold tracking-tightest leading-[1.05]">
        {title}
      </h1>
      {subtitle ? (
        <p className="text-bone-100/70 max-w-2xl leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
