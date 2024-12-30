import React from "react";

export default function Footer() {
  return (
    <section className="flex justify-between p-10">
      <h1 className="place-self-center relative  md:text-[3.3vw] text-[8vw] font-bold mb-1  cursor-pointer duration-300 text-gray-300 hover:text-white text-shadow hover:scale-105">
        <span>SoS</span>
      </h1>
      <article className="flex flex-col items-end gap-4 text-white">
        <nav className="flex gap-3">
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
              className="rounded-full bg-[#222222] items-center justify-center  z-10 hover:bg-transparent relative hover:text-black duration-300 bubbleButton overflow-hidden border grid border-white border-solid p-1.5"
            >
              {icon}
            </button>
          ))}
        </nav>

        <p className="text-gray-400 font-semibold flex justify-end text-end text-sm my-1">Copyright 2024 . All Rights Reserved</p>
      </article>
    </section>
  );
}

export const Facebook = () => (
  <svg
    className="place-self-center ml-[1px]"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
      clipRule="evenodd"
    />
  </svg>
);

export const Discord = () => (
  <svg
    className="place-self-center text-xl"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
  </svg>
);

export const Telegram = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    className="place-content-center "
    viewBox="0 0 16 16"
  >
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
  </svg>
);
