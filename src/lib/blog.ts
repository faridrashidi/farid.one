export const getBlogEntryPath = (entryId: string) =>
  entryId.replace(/\.[^/.]+$/, "").replace(/\/index$/, "");
