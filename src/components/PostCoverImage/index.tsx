import Image from "next/image";
import Link from "next/link";

type PostCoverImageProps = {
  href: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function PostCoverImage({
  href,
  src,
  alt,
  width = 1200,
  height = 720,
  priority = true,
}: PostCoverImageProps) {
  return (
    <Link href={href} className="w-full h-full overflow-hidden rounded-xl">
      <Image
        className="w-full h-full group-hover:scale-105 object-cover object-center transition"
        src={src}
        width={width}
        height={height}
        alt={alt}
        priority={priority}
      />
    </Link>
  );
}
