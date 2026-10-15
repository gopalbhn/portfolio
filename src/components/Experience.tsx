import { ChevronRight } from "lucide-react";
import Logo from "../assets/drisya-logo.png";

const MyExperince = () => {
  return (
    <div className="h-20 w-full ">
        <p className="text-xl  font-semibold">Work Experience</p>
      <div className="h-full w-full mt-5 flex justify-between">
        <div className="flex gap-x-5">
          <div className="h-10 w-10 rounded-full overflow-hidden p-1 border border-black/40 dark:border-white/40 flex items-center justify-center">
            <img src={Logo} alt="Drisya logo" />
          </div>
          <div className="flex flex-col ">
            <a
              href="https://drisya.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1"
            >
              <p>Drisya AI</p>
              <ChevronRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <p className="text-xs">Full Stack Intern</p>
          </div>
        </div>
        <div className="text-black/70 text-sm dark:text-white/70">
            June 2026 - September 2026
        </div>
      </div>
    </div>
  );
};

export default MyExperince;
