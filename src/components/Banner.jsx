import React, { useEffect, useState } from "react";
import { Element, Link } from "react-scroll";

function Banner() {
  const [word, setWord] = useState(0);

  useEffect(() => {
    if (word > 35) setWord(0);
    setTimeout(() => {
      setWord(word + 1);
    }, 400);
  }, [word]);

  return (
    <Element
      id="section1"
      className="banner w-full relative grid md:grid-cols-[3fr_2fr]  object-cover justify-center"
    >
      <article className="ml-[5vw] mt-12 md:gap-0 gap-3 text-white self-center flex flex-col show-in">
        <div className="flex">
          <h1 className="py-2 px-7 flex md:mb-0 mb-6  border  cursor-default overflow-hidden  justify-center md:text-[1.3vw] tracking-wide font-semibold  bg-[linear-gradient(40deg,#5F2852,#5F285281,#38268181,#38266C)] duration-300  text-shadow">
            {" "}
            Welcome To My Portfolio
          </h1>
        </div>
        <h1 className="md:text-[4.4vw] text-[36px] font-bold md:w-full w-64  animated-text my-1">
          Hi! I'm Sohaib <span className="relative"></span>
        </h1>
        <h2 className="text-gray-400 py-2 md:text-[1.4vw] text-[14px] w-[83%] cursor-default font-semibold">
          {"I am a Full-Stack Developer with over four years experience in software development and proficiency in development tools,I have experience in Frontend (HTML, CSS, Javascript, React), Backend (Node.Js, Express), Databases (MongoDb) and UI/UX designs."
            .split(" ")
            .map((e, i) => (
              <span
                key={i}
                className={`${
                  i == word && "text-shadow-static text-white "
                } duration-500`}
              >{`${e} `}</span>
            ))}
        </h2>
        <aside className="flex justify-start mt-12 relative">
          <button className="flex gap-3 relative text-lg px-4 py-2 items-center animate-pulse   md:text-[1.8vw] font-semibold">
            <Link
              to="section4"
              spy={true}
              smooth={true}
              duration={2000}
              className="absolute w-full h-full peer z-10"
            />
            <span className="peer-hover:opacity-0  duration-200">
              Let's Connect
            </span>
            <svg
              className="md:w-[2.2vw] md:h-[2.2vw] absolute -right-5 w-6 mt-1  peer-hover:right-[40%] peer-hover:animate-spin  peer-hover:scale-125  duration-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </aside>
      </article>
      <img
        className="place-self-center md:relative absolute pointer-events-none    md:opacity-100 opacity-20 md:w-[80%] mt-8 object-cover  both "
        src={"https://i.ibb.co/7zqvcc8/main-large.png"}
        alt=""
      />
    </Element>
  );
}

export default Banner;
