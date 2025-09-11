import React from 'react';

interface ContactCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  linkText?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, description, icon, link, linkText }) => {
  return (
    <div className="flex flex-col items-center bg-[#191A1E] hover:bg-[#202124] ease-in duration-300 p-4 w-[20vw]">
      <div className="bg-[#A770FF] p-4 rounded">
        {icon}
      </div>
      <h2 className="flex flex-col items-center py-2 text-xl">
        <span className="text-[#CFCFD0] py-2">{title}</span>
        <span className="text-[#A770FF]">{description}</span>
      </h2>
      {link && (
        <a href={link} className="text-[#646467] py-2" download>
          {linkText}
        </a>
      )}
    </div>
  );
};

export default ContactCard;
