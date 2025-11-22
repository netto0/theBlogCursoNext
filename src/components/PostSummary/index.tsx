import { formatDatetime, formatRelativeDate } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading";

type PostSummaryProps = {
  link: string;
  heading: "h1" | "h2";
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  link,
  heading,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-slate-400 block text-sm/tight"
        dateTime="2025-11-14"
        title={formatDatetime(createdAt)}
      >
        {formatRelativeDate(createdAt)}
      </time>

      <PostHeading url={link} as={heading}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
