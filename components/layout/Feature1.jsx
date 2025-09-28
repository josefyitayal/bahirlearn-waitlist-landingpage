import { WalletMinimal, Wand2, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { AnimatedContainer } from "../AnimatedContainer";

const features = [
    {
        icon: Zap,
        title: "Easy Course Builder",
        description: "Create courses with lessons, quizzes, and videos. No coding required."
    },
    {
        icon: Wand2,
        title: "Customizable",
        description: "Launch a professional storefront with templates designed for Ethiopia."
    },
    {
        icon: WalletMinimal,
        title: "Local Payments",
        description: "Accept Telebirr payments directly from your students."
    }
]

export function Feature1() {
    return (
        <div className="w-full flex flex-col items-center gap-8 px-10">
            <AnimatedContainer className={"w-full flex items-center justify-center"}>
                <h2 className="text-4xl font-bold text-center w-3/4 sm:w-2/4">Everything you need to start teaching and make money online</h2>
            </AnimatedContainer>
            <div className="">
                <AnimatedContainer delay={0.4} className={"h-fit grid grid-cols-1 sm:grid-cols-3 gap-5"}>
                    {features.map((f, i) => (
                        <Card key={i} className="group shadow-none w-full">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <f.icon />
                                </CardDecorator>

                                <h3 className="mt-6 font-medium text-center">{f.title}</h3>
                            </CardHeader>

                            <CardContent className={"w-full"}>
                                <p className="text-sm text-center">{f.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </AnimatedContainer>
            </div>
        </div>
    )
}

const CardDecorator = ({ children }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div
            className="
    absolute inset-0 
    [--grid-border:#000] 
    bg-[linear-gradient(to_right,var(--grid-border)_2px,transparent_1px),linear-gradient(to_bottom,var(--grid-border)_2px,transparent_1px)] 
    bg-[size:24px_24px] 
    opacity-20
  "
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center">{children}</div>
    </div>
)
