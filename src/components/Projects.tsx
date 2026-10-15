import React from 'react'
import ProjectCard from './ProjectCard'
import  BlogImage  from '../assets/blog.png'
import  ECommerceImage  from '../assets/e-commerce.png'
const Project = [{
    title:"Blog CMS",
    description:"A simple blog CMS to manage your blog posts and content.",
    image:BlogImage,
    link:"https://blog-virid-ten-99.vercel.app",
    github:"https://github.com/gopalbhn/blog",
    techlogies:["React","Tailwind CSS","MongoDB","Node.js"]
},{
    title:"E-commerce Website",
    description:"A simple e-commerce website to buy and sell products online.",
    image:ECommerceImage,
    link:"https://e-commerce-nine-psi-ebmg3fhqxj.vercel.app",
    github:"https://github.com/gopalbhn/e-commerce",
    techlogies:["React","Tailwind CSS","MongoDB","Node.js"]
}]

const Projects = () => {
  return (
    <div className="h-fit w-full">
        <p className="text-xl font-semibold">Projects</p>
        <div className="mt-5 grid grid-cols-1  md:grid-cols-2 gap-y-10 md:gap-4">
                {Project.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                        techlogies={project.techlogies}
                        github={project.github}
                    />
                ))}
            </div>

    </div>
  )
}

export default Projects