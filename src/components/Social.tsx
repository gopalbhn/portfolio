import { Mail } from "lucide-react"
import LinkedIn from "./icons/Linkedin"


const Social = () => {
  return (
    <div className="h-fit w-full">
        <h1 className="text-xl font-bold mb-2.5">Social</h1>
        <div className="flex gap-4">
            <a href="mailto:your-email@example.com" className="text-white dark:text-black bg-black dark:bg-white  hover:bg-black/80 dark:hover:bg-white/80 group px-3 rounded py-0.5 text-sm mt-2  w-fit flex items-center gap-2">
                <span>Email</span>
                <span><Mail size={14} /></span>
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white dark:text-black bg-black dark:bg-white  hover:bg-black/80 dark:hover:bg-white/80 group px-3 rounded py-0.5 text-sm mt-2  w-fit flex items-center gap-2 ">
                <span>LinkedIn</span>
                <span>
                    <LinkedIn size={14} />

</span>
            </a>
            
        </div>
    </div>
  )
}

export default Social