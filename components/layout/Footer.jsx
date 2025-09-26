import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Send } from "lucide-react";
import { Separator } from "../ui/separator";


export function Footer() {
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="w-full flex items-center justify-between">
                <Image src={"logo with text.svg"} alt="logo with text" width={50} height={50} className="h-[30px] w-auto" />
                <Link href={"https:t.me/bahirLearn"} className="">
                    <Image src={"telegram.svg"} alt="telegram" width={50} height={500} className="w-8 h-8" />
                </Link>
            </div>
            <Separator className={"w-full bg-zinc-400 text-zinc-400"} />
            <div className="w-full flex items-center justify-between">
                <p>© 2025 BahirLearn <br />
                    All rights reserved</p>
                <Button asChild>
                    <Link href={"/waitlist"}>
                        Join the waitlist
                    </Link>
                </Button>
            </div>
        </div>
    )
}
