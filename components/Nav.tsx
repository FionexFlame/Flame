import Link from "next/link";

const items = [
  { href: "/mission", label: "Mission" },
  { href: "/impact", label: "Impact" },
  { href: "/library", label: "Books" },
  { href: "/workshops", label: "Workshops" },
  { href: "/watch", label: "Watch" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm text-bone-100/70 hover:text-bone-100 transition no-underline"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
