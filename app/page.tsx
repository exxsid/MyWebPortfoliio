import { MoveRight, FileUser } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaLinkedinIn, FaKaggle } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

import { THEME, SHADOW } from "@/lib/color-pallete";
import AboutIcon from "@/components/about-icon";
import TechStack from "@/components/tech-stack";
import ProjectCard from "@/components/project-card";
import {
  JavaBadge,
  CSharpBadge,
  MySQLBadge,
  FlutterBadge,
  FastAPIBadge,
  PostgreSQLBadge,
  SQLAlchemyBadge,
  ReactNativeBadge,
  FirebaseBadge,
  JavaScriptBadge,
} from "@/components/tech-badges";

export default function Home() {
  return (
    <>
      {/* Hero Section - Made responsive with adaptive padding and font sizes */}
      <div
        className="flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[20%] min-h-fit h-screen"
        id="home"
      >
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
          <a
            href="https://drive.google.com/file/d/1HpvBSGhzwL6pkp2XGqX4he--jYaVvWYg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </a>

          <Dialog>
            <DialogTrigger asChild>
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
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  You can contact me here
                </DialogTitle>
              </DialogHeader>
              <ul className="pl-3 gap-4">
                <li className="flex gap-4 items-center">
                  <GoMail />{" "}
                  <a href="mailto:cortezleoanthony5@gmail.com">
                    cortezleoanthony5@gmail.com
                  </a>
                </li>

                <li className="flex gap-4 items-center">
                  <FaLinkedinIn />{" "}
                  <a href="https://www.linkedin.com/in/exxsid" target="_blank">
                    Leo Anthony Cortez
                  </a>
                </li>

                <li className="flex gap-4 items-center">
                  <FaKaggle />{" "}
                  <a
                    href="https://www.kaggle.com/leoanthonycortez"
                    target="_blank"
                  >
                    Leo Anthony Cortez
                  </a>
                </li>
              </ul>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* About Section - Made responsive with grid layout that changes based on screen size */}
      <section
        className="w-screen h-fit py-8 sm:py-12 md:py-16"
        style={{
          backgroundColor: THEME.secondary,
        }}
        id="about"
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

      <section
        className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[20%] w-screen h-fit py-8 sm:py-12 md:py-16"
        id="project"
      >
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
            <ProjectCard
              coverPhotoSrc="/projects/sari-sari.png"
              title="Sari-sari Store Sale and Credit Management System"
              description={`This project focuses on the development of a Mini-Mart 
                Sales and Credit Management System aimed at improving the efficiency 
                and accuracy of business operations in small to medium-sized convenience 
                stores. The system automates key processes such as sales tracking, 
                inventory management, and customer credit handling—replacing traditional, 
                error-prone manual methods.`}
              link="https://github.com/exxsid/sari-sari_store_sales-credit_management_system"
            >
              <CSharpBadge />
              <MySQLBadge />
            </ProjectCard>

            <ProjectCard
              coverPhotoSrc="/projects/terratreats.jpg"
              title="TerraTreats"
              description={`TerraTreats is an e-commerce platform designed to empower 
                farmers by connecting them directly with consumers. By eliminating 
                the need for middlemen, TerraTreats enables farmers to sell their fresh, 
                locally grown produce directly to end buyers — ensuring fair prices 
                for both parties and promoting sustainable agriculture.`}
              link="https://github.com/exxsid/TerraTreats"
            >
              <FlutterBadge />
              <FastAPIBadge />
              <PostgreSQLBadge />
              <SQLAlchemyBadge />
            </ProjectCard>

            <ProjectCard
              coverPhotoSrc="/projects/blog.png"
              title="Blog API"
              description={`Build RESTful blog api using java Spring Boot`}
              link="https://github.com/exxsid/blog-api"
            >
              <JavaBadge />
            </ProjectCard>

            <ProjectCard
              coverPhotoSrc="/projects/blog.png"
              title="Expense Tracker API"
              description={`Spring Boot RESTful application. This application 
                has authentication and CRUD functions for expenses.`}
              link="https://github.com/exxsid/expense-tracker-api"
            >
              <JavaBadge />
              <PostgreSQLBadge />
            </ProjectCard>

            <ProjectCard
              coverPhotoSrc="/projects/smart-buddy.png"
              title="Smart Buddy"
              description={`An all-in-one academic productivity app and finance tracker for students`}
              link="https://github.com/Yujinndev/SmartBuddy"
            >
              <ReactNativeBadge />
              <FirebaseBadge />
              <JavaScriptBadge />
            </ProjectCard>
          </div>
        </div>
      </section>

      <section
        className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[20%] w-screen h-fit py-8 sm:py-12 md:py-16"
        style={{
          backgroundColor: THEME.secondary,
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Experience
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div
            className="px-8 py-4 my-8 border-[0.15rem]"
            style={{
              backgroundColor: THEME.accent,
              boxShadow: SHADOW.md,
              borderColor: THEME.dark,
              color: THEME.dark,
            }}
          >
            <div className="flex justify-between">
              <h1 className="font-extrabold text-xl line-clamp-2">
                Software Developer Intern
              </h1>
              <p className="font-semibold text-xl">June 2024 - July 2024</p>
            </div>

            <h3 className="font-semibold">S.P. Madrid & Associates</h3>
            <ul className="list-disc pl-8">
              <li>
                Applied knowledge of machine learning principles to train
                algorithms and optimize the performance of AI models.
              </li>
              <li>
                Leveraged the NextJS framework to design and develop a robust
                Content Management System (CMS) for Quality Assurance (QA),
                streamlining processes and improving accessibility.
              </li>
              <li>
                Collaborated effectively within a team setting, contributing
                technical expertise and fostering seamless project execution.
              </li>
            </ul>
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
