import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { profile } from '../data/resume';

/**
 * RSS feed for the notes collection, at /rss.xml.
 *
 * Applies the same `!draft` filter as src/pages/notes/index.astro, so an
 * unpublished note cannot leak through the feed while being hidden on the site.
 * The feed is valid (and empty) until the first note ships, which is why it can
 * land before any writing is published.
 *
 * `site` comes from astro.config.mjs, so feed URLs follow the custom domain
 * automatically and need no edit on a domain move.
 */
export const GET: APIRoute = async (context) => {
  const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: `${profile.name} — Notes`,
    description:
      'Notes on Kubernetes platform engineering, reducing operational toil, and shipping quickly inside a continuously audited environment.',
    site: context.site!,
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.date,
      link: `/notes/${note.id}/`,
      categories: [...note.data.tags],
    })),
    customData: '<language>en-us</language>',
  });
};
