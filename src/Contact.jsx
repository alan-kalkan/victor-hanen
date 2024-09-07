import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wufmehx", "template_iz8e3f9", form.current, {
        publicKey: "kuj_5x3E-vA0GJWqv",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md">
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="user_name" className="text-gray-700 font-medium">
            Name
          </label>
          <input
            id="user_name"
            type="text"
            name="user_name"
            className="mt-1 p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="user_email" className="text-gray-700 font-medium">
            Email
          </label>
          <input
            id="user_email"
            type="email"
            name="user_email"
            className="mt-1 p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-700 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="mt-1 p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            rows="4"
            placeholder="Enter your message"
          />
        </div>

        <div>
          <input
            type="submit"
            value="Send"
            className="w-full py-2 text-gray-800 font-bold focus:outline-none focus:ring-2 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};
