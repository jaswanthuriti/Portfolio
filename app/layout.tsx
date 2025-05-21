import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import Footer from "@/components/footer";
import Navigation from "@/components/navbar";
import { MetadataValues } from "@/lib/data";
import { Analytics } from "@vercel/analytics/react";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jaswanth Uriti | Full Stack Developer",
    description: "Jaswanth Uriti is a Full Stack Developer specializing in building exceptional digital experiences with expertise in cloud architecture and machine learning.",
    applicationName: "Jaswanth Uriti Portfolio",
    authors: [{ name: "Jaswanth Uriti" }],
    generator: "Next.js",
    keywords: [
        "Jaswanth Uriti",
        "Portfolio",
        "Web Developer",
        "Full Stack Developer",
        "Georgia State University",
        "Machine Learning",
        "Cloud Computing",
        "Software Engineer",
        "React Developer",
        "Node.js Developer"
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: "website",
        title: "Jaswanth Uriti | Full Stack Developer",
        description: "Full Stack Developer specializing in modern web applications and cloud architecture",
        siteName: "Jaswanth Uriti",
        locale: "en_US"
    }
};  

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <title>Jaswanth Uriti | Full Stack Developer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body
                className={`${inter.className} relative min-h-screen 
                overflow-y-scroll no-scrollbar
                transition-colors duration-300

                // Light mode styles
                bg-white text-gray-900

                // Dark mode styles
                dark:bg-[#090909] dark:text-gray-100

                // Grid pattern
                [background-image:linear-gradient(rgba(100,100,100,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,.1)_1px,transparent_1px)]
                dark:[background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]
                [background-size:40px_40px]

                // Base gradients
                before:fixed before:inset-0 before:z-[-1]
                before:bg-[radial-gradient(circle_at_top,transparent,white)]
                dark:before:bg-[radial-gradient(circle_at_top,#141414,#090909)]

                // Highlight effects
                after:fixed after:inset-0 after:z-[-1]
                after:bg-[radial-gradient(circle_500px_at_50%_-100px,rgba(120,119,198,0.1),transparent)]
                dark:after:bg-[radial-gradient(circle_500px_at_50%_-100px,rgba(120,119,198,0.15),transparent)]`}
            >
                {/* Gradient accents */}
                <div className="pointer-events-none fixed inset-0 z-0">
                    <div className="absolute top-0 left-0 h-[500px] w-[500px] 
                        bg-gradient-to-r from-indigo-500/10 to-purple-500/10 
                        dark:from-indigo-500/20 dark:to-purple-500/20 
                        blur-[100px] opacity-60"
                    />
                    <div className="absolute bottom-0 right-0 h-[500px] w-[500px] 
                        bg-gradient-to-r from-blue-500/10 to-teal-500/10 
                        dark:from-blue-500/20 dark:to-teal-500/20 
                        blur-[100px] opacity-60"
                    />
                </div>

                {/* Content wrapper with enhanced contrast */}
                <div className="relative z-10">
                    <ActiveSectionContextProvider>
                        <ThemeContextProvider>
                            <Navigation />
                            <main>{children}</main>
                            <Analytics />
                            <Footer />
                        </ThemeContextProvider>
                    </ActiveSectionContextProvider>
                </div>
            </body>
        </html>
    );
}