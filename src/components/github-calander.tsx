import { useTheme } from "@/context/ThemeProvider"
import { useState } from "react"
import { GitHubCalendar, type Activity } from "react-github-calendar"

const GithubCalander = () =>{
    const [total,setTotal]= useState(0)
    const {theme} = useTheme();
    const totalContribution = (contribution:Activity[]) =>{
        const total = contribution.reduce((acc,curr)=>acc+curr.count,0)
        console.log(contribution)
        setTotal(total)

        return contribution.slice(-365)
    }

    return(
        <div className="h-30 w-full flex items-center justify-center text-sm">
            {theme == "dark" ? (
                
                <GitHubCalendar username="gopalbhn" showTotalCount={false} showColorLegend={false} transformData={totalContribution} colorScheme="dark" />
            ):(
                
                <GitHubCalendar username="gopalbhn" showTotalCount={false} showColorLegend={false} transformData={totalContribution} />
            )}
      
        </div>
    )
}

export default GithubCalander