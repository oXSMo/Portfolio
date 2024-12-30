import React, { useEffect } from "react";
import { Drawer, Sidenav, Nav } from "rsuite";
import { Link } from "react-scroll";
import { Discord, Facebook, Telegram } from "./Footer";

function SideBar({ visible, setVisible }) {
  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log("xx"); // Adjust threshold as needed (in pixels)
    };
    window.addEventListener("drag", handleMouseMove);

    return () => {
      window.removeEventListener("drag", handleMouseMove); // Cleanup
    };
  }, []);

  return (
    <Drawer
      className="md:!hidden "
      backdropClassName="md:!hidden"
      placement="left"
      size={"60%"}
      open={visible}
      onClose={() => {
        setVisible(false);
      }}
    >
      <Drawer.Header>
        <Drawer.Title className="!overflow-visible">
          <h1 className="place-self-center relative  md:text-[3.3vw] text-[8vw] font-bold mb-1  cursor-pointer duration-300 text-gray-300 hover:text-white text-shadow hover:scale-105">
            <span>SoS</span>
          </h1>
        </Drawer.Title>
      </Drawer.Header>
      <Drawer.Body className="!p-0 ">
        <Sidenav>
          <Sidenav.Body>
            <Nav
              activeKey="1"
              className="!bg-transparent"
              onClick={() => {
                setVisible(false);
              }}
            >
              {[
                { icon: <House />, title: "Home", section: "section1" },
                { icon: <SkillIcon />, title: "Skills", section: "section2" },
                {
                  icon: <ProjectsIcon />,
                  title: "Projects",
                  section: "section3",
                },
                {
                  icon: <Mail />,
                  title: "Contact",
                  section: "section4",
                },
              ].map((e, i) => (
                <Link spy={true} smooth={true} duration={2000} to={e.section}>
                  <Nav.Item
                    onClick={() => {
                      setVisible(false);
                    }}
                    eventKey={i}
                    className="!flex !bg-[#15181ce1] hover:!py-5  !p-4  items-center gap-6 !text-lg font-semibold !text-white"
                    icon={e.icon}
                  >
                    {e.title}
                  </Nav.Item>
                </Link>
              ))}
            </Nav>
            <hr className="opacity-20"/>
            <nav className="flex gap-3 bg-[#15181ce1] p-4">
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
              className="rounded-full scale-90 bg-[#222222] items-center justify-center  z-10 hover:bg-transparent relative hover:text-black duration-300 bubbleButton overflow-hidden border grid border-white border-solid p-1.5"
            >
              {icon}
            </button>
          ))}
        </nav>
          </Sidenav.Body>
        </Sidenav>
      </Drawer.Body>
    </Drawer>
  );
}

const House = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18 "
    height="18  "
    fill="currentColor"
    class="bi bi-house-door"
    viewBox="0 0 16 16"
  >
    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
  </svg>
);

const SkillIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-gem"
    viewBox="0 0 16 16"
  >
    <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
  </svg>
);

const ProjectsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-card-checklist"
    viewBox="0 0 16 16"
  >
    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
  </svg>
);

const Mail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-envelope"
    viewBox="0 0 16 16"
  >
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
  </svg>
);
export default SideBar;
