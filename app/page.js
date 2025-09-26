import { About } from "@/components/layout/About";
import { BeforeAfter } from "@/components/layout/BeforeAfter";
import { Cta } from "@/components/layout/Cta";
import { Feature1 } from "@/components/layout/Feature1";
import { Features2 } from "@/components/layout/Features2";
import { Footer } from "@/components/layout/Footer"
import HeroSection from "@/components/layout/HeroSection";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {

    return (
        <div className="w-full flex flex-col gap-24 p-3 ">
            <Navbar />
            <HeroSection />
            <Feature1 />
            <About />
            <Features2 />
            <BeforeAfter />
            <Cta />
            <Footer />
        </div>
    );
}
