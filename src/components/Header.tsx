import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {SITE_CONFIG.title}
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/about"
            className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            About
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
