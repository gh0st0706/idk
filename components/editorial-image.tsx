import Image from "next/image";

type EditorialImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function EditorialImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: EditorialImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-border bg-subtle shadow-editorial ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover grayscale-[12%] saturate-[0.88] transition duration-700 ease-out group-hover:scale-[1.025] group-hover:grayscale-0"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.16))]" />
    </div>
  );
}
