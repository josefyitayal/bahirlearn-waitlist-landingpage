import Image from "next/image";
import { CommingSoonBanner } from "../CommingSoonBanner";
import { AspectRatio } from "../ui/aspect-ratio";
import { ContainerTextFlip } from "../ui/shadcn-io/container-text-flip";
import { FlipWords } from "../ui/shadcn-io/flip-words";
import { WaitlistInline } from "../WaitlistInline";

export default function HeroSection() {
    return (
        <div className="relative flex flex-col gap-5">
            <HeroContent />
            <div className="sm:px-10">
                <div className="sm:-mt-[10vh] p-1.5 border border-gray-400 rounded-md">
                    <Image src={"/real dashboard screenshot.svg"} alt="screenshot" width={800} height={800} className="object-cover w-full h-full rounded-md overflow-hidden border border-gray-300" />
                </div>
            </div>
        </div>
    )
}


const HeroContent = () => {
    return (
        <div className="relative h-[70vh] sm:h-[85vh] rounded-2xl overflow-hidden">
            {/* Background Blur */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 h-full w-full bg-white">
                    <div className="absolute bottom-0 left-0 h-[500px] w-[500px] translate-x-[-20%] translate-y-[20%] rounded-full bg-brand-light opacity-50 blur-[80px]"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-6 sm:px-20 h-[70vh] sm:h-[85vh] rounded-2xl w-full">
                <div className="flex flex-col items-center gap-8 mt-36 sm:mt-32 z-10">
                    <CommingSoonBanner />
                    <DynamicHeader />
                    <p className="text-center text-xl">
                        Create and sell online courses with your own branded website. Built for Ethiopian educators, trainers, and creators with Telebirr payments included.
                    </p>
                    <WaitlistInline />
                </div>
            </div>
        </div>
    )
}

const DynamicHeader = () => {
    return (

        <h1 className="text-4xl sm:text-7xl md:text-7xl font-bold text-center">
            Turn your
            <FlipWords
                words={["ትምህርት", "ክህሎት", "ሙያ"]}
                duration={2500}
                className="text-brand-default font-semibold"
            />
            into income
        </h1>
    )
}
