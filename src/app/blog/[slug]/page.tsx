import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import TagBadge from "@/components/TagBadge";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const slugs = getPostSlugs();
  if (!slugs.includes(slug)) return {};

  const post = await getPostBySlug(slug);
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: post.coverImage
        ? [{ url: post.coverImage, width: 1200, height: 630 }]
        : [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const slugs = getPostSlugs();
  if (!slugs.includes(slug)) notFound();

  const post = await getPostBySlug(slug);
  const formattedDate = post.date
    ? format(new Date(post.date), "yyyy-MM-dd")
    : "";

  return (
    <article>
      <header className="mb-10 pb-8 border-b border-[var(--border)]">
        <h1 className="text-2xl font-bold text-[var(--text)] leading-snug">
          {post.title}
        </h1>
        {formattedDate && (
          <time
            dateTime={post.date}
            className="mt-2 block text-xs font-mono text-[var(--muted)]"
          >
            {formattedDate}
          </time>
        )}
        {post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        )}
      </header>
      <div
        className="prose prose-neutral dark:prose-invert lg:prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}

export const dynamic = "error";
