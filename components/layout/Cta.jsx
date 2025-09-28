"use client";

import Image from "next/image";
import { WaitlistInline } from "../WaitlistInline";

export function Cta() {
    return (
        <section className="w-full flex justify-center px-4 py-16">
            <div className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between bg-black text-white rounded-xl px-8 py-12 max-w-6xl w-full">
                {/* Left Content */}
                <div className="flex-1 flex flex-col gap-6">
                    <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                        Be the first to experience <br />
                        <span className="text-white">BahirLearn</span>
                    </h2>
                    <p className="text-zinc-300 max-w-md">
                        BahirLearn is launching soon. Join the waitlist and get early access
                        to the platform that will change online learning in Ethiopia.
                    </p>

                    {/* Email Form */}
                    <WaitlistInline />
                </div>

                {/* Right Content (Image) */}
                <div className="flex-1 mt-10 md:mt-0 md:ml-8 top-28 left-10 relative w-full max-w-md">
                    <Image
                        src="/real dashboard diagonal.svg" // replace with your svg path
                        alt="BahirLearn dashboard preview"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
