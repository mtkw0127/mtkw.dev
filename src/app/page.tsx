import { getAllPostMetas } from "@/lib/posts";
import PostList from "@/components/PostList";

export default function Home() {
  const posts = getAllPostMetas();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        記事一覧
      </h1>
      <PostList posts={posts} />
    </div>
  );
}
