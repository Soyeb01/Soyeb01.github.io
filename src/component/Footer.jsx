import React from 'react'
import Metoo from '../assets/Metoo.jpeg'
import {FaTwitter, FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='border border-t-gray-400 dark:border-none relative bg-gray-900/[0.1] dark:bg-gray-900 w-full md:px-20 p-4 py-8'>
        <div className='w-full flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <img src={Metoo} alt="MD Soyeb" className='border border-gray-900 md:max-h-28 max-h-16 rounded-full object-cover'/>
              <div className='font-semibold text-gray-900 dark:text-gray-100'>
                <p className='font-bold text-xl'>MD Soyeb</p>
                <p >Thanks for visiting my portfolio.</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <p className='px-2 font-bold text-gray-900 dark:text-gray-100 text-xl pb-2 dark:border-gray-100 border-gray-900 border-b-2'>Let's Connect</p>
              <div className='flex justify-between pt-6 max-w-[150px] w-full'>
                  <a href="https://github.com/Soyeb01">
                      <FaGithub className='cursor-pointer text-gray-900 dark:text-gray-100 hover:scale-125' size={25}/>
                  </a>
                    <a href="https://twitter.com/Soyebtwt">
                      <FaTwitter className='cursor-pointer text-gray-900 dark:text-gray-100 hover:scale-125' size={25}/>
                  </a>
                  <a href="https://in.linkedin.com/in/md-soyeb">
                      <FaLinkedinIn className='cursor-pointer text-gray-900 dark:text-gray-100 hover:scale-125' size={25}/>
                  </a>
              </div>
            </div>
        </div>
        <p className='absolute bottom-2 inset-x-0 mx-auto text-center text-xs text-gray-900 dark:text-gray-100'> © 2022 MD Soyeb.  All rights reserved.</p>
    </div>
  )
}

export default Footer