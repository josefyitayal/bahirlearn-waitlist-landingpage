"use client"

import { useInView } from "@/hooks/useInView";
import { TextGenerateEffect } from "../ui/shadcn-io/text-generate-effect";

export function About() {
    const [ref, inView] = useInView({ threshold: 0.2 }); // 20% visible

    return (
        <div className="overflow-hidden rounded-xl" ref={ref}>
            <div className="relative h-[75vh]">
                {/* Background */}
                <div className="absolute inset-0">
                    <div
                        className="
          absolute inset-0 -z-10 h-full w-full
          bg-white
          bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
          bg-[size:14px_24px]
        "
                    >
                        {/* Blurred Circle */}
                        <div
                            className="
    absolute left-1/2 top-1/2 -z-10
    h-[220px] w-[220px]
    -translate-x-[calc(50%-350px)]  /* shift left by 10px */
    -translate-y-[calc(50%-100px)]  /* shift up by 10px */
    rounded-full
    bg-brand-light
    opacity-30
    blur-[100px]
  "
                        ></div>

                        <div
                            className="
    absolute left-1/2 top-1/2 -z-10
    h-[220px] w-[220px]
    -translate-x-[calc(50%--300px)]  /* shift left by 10px */
    -translate-y-[calc(50%--200px)]  /* shift up by 10px */
    rounded-full
    bg-brand-light
    opacity-30
    blur-[100px]
  "
                        ></div>
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
                    <div className="max-w-3xl text-center flex flex-col gap-5 items-center">
                        <div className="w-fit flex items-center justify-center border border-zinc-400 rounded-full py-1 px-3">
                            <span className="uppercase text-sm">ABOUT</span>
                        </div>

                        {inView && (
                            <TextGenerateEffect
                                words="BahirLearn is more than just a platform it’s a movement to empower Ethiopian knowledge-sharers.
From teachers and professionals to creators and entrepreneurs, BahirLearn makes it possible to earn from your expertise and inspire the next generation of learners."
                                duration={0.6}
                                staggerDelay={0.15}
                                filter={true}
                                className="text-2xl sm:text-4xl text-zinc-400 text-center leading-normal"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
