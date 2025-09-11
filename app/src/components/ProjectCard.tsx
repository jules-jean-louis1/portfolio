import React, { useState } from "react";
import Image from "next/image";
import { Github, Globe } from "lucide-react";

interface ProjectCardProps {
  name: string;
  image?: string;
  tags: string[];
  shortDescription: string;
  longDescription: string;
  github?: string;
  website?: string | undefined;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  image,
  tags,
  shortDescription,
  longDescription,
  github,
  website,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <article
      className="bg-[#1E1F26] rounded-lg shadow-lg overflow-hidden flex flex-col h-full border border-[#a8b3cf4f] min-h-card max-h-card"
      onClick={togglePopup}
    >
      {image && (
        <div className="relative w-full h-[150px] rounded-t-16 overflow-hidden">
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </div>
      )}
      <div className="flex flex-col mx-4">
        <h3 className="text-2xl multi-truncate font-bold font-disket-mono line-clamp-3 mt-2 break-words">
          {name}
        </h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="rounded-lg border border-border-subtlest-tertiary px-2 h-6 flex items-center justify-center typo-footnote text-text-quaternary my-2"
            >
              #{tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-[#CFCFD0] mb-4">{shortDescription}</p>
      </div>

      {isPopupOpen && (
        <div className="popup fixed inset-0 bg-overlay-quaternary-onion bg-opacity-70 flex justify-center items-center z-50">
          <div className="popup-content bg-[#1E1F26] text-white p-6 rounded-lg shadow-xl w-[50%]">
            <h3 className="text-2xl font-bold mb-4 font-disket-mono">{name}</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-lg border border-border-subtlest-tertiary px-2 h-6 flex items-center justify-center typo-footnote text-text-quaternary my-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <p className="text-sm mb-4">{longDescription}</p>
            <div className="flex space-x-4 mt-4">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="text-[#A770FF]" />
                  <span>GitHub</span>
                </a>
              )}
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Globe className="text-[#A770FF]" />
                  <span>Site Web</span>
                </a>
              )}
            </div>
            <button
              onClick={togglePopup}
              className="bg-[#A770FF] text-white px-4 py-2 rounded hover:bg-[#8F5CE6] mt-6"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
