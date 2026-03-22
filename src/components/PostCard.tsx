import Link from "next/link";
import { format } from "date-fns";
import type { PostMeta } from "@/lib/types";
import TagBadge from "./TagBadge";

interface Props {
  post: PostMeta;
}

export default function PostCard({ post }: Props) {
  const formattedDate = post.date
    ? format(new Date(post.date), "yyyy-MM-dd")
    : "";

  return (
    <article className="group border border-[var(--border)] bg-[var(--surface)] rounded-lg p-5 hover:border-[var(--accent)] transition-colors duration-200">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-base font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors leading-snug">
          {post.title}
        </h2>
      </Link>
      {formattedDate && (
        <time
          dateTime={post.date}
          className="mt-1.5 block text-xs font-mono text-[var(--muted)]"
        >
          {formattedDate}
        </time>
      )}
      {post.description && (
        <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
          {post.description}
        </p>
      )}
      {post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      )}
    </article>
  );
}
