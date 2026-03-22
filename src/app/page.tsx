import { getAllPostMetas } from "@/lib/posts";
import PostList from "@/components/PostList";

export default function Home() {
  const posts = getAllPostMetas();

  return (
    <div>
      <h1 className="text-sm font-mono text-[var(--muted)] mb-5 tracking-widest uppercase">
        Posts
      </h1>
      <PostList posts={posts} />
    </div>
  );
}
