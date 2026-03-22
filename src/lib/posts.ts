import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import type { Post, PostMeta } from "./types";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: { dark: "github-dark", light: "github-light" },
    })
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    description: data.description ?? "",
    tags: data.tags ?? [],
    coverImage: data.coverImage,
    contentHtml: String(result),
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map(getPostBySlug));
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostMetas(): PostMeta[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => {
      const fullPath = path.join(POSTS_DIR, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        description: data.description ?? "",
        tags: data.tags ?? [],
        coverImage: data.coverImage,
      } satisfies PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllTags(): string[] {
  const metas = getAllPostMetas();
  const tagSet = new Set<string>();
  metas.forEach((m) => m.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function getPostMetasByTag(tag: string): PostMeta[] {
  return getAllPostMetas().filter((m) => m.tags.includes(tag));
}
