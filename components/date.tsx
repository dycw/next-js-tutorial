import { parseISO, format } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  const content = format(date, "LLLL d, yyyy");
  return <time dateTime={dateString}>{content}</time>;
}
