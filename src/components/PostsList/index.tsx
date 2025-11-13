import { postRepository } from "@/repositories/post";

export default async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <>
      {posts.map((post, index) => (
        <p key={`post${index}`}>
          {post.title}
        </p>
      ))}
    </>
  );
}
