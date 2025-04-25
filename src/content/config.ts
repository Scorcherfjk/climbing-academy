import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      date: z.date(),
      description: z.string().optional(),
      image: image(),
      tags: z.array(z.string()),
      title: z.string(),
    }),
});

const legalCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
    }),
});

export const collections = {
  blog: blogCollection,
  legal: legalCollection,
};
