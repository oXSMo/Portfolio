import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Tilt } from "react-tilt";
import { Element } from "react-scroll";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiChartmogul,
  SiSoundcharts,
  SiRedux,
} from "react-icons/si";
import { IoArrowForward } from "react-icons/io5";

function Projects() {
  const [selected, setSelected] = useState(1);
  return (
    <Element id="section3" className=" flex justify-center w-full my-6">
      <nav className="flex flex-col items-center text-white b justify-center py-6 min-h-[100vh] w-[80%]">
        <h1 className="md:text-[4.2vw] text-3xl font-bold">Projects</h1>
        <p className="text-center md:text-[1.3vw] text-[16px]  text-gray-500 font-semibold my-5 md:w-[70%]">
          I have done many projects, chat application with socket.io using mern,
          SAAS for sell and buy products, QUIZ system using also MERN with redux
          and many other libraries , E-commerce websites and many other projects
        </p>
        <Taps selected={selected} setSelected={setSelected} />

        <AnimatePresence mode="wait">
          <motion.article className="gap-7  w-[95vw] pt-6" key={selected}>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -160, opacity: 0 }}
              exit={{ x: 160, opacity: 0, transition: ".8s" }}
              transition={{ duration: 0.8 }}
              className="md:w-10/12 mb-8 w-full group px-6 py-6 overflow-hidden cursor-pointer md:grid grid-cols-2 bg-gradient-to-br to-[#1C0130] from-[#860749] from-20% rounded-lg max-w-4xl 0 bg-pink-500 mx-auto my-10"
            >
              <article className="pr-6">
                <h1 className="font-semibold tracking-wider text-2xl mb-4">
                  Chat-App
                </h1>
                <p className="text-white/65 mb-6">
                  chat-app is live chat application, user can make account, make
                  conversations send messages , see who's active , and search
                  for other users , builded with MERN-Stack technologies , and
                  Socket.io{" "}
                </p>
                <h2 className="text-lg">Tech Stack Used</h2>
                <aside className="flex flex-wrap gap-2">
                  <Tech
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fff"
                        width="18px"
                        height="18px"
                        viewBox="0 0 32 32"
                      >
                        <path d="M15.917 0.021c-1.339 0.005-2.672 0.172-3.969 0.505-6.24 1.552-11.193 7.203-11.828 13.613-0.787 6.063 2.281 12.381 7.525 15.511 5.152 3.224 12.125 3.095 17.167-0.296 4.532-2.943 7.349-8.303 7.183-13.715-0.077-5.353-3.083-10.557-7.683-13.307-2.505-1.547-5.452-2.323-8.395-2.312zM15.828 2.281c6.593-0.011 13.052 5.088 13.713 11.901 1.261 7.547-5.005 15.219-12.651 15.443-7.271 0.724-14.303-5.443-14.511-12.745-0.541-5.911 3.36-11.781 8.932-13.735 1.437-0.572 2.969-0.864 4.516-0.859zM22.62 6.584c-3.584 2.78-7.016 5.744-10.521 8.609 1.604 0.020 3.219 0.020 4.828 0.009 1.88-2.885 3.813-5.733 5.693-8.619zM15.068 16.787c-1.88 2.891-3.817 5.744-5.699 8.635 3.595-2.776 7.011-5.76 10.537-8.609-1.615-0.020-3.229-0.025-4.839-0.025z" />
                      </svg>
                    }
                    title="Socket.io"
                  />
                  <Tech icon={<SiMongodb />} title="MongoDB" />
                  <Tech icon={<SiExpress />} title="express" />
                  <Tech icon={<SiReact />} title="React" />
                </aside>
                <a
                  target="_blank"
                  href="https://chat-system-rh3j.onrender.com/"
                  className="px-4 mt-6 py-2 w-32 justify-center flex gap-1.5 items-center mr-auto text-xs hover:text-white hover:bg-opacity-100 duration-200 bg-[#1C0130] bg-opacity-80 text-white/70 rounded-md"
                >
                  Visit Website <IoArrowForward className="text-sm" />
                </a>
              </article>
              <img
                src="https://i.ibb.co/BLKrFzf/image.png"
                className="rounded-md md:translate-y-20 md:my-auto mt-6 duration-500 group-hover:translate-y-0 "
              />
            </motion.div>

            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -160, opacity: 0 }}
              exit={{ x: 160, opacity: 0, transition: ".8s" }}
              transition={{ duration: 0.8 }}
              className="md:w-10/12 mb-8 w-full group px-6 py-6 overflow-hidden cursor-pointer md:grid grid-cols-2 bg-gradient-to-br to-[#DCDFE5] from-[#1f4dc1] from-50% rounded-lg max-w-4xl 0 bg-pink-500 mx-auto my-10"
            >
              <article className="pr-6">
                <h1 className="font-semibold tracking-wider text-2xl mb-4">
                  SARAVA
                </h1>
                <p className="text-white/65 mb-6 line-clamp-4">
                  SARAVA is landing page application and dashboard for crypto
                  trading bot on telegram, user can make account, and check
                  latest informations about his account and crypto market{" "}
                  {"( Website not completed yet. ) "}
                </p>
                <h2 className="text-lg">Tech Stack Used</h2>
                <aside className="flex flex-wrap gap-2">
                  <Tech icon={<SiSoundcharts />} title="Apexcharts" />
                  <Tech icon={<SiMongodb />} title="MongoDB" />
                  <Tech icon={<SiExpress />} title="express" />
                  <Tech icon={<SiReact />} title="React" />
                </aside>
                <a
                  target="_blank"
                  href="https://mellifluous-daffodil-9fed1f.netlify.app/"
                  className="px-4 mt-6 py-2 w-32 justify-center flex gap-1.5 items-center mr-auto text-xs hover:text-white hover:bg-opacity-100 duration-200 bg-blue-950 bg-opacity-80 text-white/70 rounded-md"
                >
                  Visit Website <IoArrowForward className="text-sm" />
                </a>
              </article>
              <div className="overflow-y-auto scrollnone h-[272px] rounded-md md:translate-y-20 md:my-auto mt-6 duration-500 group-hover:translate-y-0">
                <img
                  src="https://i.ibb.co/5vzrXJp/screencapture-mellifluous-daffodil-9fed1f-netlify-app-2024-12-29-06-01-31.png"
                  className="rounded-md  "
                />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -160, opacity: 0 }}
              exit={{ x: 160, opacity: 0, transition: ".8s" }}
              transition={{ duration: 0.8 }}
              className="md:w-10/12 mb-8 w-full group px-6 py-6 overflow-hidden cursor-pointer md:grid grid-cols-2 bg-gradient-to-tr to-[#3e3f42] from-[#0e0e0e] from-20% rounded-lg max-w-4xl 0 bg-pink-500 mx-auto my-10"
            >
              <article className="pr-6">
                <h1 className="font-semibold tracking-wider text-2xl mb-4">
                  WHITE-SHOP
                </h1>
                <p className="text-white/65 mb-6 line-clamp-4">
                  WHITE is an account shop where you can pay with crypto to buy
                  premium accounts for cheap price, you can make account , check
                  for products , add to cart and many more{" "}
                  {"( Website not completed yet. ) "}
                </p>
                <h2 className="text-lg">Tech Stack Used</h2>
                <aside className="flex flex-wrap gap-2">
                  <Tech icon={<SiRedux />} title="Redux" />
                  <Tech icon={<SiMongodb />} title="MongoDB" />
                  <Tech icon={<SiExpress />} title="express" />
                  <Tech icon={<SiReact />} title="React" />
                </aside>
                <a
                  target="_blank"
                  href="https://treyshop-sp99.onrender.com/"
                  className="px-4 mt-6 py-2 w-32 justify-center flex gap-1.5 items-center mr-auto text-xs hover:text-white hover:bg-opacity-100 duration-200 bg-[#3C3C3C] bg-opacity-80 text-white/70 rounded-md"
                >
                  Visit Website <IoArrowForward className="text-sm" />
                </a>
              </article>
              <div className="overflow-y-auto scrollnone h-[272px] rounded-md md:translate-y-20 md:my-auto mt-6 duration-500 group-hover:translate-y-0">
                <img
                  src="https://i.ibb.co/DGvFdV7/image.png"
                  className="rounded-md  "
                />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -160, opacity: 0 }}
              exit={{ x: 160, opacity: 0, transition: ".8s" }}
              transition={{ duration: 0.8 }}
              className="md:w-10/12 mb-8 w-full group px-6 py-6 overflow-hidden cursor-pointer md:grid grid-cols-2 bg-gradient-to-br to-[#1d3f75] from-[#0F131A] from-20% rounded-lg max-w-4xl 0 bg-pink-500 mx-auto my-10"
            >
              <article className="pr-6">
                <h1 className="font-semibold tracking-wider text-2xl mb-4">
                  MED-CHECK
                </h1>
                <p className="text-white/65 mb-6 line-clamp-4">
                  MEDCHECK is an QUIZ platform for Medical students , student
                  can make account to track his results and informations , make
                  quizzes and ofc solve quizzes{"  "}
                  {" (Website not completed yet.) "}
                </p>
                <h2 className="text-lg">Tech Stack Used</h2>
                <aside className="flex flex-wrap gap-2">
                  <Tech icon={<SiSoundcharts />} title="Apexcharts" />
                  <Tech icon={<SiMongodb />} title="MongoDB" />
                  <Tech icon={<SiExpress />} title="express" />
                  <Tech icon={<SiReact />} title="React" />
                </aside>
                <a
                  target="_blank"
                  href="https://quiz-juzx.onrender.com/"
                  className="px-4 mt-6 py-2 w-32 justify-center flex gap-1.5 items-center mr-auto text-xs hover:text-white hover:bg-opacity-100 duration-200 bg-[#19315d] bg-opacity-80 text-white/70 rounded-md"
                >
                  Visit Website <IoArrowForward className="text-sm" />
                </a>
              </article>
              <div className="overflow-y-auto scrollnone  rounded-md md:translate-y-20 md:my-auto mt-6 duration-500 group-hover:translate-y-0">
                <img
                  src="https://i.ibb.co/7vXNb8Y/image.png"
                  className="rounded-md  "
                />
              </div>
            </motion.div>
          </motion.article>
        </AnimatePresence>
      </nav>
    </Element>
  );
}

