import React, { useState, useRef } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_xkpq5ja",
        "template_nxo593t",
        {
          from_name: form.name,
          to_name: "Godfred Mireku Owusu",
          from_email: form.email,
          to_email: "godfredmirekuowusu@gmail.com",
          message: form.message,
        },
        "XZaNamxJYmZcSGH-A"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, I wil get back to you as soon as possibile.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Sorry, something went wrong.");
        }
      );
  };
  // template_nxo593t
  // service_xkpq5ja
  // XZaNamxJYmZcSGH-A
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handlesubmit}
          className="flex flex-col mt-12 gap-8"
        >
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Your Name</span>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-tertiary outline-none px-6 py-4 placeholder:text-secondary rounded-lg text-white border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Your Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="bg-tertiary outline-none px-6 py-4 placeholder:text-secondary rounded-lg text-white border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Leave a message for me"
              className="bg-tertiary outline-none px-6 py-4 placeholder:text-secondary rounded-lg text-white border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none text-white font-bold shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "sent"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
