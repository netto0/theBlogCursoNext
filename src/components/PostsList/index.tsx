import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { formatDatetime, formatRelativeDate } from "@/utils/format-datetime";

export default async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(post => (
        <div className="flex flex-col gap-4 group" key={post.id}>
          <PostCoverImage
            href={`/posts/${post.slug}`}
            alt={post.title}
            src={post.coverImageUrl}
          />

          <div className="flex flex-col gap-4 sm:justify-center">
            <time
              className="text-slate-400 block text-sm/tight"
              dateTime="2025-11-14"
            >
              {formatRelativeDate(post.createdAt)}
            </time>

            <PostHeading url="#" as="h2">{post.title}</PostHeading>

            <p>{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
