import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Import zod directly: the `z` re-export from 'astro:content' is deprecated in
// Astro 7. Pinned to the same version Astro resolves (4.4.3) so schema
// validation uses one zod instance, not two.
import { z } from 'zod';

/**
 * Writing collection, using Astro's Content Layer API.
 *
 * Posts with `draft: true` are excluded from listings and from the build, so
 * the outlines currently in src/content/notes/ are safe to commit — nothing
 * ships until you flip the flag.
 */
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { notes };
