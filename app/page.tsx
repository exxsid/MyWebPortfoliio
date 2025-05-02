import { MoveRight, FileUser } from "lucide-react";
import Image from "next/image";

import { THEME, SHADOW } from "@/lib/color-pallete";
import AboutIcon from "@/components/about-icon";

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
      </section>
    </>
  );
}
