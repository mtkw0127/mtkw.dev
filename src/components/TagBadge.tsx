import Link from "next/link";

interface Props {
  tag: string;
}

export default function TagBadge({ tag }: Props) {
  return (
    <Link
      href={`/tags/${encodeURIComponent(tag)}`}
      className="inline-block rounded-full bg-gray-100 px-3 py-0.5 text-xs font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
    >
      {tag}
    </Link>
  );
}
