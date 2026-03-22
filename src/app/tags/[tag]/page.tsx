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
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        #{decoded}
        <span className="ml-2 text-base font-normal text-gray-500 dark:text-gray-400">
          ({posts.length}件)
        </span>
      </h1>
      <PostList posts={posts} />
    </div>
  );
}

export const dynamic = "error";
