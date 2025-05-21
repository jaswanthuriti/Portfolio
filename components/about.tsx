/* eslint-disable react/no-unescaped-entities */
import { useActiveSection } from "@/app/context/active-section-context";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./utils/section-heading";

const About = () => {
    const { ref, inView } = useInView({
        rootMargin: "-50% 0% -50% 0%",
    });
    const { setActiveSection, timeOfLastClick } = useActiveSection();

    useEffect(() => {
        return () => {
            if (inView && Date.now() - timeOfLastClick > 1000) {
                setActiveSection("About");
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]);

    const letterVariants = {
        hidden: { 
            y: 20,
            opacity: 0
        },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.3,
                ease: "easeOut"
            }
        })
    };

    const waveVariants = {
        hidden: { 
            rotate: 0,
            opacity: 0 
        },
        visible: { 
            opacity: 1,
            rotate: [0, 14, -8, 14, -4, 10, 0, 0],
            transition: {
                duration: 2,
                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1
            }
        }
    };

    return (
        <section
            id="about"
            className="text-md mx-6 flex scroll-m-28 flex-col items-center justify-center"
        >
            <div ref={ref} className="mb-4">
                <SectionHeading>ABOUT ME</SectionHeading>
            </div>

            <motion.p
                className="text-md mt-2 max-w-md text-center sm:mt-4 sm:max-w-3xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.2, duration: 0.2 }}
            >
                <span className="flex justify-center gap-1 mb-2">
                    {"Hello!".split('').map((letter, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={letterVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-2xl font-bold text-indigo-600"
                        >
                            {letter}
                        </motion.span>
                    ))}
                    <motion.span
                        variants={waveVariants}
                        initial="hidden"
                        animate="visible"
                        className="ml-1 inline-block text-2xl"
                        style={{ 
                            originX: 0.7, 
                            originY: 0.7,
                            display: 'inline-block'
                        }}
                    >
                        👋
                    </motion.span>
                </span>
                I'm Jaswanth Uriti, a Full Stack Developer with a perfect 4.0 GPA 
                pursuing my Master's in Computer Science at Georgia State University. 
                I'm passionate about bridging the gap between cutting-edge technologies and 
                real-world solutions, specializing in cloud architecture, modern Web Development, and 
                Machine Learning.
            </motion.p>
            <motion.p
                className="text-md mt-2 max-w-md text-center sm:mt-4 sm:max-w-3xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.25, duration: 0.25 }}
            >
                Beyond the tech stack, I'm an avid builder who finds creativity in transforming ideas into reality. 
                I unwind by immersing myself in cinematic story telling, finding inspiration in narratives that often 
                influence my innovative approach to problem-solving. 
            </motion.p>
        </section>
    );
};

export default About;