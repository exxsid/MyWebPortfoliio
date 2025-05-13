import Image from "next/image";
import { ReactNode } from "react";

import { THEME, SHADOW } from "@/lib/color-pallete";

interface ProjectCardProps {
  coverPhotoSrc: string;
  title: string;
  description: string;
  link: string;
  children: ReactNode;
}

export default function ProjectCard({
  coverPhotoSrc,
  title,
  description,
  link,
  children,
}: ProjectCardProps) {
  return (
    <>
      <div
        className="flex flex-col items-center h-fit w-fit p-4 rounded-md border-[0.15rem] gap-4"
        style={{
          backgroundColor: THEME.accent,
          boxShadow: SHADOW.md,
          borderColor: THEME.dark,
          color: THEME.dark,
        }}
      >
        <div className="relative w-full h-0 pb-[66.67%]">
          {" "}
          <Image
            src={coverPhotoSrc}
            alt=""
            layout="fill"
            className="rounded-sm border-[0.15rem] object-cover"
            style={{
              borderColor: THEME.dark,
            }}
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full gap-1">
          <h1 className="font-extrabold text-xl line-clamp-2">{title}</h1>
          <div className="flex flex-wrap gap-2">{children}</div>
          <p className="line-clamp-6">{description}</p>
          <div className="w-full h-fit mt-4">
            <a
              href={link}
              target="_blank"
              className="p-2 border-[0.1rem] rounded-sm"
              style={{
                borderColor: THEME.dark,
                boxShadow: SHADOW.sm,
                color: THEME.dark,
                backgroundColor: THEME.secondary,
              }}
            >
              See Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
