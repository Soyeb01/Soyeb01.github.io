import React from 'react'
import Metoo from '../assets/Metoo.jpeg'

const AboutMe = () => {
  return (
    <div id="about" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-gray-900 dark:text-gray-100 pb-4 px-4 border-b-gray-800 dark:border-b-gray-200 border-b-2 mb-8 mx-auto w-fit'>About Me</h1>
        <div className='flex md:flex-row flex-col md:gap-20  items-center mt-8'>
            <img src={Metoo} alt="MD Soyeb"  className='w-[40%] shadow-black drop-shadow-xl  rounded-full object-cover'/>
            <p className='text-center py-8 text-gray-800 dark:text-gray-200 font-semibold '>
                Welcome to my portfolio. I am soyeb a Frontend developer and currently a student. 
                I have always been passionate about different technologies and constantly trying to improve my skills and knowledge about different technologies in this growing world. 
                I tries my best to meet my clients expectations by combining my technical skill with creativity, 
                I am able to think of innovative solutions for problems.
            
                <span className='text-gray-900 m-8 block text-lg dark:text-gray-200'>Thank you for visiting my portfolio .</span>
            </p>
        </div>
    </div>
  )
}

export default AboutMe