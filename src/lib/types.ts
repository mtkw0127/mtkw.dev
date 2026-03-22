export interface PostMeta {
  slug: string;
  title: string;
  date: string; // ISO 8601: "2026-03-22"
  description: string;
  tags: string[];
  coverImage?: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}
