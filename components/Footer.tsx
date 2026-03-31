"use client"
import { useThemeContext } from "@/context/ThemeContext";
import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const { theme } = useThemeContext();
    return (
        <footer className="relative px-6 md:px-16 lg:px-24 xl:px-32 mt-40 w-full dark:text-slate-50">
            <Image className="absolute max-w-4xl w-full h-auto -mt-30 max-md:px-4 right-0 md:right-16 lg:right-24 xl:right-32 top-0 pointer-events-none" src={theme === "dark" ? "/assets/landing-text-dark.svg" : "/assets/landing-text-light.svg"} alt="landing" width={930} height={340} priority fetchPriority="high" />
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 dark:border-slate-700 pb-6">
                <div className="md:max-w-114">
                    <a href="/">
                        <Image className="h-9 md:h-9.5 w-auto shrink-0" src={theme === "dark" ? "/assets/logo-light.svg" : "/assets/logo-dark.svg"} alt="Logo" width={407} height={88} priority fetchPriority="high" />
                    </a>
                    <p className="mt-6">
                        We build our own digital products and help other businesses do the same — apps, websites, and brand design.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="space-y-2">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-[#00DCC2] transition">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="space-y-2">
                            <p>hello@enstack.co.uk</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center pb-5">
                Copyright {new Date().getFullYear()} © <a href="/">EnStack Ltd</a>. All Rights Reserved.
            </p>
        </footer>
    );
}
