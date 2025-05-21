"use server";

import getErrorHandler from "@/components/utils/errorHandler";
import { Resend } from "resend";

const resend = new Resend('DQx67a-yC9rPtQgiP');

const sendEmail = async (email: string, message: string) => {
    console.log("email sent");
    try {
        const response = await resend.emails.send({
            from: "jaswanthuriti@gmail.com",
            to: "jaswanthuriti@gmail.com",
            subject: "Message from your Portfolio",
            reply_to: email,
            text: message,
        });
        return response;
    } catch (error: unknown) {
        throw error; // Throw the error instead of returning it
    }
};
export default sendEmail;
