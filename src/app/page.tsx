import { Container } from "@/components/Container";
import { FeaturedPost } from "@/components/FeaturedPost";
import { Header } from "@/components/Header";
import PostsList from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <FeaturedPost />

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <h1 className="text-6xl">Footer</h1>
    </Container>
  );
}
