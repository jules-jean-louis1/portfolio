"use client";
import React from "react";
import Image from "next/image";
import LogicielsSVG from "./components/LogicielsSVG";
import FrameworksSVG from "./components/FrameworksSVG";
import LangagesSVG from "./components/LangagesSVG";
import Header from "./components/navigations/Header";
import {
  Download,
  FileUser,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  User,
} from "lucide-react";

export default function Home() {
  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.toLocaleString("fr-FR", { month: "long" });

  return (
    <>
      <Header />
      <main className="w-full overflow-clip">
        <article id="home-page">
          <section className="mx-4 flex" id="present">
            <div className="flex items-center justify-end absolute right-10 text-white">
              <div id="iconLinks">
                <ul className="flex flex-col mt-5 mr-2 lg:justify-start lg:-mt-6 lg:mr-4">
                  <li className="hover:text-[#A770FF]">
                    <a href="https://github.com/jules-jean-louis1">
                      <Github />
                    </a>
                  </li>
                  <li className="my-2 hover:text-[#A770FF]">
                    <a href="https://www.linkedin.com/in/jules-jean-louis-351a32259/">
                      <Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
              <div id="number" className="flex text-[4.3em] lg:text-[9em]">
                <h3>{currentDay}</h3>
              </div>
              <div
                id="label"
                className="flex flex-col text-[0.5em] mt-2 ml-2 lg:ml-4  lg:text-[1.5em]"
              >
                <span id="dateMoisAlt" className="font-staatliches">
                  {currentMonth}
                </span>
                <span>Open To Work</span>
              </div>
            </div>
            <div className="flex flex-col justify-end lg:flex-row lg:items-end lg:justify-between w-full">
              <div className="flex flex-col text-white">
                <div className="flex ml-2"></div>
                <div className="mb-7 lg:space-y-12">
                  <h1 className="font-tusker h-[345px] text-[345px] leading-none flex items-center uppercase">
                    WEB
                  </h1>
                  <h1 className="font-tusker h-[345px] text-[345px] leading-none flex items-center justify-center uppercase">
                    DEVELOPPER
                  </h1>
                </div>
              </div>
              <div className="flex flex-col py-4 lg:w-[35%] text-white">
                <p
                  className="flex flex-col lg:items-end uppercase text-[0.8em] lg:text-[1.5em] text-white text-end"
                  id="infoPresentText"
                >
                  Je suis un développeur web full stack basé à Marseille.
                  Passionné par le code et le design. J&apos;aime créer des
                  sites web et des applications web performantes et esthétiques.
                </p>
                <div className="hiddenanime2 btn mt-1 pb-9 lg:pb-4">
                  <a href="#section_contact">
                    <button
                      className="mb-4 border-2 rounded w-full py-4 uppercase lg:mb-5 font-staatliches"
                      id="btnContactDefilAuto"
                    >
                      Contactez-Moi
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="iframeBackground">
            <iframe
              src="https://my.spline.design/clonerwavescopy-36e0ef6f39d654d64d91f12b6afdac7e/"
              frameBorder="0"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </article>
        <article>
          <section id="aboutME" className="h-[150vh] lg:h-3/4">
            <div
              id="aboutContainer"
              className="px-4 md:px-6 lg:max-w-7xl md:max-w-4xl w-full m-auto h-full relative"
            >
              <div
                id="aboutWarpper"
                className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-4"
              >
                <div className="cacheranime flex flex-col">
                  <div
                    className="flex flex-col items-center lg:items-end"
                    id="aboutMeTitle"
                  >
                    <h2 className="uppercase text-5xl font-semibold text-center lg:text-end lg:text-[3.5rem] lg:leading-none gap-y-3.5">
                      Bonjour! C&apos;est{" "}
                      <b className="text-[#A770FF]">Jules Jean-Louis</b>.
                    </h2>
                  </div>
                  <div className="flex text-center lg:justify-end lg:items-end lg:text-end mt-11">
                    <p className="text-[1.2em] space-y-2">
                      J’ai entamé une reconversion professionnelle il y a 3 ans
                      dans un domaine qui m’a toujours passionné : l’univers du
                      web. J’ai ensuite préparé un titre de concepteur
                      développeur d’applications en alternance. Aujourd’hui, je
                      souhaite mettre mes compétences en développement et design
                      au service de projets innovants.
                      <br />
                      Je suis motivé à rejoindre une équipe dynamique pour
                      continuer à progresser et relever de nouveaux défis. Si
                      vous êtes intéressé par mon profil, n’hésitez pas à me
                      contacter. Je serais ravie de pouvoir échanger avec vous.
                    </p>
                  </div>
                </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-[#A770FF]">
                        2024 - 2025
                      </span>
                      <span className="ml-4 text-base">
                        2 ans d&apos;expérience en développement web
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-[#A770FF]">
                        2025
                      </span>
                      <span className="ml-4 text-base">
                        Concepteur développeur d&apos;applications (Bac +3/4)
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-[#A770FF]">
                        2023
                      </span>
                      <span className="ml-4 text-base">
                        Développeur web et web mobile (Bac +2)
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center mt-2">
                        <Mail className="text-[#A770FF]" />
                        <span className="ml-4 text-base">
                          jules.jean-louis@laplateforme.io
                        </span>
                      </div>
                      <div className="flex items-center mt-2">
                        <MapPin className="text-[#A770FF]" />
                        <span className="ml-4 text-base">
                          Marseille, France
                        </span>
                      </div>
                      <a
                        className="flex items-center mt-2 font-bold h-10 px-5 rounded-12 bg-[#A770FF] w-fit"
                        href="/files/Jules_Jean-louis_CV.pdf"
                        download
                      >
                        <Download className="text-[#CFCFD0]" />
                        <span className="ml-4 text-base">
                          Telecharger mon CV
                        </span>
                      </a>
                    </div>
                  </div>
              </div>
            </div>
            <div
              id="aboutTechno"
              className="hiddenanime2 flex justify-center mt-14"
            >
              <div className="flex gap-x-6 mt-5 flex-row">
                <LangagesSVG />
                <FrameworksSVG />
                <LogicielsSVG />
              </div>
            </div>
          </section>
        </article>
        <article>
          <section className="projet flex-1">
            <div className="box-warpper-projet" id="section_projets">
              <div className="flex items-center">
                <Sparkles />
                <h2 className="text-3xl uppercase ml-2 font-bold font-staatliches">
                  Projets
                </h2>
              </div>
              <div
                id="containerImages"
                className="flex flex-col justify-center"
              >
                <div
                  id="projectWarpper"
                  className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-x-6 "
                >
                  <div className="imageGauche">
                    <h2 className="uppercase text-[120px] h-[140px] font-tusker hiddenProject">
                      <span className="">Wings Map</span>
                    </h2>
                    <p className="flex flex-col" id="subTitleDescro">
                      <span>Visualiser les données des déchets collectées</span>
                      <span>PHP, HTML, CSS, JS, SQL, Tailwind</span>
                    </p>
                  </div>
                  <div id="imgwarpper" className="imageDroite">
                    <a href="https://wings-map.com">
                      <Image
                        width={500}
                        height={300}
                        src="/images/Projets/wings-map.png"
                        alt="Wings Map"
                        className="lg:h-[20vh] lg:w-[35vw]"
                      />
                    </a>
                  </div>
                </div>
                <div
                  id="projectWarpper"
                  className="flex flex-col items-center lg:flex-row-reverse lg:justify-center lg:gap-x-6 "
                >
                  <div className="imageGauche">
                    <h2 className="uppercase text-[120px] h-[140px] font-tusker font-semibold hiddenProject">
                      <span className="">Proxifix</span>
                    </h2>
                    <p className="flex flex-col" id="subTitleDescro">
                      <span>
                        App Mobile Gestion d&apos;interventions informatiques
                      </span>
                      <span>Symfony, React Native</span>
                    </p>
                  </div>
                  <div id="imgwarpper" className="imageDroite">
                    <a href="https://proxifix.fr">
                      <Image
                        width={500}
                        height={300}
                        src="/images/Projets/proxifix.png"
                        alt="Proxifix"
                        className="lg:h-[20vh] lg:w-[35vw]"
                      />
                    </a>
                  </div>
                </div>
                <div
                  id="projectWarpper"
                  className="flex flex-col-reverse lg:flex items-center lg:flex-row-reverse lg:justify-center lg:gap-x-6 "
                >
                  <div id="imgwarpper" className="imageDroite">
                    <a href="https://jules-jean-louis.students-laplateforme.io/super-reminder/">
                      <Image
                        width={500}
                        height={300}
                        src="/images/Projets/safebase.png"
                        alt="Safebase"
                        className="lg:h-[20vh] lg:w-[35vw]"
                      />
                    </a>
                  </div>
                  <div className="imageGauche">
                    <h2 className="uppercase text-[120px] h-[140px] font-tusker">
                      <span className="">Safebase</span>
                    </h2>
                    <p className="flex flex-col ml-8" id="subTitleDescro">
                      <span>
                        Application de gestion de sauvegardes de base de données
                      </span>
                      <span>Angular, Go, Docker</span>
                    </p>
                  </div>
                </div>
                <div
                  id="projectWarpper"
                  className="flex flex-col items-center lg:flex-row-reverse lg:justify-center lg:gap-x-6 "
                >
                  <a className="flex" href="/projets">
                    <h2 className="uppercase text-[120px] h-[140px] font-tusker">
                      Tous mes projets
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-big-right-icon lucide-arrow-big-right"
                    >
                      <path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </article>
        <article>
          <section
            className="box-warpper-projet bg-[#121316]"
            id="section_contact"
          >
            <div className="flex items-center">
              <User />
              <h2 className="text-[2.1em] font-semibold uppercase font-staatliches">
                Contact
              </h2>
            </div>
            <div
              id="containerContact"
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center px-4 md:px-6 lg:max-w-7xl md:max-w-4xl w-full m-auto relative h-[93vh] lg:h-[50vh]"
            >
              <div className="imageDroite flex flex-col items-center bg-[#191A1E] hover:bg-[#202124] ease-in duration-300 p-4 min-h-50">
                <div className="bg-[#A770FF] p-4 rounded">
                  <span className="svg_logo">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="filter_white"
                    >
                      <path
                        d="M46.52 15.952C45.35 13.186 43.678 10.7 41.549 8.56399L41.517 8.53099C41.239 8.25399 40.956 7.98399 40.667 7.72199C38.722 5.95999 36.517 4.55199 34.096 3.52799C33.702 3.36099 33.3 3.20399 32.9 3.05999C32.76 3.00999 32.62 2.96099 32.479 2.91299C31.442 2.56299 30.377 2.28499 29.306 2.08599C29.23 2.07199 29.154 2.05799 29.077 2.04499C27.745 1.81099 26.377 1.69299 25.008 1.69299C23.622 1.69299 22.238 1.81499 20.889 2.05399C20.811 2.06799 20.734 2.08199 20.657 2.09599C19.603 2.29399 18.556 2.56899 17.537 2.91399C17.396 2.96099 17.255 3.00999 17.116 3.06099C16.716 3.20499 16.314 3.36199 15.92 3.52899C13.5 4.55299 11.295 5.96099 9.34999 7.72199C9.06099 7.98399 8.77799 8.25399 8.49999 8.53099L8.46699 8.56399C6.33899 10.7 4.66699 13.185 3.49699 15.952C2.27899 18.831 1.66199 21.888 1.66199 25.04C1.66199 26.2 1.74699 27.362 1.91499 28.494V28.496L1.91799 28.52C2.15899 30.136 2.57199 31.726 3.14999 33.261C3.25899 33.552 3.37499 33.841 3.49599 34.128C3.73799 34.7 4.00599 35.269 4.29199 35.819C4.74099 36.683 5.24499 37.517 5.79899 38.316C6.59599 39.467 7.49899 40.548 8.49899 41.548C10.239 43.288 12.212 44.725 14.381 45.834C14.797 46.047 15.221 46.248 15.652 46.436C15.741 46.475 15.831 46.514 15.92 46.552C18.799 47.77 21.857 48.387 25.008 48.387C28.159 48.387 31.217 47.77 34.096 46.552C36.876 45.376 39.373 43.692 41.517 41.549C42.517 40.549 43.42 39.468 44.217 38.317C44.771 37.517 45.274 36.683 45.724 35.82C46.011 35.27 46.278 34.701 46.52 34.129C46.641 33.842 46.757 33.553 46.867 33.262C47.445 31.727 47.858 30.137 48.099 28.521C48.269 27.381 48.356 26.211 48.356 25.042C48.355 21.889 47.738 18.831 46.52 15.952ZM3.07999 25.924C3.06899 25.63 3.06299 25.333 3.06299 25.04C3.06299 19.475 5.14899 14.168 8.93599 10.097C9.07199 9.94999 9.20999 9.80599 9.35099 9.66299V24.804L3.49499 29.407C3.26499 28.268 3.12599 27.106 3.07999 25.924ZM14.102 44.089C11.216 42.433 8.76599 40.167 6.90399 37.45L17.539 29.091V4.39799C18.592 4.01699 19.682 3.71499 20.782 3.50099C20.818 3.49399 20.855 3.48699 20.891 3.47999V31.598L14.376 36.719L14.382 44.247C14.285 44.193 14.191 44.14 14.102 44.089ZM25.009 46.987C22.231 46.987 19.478 46.459 16.915 45.444L29.078 35.884V3.46999C29.114 3.47699 29.15 3.48399 29.186 3.49099C30.303 3.70599 31.41 4.01099 32.48 4.39799V29.09L43.116 37.45C39.052 43.394 32.339 46.987 25.009 46.987ZM46.938 25.924C46.891 27.106 46.753 28.269 46.523 29.408L40.667 24.805V9.66299C40.807 9.80499 40.945 9.94999 41.081 10.097C44.869 14.169 46.954 19.476 46.954 25.04C46.955 25.332 46.949 25.63 46.938 25.924Z"
                        fill="#fbfafb"
                      />
                    </svg>
                  </span>
                </div>
                <h2 className="flex flex-col items-center py-2 text-xl">
                  <span className="text-[#CFCFD0] py-2">Jules Jean-Louis</span>
                  <span className="text-[#A770FF]">Développeur Web Junior</span>
                </h2>
              </div>
              <div className="imageGauche flex flex-col items-center bg-[#191A1E] hover:bg-[#202124] ease-in duration-300 p-4 min-h-50">
                <div className="bg-[#27282B] p-4 rounded">
                  <a href="mailto:jules.jean-louis@laplateforme.io">
                    <Mail className="hover:text-[#A770FF]" />
                  </a>
                </div>
                <a
                  href="mailto:jules.jean-louis@laplateforme.io"
                  className="flex flex-col items-center"
                >
                  <span className="text-[#646467] py-2">E-mail :</span>
                  <span>jules.jean-louis@laplateforme.io</span>
                </a>
              </div>
              <div className="imageGauche flex flex-col items-center bg-[#191A1E] hover:bg-[#202124] ease-in duration-300 p-4 min-h-50">
                <div className="bg-[#27282B] p-4 rounded">
                  <a href="/files/Jules_Jean-louis_CV.pdf" download>
                    <FileUser className="hover:text-[#A770FF]" />
                  </a>
                </div>
                <a href="/files/Jules_Jean-louis_CV.pdf" download>
                  <p className="flex flex-col items-center">
                    <span className="text-[#646467] py-2">
                      Curriculum vitae :
                    </span>
                    <span>Télécharger mon CV</span>
                  </p>
                </a>
              </div>
              <div className="imageGauche flex flex-col items-center bg-[#191A1E] hover:bg-[#202124] ease-in duration-300 p-4 min-h-50">
                <div className="flex space-x-2 items-center bg-[#27282B] p-4 rounded">
                  <a
                    href="https://www.linkedin.com/in/jules-jean-louis-351a32259/"
                    target="_blank"
                  >
                    <Linkedin className="hover:text-[#A770FF]" />
                  </a>
                  <a
                    href="https://github.com/jules-jean-louis1"
                    target="_blank"
                  >
                    <Github className="hover:text-[#A770FF]" />
                  </a>
                </div>
                <p className="flex flex-col items-center">
                  <span className="text-[#646467] py-2">Réseaux sociaux :</span>
                  <span>
                    {" "}
                    <a
                      href="https://www.linkedin.com/in/jules-jean-louis-351a32259/"
                      target="_blank"
                    >
                      Linkedin
                    </a>{" "}
                    <a
                      href="https://github.com/jules-jean-louis1"
                      target="_blank"
                    >
                      Github
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
      <footer>
        <div className="w-full py-3 pb-6 lg:py-4">
          <div
            id="containerFooter"
            className="lg:flex lg:justify-around lg:items-center lg:py-9 lg:px-4 flex flex-col items-center space-y-5 "
          >
            <div className="flex flex-col ">
              <div className="flex items-center">
                <i className="fa-solid fa-arrow-right" id="iconColorFooter"></i>
                <h2 className="uppercase ml-4" id="h2footerContact">
                  Contactez-moi
                </h2>
              </div>
              <div className="flex items-center">
                <p>
                  <span>jules.jean-louis@laplateforme.io</span>
                </p>
              </div>
            </div>
            <div
              id="socialLinks"
              className="flex flex-row justify-center items-center "
            >
              <ul className="flex justify-around">
                <li className="mx-2">
                  <a
                    href="https://github.com/jules-jean-louis1"
                    target="_blank"
                    id="colorFontFooter"
                  >
                    Github
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://www.linkedin.com/in/jules-jean-louis-351a32259/"
                    target="_blank"
                    id="colorFontFooter"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://jules-jean-louis.students-laplateforme.io/CV%20DEV%20WEB%20Jules%20Jean-Louis%20V2.pdf"
                    id="colorFontFooter"
                  >
                    Telecharger CV
                  </a>
                </li>
              </ul>
            </div>
            <div id="backToTheTopCont" className="lg:mb-0">
              <div>
                <a href="#top" id="colorFontFooter">
                  <span>Back to the top</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
