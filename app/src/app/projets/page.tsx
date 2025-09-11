"use client";
import ProjectCard from "@/components/ProjectCard";
import Header from "../components/navigations/Header";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Head from "next/head";

const projects = [
  {
    title: "Proxifix",
    image: "/images/Projets/proxifix.png",
    description: "Application de gestion de réparations informatiques.",
    tags: ["Web", "Symfony", "React Native", "Expo", "PostgreSQL"],
    details:
      "Application permettant de suivre les réparations, gérer les clients et établir des devis. Réalisée dans le cadre du titre professionnel Concepteur Développeur d’Applications.",
    github: "https://github.com/jules-jean-louis1/proxifix",
    website: null,
  },
  {
    title: "Wings-Map",
    image: "/images/Projets/wings-map.png",
    description: "Plateforme de cartographie des déchets sauvages.",
    tags: [
      "alternance",
      "Next.js",
      "Cartographie",
      "Docker",
      "PostGIS",
      "Leaflet",
    ],
    details:
      "Outil développé en alternance pour référencer les données de caractérisation des déchets collectés par Wings of the Ocean. Soutenu par le Fonds d’Intervention Maritime (DGAMPA), il permet de visualiser et centraliser les données de science participative sur la pollution marine via des cartes interactives.",
    github: "https://github.com/jules-jean-louis1/wings-map",
    website: "https://wings-map.com/",
  },
  {
    title: "Arbovirus",
    image: "/images/Projets/arbovirus.png",
    description: "Application de suivi des cas d'arboviroses.",
    tags: ["alternance", "Python", "PostgreSQL", "Next.js", "Hasura"],
    details:
      "Application web pour le suivi des cas d'arboviroses (Dengue, Chikungunya, Zika) en France. Permet la saisie, la visualisation et l'analyse des données épidémiologiques et entomologiques via des tableaux de bord interactifs.",
    github: "https://github.com/jules-jean-louis1/arbovirus",
    website: null,
  },
  {
    title: "GN Module Monitoring — GeoNature",
    image: "/images/Projets/geonature.png",
    description: "Module de protocole de suivi dynamique.",
    tags: ["GeoNature", "Python", "JSON", "SQL", "Module"],
    details:
      "Dans le cadre de mon alternance GeoNature, j’ai modifié le script d’installation des protocoles (IM_IMPORT_01.0) pour intégrer les champs dans les tables `bib_destinations`, `bib_entites`, `bib_fields`. J’ai également développé une approche d’installation/mise à jour idempotente (IM_IMPORT_01.1), capable de détecter les changements dans les fichiers JSON et de synchroniser dynamiquement les structures de données, tout en fournissant un retour clair à l’administrateur.",
    github: "https://github.com/jules-jean-louis1/geonature",
    website: null,
  },
  {
    title: "Safebase",
    image: "/images/Projets/safebase.png",
    description: "Application de sauvegardes de bases de données.",
    tags: ["Web", "Angular", "Go", "Docker"],
    details:
      "Application de sauvegardes de bases de données avec une interface utilisateur Angular et un backend Go, le tout orchestré dans des conteneurs Docker.",
    github: "https://github.com/jules-jean-louis1/safebase",
    website: null,
  },
  {
    title: "Remind Me!",
    image: "/images/Projets/supperreminder.png",
    description: "Application de rappel de tâches.",
    tags: ["PHP", "JavaScript", "SQL", "Altorouter"],
    details:
      "Application de rappel multi-utilisateur avec notifications configurables, authentification et gestion des tâches.",
    github: "https://github.com/jules-jean-louis1/supperreminder",
    website: null,
  },
  {
    title: "WatchManager",
    image: "/images/Projets/cinetech.png",
    description: "Gestionnaire de films et séries.",
    tags: ["JavaScript", "PHP", "MVC", "API TMDB", "Altorouter"],
    details:
      "Permet de rechercher via l’API TMDB, d’ajouter aux favoris, de noter et de classer films et séries dans une interface MVC.",
    github: "https://github.com/jules-jean-louis1/cinetech",
    website: null,
  },
  {
    title: "Blog Js",
    image: "/images/Projets/blog-js.png",
    description: "Blog personnel en JavaScript.",
    tags: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    details:
      "Blog personnel avec création, édition et suppression d'articles, utilisant LocalStorage pour la persistance des données.",
    github: "https://github.com/jules-jean-louis1/blog-js",
    website: null,
  },
  {
    title: "Portfolio",
    image: "/images/Projets/projets-all.png",
    description: "Mon portfolio complet de projets web.",
    tags: ["JavaScript", "PHP", "HTML", "CSS", "SQL", "POO", "Node.js"],
    details:
      "Portfolio interactif regroupant tous mes projets réalisés durant la formation, avec navigation, descriptions et liens vers les dépôts GitHub.",
    github: "https://github.com/jules-jean-louis1/",
    website: null,
  },
];

export default function Projets() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Portfolio - Jules JEAN-LOUIS | Développeur Web</title>
        <meta
          name="description"
          content="Portfolio de Jules JEAN-LOUIS, développeur web passionné par le code et le design. Découvrez mes projets et expériences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main className="min-h-screen bg-[#121316] text-[#CFCFD0] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-row justify-between">
            <button
              onClick={() => router.push("../")}
              className="btn focus-outline inline-flex cursor-pointer select-none flex-row
        items-center no-underline shadow-none transition
        duration-200 ease-in-out typo-callout justify-center font-bold h-10 px-5 rounded-12 btn-tertiaryFloat bg-[#191e25]"
            >
              <MoveLeft />
              <span className="ml-2">Portefolio</span>
            </button>
            <h1 className="text-2xl font-bold font-disket-regular uppercase mb-8 ">
              Projets Réalisée
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                name={project.title}
                image={project.image}
                tags={project.tags}
                shortDescription={project.description}
                longDescription={project.details}
                github={project.github}
                website={project.website ?? undefined}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
