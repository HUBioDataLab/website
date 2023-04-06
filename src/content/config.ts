// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
const defaultCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.enum(["John Doe", "Jane Doe"]),
    date: z.date(),
    tags: z.array(z.string()),
    draft: z.boolean(),
    image: z.string().optional(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
};