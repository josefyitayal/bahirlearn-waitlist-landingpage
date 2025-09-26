import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "BahirLearn | Waitlist",
    description:
        "Launch and monetize your online courses with BahirLearn. Built for Ethiopian educators, trainers, and creators—integrated with Telebirr payments.",
    openGraph: {
        title: "BahirLearn – Online Course Platform for Ethiopia",
        description:
            "Create and sell online courses with your own branded website. Built for Ethiopian educators, trainers, and creators—with Telebirr payments included.",
        url: "https://bahirlearn.com",
        siteName: "BahirLearn",
        images: [
            {
                url: "https://bahirlearn.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "BahirLearn Online Course Platform",
            },
        ],
        locale: "en_ET",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "BahirLearn – Online Course Platform for Ethiopia",
        description:
            "Create and sell online courses with your own branded website. Built for Ethiopian educators, trainers, and creators—with Telebirr payments included.",
        images: ["https://bahirlearn.com/og-image.png"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