const Card = ({ images, title, link, account }) => {
  const [active, setActive] = useState(false);
  if (title)
    return (
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -40, opacity: 0 }}
        exit={{ x: 40, opacity: 0, transition: "0.3s" }}
        transition={{ duration: 0.8 }}
        className="md:w-10/12 w-full rounded-lg max-w-3xl h-80 bg-pink-500 mx-auto my-10"
      ></motion.div>
    );
};

const Taps = ({ selected, setSelected }) => {
  return (
    <article className="my-4 overflow-hidden rounded-full grid grid-cols-3 md:w-[48vw] w-[75vw] bg-[#100f10] shadow-xl shadow-black h-12">
      {[1, 2, 3].map((e) => (
        <button
          className={`relative shadow-[inset_0_0_15px_1px_black] grid`}
          key={`button-${e}`}
          onClick={() => setSelected(e)}
        >
          <p
            className={`${
              selected === e ? "text-white text-shadow-static" : "text-gray-400"
            } font-semibold delay-200 duration-200 text-lg z-30 place-self-center`}
          >
            TAP{e}
          </p>
          {e === selected ? (
            <motion.div
              className="underline z-20 absolute w-full h-full  top-0 bg-[linear-gradient(45deg,#7f1a62,#583994)] blur-[6px]"
              layoutId="underline"
            />
          ) : null}
        </button>
      ))}
    </article>
  );
};

