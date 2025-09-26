import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";


export function Navbar() {
    return (
        <div className="w-3/4 gap-10 px-5 py-3 rounded-lg flex items-center justify-between z-50 border-zinc-300/50 backdrop-blur-md mt-4 fixed top-0 left-1/2 -translate-x-1/2">
            <Link href={"/"}>
                <Image src={"/logo with text.svg"} alt="logo" width={50} height={50} className="h-10 w-auto" />
            </Link>
            <Button asChild className={"bg-brand-default"}>
                <Link href={"/waitlist"}>Get early access</Link>
            </Button>
        </div>
    )
}
