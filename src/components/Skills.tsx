


const Skills = () => {
    const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "SQL", "HTML", "CSS", "Tailwind CSS", "Git", "Docker", "AWS"];
    return (
        <div className="flex flex-wrap gap-2">
            <p className="text-xl font-semibold">
                Skills
            </p>
            <div className="flex flex-wrap gap-2 mt-2">

            {skills.map((skill, index) => (
                <Badge key={index} text={skill} />
            ))}
            </div>
        </div>
    )
}





export default Skills;


const Badge = ({text}:{text:string}) =>{
    return(
        <div className="px-3 py-px text-sm rounded bg-black dark:bg-white  text-white dark:text-black">
            {text}
        </div>
    )
}
