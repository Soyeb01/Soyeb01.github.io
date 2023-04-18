import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main"className='h-screen w-full dark:bg-gray-900/[0.5] bg-gray-900/[0.1]' >
            <div className='max-w-[1040px] m-auto md:pl-20 lg:pl-15 pl-10 h-screen w-full flex flex-col justify-center lg:items-start '>
                <h1 className='text-4xl sm:text-5xl dark:text-gray-200 font-bold text-gray-900'>
                    Hi, My name is <span className='dark:text-white text-black/[0.9] inline-block'>MD Soyeb</span>
                </h1>
                <h2 className='flex text-2xl sm:text-4xl mt-2 md:mt-4 md:text-4xl font-semibold dark:text-gray-300 text-gray-900'>I'm a
                <TypeAnimation
                    sequence={[
                        ' Developer', // Types 'One'
                        2000, // Waits 2s
                        ' Student', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        ' Contributor', // Types 'Three' without deleting 'Two'
                        2000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', display: 'inline-block', paddingLeft:"5px"}}
                />
                </h2>
                <p className='dark:text-gray-300 text-gray-900 text-xl md:mt-8 mt-6 font-semibold'>Let's Connect -</p>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <a href="https://github.com/Soyeb01">
                        <FaGithub className='cursor-pointer dark:text-white text-gray-900 hover:scale-125' size={25}/>
                    </a>
                    <a href="https://twitter.com/Soyebtwt">
                        <FaTwitter className='cursor-pointer dark:text-white text-gray-900 hover:scale-125' size={25}/>
                    </a>
                    <a href="https://in.linkedin.com/in/md-soyeb">
                        <FaLinkedinIn className='cursor-pointer dark:text-white text-gray-900 hover:scale-125' size={25}/>
                    </a> 
                </div>
            </div>
        {/* </div> */}
    </div>
  )
}

export default Main