import { useEffect, useState } from "react"

const TypeWritter = ({text}:{text:string}) =>{
    const [displayedText,setDisplayedText] = useState<string>("")
    
    useEffect(() => {
        let i = 0
        setDisplayedText("")

        const interval = setInterval(() => {
            if (i >= text.length) {
                clearInterval(interval)
                return
            }
            i += 1
            setDisplayedText(text.slice(0, i))
        }, 299)

        return () => clearInterval(interval)
    }, [text])


    return(
        <div>
            <span className="text-4xl font-bold font-inter ">
                
                {displayedText}
                </span>
        <span className="animate-ping ml-1 text-4xl ">|</span>
        </div>
    )
}


export default TypeWritter