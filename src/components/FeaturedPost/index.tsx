import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/lib/posts/queries";

export async function FeaturedPost() {
  const posts = await findAllPublicPosts();
  const post = posts[0];

  return (
    <section className="grid sm:grid-cols-2 gap-8 mb-16 group">
      <PostCoverImage
        href={`/posts/${post.slug}`}
        alt={post.title}
        src={post.coverImageUrl}
        priority
      />

      <PostSummary
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        heading="h1"
        link="#"
        title={post.title}
      />
    </section>
  );
}
