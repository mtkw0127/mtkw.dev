import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors tracking-tight"
        >
          {SITE_CONFIG.title}
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/about"
            className="px-3 py-1.5 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            About
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
