import { WaitlistInline } from "@/components/WaitlistInline";


export default function WaitListPage() {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#3B82F6_100%)]"></div>
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
                <div className="max-w-3xl text-center">
                    <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                        Join the waitlist for BahirLearn
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-700">
                        Build modern and beautiful websites with this collection of stunning background patterns.
                        Perfect for landing pages, apps, and dashboards.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <WaitlistInline />
                    </div>
                </div>
            </div>
        </div>
    )
} 
