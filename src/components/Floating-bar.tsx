import { FileText, HomeIcon, MoonIcon, PaperclipIcon, SquareTerminal, SunIcon } from "lucide-react"
import GitHub from "./icons/Github"
import LinkedIn from "./icons/Linkedin"
import { useTheme } from "@/context/ThemeProvider"
import { useState } from "react"

const floatingComponent = [{
  label: "Home",
  link: "/",
  icon: HomeIcon
},{
  label:"Resume",
  link:"https://drive.google.com/file/d/1O_8Z_HA96CXMFPRhE-Hhkxb-mtwPY8Ym/view?usp=sharing",
  icon: FileText
},{
  label:"Github",
  link:"https://www.github.com/gopalbhn",
  icon: GitHub
},{
  label:"LinkedIn",
  link:"https://www.linkedin.com/in/gopalbhn/",
  icon: LinkedIn
},
{
  label:"Terminal",
  icon:SquareTerminal,
  onclick:true
},
{
  label:"Mode",
  icon: MoonIcon || SunIcon,
  onclick: true
}]

const FloatingBar = ({ onclick }: { onclick: () => void }) => {
  const { theme, setTheme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState<any>(null);
   function handleThemeToggle() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }
  return (
    <div className="fixed bottom-6 w-fit left-[50%] transform translate-x-[-50%] bg-white dark:bg-black border border-black/30 dark:border-white/30 text-black dark:text-white shadow-md shadow-black/20 dark:shadow-2xl dark:shadow-white/20 py-1 px-1 flex justify-center items-center z-50 rounded-full group ">
       <div className="absolute  bottom-full left-0 w-full pointer-events-none">
        {active && (
          <div 
            style={{ 
              left: position.x,
              transform: "translateX(-50%)",
            }}
          className="absolute bottom-3  bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-sm text-xs whitespace-nowrap z-50">
            {active.label}
          </div>
        )}
        </div>
        {
          floatingComponent.map((item, index) => {
            if (item.onclick && item.label === "Terminal") {
              return (
                <button key={index} onClick={onclick} 
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const parentRect = e.currentTarget.parentElement?.getBoundingClientRect();
                  if(parentRect) {
                    setPosition({ x: rect.left + rect.width / 2 - parentRect.left, y: rect.top });
                  }
                  setActive(item);
                }}
                onMouseLeave={() => {
                  setPosition({ x: 0, y: 0 });
                  setActive(null);
                }} 
                 
                className="flex items-center  gap-2 px-3 py-3 dark:hover:bg-gray-700 hover:bg-gray-200 rounded-full transition-all duration-300 group-hover:px-4">
                  <item.icon size={16}  />
                  <span className={"hidden first:visible"}>|</span>
                </button>
              )
            } else if (item.onclick && item.label === "Mode") {
              return (
                <button key={index} onClick={handleThemeToggle} 
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const parentRect = e.currentTarget.parentElement?.getBoundingClientRect();
                  if(parentRect) {
                    setPosition({ x: rect.left + rect.width / 2 - parentRect.left, y: rect.top });
                  }
                  setActive(item);
                }}
                onMouseLeave={() => {
                  setPosition({ x: 0, y: 0 });
                  setActive(null);
                }}
                className="flex items-center  gap-2 px-3 py-3 dark:hover:bg-gray-700 hover:bg-gray-200 rounded-full transition-all duration-300 group-hover:px-4"> 
                  { theme === "dark" ? <SunIcon size={16}  /> : <MoonIcon size={16}  /> }
                  
                  <span className={"hidden first:visible"}>|</span>
                </button>
              )
        }
            
            else {
              return (
                <button key={index} onClick={()=>{
                  
                  if (item.link) window.location.href = item.link
                }} 
                 onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const parentRect = e.currentTarget.parentElement?.getBoundingClientRect();
                  if(parentRect) {
                    setPosition({ x: rect.left + rect.width / 2 - parentRect.left, y: rect.top });
                  }
                  setActive(item);
                }}
                onMouseLeave={() => {
                  setPosition({ x: 0, y: 0 });
                  setActive(null);
                }} 
                className="flex items-center  gap-2 px-3 py-3 dark:hover:bg-gray-700 hover:bg-gray-200 rounded-full transition-all duration-300 group-hover:px-4">
                  <item.icon size={16}  />
                  <span className={"hidden first:visible"}>|</span>
                </button>
              )
            }
          })
        }
    </div>
  )
}
  

  

export default FloatingBar