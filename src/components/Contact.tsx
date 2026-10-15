import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import LinkedIn from "./icons/Linkedin";
import GitHub from "./icons/Github";
import WhatsApp from "./icons/WhatsApp";

const Contact = () => {
  return (
    <section className="h-fit w-full">
      <h1 className="text-xl font-bold mb-2.5">Contact</h1>

      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        I’m open to freelance work, full-time opportunities, and product
        collaborations. Let’s build something impactful together.
      </p>

      <div className="mt-4 flex  gap-5">
        <a
          href="mailto:your-email@example.com"
          className="text-white dark:text-black bg-black dark:bg-white  hover:bg-black/80 dark:hover:bg-white/80 group px-3 rounded py-0.5 text-sm mt-2  w-fit flex items-center gap-2"
        >
          <span>Email</span>
          <span>
            <Mail size={14} />
          </span>
        </a>

        <div className="flex flex-wrap items-center gap-3 text-sm text-white ">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white dark:text-black bg-black dark:bg-white  hover:bg-black/80 dark:hover:bg-white/80 group px-3 rounded py-0.5 text-sm mt-2  w-fit flex items-center gap-2 "
          >
            <span>LinkedIn</span>
            <span>
              <LinkedIn size={14} />
            </span>
          </a>

<a
            href="https://wa.me/gopalbnh?text=Hello%2C%20I%20would%20like%20to%20contact%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="text-white dark:text-black bg-black dark:bg-white  hover:bg-black/80 dark:hover:bg-white/80 group px-3 rounded py-0.5 text-sm mt-2  w-fit flex items-center gap-2 "
          >
            <span>Whatsapp</span>
            <span>
              <WhatsApp size={14} />
            </span>
          </a>


        </div>

      </div>
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <MapPin size={14} />
          <span>Based in Nepal</span>
        </div>
    </section>
  );
};

export default Contact;
