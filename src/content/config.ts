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

export const collections = {
  blog: blogCollection,
};
