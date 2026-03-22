import Link from "next/link";
import { format } from "date-fns";
import type { PostMeta } from "@/lib/types";
import TagBadge from "./TagBadge";

interface Props {
  post: PostMeta;
}

export default function PostCard({ post }: Props) {
  const formattedDate = post.date
    ? format(new Date(post.date), "MMMM d, yyyy")
    : "";

  return (
    <article className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:shadow-md transition-shadow">
      <Link href={`/blog/${post.slug}`} className="group">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h2>
      </Link>
      {formattedDate && (
        <time
          dateTime={post.date}
          className="mt-1 block text-sm text-gray-500 dark:text-gray-400"
        >
          {formattedDate}
        </time>
      )}
      {post.description && (
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
          {post.description}
        </p>
      )}
      {post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      )}
    </article>
  );
}
