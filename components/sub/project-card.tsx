import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-[#2A0E61] shadow-[0_0_15px_rgba(112,66,248,0.15)] bg-[#03001427] backdrop-blur-md z-[20] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0px_10px_30px_rgba(112,66,248,0.5)]"
    >
      <Link
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="block"
      >
        <div className="relative w-full h-[250px] overflow-hidden">
          <Image
            src={src}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover rounded-t-xl hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>

        <div className="relative p-6">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030014] opacity-50 rounded-b-xl" />
          <h1 className="text-2xl font-semibold text-white tracking-wide relative z-10">{title}</h1>
          <p className="mt-2 text-gray-300 font-light leading-relaxed relative z-10">{description}</p>
        </div>
      </Link>
    </div>
  );
};
