import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTags, getPostMetasByTag } from "@/lib/posts";
import PostList from "@/components/PostList";

type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  return {
    title: `#${decoded}`,
    description: `Posts tagged with "${decoded}"`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const allTags = getAllTags();

  if (!allTags.includes(decoded)) notFound();

  const posts = getPostMetasByTag(decoded);

  return (
    <div>
      <h1 className="text-sm font-mono text-[var(--muted)] mb-5 tracking-widest uppercase flex items-center gap-2">
        <span className="text-[var(--accent)]">#{decoded}</span>
        <span>({posts.length})</span>
      </h1>
      <PostList posts={posts} />
    </div>
  );
}

export const dynamic = "error";
