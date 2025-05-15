"use server";

import { FormState } from "@/types/formState";
import nodemailer from "nodemailer";

export async function sendEmail(formData: FormState): Promise<void> {
  const { name, email, message } = formData;

  if (!name || !email || !message) {
    throw new Error("Campos obrigatórios ausentes");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${name} - via Portfólio" <diniz480@gmail.com>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: "Mensagem do portfólio",
    text: message,
  });
}
