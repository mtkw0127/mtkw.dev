import Link from "next/link";

interface Props {
  tag: string;
}

export default function TagBadge({ tag }: Props) {
  return (
    <Link
      href={`/tags/${encodeURIComponent(tag)}`}
      className="inline-block rounded px-2 py-0.5 text-xs font-mono font-medium bg-[var(--accent-muted)] text-[var(--accent)] hover:opacity-80 transition-opacity"
    >
      #{tag}
    </Link>
  );
}
