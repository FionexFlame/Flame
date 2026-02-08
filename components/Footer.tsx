import site from "@/content/site.json";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
        <div className="text-sm text-bone-100/60">
          © {new Date().getFullYear()} {site.brand.name}. Built with restraint.
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/contact" className="text-bone-100/70 hover:text-bone-100 no-underline">Contact</Link>
          <a
            href={site.social.youtube}
            target="_blank"
            rel="noreferrer"
            className="text-bone-100/70 hover:text-bone-100 no-underline"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
