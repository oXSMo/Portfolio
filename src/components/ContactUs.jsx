import React, { useState } from "react";
import { motion } from "framer-motion";
import { ValidationError, useForm } from "@formspree/react";
import { toast } from "react-toastify";
import { Element } from 'react-scroll';

function ContactUs() {
  const [firstName, setFirstName] = useState();
  const [message, setMessage] = useState();
  const [email, setEmail] = useState();

  const [state, formspree] = useForm("xvoenbqd");

  return (
    <Element id="section4" className="md:h-screen  relative w-full  backdrop-blur-sm my-3 grid md:grid-cols-2">
      <article className="w-[110vw] -translate-x-11 h-full absolute gradient-background blur-md "></article>
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="z-10 md:relative absolute place-self-center md:w-[44vw] md:!opacity-100 !opacity-20 w-10/12"
        src="https://i.ibb.co/5vYsrxn/A.png"
        alt=""
      />
      <form
        onSubmit={formspree}
        className="flex flex-col justify-center gap-2 py-10 px-4 z-20 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          
          className="md:text-[3.8vw] text-4xl  font-semibold"
        >
          Get In Touch
        </motion.h1>
        <nav className="w-full grid md:grid-cols-2 grid-cols-1 grid-rows-2 gap-2 mt-4 font-mono">
          <Input
            placeholder={"First Name"}
            set={setFirstName}
            value={firstName}
          />
          <Input placeholder={"Last Name"} />
          <Input
            placeholder={"Email Adress"}
            set={setEmail}
            value={email}
            id="email"
            state={state}
          />
          <Input placeholder={"Phone Number"} />
        </nav>
        <Input
          placeholder={"Message"}
          set={setMessage}
          input={false}
          value={message}
          id="message"
          state={state}
        />
        <motion.button
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          
          type="submit"
          disabled={state.submitting}
          className="relative flex justify-center items-center slidebutton rounded-2xl hover:text-black gap-2 py-6  overflow-hidden  w-32 border "
        >
          <span className="w-full h-full bg-transparent peer absolute z-10" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="absolute -translate-x-7 peer-hover:rotate-45 peer-hover:translate-x-0 duration-500"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            ></path>
          </svg>
          <p className="absolute translate-x-3 text-xl font-semibold peer-hover:translate-x-28 duration-500">
            Send
          </p>
        </motion.button>
      </form>
    </Element>
  );
}

const Input = ({
  placeholder,
  input = true,
  set = () => {},
  value = "",
  id = "",
  state,
}) => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      
      className={`w-full relative overflow-hidden bg-transparent  border  rounded-2xl ${
        input ? "h-[60px]" : "h-full"
      }`}
      value={value}
      onChange={(e) => {
        set(e.target.value);
      }}
    >
      <span className="w-full h-full absolute z-10 bg-white pointer-events-none bg-opacity-5 blur-sm" />
      {input ? (
        <input
          type={id ? id : "text"}
          className="w-full h-full z-20 outline-none px-4 placeholder-gray-300 md:text-[1.4vw]   bg-transparent"
          placeholder={placeholder}
          id={id}
          name={id}
        />
      ) : (
        <textarea
          id={id}
          name={id}
          className="w-full h-full z-20 outline-none p-4   placeholder-gray-300 md:text-[1.4vw]   bg-transparent"
          placeholder={placeholder}
        ></textarea>
      )}

      {id && <ValidationError prefix={id} field={id} errors={state.errors} />}
    </motion.aside>
  );
};

export default ContactUs;
