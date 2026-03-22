import type { PostMeta } from "@/lib/types";
import PostCard from "./PostCard";

interface Props {
  posts: PostMeta[];
}

export default function PostList({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <p className="text-gray-500 dark:text-gray-400">No posts found.</p>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
