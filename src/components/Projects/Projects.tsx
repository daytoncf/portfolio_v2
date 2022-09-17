import React from 'react'
import './Projects.css'
import { default as Project } from './Project/Project'

const Projects = () => {
  return (
    <div id='Projects'>
      <div className='Projects__container'>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}

export default Projects