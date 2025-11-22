import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/lib/posts/queries";

export default async function PostsList() {
  const posts = (await findAllPublicPosts()).slice(1);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div className="flex flex-col gap-4 group" key={post.id}>
          <PostCoverImage
            href={`/posts/${post.slug}`}
            alt={post.title}
            src={post.coverImageUrl}
          />

          <PostSummary
            createdAt={post.createdAt}
            excerpt={post.excerpt}
            heading="h2"
            link="#"
            title={post.title}
          />
        </div>
      ))}
    </div>
  );
}
