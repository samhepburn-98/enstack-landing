"use client"
import SectionTitle from "@/components/SectionTitle";
import { useThemeContext } from "@/context/ThemeContext";
import { featuresData } from "@/data/featuresData";
import { FaqSection } from "@/sections/FaqSection";
import Image from "next/image";

export default function Page() {
    const { theme } = useThemeContext();
    return (
        <>
            <div className="flex flex-col min-h-screen items-center justify-center text-center px-4 bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover">
                {/* <div className="flex flex-wrap items-center justify-center gap-3 p-1.5 pr-4 rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-600/20">
                    <div className="flex items-center -space-x-3">
                        <Image className="size-7 rounded-full" height={50} width={50}
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                            alt="userImage1" />
                        <Image className="size-7 rounded-full" height={50} width={50}
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                            alt="userImage2" />
                        <Image className="size-7 rounded-full" height={50} width={50}
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                            alt="userImage3" />
                    </div>
                    <p className="text-xs">Trusted by teams big and small</p>
                </div> */}
                <h1 className="mt-2 text-5xl/15 md:text-[64px]/19 font-semibold max-w-2xl">
                    We build apps, websites &{" "}
                    <span className="bg-gradient-to-r from-[#923FEF] dark:from-[#C99DFF] to-[#C35DE8] dark:to-[#E1C9FF] bg-clip-text text-transparent">brands</span>
                </h1>
                <p className="text-base dark:text-slate-300 max-w-lg mt-2">
                    From idea to launch, we help businesses create digital products and identities that stand out.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <a href="#services" className="flex items-center justify-center font-medium bg-purple-600 hover:bg-purple-700 transition text-white rounded-md px-6 h-11">
                        Learn more
                    </a>
                </div>
            </div>

            <div id="services" />
            <SectionTitle text1="SERVICES" text2="What we do" text3="Design, development, and branding — everything you need to launch and grow." />

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-10 px-6 md:px-16 lg:px-24 xl:px-32">
                {featuresData.map((feature, index) => (
                    <div key={index} className="p-6 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 max-w-80 md:max-w-66">
                        <feature.icon className="text-purple-500 size-8 mt-4" strokeWidth={1.3} />
                        <h3 className="text-base font-medium">{feature.title}</h3>
                        <p className="text-slate-400 line-clamp-2">{feature.description}</p>
                    </div>
                ))}
            </div>

            <FaqSection />

            <div className="flex flex-col items-center text-center justify-center mt-20">
                <h3 className="text-3xl font-semibold mt-16 mb-4">Let&apos;s build something together</h3>
                <p className="text-slate-600 dark:text-slate-200 max-w-xl mx-auto">
                    Got a project in mind? We&apos;d love to hear about it.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <a href="mailto:hello@enstack.co.uk" className="flex items-center justify-center font-medium bg-purple-600 hover:bg-purple-700 transition text-white rounded-md px-6 h-11">
                        Get in touch
                    </a>
                </div>
            </div>

        </>
    );
}
