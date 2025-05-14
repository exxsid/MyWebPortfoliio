import Image from "next/image";
import { THEME, SHADOW } from "@/lib/color-pallete";

interface AboutIconProps {
  imgSrc: string;
  title: string;
}

export default function AboutIcon({ imgSrc, title }: AboutIconProps) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        <div
          className="border-[0.15rem] rounded-full p-5"
          style={{
            boxShadow: SHADOW.sm,
            borderColor: THEME.dark,
            backgroundColor: THEME.accent,
          }}
        >
          <Image src={imgSrc} width={50} height={50} alt={title} />
        </div>
        <p className="font-bold">{title}</p>
      </div>
    </>
  );
}
