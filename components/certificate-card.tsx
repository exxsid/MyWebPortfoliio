import { THEME, SHADOW } from "@/lib/color-pallete";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

interface CertificateCardProps {
  title: string;
  link: string;
  skills: Array<string>;
}

export default function CertificateCard({
  title,
  link,
  skills,
}: CertificateCardProps) {
  return (
    <div
      className="px-8 py-4 border-[0.15rem]"
      style={{
        backgroundColor: THEME.accent,
        boxShadow: SHADOW.md,
        borderColor: THEME.dark,
        color: THEME.dark,
      }}
    >
      <a href={link} target="_blank">
        <h1 className="font-extrabold text-sm sm:text-sm md:text-xl line-clamp-5">
          {title}
        </h1>
        <ExternalLink />
      </a>

      <div>
        {skills.map((skill, index) => {
          return (
            <Badge
              key={index}
              style={{
                backgroundColor: THEME.secondary,
                color: THEME.dark,
              }}
            >
              {skill}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
