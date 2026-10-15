import { Radio } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  image,
  link,
  techlogies,
  github,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
  techlogies: string[];
  github: string;
}) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-md shadow-black/20 dark:shadow-2xl dark:shadow-white/20">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 ">{description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {techlogies.map((tech, index) => (
          <span
            key={index}
            className=" dark:bg-[#333334] bg-[#CCCCCB]  text-black dark:text-white text-xs font-medium px-1  py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white dark:text-black bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-white/80 group px-3 rounded py-0.5 text-sm mt-2  w-fit flex items-center "
        >
          <span>live</span>
          <span className="ml-1   text-xs ">
            <Radio
              className="transition-transform duration-300 group-hover:translate-x-1 "
              size={14}
            />
          </span>
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white dark:text-black bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-white/80 group px-3 rounded py-0.5 text-sm mt-2  w-fit flex items-center "
        >
          <span>github</span>
          <span className="ml-1  text-xs ">
            <svg
              id="i-github"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="14"
              height="14"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                stroke-width="0"
                fill="currentColor"
                d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
