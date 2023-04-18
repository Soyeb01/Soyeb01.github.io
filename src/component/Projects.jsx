import React from 'react'
import QuoteGen from '../assets/QuoteGen.png'
import Cal from '../assets/Calculator.png'
import Watch from '../assets/Stopwatch.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='w-full dark:bg-gray-900/[0.5] bg-gray-900/[0.1]'>
      <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
          <h1 className='text-4xl font-bold text-center text-gray-900 dark:text-gray-100 w-fit mx-auto px-4 pb-4 border-b-2 border-b-gray-800 dark:border-b-gray-200'>Projects</h1>
          <p className='text-center dark:text-gray-200 py-8'>
              These are my lateset projects I've been working on. I really enjoy making projects to polish and learn new things.
          </p>
          <div className='grid sm:grid-cols-2 gap-12'>
              <ProjectItem img={QuoteGen} title="QuoteGen App" link="https://github.com/Soyeb01/quoteGenerator" tech="HTML | SCSS | JavaScript | API"/>
              <ProjectItem img={Cal} title="Calculator App" link="https://github.com/Soyeb01/calculator" tech="HTML | SCSS | JavaScript"/>
              <ProjectItem img={Watch} title="StopWatch App" link="https://github.com/Soyeb01/Stopwatch" tech="HTML | SCSS | JavaScript"/>
          </div>
      </div>
    </div>
  )
}

export default Projects