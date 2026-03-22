import { SITE_CONFIG } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-2xl mx-auto px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} {SITE_CONFIG.author}
      </div>
    </footer>
  );
}
