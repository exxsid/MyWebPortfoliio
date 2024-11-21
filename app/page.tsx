import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
export default function Home() {
  return (
    <>
      <header>
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

      <section>
        <div className="px-[10%] md:px-[20%]">
          <div className="h-screen flex flex-col justify-center">
            <p className="text-7xl md:text-9xl font-bold text-center">
              <span className="text-slate-600">I&apos;m Leo Anthony,</span> a
              Software Developer and Problem Solver.
            </p>
            <Button className="self-center mt-8 p-10 text-2xl rounded-full">
              Let&apos;s Talk <MoveRight />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
