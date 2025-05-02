import Image from "next/image";

import { THEME, SHADOW } from "@/lib/color-pallete";

interface TechStackProps {
  imgSrc: string;
  alt: string;
}

export default function TechStack({ imgSrc, alt }: TechStackProps) {
  return (
    <>
      <div
        className="flex border-[0.15rem] p-2 items-center justify-center"
        style={{
          boxShadow: SHADOW.md,
          borderColor: THEME.dark,
          backgroundColor: THEME.ligth,
        }}
      >
        <Image src={imgSrc} width={100} height={100} alt={alt} />
      </div>
    </>
  );
}
