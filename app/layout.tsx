import { type ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import LenisScroll from "@/components/Lenis";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "EnStack — Apps, Websites & Brand Design",
    description: "We build our own digital products and help other businesses do the same — apps, websites, and brand design.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={poppins.variable}>
                <ThemeContextProvider>
                    <LenisScroll />
                    {children}
                </ThemeContextProvider>
            </body>
        </html>
    );
}
