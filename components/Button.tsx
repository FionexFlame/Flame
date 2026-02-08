import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function Button({ href, children, variant = "primary" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium no-underline transition shadow-soft";
  const styles =
    variant === "primary"
      ? "bg-bone-100 text-ink-950 hover:bg-bone-50"
      : "bg-transparent text-bone-100/80 hover:text-bone-100 shadow-edge hover:shadow-soft";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
