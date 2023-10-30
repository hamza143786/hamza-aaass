import React, { useRef, useState } from "react";
//motion
import {motion} from "framer-motion";
//variants
import {fadeIn} from "../variants";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7u8mmq9', 'template_zw6o9id', formRef.current, 'D_ba-t_d9Xv-s-vgr')
    .then(
      (result) => {
        console.log(result.text);
        setDone(true)
      },
      (error) => {
        console.log(error.text);
      }
    );
  }
  
  return (
    <div className="bg-gray-100 py-16" id="contact">
        <motion.h1
         variants={fadeIn("up",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.7}}
        className="text-6xl font-bold mb-4 text-center text-neutralDGrey">Contact Us</motion.h1>
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-4">
          <h2 className="text-5xl font-bold mb-12 text-brandPrimary">Let's Connect 🚀 </h2>
          <div className="mb-12">
            <h3 className="text-xl text-neutralDGrey font-semibold">Address:</h3>
            <p>Cooper Square, New York, NY, 100003, US</p>
          </div>
          <div className="mb-12">
            <h3 className="text-xl text-neutralDGrey font-semibold">Phone:</h3>
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="mb-12">
            <h3 className="text-xl text-neutralDGrey font-semibold">Email:</h3>
            <p>hamza.sknsits.it@gmail.com</p>
          </div>
        </div>

        <div className="lg:w-1/2 p-4">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="text-xl font-semibold text-neutralDGrey">
                Name:
              </label>
              <input
                type="text"
                id="username"
                name="user_name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="text-xl font-semibold text-neutralDGrey">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="user_subject"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-xl font-semibold text-neutralDGrey">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-xl font-semibold text-neutralDGrey">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-brandPrimary btn-primary"
            >
              Submit
            </button>
            {done && <p className="text-lg flex items-center justify-center mt-4 text-brandPrimary">Thank You ...</p> }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
