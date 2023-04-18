import React from 'react'

const ProjectItem = ({img, title, link, tech}) => {
  return (
    <div className='relative drop-shadow-xl shadow-black border border-gray-700 flex items-center justify-center h-auto w-full rounded-xl group hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r'>
        <img src={img} alt="/" className='rounded-xl group-hover:opacity-30'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='md:text-xl sm:text-xl font-bold text-white tracking-wider text-center'>
                {title}
            </h3>
            <p className='md:pb-4 pb-2 text-xs pt-2 text-gray-100 text-center font-semibold'>{tech}</p>
            <a href={link}>
                <p className='text-center md:p-2 sm:p-2  rounded-lg text-gray-700 bg-white font-bold cursor-pointer sm:text-xs md:text-lg hover:bg-gray-800 hover:text-gray-100'>More Info</p>
            </a>
        </div>
    </div>
  )
}



export default ProjectItem
