import React from 'react'
import Project from './Project'

function Projects({projects}) {
  return (
      <div className='portfolio__projects'>
          {
              projects.map((project) => 
                  <Project key={project.id} project={ project} />
              )
          }
    </div>
  )
}

export default Projects