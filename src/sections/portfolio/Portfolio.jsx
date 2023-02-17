import { useState } from 'react'

import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
import './portfolio.css'

const Portfolio = () => {
  const [projects, setProjects] = useState(data)
  const categories = data.map((item) => item.category)
  const uniqueCategory = ['all', ...new Set(categories)]

  const filterProjectsHandler = (category) => {
    if (category === 'all') {
      setProjects(data)
      return
    }
    const filterProjects = data.filter((project) => project.category === category)
    setProjects(filterProjects)
  }


  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, autem?
      </p>
      <div className="container portfolio__container" data-aos="fade-up">
        <ProjectsCategories
          categories={uniqueCategory}
          onFilterProjects={filterProjectsHandler}
        />
        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default Portfolio