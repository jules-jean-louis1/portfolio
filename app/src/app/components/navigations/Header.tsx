import React, { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const path = usePathname();
  useEffect(() => {
    // Scroll navbar effect
    const nav = document.querySelector(".scroller");
    const onScroll = () => {
      if (window.scrollY >= 80) {
        nav?.classList.add("active_nav");
      } else {
        nav?.classList.remove("active_nav");
      }
      // Scrollbar width
      const scrollbar = document.getElementById("scrollbar");
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.pageYOffset;
      const scrollPercent = (scrollPosition / totalHeight) * 100;
      if (scrollbar) scrollbar.style.width = scrollPercent + "%";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="shadow-lg ">
      <div
        className="bg-blur-50 py-3 mx-4 flex flex-row justify-between border-b-1"
        id="navbar-container"
      >
        <div id="id-name" className="flex mx-2">
          <div id="div" className="flex items-center">
            <a href="#top">
              <span className="svg_logo">
                <Image
                  src="/images/logos/jjl.svg"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="filter_white"
                />
              </span>
            </a>
            <ul className="flex flex-row hidden md:flex">
              <li>
                <h2 className="mx-2 font-disket-mono">
                  Jules JEAN-LOUIS
                </h2>
              </li>
              <li>
                <h2 className="mx-2" id="sous-titre">
                  Développeur Web
                </h2>
              </li>
            </ul>
          </div>
        </div>
        <nav className="flex items-center">
          {path === "/projets" ? (
            <></>
          ) : (
            <ul className="flex">
              <li className="mx-2">
                <a href="#aboutME" className="tut-animation-1">
                  A propos
                </a>
              </li>
              <li className="mx-2">
                <a href="#section_projets" className="tut-animation-1">
                  Projets
                </a>
              </li>
              <li className="mx-2">
                <a href="#section_contact" className="tut-animation-1">
                  Contact
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
      <div className="scroller"></div>
      <div id="scrollbar" className="mx-4 max-w-[91%] lg:max-w-[98.30%]"></div>
    </header>
  );
};

export default Header;
