import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Element } from 'react-scroll';

function Skills() {
  const [word, setWord] = useState(0);

  useEffect(() => {
    if (word > 35) setWord(0);
    setTimeout(() => {
      setWord(word + 1);
    }, 400);
  }, [word]);

  return (
    <motion.section
      whileInView={{ y: 0 }}
      initial={{ y: 40 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="sm:min-h-[70vh] min-h-[40vh] w-full grid relative  "
    >
      <Element id="section2" className="absolute -translate-y-28"/>
      <nav className="absolute w-full h-full  bg-[linear-gradient(56deg,_rgba(77,8,88,1)_0%,_rgba(11,11,11,1)_30%,_rgba(0,0,0,1)_65%,_rgba(92,27,83,1)_100%);] md:bg-[linear-gradient(56deg,_rgba(77,8,88,1)_0%,_rgba(11,11,11,1)_18%,_rgba(0,0,0,1)_78%,_rgba(92,27,83,1)_100%);] blur-lg"></nav>
      <nav className="place-self-center duration-500 relative py-2 flex overflow-hidden justify-around flex-col items-center text-white  -translate-y-[2vw]  flex-wrap  lg:w-[80vw] w-[95vw] rounded-[80px] sm:min-h-[70vh] min-h-[40vh]  md:bg-[#151515] bg-transparent">
        <h1 className="md:text-[3.2vw] text-3xl font-bold my-4 mt-6">Skills</h1>
        <h2 className="text-gray-400 text-center py-2 md:text-[1.3vw] text-[12px] w-[83%] cursor-default font-semibold">
          {"Experience in developing and maintaining web applications using MERN Stack (MongoDB, Express.js, React.js, Node.js), Proficient in frontend technologies such as HTML, CSS, and JavaScript,Strong knowledge of database design, implementation, and optimization using MongoDB ... "
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
        <div className="md:max-w-[800px] max-w-[320px] flex">
          <Swiper
            breakpoints={{
              750: { slidesPerView: 4 },
              360: { slidesPerView: 2 },
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper !p-6  !overflow-y-clip"
          >
            {[
              { stroke: 90, title: "HTML" },
              { stroke: 75, title: "CSS" },
              { stroke: 90, title: "JS" },
              { stroke: 85, title: "REACT" },
              { stroke: 80, title: "EXPRESS" },
              { stroke: 80, title: "MONGODB" },
              { stroke: 50, title: "NEXT-JS" },
              { stroke: 40, title: "FIGMA" },
              { stroke: 65, title: "WebSocket" },
              { stroke: 70, title: "Redux" },
              { stroke: 70, title: "FramerMotion" },
            ].map((e) => (
              <SwiperSlide key={e.title}>
                <CircularProgress stroke={e.stroke} title={e.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </nav>
    </motion.section>
  );
}

const CircularProgress = ({ stroke, title }) => {
  const ref = useRef();
  const inView = useInView(ref);

  return (
    <motion.aside
      ref={ref}
      className={`place-self-center w-40 h-40  md:scale-90 scale-[0.75] relative hover:scale-100 duration-1000  rounded-full shadow-[inset_6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_15px_-1px_rgba(0,0,0,0.8)] grid ${
        inView ? "opacity-100 " : "opacity-0"
      }`}
    >
      {inView ? (
        <>
          <div
            className="h-32 w-32 place-self-center grid  rounded-full
                   shadow-lg shadow-[rgba(0,0,0,0.7)]     
      "
          >
            <div className="absolute -bottom-0 left-7 font-extrabold text-white  w-24 flex items-center justify-center ml-1 h-10 md:bg-[#151515]">
              {title}
            </div>

            <div
              id="number"
              className="text-white place-self-center flex text-xl"
            >
              <CountUp end={inView ? stroke : 0} duration={3} /> %
            </div>
          </div>
          <svg
            className="absolute top-0 left-0  rotate-[140deg]"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            {" "}
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#9E3880" />
                <stop offset={`100%`} stopColor="#9733EE" />
              </linearGradient>
            </defs>
            <circle
              className="fill-none stroke-[21px]   stroke-[url(#GradientColor)]"
              cx="80"
              cy="80"
              r="70"
              strokeLinecap="round"
              style={{ "--stroke-dash": 450 - (stroke * 310) / 100 }}
            />
          </svg>
        </>
      ) : (
        <></>
      )}
    </motion.aside>
  );
};

export default Skills;
