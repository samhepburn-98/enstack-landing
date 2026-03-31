"use client"
import SectionTitle from "@/components/SectionTitle";
import { featuresData } from "@/data/featuresData";
import { FaqSection } from "@/sections/FaqSection";

export default function Page() {
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
                    <span className="bg-gradient-to-r from-[#00DCC2] to-[#007A6C] dark:from-[#00DCC2] dark:to-[#7DFFF0] bg-clip-text text-transparent">brands</span>
                </h1>
                <p className="text-base dark:text-slate-300 max-w-lg mt-2">
                    We make our own digital products and partner with businesses to build theirs — from first idea to launch day.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <a href="#services" className="flex items-center justify-center font-medium bg-[#00DCC2] hover:bg-[#00DCC2]/80 transition text-[#042B31] rounded-md px-6 h-11">
                        Learn more
                    </a>
                </div>
            </div>

            <div id="services" />
            <SectionTitle text1="WHAT WE DO" text2="Products we build. Services we offer." text3="We launch our own apps and help other teams ship theirs — through design, development, and consulting." />

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-10 px-6 md:px-16 lg:px-24 xl:px-32">
                {featuresData.map((feature, index) => (
                    <div key={index} className="p-6 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 max-w-80 md:max-w-66">
                        <feature.icon className="text-[#00DCC2] size-8 mt-4" strokeWidth={1.3} />
                        <h3 className="text-base font-medium">{feature.title}</h3>
                        <p className="text-slate-400 line-clamp-2">{feature.description}</p>
                    </div>
                ))}
            </div>

            <FaqSection />

            <div className="flex flex-col items-center text-center justify-center mt-20">
                <h3 className="text-3xl font-semibold mt-16 mb-4">Got something in mind?</h3>
                <p className="text-slate-600 dark:text-slate-200 max-w-xl mx-auto">
                    Whether you need a development partner or just want to talk through an idea, we&apos;re all ears.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <a href="mailto:hello@enstack.co.uk" className="flex items-center justify-center font-medium bg-[#FF602B] hover:bg-[#FF602B]/80 transition text-white rounded-md px-6 h-11">
                        Get in touch
                    </a>
                </div>
            </div>

        </>
    );
}
