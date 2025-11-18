import { formatRelativeDate } from "@/utils/format-datetime";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function FeaturedPost() {
  return (
    <section className="grid sm:grid-cols-2 gap-8 mb-16 group">
      <PostCoverImage
        href="#"
        alt="Alt da imagem"
        src="/images/bryen_2.png"
        priority
      />

      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-400 block text-sm/tight"
          dateTime="2025-11-14"
        >
          {formatRelativeDate("2025-11-18T09:57:35.133Z")}
        </time>

        <PostHeading url="#">
          Eos error recusandae omnis voluptates amet, quo architecto aut
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure
          iusto, eum obcaecati exercitationem nobis odio pariatur, commodi
          laboriosam ipsam a? Eos error recusandae omnis voluptates amet, quo
          architecto aut.
        </p>
      </div>
    </section>
  );
}
