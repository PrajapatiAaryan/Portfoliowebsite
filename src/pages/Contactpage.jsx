import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImOpt } from "react-icons/im";
import { MdMail, MdPhone } from "react-icons/md";

const Contactpage = () => {
  const Accesskey =import.meta.env.VITE_WEB3_FORMS_ACCESS_KEY
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const form = new FormData();
    form.append("access_key",Accesskey );
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      console.log("Error", data);
      setResult(data.message || "Failed to submit the form.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20 py-10 w-full">
      <div className="py-5 md:pb-20">
        <h1 className="text-center text-xl font-bold text-cyan-500">Get In Touch</h1>
        <h1 className="text-center text-4xl sm:text-5xl text-white font-bold py-4">Contact Me</h1>
        <div className="flex justify-center items-center py-3">
          <div className="w-20 bg-cyan-500 h-1"></div>
        </div>
      </div>

      <div className="flex justify-center items-start flex-col md:flex-row gap-10 px-4 xl:px-52">
        {/* Left Section */}
        <div className="bg-gray-800 w-full md:w-[35%] rounded-md p-6 flex flex-col gap-10">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-gray-900 flex justify-center items-center">
              <FaLocationDot className="text-cyan-500 text-2xl" />
            </div>
            <div className="text-white">
              <h1 className="font-semibold text-xl">Location</h1>
              <p className="text-sm">Gotri, Vadodara, Gujarat - 390021</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-gray-900 flex justify-center items-center">
              <MdMail className="text-cyan-500 text-2xl" />
            </div>
            <div className="text-white">
              <h1 className="font-semibold text-xl">Email</h1>
              <p className="text-sm break-all">prajapatiaryan306@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-gray-900 flex justify-center items-center">
              <MdPhone className="text-cyan-500 text-2xl" />
            </div>
            <div className="text-white">
              <h1 className="font-semibold text-xl">Phone</h1>
              <p className="text-sm">+91 951 052 6116</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/aryan-prajapati-7216392b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 flex justify-center items-center text-white bg-gray-900 rounded-full hover:-translate-y-1 transition-all duration-300 hover:bg-cyan-300 hover:text-black"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://github.com/PrajapatiAaryan/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 flex justify-center items-center text-white bg-gray-900 rounded-full hover:-translate-y-1 transition-all duration-300 hover:bg-cyan-300 hover:text-black"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="mailto:prajapataryan306@gmail.com"
              target="_blank"
              className="h-11 w-11 flex justify-center items-center text-white bg-gray-900 rounded-full hover:-translate-y-1 transition-all duration-300 hover:bg-cyan-300 hover:text-black"
            >
              <MdMail className="text-xl" />
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-gray-800 w-full md:w-[60%] rounded-md p-6 flex flex-col gap-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              required
              className="bg-gray-950 text-gray-300 placeholder:text-gray-500 text-sm sm:text-lg w-full px-4 py-3 rounded-xl outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              required
              className="bg-gray-950 text-gray-300 placeholder:text-gray-500 text-sm sm:text-lg w-full px-4 py-3 rounded-xl outline-none"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Your Number"
              required
              className="bg-gray-950 text-gray-300 placeholder:text-gray-500 text-sm sm:text-lg w-full px-4 py-3 rounded-xl outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
              rows="5"
              required
              className="bg-gray-950 text-gray-300 placeholder:text-gray-500 text-sm sm:text-lg w-full px-4 py-3 rounded-xl outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl text-lg w-fit hover:opacity-90 transition-all duration-300 "
            >
              Submit
            </button>
          </form>
          <span className="text-sm text-cyan-400">{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
