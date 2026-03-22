import { SITE_CONFIG } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-auto">
      <div className="max-w-2xl mx-auto px-4 py-6 text-center text-xs text-[var(--muted)] font-mono">
        © {new Date().getFullYear()} {SITE_CONFIG.author}
      </div>
    </footer>
  );
}
