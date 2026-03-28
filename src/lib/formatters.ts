const monthDayFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  timeZone: "UTC",
});

const fullDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  timeZone: "UTC",
  year: "numeric",
});

const postDateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  timeZone: "UTC",
  year: "numeric",
});

export const formatNumber = (value: number) => value.toLocaleString("en-US");

export const formatMonthDay = (value: Date) => monthDayFormatter.format(value);

export const formatFullDate = (value: Date) => fullDateFormatter.format(value);

export const formatPostDate = (value: Date) => postDateFormatter.format(value);

export const formatReadingTime = (source?: string) => {
  const words = source?.match(/[A-Za-z0-9_]+/g)?.length ?? 0;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
};
