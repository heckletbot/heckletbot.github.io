import rss from '@astrojs/rss';
import { site } from '../data/site';
import { getPosts } from '../data/posts';

export async function GET(context: { site: string | URL }) {
  const posts = await getPosts();
  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    trailingSlash: true,
    customData: '<language>zh-CN</language>',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.id}/`,
    })),
  });
}
