"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useActiveSection } from "@/app/context/active-section-context";
import { useInViewSettings } from "@/lib/data";
import SectionHeading from "./utils/section-heading";
import SubmitBtn from "./utils/submit-btn";

interface EmailJSResponse {
  status: number;
  text: string;
}

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const { ref, inView } = useInView(useInViewSettings);
    const { setActiveSection, timeOfLastClick } = useActiveSection();
    const [emailSent, setEmailSent] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        const time = Date.now();
        return () => {
            if (inView && time - timeOfLastClick > 1000) {
                setActiveSection("Contact");
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!form.current) return;

        try {
            const response = await emailjs.sendForm(
                'service_zblwtou',
                'template_knqy0wm',
                form.current,
                'DQx67a-yC9rPtQgiP'
            );
            
            if (response.status === 200) {
                setEmailSent(true);
                form.current.reset();
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            const emailError = error as { text?: string };
            console.error('Email sending error:', error);
            setErrorMessage(emailError.text || 'Failed to send email');
        }
    };

    return (
        <section id="contact" className="flex min-h-[40em] w-screen scroll-m-28 flex-col items-center text-center sm:min-h-[48em]">
            <div ref={ref}>
                <SectionHeading>CONTACT ME</SectionHeading>
            </div>

            <motion.p
                className="mt-2 px-4 text-sm text-gray-700 dark:text-gray-400"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                viewport={{ once: true }}
            >
                Contact me directly at{" "}
                <a className="font-semibold text-indigo-600 underline" href="mailto:uritijaswanthsai@gmail.com">
                    uritijaswanthsai@gmail.com
                </a>{" "}
                or through the form below.
            </motion.p>

            <motion.form
                ref={form}
                onSubmit={handleSubmit}
                className="mt-10 flex min-w-[min(100%,38rem)] flex-col gap-4 px-8 sm:gap-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                {errorMessage && (
                    <p className="text-red-500">Error: {errorMessage}</p>
                )}
                <input
                    disabled={emailSent}
                    type="email"
                    name="reply_to"
                    className="h-10 rounded-lg border bg-gray-50 px-4 shadow-md shadow-gray-300 disabled:bg-gray-100 disabled:opacity-70 dark:border-gray-600 dark:bg-gray-700 dark:shadow-none"
                    placeholder="Your Email"
                    required
                    maxLength={100}
                />
                <textarea
                    disabled={emailSent}
                    required
                    name="message"
                    className="h-80 rounded-lg border bg-gray-50 p-4 shadow-md shadow-gray-300 disabled:bg-gray-100 disabled:opacity-70 dark:border-gray-600 dark:bg-gray-700 dark:shadow-none"
                    placeholder="Your Message"
                    maxLength={1000}
                />
                <div className="flex justify-end">
                    <SubmitBtn emailSent={emailSent} />
                </div>
            </motion.form>
        </section>
    );
};

export default Contact;