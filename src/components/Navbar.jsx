import { motion } from "framer-motion";
import React, { useState } from "react";
import { Discord, Facebook, Telegram } from "./Footer";
import { Link } from "react-scroll";
import SideBar from "./SideBar";

function Navbar() {
  const [show, setShow] = React.useState(true);
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.clientY <= 50) setShow(true); // Adjust threshold as needed (in pixels)
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove); // Cleanup
    };
  }, []);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <motion.section
        initial={{ y: -70 }}
        animate={{ y: show ? 0 : -70 }}
        className={`w-screen fixed duration-200 navbar  ${
          lastScrollY > 75 ? "bg-[rgba(0,0,0,0.3)] " : "bg-transparent"
        }
    bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-80
     md:grid md:grid-cols-[2fr_8fr_3fr] flex justify-around text-white z-50 `}
      >
        <h1 className="place-self-center relative  md:text-[3.3vw] text-[8vw] font-bold mb-1  cursor-pointer duration-300 text-gray-300 hover:text-white text-shadow hover:scale-105">
          <span>SoS</span>
        </h1>

        <article className="grid grid-cols-[2fr_1fr]  gap-10 ">
          <nav className="md:flex hidden gap-[6vw] justify-self-start px-4 self-center text-[1.5vw] text-gray-400 ">
            <Link
              spy={true}
              smooth={true}
              duration={2000}
              to="section1"
              className="cursor-pointer  hover:scale-105 hover:text-white duration-200 font-semibold"
            >
              Home
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={2000}
              to="section2"
              className="cursor-pointer  hover:scale-105 hover:text-white duration-200 font-semibold"
            >
              Skills
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={2000}
              to="section3"
              className="cursor-pointer  hover:scale-105 hover:text-white duration-200 font-semibold"
            >
              Projects
            </Link>
          </nav>
          <nav className="md:flex hidden gap-[1vw] items-center justify-self-end self-center mt-[2px]">
            {[
              {
                icon: <Facebook />,
                link: "https://www.facebook.com/sos.mansouri.940",
              },
              {
                icon: <Discord />,
                link: "https://discordapp.com/users/467421521913184276",
              },
              {
                icon: <Telegram />,
                link: "https://t.me/ooXSMoo",
              },
            ].map(({ icon, link }) => (
              <button
                onClick={() => {
                  window.open(link);
                }}
                className="rounded-full bg-[#222222] items-center justify-center  z-10 hover:bg-transparent relative hover:text-black duration-300 bubbleButton overflow-hidden border grid border-white border-solid w-[calc(2vw+15px)] h-[calc(2vw+15px)]"
              >
                {icon}
              </button>
            ))}
          </nav>
        </article>
        <Link
          to="section4"
          spy={true}
          smooth={true}
          duration={2000}
          className="place-self-center cursor-pointer relative hover:text-black md:block hidden py-3 px-[1vw] border slidebutton border-white border-solid text-[1.3vw] font-bold tracking-wide
                       duration-300"
        >
          Let's Connect
        </Link>
        <button
          onClick={() => setVisible(!visible)}
          className="flex  relative justify-center items-center  md:hidden self-center "
        >
          <Burger vis={visible} />
        </button>
      </motion.section>
      <SideBar visible={visible} setVisible={setVisible} />
    </>
  );
}

const Burger = ({ vis }) => (
  <div className={`flex flex-col gap-1 duration-500 ${vis && "translate-y-2"}`}>
    <span
      className={`w-6 duration-1000 bg-white ease-in-out  h-[3px] rounded-full 
      ${vis && "rotate-[225deg] "}
    `}
    ></span>
    <span
      className={`w-6 duration-1000 bg-white h-[3px] rounded-full 
      ${vis && "-rotate-[225deg]  -translate-y-[7px] "}
    `}
    ></span>
    <span
      className={`w-6 duration-500 bg-white h-[3px] rounded-full 
      ${vis && "scale-0 "}
    `}
    ></span>
  </div>
);

export default Navbar;
