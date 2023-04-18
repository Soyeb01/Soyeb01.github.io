import React from 'react'
import { FaReact, FaHtml5, FaCss3, FaBootstrap, FaJava, FaPython, FaGit, FaGithub, FaPhp, FaSass } from 'react-icons/fa'
import {SiTailwindcss, SiJavascript} from 'react-icons/si'

const SkillsSet = () => {
  return (
    <div className='w-full dark:bg-gray-900/[0.5] bg-gray-900/[0.1]'>
        <div className='max-w-[1040px]  m-auto justify-center p-4 py-16'>
            <h1 className='m-auto px-4 mb-8 w-fit pb-4 text-4xl font-bold text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100'>My Skills</h1>
            <div className='place-items-center grid grid-cols-2 gap-12'>
                <div className='border-2 border-gray-700 w-full md:w-[80%] p-3 drop-shadow-xl shadow-black items-center justify-center rounded-full flex gap-4 border-gray-900 bg-gray-800 dark:bg-gray-900'>
                    <FaReact size={30} className='text-blue-300' />
                    <p className=' text-gray-100 text-xl'>React Js</p>
                </div>
                <div className='border-2 border-gray-700 w-full md:w-[80%] p-3 drop-shadow-xl shadow-black items-center justify-center rounded-full flex gap-4 border-gray-900 bg-gray-800 dark:bg-gray-900'>
                    <FaPython size={30} className='text-[#306998]' />
                    <p className=' text-gray-100 text-xl'>Python</p>
                </div>
                <div className='border-2 border-gray-700 w-full md:w-[80%] p-3 drop-shadow-xl shadow-black items-center justify-center rounded-full flex gap-4 border-gray-900 bg-gray-800 dark:bg-gray-900'>                    <FaHtml5 size={30} className='text-[#F06529]' />
                    <p className=' text-gray-100 text-xl'>HTML 5</p>
                </div>
                <div className='border-2 border-gray-700 w-full md:w-[80%] p-3 drop-shadow-xl shadow-black items-center justify-center rounded-full flex gap-4 border-gray-900 bg-gray-800 dark:bg-gray-900'>                    <FaCss3 size={30} className='text-[#264de4]' />
                    <p className=' text-gray-100 text-xl'>CSS 3</p>
                </div>
                <div className='border-2 border-gray-700 w-full md:w-[80%] p-3 drop-shadow-xl shadow-black items-center justify-center rounded-full flex gap-4 border-gray-900 bg-gray-800 dark:bg-gray-900'>                    <SiJavascript size={30} className='text-[#F0DB4F]' />
                    <p className=' text-gray-100 text-xl'>JavaScript</p>
                </div>
                <div className='border-2 border-gray-700 w-full md:w-[80%] p-3 drop-shadow-xl shadow-black items-center justify-center rounded-full flex gap-4 border-gray-900 bg-gray-800 dark:bg-gray-900'>                    <SiTailwindcss size={30} className='text-[#00b4b6]' />
                    <p className=' text-gray-100 text-xl'>Tailwind</p>
                </div>
                <div className='border-2 border-gray-700 w-full md:w-[80%] p-3 drop-shadow-xl shadow-black items-center justify-center rounded-full flex gap-4 border-gray-900 bg-gray-800 dark:bg-gray-900'>                    <FaBootstrap size={30} className='text-[#602C50]' />
                    <p className=' text-gray-100 text-xl'>BOOTSRAP</p>
                </div>
                <div className='border-2 border-gray-700 w-full md:w-[80%] p-3 drop-shadow-xl shadow-black items-center justify-center rounded-full flex gap-4 border-gray-900 bg-gray-800 dark:bg-gray-900'>                    <FaPhp size={30} className='text-[#474A8A]' />
                    <p className=' text-gray-100 text-xl'>Php</p>
                </div>
                <div className='border-2 border-gray-700 w-full md:w-[80%] p-3 drop-shadow-xl shadow-black items-center justify-center rounded-full flex gap-4 border-gray-900 bg-gray-800 dark:bg-gray-900'>                    <FaGit size={30} className='text-[#F1502F]' />
                    <p className=' text-gray-100 text-xl'>GIT</p>
                </div>
                <div className='border-2 border-gray-700 w-full md:w-[80%] p-3 drop-shadow-xl shadow-black items-center justify-center rounded-full flex gap-4 border-gray-900 bg-gray-800 dark:bg-gray-900'>                    <FaGithub size={30} className='text-white' />
                    <p className=' text-gray-100 text-xl'>GitHub</p>
                </div>
                <div className='border-2 border-gray-700 w-full md:w-[80%] p-3 drop-shadow-xl shadow-black items-center justify-center rounded-full flex gap-4 border-gray-900 bg-gray-800 dark:bg-gray-900'>                    <FaJava size={30} className='text-white' />
                    <p className=' text-gray-100 text-xl'>Java</p>
                </div>
                <div className='border-2 border-gray-700 w-full md:w-[80%] p-3 drop-shadow-xl shadow-black items-center justify-center rounded-full flex gap-4 border-gray-900 bg-gray-800 dark:bg-gray-900'>                    <FaSass size={30} className='text-[#CD6799]' />
                    <p className=' text-gray-100 text-xl'>Sass</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsSet