import { MoveRight, FileUser } from "lucide-react";
import Image from "next/image";

import { THEME, SHADOW } from "@/lib/color-pallete";
import AboutIcon from "@/components/about-icon";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <>
      {/* Hero Section - Made responsive with adaptive padding and font sizes */}
      <div className="flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[20%] min-h-fit h-screen">
        <div
          className="font-bold text-lg sm:text-xl"
          style={{
            color: THEME.dark,
          }}
        >
          Hello! I am Leo Anthony Cortez.
        </div>
        <div
          className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-6 sm:pb-8 md:pb-12"
          style={{
            color: THEME.dark,
          }}
        >
          A passionate software developer and creative problem solver, dedicated
          to building innovative solutions.
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <button
            type="button"
            className="flex flex-row items-center justify-center 
                gap-2 sm:gap-3 rounded-full border-[0.15rem]
                p-2 px-3 sm:px-4 w-full sm:w-auto"
            style={{
              color: THEME.dark,
              borderColor: THEME.dark,
              backgroundColor: THEME.accent,
              boxShadow: SHADOW.sm,
            }}
          >
            View Resume <FileUser />
          </button>
          <button
            type="button"
            className="flex flex-row items-center justify-center 
                gap-2 sm:gap-3 rounded-full border-[0.15rem]
                p-2 px-3 sm:px-4 mt-3 sm:mt-0 w-full sm:w-auto"
            style={{
              color: THEME.dark,
              borderColor: THEME.dark,
              backgroundColor: THEME.primary,
              boxShadow: SHADOW.sm,
            }}
          >
            Contact <MoveRight />
          </button>
        </div>
      </div>

      {/* About Section - Made responsive with grid layout that changes based on screen size */}
      <section
        className="w-screen h-fit py-8 sm:py-12 md:py-16"
        style={{
          backgroundColor: THEME.secondary,
        }}
      >
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[20%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 md:gap-10">
          {/* Profile Image - Centers on small screens, aligns left on medium+ */}
          <div className="flex flex-col items-center justify-center md:justify-start">
            <Image
              src="/images/profile.png"
              width={500}
              height={500}
              alt="Profile photo of Leo Anthony Cortez"
              className="border-[0.15rem] object-cover w-full max-w-sm"
              style={{
                borderColor: THEME.dark,
                boxShadow: SHADOW.md,
              }}
              priority
            />
          </div>

          {/* About Content */}
          <div
            className="flex flex-col gap-3 md:gap-4 mt-6 md:mt-0"
            style={{
              color: THEME.dark,
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              About me
            </h1>
            <p className="text-sm sm:text-base">
              Hello, I am Leo Anthony P. Cortez. Currently taking Bachelor of
              Science in Computer Science at LORMA Colleges in Philippines. I
              like to solve problems with code. Primarily, I use Java, Python,
              C#, and Dart as my programming languages of choice. I&apos;m more
              into backend development, machine learning and data science.
            </p>

            {/* Skills Icons - Adjust layout based on screen size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-6 sm:gap-8 mt-2">
              <div className="flex justify-center">
                <AboutIcon
                  imgSrc="/skills/backend.svg"
                  title="Backend Development"
                />
              </div>

              <div className="flex justify-center">
                <AboutIcon
                  imgSrc="/skills/data-science.svg"
                  title="Data Science"
                />
              </div>

              <div className="flex col-span-1 sm:col-span-2 justify-center">
                <AboutIcon
                  imgSrc="/skills/frontend.svg"
                  title="Frontend Development"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center min-h-screen py-8 sm:px-8 md:px-16 lg:px-24 xl:px-[20%] gap-4">
          <span className="font-semibold text-xl sm:text-2xl md:text-3xl">
            Languages & Tools
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 md:gap-10 lg:gap-12 w-full max-w-6xl">
            {techStacks.map((tech, index) => {
              return (
                <TechStack imgSrc={tech.imgSrc} alt={tech.alt} key={index} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

const techStacks = [
  {
    imgSrc: "/tech-logo/java.png",
    alt: "Java",
  },
  {
    imgSrc: "/tech-logo/python.png",
    alt: "Python",
  },
  {
    imgSrc: "/tech-logo/c-sharp.png",
    alt: "C#",
  },
  {
    imgSrc: "/tech-logo/php.png",
    alt: "PHP",
  },
  {
    imgSrc: "/tech-logo/typescript.png",
    alt: "TypesScript",
  },
  {
    imgSrc: "/tech-logo/spring-boot.png",
    alt: "Spring Boot",
  },
  {
    imgSrc: "/tech-logo/fastapi.png",
    alt: "FastAPI",
  },
  {
    imgSrc: "/tech-logo/flutter.png",
    alt: "Flutter",
  },
  {
    imgSrc: "/tech-logo/react.png",
    alt: "React",
  },
  {
    imgSrc: "/tech-logo/pandas.png",
    alt: "Pandas",
  },
  {
    imgSrc: "/tech-logo/laravel.png",
    alt: "Laravel",
  },
  {
    imgSrc: "/tech-logo/docker.png",
    alt: "Docker",
  },
  {
    imgSrc: "/tech-logo/kubernetes.png",
    alt: "Kubernetes",
  },
  {
    imgSrc: "/tech-logo/tensorflow.png",
    alt: "Tensorflow",
  },
  {
    imgSrc: "/tech-logo/postgresql.png",
    alt: "Postgresql",
  },
  {
    imgSrc: "/tech-logo/git.png",
    alt: "GIT",
  },
  {
    imgSrc: "/tech-logo/github.png",
    alt: "GitHub",
  },
];