const Cards = ({ selected }) => {
  return (
    <>
      {selected === 1 ? (
        <>
          <Card
            title={{
              title: "Chat-App",
              description: "Sokcet.IO - React - Express - MongoDB",
            }}
            images={[
              "https://i.ibb.co/BLKrFzf/image.png",
              "https://i.ibb.co/JQc8FLB/image.png",
              "https://i.ibb.co/xGKDNdX/image.png",
            ]}
            link={"https://chat-system-rh3j.onrender.com/"}
            account={"any/123456"}
          />
          <Card
            title={{
              title: "Med-Check",
              description: "React - Express - MongoDB - Quiz System",
            }}
            images={[
              "https://i.ibb.co/xhw8Lfb/image.png",
              "https://i.ibb.co/vHgKVRZ/image.png",
              "https://i.ibb.co/3sjyk60/image.png",
              "https://i.ibb.co/CtBB1Z3/image.png",
              "https://i.ibb.co/CtBB1Z3/image.png",
            ]}
            link={"https://medcheck-front.onrender.com/"}
            account={"a@b.c/123456"}
          />
          <Card
            title={{
              title: "Art-DZ",
              description: "React - Express - MongoDB - SAAS - E-commerce",
            }}
            images={[
              "https://i.ibb.co/47WxW3C/image.png",
              "https://i.ibb.co/0ZstkdB/image.png",
              "https://i.ibb.co/z6h7Zvq/image.png",
              "https://i.ibb.co/z6h7Zvq/image.png",
              "https://i.ibb.co/hFVxxC1/image.png",
            ]}
          />
        </>
      ) : (
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full grid h-52 "
        >
          <h1 className="place-self-center text-shadow cursor-default md:text-[2vw] text-xl font-serif animate-bounce">
            No Porjects Yet
          </h1>
        </motion.article>
      )}
    </>
  );
};

const Tech = ({ icon, title }) => (
  <div className="px-2.5 py-1 flex h-9 mt-2 justify-center rounded-full bg-black/25 gap-2 items-center">
    <div className="w-4 h-4">{icon}</div>{" "}
    <h1 className="text-[13px]">{title}</h1>
  </div>
);

export default Projects;
