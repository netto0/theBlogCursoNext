import Link from "next/link";

type PostHeadingProps = {
  url: string;
  as?: "h1" | "h2";
  children: React.ReactNode;
};

export function PostHeading({
  url,
  children,
  as: Tag = "h1",
}: PostHeadingProps) {
  const classesMap = {
    h1: "group-hover:text-slate-400 transition text-2xl/tight font-extrabold sm:text-3xl",
    h2: "group-hover:text-slate-400 transition text-2xl/tight font-bold",
  };

  return (
    <Tag className={classesMap[Tag]}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
