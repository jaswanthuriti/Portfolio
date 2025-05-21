/* eslint-disable react/no-unescaped-entities */
"use client";

import { useActiveSection } from "@/app/context/active-section-context";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BsDownload, BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const Intro = () => {
    const router = useRouter();
    const { ref, inView } = useInView({
        initialInView: true,
        rootMargin: "-30% 0% -70% 0%",
    });
    const { setActiveSection, timeOfLastClick } = useActiveSection();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Home");
        }
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section id="home" className="scroll-m-28">
            <motion.div
                className="flex items-center justify-center"
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0, duration: 0.25 }}
            >
                <motion.div 
                    className="relative mt-24 sm:mt-36"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Outer ring - Black */}
                    <div className="absolute -inset-2 rounded-full bg-black"></div>
                    
                    {/* Middle ring - Yellow */}
                    <div className="absolute -inset-1 rounded-full bg-yellow-400"></div>
                    
                    {/* Image container */}
                    <div className="relative h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] rounded-full overflow-hidden">
                        {/* White border around image */}
                        <div className="absolute inset-0 rounded-full border-4 border-white z-10"></div>
                        <Image
                            ref={ref}

                            src="/images/profile1.jpg"
                            width={300}
                            height={300}
                            sizes="(max-width: 768px) 100vw, 800px"
                            priority={true}
                            alt="Jaswanth Uriti - Full Stack Developer"
                        />
                    </div>

                    {/* Optional: Add a subtle shadow */}
                    <div className="absolute -inset-2 rounded-full shadow-lg shadow-black/50"></div>
                </motion.div>
            </motion.div>

            <div className="flex w-full justify-center">
                <div className="max-w-xs text-center sm:max-w-2xl">
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            delay: 0.05,
                            duration: 0.1,
                        }}
                        className="my-10 font-sans text-2xl sm:text-3xl"
                    >
                        I'm{" "}
                        <span className="font-bold dark:text-yellow-400">
                            Jaswanth Uriti
                        </span>
                        , a{" "}
                        <span className="font-bold dark:text-yellow-400">
                            Software Developer{" "}
                        </span>{" "}
                        who is{" "}
                        <span className="italic dark:text-yellow-100">
                            passionate
                        </span>{" "}
                        about creating modern{" "}
                        <span className="italic dark:text-yellow-100">
                            Real-time{" "}
                        </span>{" "}
                        applications.
                    </motion.p>

                    <motion.div
                        className="flex flex-col items-center justify-center gap-3 sm:min-w-96 sm:flex-row sm:gap-4"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            delay: 0.1,
                            duration: 0.1,
                        }}
                    >
                        <motion.button
                            className="button_secondary group"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => {
                                router.push("#contact");
                                setActiveSection("Contact");
                            }}
                        >
                            Contact Me{" "}
                            <BsEnvelope className="transition-all group-hover:translate-x-0.5" />
                        </motion.button>

                        <motion.a
                            href="/Jaswanth_SDE.pdf"
                            download
                            className="button_primary group"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Download CV{" "}
                            <BsDownload className="transition-all group-hover:translate-y-0.5" />
                        </motion.a>

                        <Link
                            href="https://www.linkedin.com/in/jaswanth-uriti-355849193"
                            target="_blank"
                        >
                            <motion.div
                                className="button_shape flex w-44 items-center justify-center gap-2 border border-gray-400 bg-gray-50 hover:bg-gray-100 sm:w-auto sm:p-2.5 sm:px-6"
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <span className="display">LinkedIn</span>
                                <BsLinkedin
                                    size={20}
                                    className="text-blue-800 dark:text-blue-500"
                                />
                            </motion.div>
                        </Link>

                        <Link
                            href="https://github.com/jaswanthuriti"
                            target="_blank"
                        >
                            <motion.div
                                className="button_shape flex w-44 items-center justify-center gap-2 border border-gray-400 bg-gray-50 px-4 py-2 hover:bg-gray-100 sm:w-auto sm:p-2.5 sm:px-8"
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <span className="display">GitHub</span>
                                <BsGithub size={20} />
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Intro;