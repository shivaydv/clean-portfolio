// formate date

export function formatDateToMonthYear(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short", // 'short' gives Jan, Feb etc.
  });
}

export function formatDateToDayMonthYear(date: Date): string {
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatDateRange(start: Date, end: Date | "Present"): string {
  const startFormatted = formatDateToMonthYear(start);
  const endFormatted =
    end === "Present" ? "Present" : formatDateToMonthYear(end);
  return `${startFormatted} — ${endFormatted}`;
}
