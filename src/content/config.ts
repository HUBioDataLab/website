import { z, defineCollection } from "astro:content";

const imagePath = z.string().optional()

const pagesCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: imagePath,
    }),
});

const projects = z.enum(["crossbar", "druggen", "protgen", "other"]);

const projectSet = z
    .array(projects)
    .transform((arr) => new Set(arr));

const contactUrl = z.string().url().optional();

const membersCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        contacts: z.object({
            github: contactUrl,
            linkedin: contactUrl,
            website: contactUrl,
            twitter: contactUrl,
        }),
        current_projects: projectSet,
        former_projects: projectSet,
        draft: z.boolean(),
        image: imagePath,
    }),
});

const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        start_date: z.string(),
        end_date: z.string(),
        status: z.boolean(),
        image: imagePath,
        draft: z.boolean()
    }),
});

const publicationCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        year: z.number(),
        project: z.string(),
        draft: z.boolean(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    members: membersCollection,
    pages: pagesCollection,
    projects: projectCollection,
    publications: publicationCollection
};
