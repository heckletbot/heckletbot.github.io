# Pinocchio

caocheng 的个人博客。用 [Astro](https://astro.build) 写成的静态站，部署在 GitHub Pages。

原来的 Hexo + Fluid 主题只留下了生成后的 HTML。这次改成源码在仓库里、页面以阅读为主：衬线标题、窄栏正文、浅色纸色，也可以切到深色。

## 写一篇文章

在 `src/content/posts/` 里新建一个 Markdown 文件：

```md
---
title: 标题
description: 列表和摘要里显示的一段话
date: 2026-11-19
tags:
  - 笔记
draft: false
---

正文从这里开始。
```

`draft: true` 的文章不会出现在页面和 RSS 里。

数字范围里的 `~` 要写成 `\~`，例如 `1\~2`。单独的 `~` 会被 Markdown 当成删除线。

本地预览：

```bash
npm install
npm run dev
```

发布前在仓库根目录构建。构建结果会同步到根目录，GitHub Pages 直接从 `main` 提供这些文件：

```bash
npm run build
```

旧地址做了跳转，例如 `/2024/11/13/moka/` 会到 `/posts/moka/`。
