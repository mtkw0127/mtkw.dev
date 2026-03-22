---
title: "Hello, World!"
date: "2026-03-22"
description: "ブログを始めました。このファイルがfrontmatterのリファレンスです。"
tags: ["next.js", "ブログ"]
---

## はじめに

このブログはNext.js + Vercelで動いています。記事は`content/posts/`フォルダに`.md`ファイルとして保存します。

## frontmatterの書き方

各記事の冒頭に以下の形式でメタ情報を記述します。

```yaml
---
title: "記事のタイトル"
date: "2026-03-22"          # ISO 8601形式
description: "記事の概要"    # OGタグにも使われます
tags: ["tag1", "tag2"]      # 配列形式
coverImage: "/images/cover.jpg"  # 省略可
---
```

## Markdown記法

### 見出し

`##`でh2、`###`でh3などが使えます。

### コードブロック

```typescript
const greeting = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greeting("World"));
```

### リスト

- 箇条書き
- このように書けます
  - ネストも可能

### テーブル

| 項目 | 説明 |
|------|------|
| Next.js | Reactフレームワーク |
| Vercel | ホスティングサービス |
| gray-matter | frontmatter解析ライブラリ |

## 記事の追加方法

```bash
# 新しい記事を作成
touch content/posts/my-new-post.md

# 書いたらGitにpush
git add content/posts/my-new-post.md
git commit -m "post: 新しい記事"
git push
# → Vercelが自動でデプロイします
```
