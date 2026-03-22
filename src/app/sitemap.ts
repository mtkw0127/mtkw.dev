import type { MetadataRoute } from "next";
import { getAllPostMetas } from "@/lib/posts";
import { SITE_CONFIG } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostMetas();
  const base = SITE_CONFIG.siteUrl;

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...postEntries,
  ];
}
