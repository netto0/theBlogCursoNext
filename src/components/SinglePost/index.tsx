import { findPostBySlugCached } from "@/lib/posts/queries";
import { PostDate } from "../PostDate";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { SafeMarkdown } from "../SafeMarkdown";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <article className="flex flex-col mb-16">
      <header className="group flex flex-col gap-4 mb-4">
        <Image
          className="rounded-xl"
          src={post.coverImageUrl}
          alt={post.title}
          width={1200}
          height={720}
        />
        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>
        <p>
          {post.author} | {<PostDate dateStr={post.createdAt} />}
        </p>
      </header>
      <p className="text-xl mb-4 text-slate-400">{post.excerpt}</p>
      <SafeMarkdown markdown={post.content} />
    </article>
  );
}
