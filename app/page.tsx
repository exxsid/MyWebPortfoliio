import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Marquee from "react-fast-marquee";

const marqueLogo = [
  "/tech-logo/c-sharp.png",
  "/tech-logo/java.png",
  "/tech-logo/laravel.png",
  "/tech-logo/php.png",
  "/tech-logo/python.png",
  "/tech-logo/spring-boot.png",
  "/tech-logo/typescript.png",
];
export default function Home() {
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="flex place-content-between items-center flex-row w-full bg-slate-50 p-4 px-[5%] md:px-[10%]">
          <div className="font-extrabold text-xl">
            <span className="text-slate-600">lapcortez</span>DEV
          </div>
          <Button
            variant="outline"
            className="bg-slate-50 border-gray-900 border-2 rounded-full"
          >
            Let&apos;s Talk <MoveRight />
          </Button>
        </div>
      </header>
      <div className="px-[10%] md:px-[20%] pt-16">
        <section className="container mb-32">
          <div className="h-screen flex flex-col justify-center">
            <p className="text-5xl md:text-7xl 2xl:text-9xl font-bold text-center">
              <span className="text-slate-400">I&apos;m Leo Anthony,</span> a
              Software Developer and Problem Solver.
            </p>
            <Button className="self-center w-[50%] min-w-40 text-[50%] mt-8 p-10 text-2xl rounded-full">
              Let&apos;s Talk <MoveRight />
            </Button>
          </div>
        </section>

        <section>
          <div className="width-full h-screen py-20">
            <h2 className="text-5xl font-bold mb-5">About me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 content-center">
              <div>
                <Image
                  src={"/images/profile.png"}
                  width={500}
                  height={500}
                  className="rounded-full drop-shadow-lg p-5"
                  alt={""}
                />
              </div>
              <div className="p-10 items-center">
                <p className="text-2xl">
                  Hello, I am Leo Anthony P. Cortez. Currently taking Bachelor
                  of Science in Computer Science at LORMA Colleges in
                  Philippines. I like to solve problems with code.
                  <br />
                  <br />
                  Primarily, I use Java, Python, C#, and Dart as my programming
                  languages of choice. I&apos;m more into backend development,
                  machine learning and data science.
                </p>
              </div>
            </div>
            <Marquee
              direction="left"
              pauseOnHover={true}
              autoFill={true}
              gradient={true}
              speed={30}
              gradientColor=""
              className=""
            >
              {marqueLogo.map((logo, index) => {
                return (
                  <Image
                    key={index}
                    src={logo}
                    width={100}
                    height={100}
                    className="p-5 mx-10"
                    alt={""}
                  />
                );
              })}
            </Marquee>
          </div>
        </section>
      </div>
    </>
  );
}
