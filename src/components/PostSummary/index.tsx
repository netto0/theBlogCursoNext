import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";

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
      <PostDate dateStr={createdAt} />

      <PostHeading url={link} as={heading}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
