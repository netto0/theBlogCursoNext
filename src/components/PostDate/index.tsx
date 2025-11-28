import { formatDatetime, formatRelativeDate } from "@/utils/format-datetime";

type PostDateProps = {
  dateStr: string;
  relativeDate?: boolean;
};

export function PostDate({ dateStr, relativeDate = false }: PostDateProps) {
  return (
    <time
      className="text-slate-400 text-sm/tight"
      dateTime="2026-3-23"
      title={relativeDate ? formatDatetime(dateStr) : undefined}
    >
      {relativeDate ? formatRelativeDate(dateStr) : formatDatetime(dateStr)}
    </time>
  );
}
