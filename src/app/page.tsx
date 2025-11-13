import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import PostsList from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <p className="text-justify px-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore fuga
        atque modi, saepe perspiciatis repellendus aperiam inventore facere
        eaque voluptatum? Asperiores, distinctio deserunt delectus voluptatum
        impedit nesciunt eos doloremque. Omnis! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Dolore fuga atque modi, saepe perspiciatis
        repellendus aperiam inventore facere eaque voluptatum? Asperiores,
        distinctio deserunt delectus voluptatum impedit nesciunt eos doloremque.
        Omnis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
        fuga atque modi, saepe perspiciatis repellendus aperiam inventore facere
        eaque voluptatum? Asperiores, distinctio deserunt delectus voluptatum
        impedit nesciunt eos doloremque. Omnis! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Dolore fuga atque modi, saepe perspiciatis
        repellendus aperiam inventore facere eaque voluptatum? Asperiores,
        distinctio deserunt delectus voluptatum impedit nesciunt eos doloremque.
        Omnis!
      </p>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <h1 className="text-6xl">Footer</h1>
    </Container>
  );
}
