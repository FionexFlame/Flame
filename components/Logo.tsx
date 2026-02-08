import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3 no-underline">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-ink-850 shadow-edge">
        <span className="h-2 w-2 rounded-full bg-ember-500" />
      </span>
      <span className="text-lg font-semibold tracking-tightest text-bone-100">
        Flame
      </span>
      <span className="text-sm text-bone-100/50 group-hover:text-bone-100/70 transition">
        / threshold
      </span>
    </Link>
  );
}
