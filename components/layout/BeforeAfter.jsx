import { Calendar, Check, DollarSign, File, FileSpreadsheet, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export function BeforeAfter() {
    return (
        <div className="flex flex-col items-center gap-5 px-10">
            <div className="w-3/4 sm:w-[90%] flex flex-col items-center gap-3">
                <h1 className="font-bold text-center text-3xl">Before BahirLearn vs. After BahirLearn</h1>
                {/* <p className="text-center">Managing a membership business shouldn't be this hard—let's get it under control.</p> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
                {/* Before Section */}
                <div className="flex flex-col gap-10">
                    {/* Icons box */}
                    <div className="w-full h-fit flex flex-col items-center justify-end bg-zinc-100 rounded-md p-[50px]">
                        <div className="flex items-center gap-5">
                            <Mail className="w-8 h-8" />
                            <MessageCircle className="w-8 h-8 " />
                            <DollarSign className="w-8 h-8" />
                            <File className="w-8 h-8" />
                        </div>
                    </div>

                    {/* Divider with label */}
                    <div className="relative">
                        <div className="w-full h-px bg-gray-300" />
                        <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3">
                            <span className="bg-primary text-white text-sm font-medium rounded-full py-1 px-4">
                                Before
                            </span>
                        </div>
                    </div>

                    {/* Pain points */}
                    <div className="flex flex-col gap-2 text-gray-600 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-red-500">✖</span>
                            <p>No easy platform to sell courses</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-red-500">✖</span>
                            <p>Payments limited and complicated</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-red-500">✖</span>
                            <p>Hard to build a website without coding</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-red-500">✖</span>
                            <p>No local solution for educators</p>
                        </div>
                    </div>
                </div>

                {/* After Section */}
                <div className="flex flex-col gap-10">
                    {/* App logo box */}
                    <div className="w-full h-fit flex flex-col items-center justify-end bg-zinc-100 rounded-md p-[50px]">
                        {/* Replace with your logo */}
                        <div className="flex items-center gap-5">
                            <Image src={"/logo svg.svg"} alt="logo" width={50} height={50} className="w-8 h-8" />
                        </div>
                    </div>

                    {/* Divider with label */}
                    <div className="relative">
                        <div className="w-full h-px bg-gray-300" />
                        <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3">
                            <span className="bg-primary text-white text-sm font-medium rounded-full py-1 px-4">
                                After
                            </span>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="flex flex-col gap-2 text-gray-600 text-sm">
                        <div className="flex items-center gap-2">
                            <Check className="text-green-600 w-4 h-4" />
                            <p>Launch courses in minutes with a simple editor</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-green-600 w-4 h-4" />
                            <p>Accept Telebirr payments instantly</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-green-600 w-4 h-4" />
                            <p>Get a professional website with drag-and-drop templates</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-green-600 w-4 h-4" />
                            <p>Empower Ethiopian educators with a homegrown solution</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
