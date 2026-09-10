import { getCollection } from "astro:content";

export const getSortedBlogPosts = async () =>
  (await getCollection("blog")).sort(
    (left, right) =>
      right.data.publishedAt.getTime() - left.data.publishedAt.getTime(),
  );

export const getBlogEntryPath = (entryId: string) =>
  entryId.replace(/\.[^/.]+$/, "").replace(/\/index$/, "");
