import React,{useState, useEffect} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject} from 'react-icons/ai'
import { FaBoxes,FaSun, FaMoon } from 'react-icons/fa'

const Sidenav = () => {

    const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

    return(
        <div>
            <div className='fixed flex items-center gap-6 text-gray-900 top-4 right-4 z-[99] md:hidden'>
                <button
                    type="button"
                    onClick={handleThemeSwitch}
                    className="rounded-full dark:bg-gray-100 bg-gray-900 dark:border dark:border-gray-900 p-1 "
                >
                    {theme === 'dark' ? <FaSun className='dark:text-gray-900 text-gray-100' size={12}/> : <FaMoon className='dark:text-gray-900 text-gray-100' size={12}/>}
                </button>
                <AiOutlineMenu onClick={handleNav} className='dark:text-gray-100 scale-125' />
            </div>
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/70 flex flex-col justify-center items-center z-20'>
                        <a onClick={handleNav} href="#main" className=' w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-900 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200 hover:bg-gray-100 group'>
                            <AiOutlineHome size={20} className='text-gray-100 group-hover:text-gray-900' />
                            <span className='pl-4 text-gray-100 group-hover:text-gray-900'>Home</span>
                        </a>
                        <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-900 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200 hover:bg-gray-100 group'>
                            <FaBoxes size={20} className='text-gray-100 group-hover:text-gray-900' />
                            <span className='pl-4 text-gray-100 group-hover:text-gray-900'>Timeline</span>
                        </a>
                        <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-900 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200 hover:bg-gray-100 group'>
                            <AiOutlineProject size={20} className='text-gray-100 group-hover:text-gray-900' />
                            <span className='pl-4 text-gray-100 group-hover:text-gray-900'>Project</span>
                        </a>
                        {/* <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-900 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200'>
                            <BsPerson size={20} className='text-gray-100' />
                            <span className='pl-4 text-gray-100'>Resume</span>
                        </a> */}
                        <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-900 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200 hover:bg-gray-100 group'>
                            <AiOutlineMail size={20} className='text-gray-100 group-hover:text-gray-900' />
                            <span className='pl-4 text-gray-100 group-hover:text-gray-900'>Contact</span>
                        </a>
                    </div>
                ):
                (
                    " "
                )
            }
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <button
                        type="button"
                        onClick={handleThemeSwitch}
                        className="rounded-full bg-gray-800 dark:bg-gray-700 m-2 p-4 cursor-pointer hover:border-gray-900 hover:scale-110 drop-shadow-lg dark:shadow-none ease-in duration-300 hover:bg-gray-200  group"
                    >
                        {theme === 'dark' ? <FaSun className='text-gray-100 group-hover:text-gray-900 ' size={20}/> : <FaMoon className='text-gray-100 group-hover:text-gray-900' size={20}/>}
                    </button>
                    <a href="#main" className=' rounded-full bg-gray-800 dark:bg-gray-700  m-2 p-4 cursor-pointer drop-shadow-lg hover:border-gray-900 hover:scale-110 ease-in duration-300 hover:bg-gray-200 group'>
                        <AiOutlineHome size={20} className=' text-gray-100 group-hover:text-gray-900'/>
                    </a>
                    <a href="#work" className='rounded-full bg-gray-800 dark:bg-gray-700   m-2 p-4 cursor-pointer drop-shadow-lg hover:border-gray-900 hover:scale-110 ease-in duration-300 hover:bg-gray-200 group'>
                        <FaBoxes size={20} className='text-gray-100 group-hover:text-gray-900'/>
                    </a>
                    <a href="#projects" className='rounded-full bg-gray-800 dark:bg-gray-700   m-2 p-4 cursor-pointer drop-shadow-lg hover:border-gray-900 hover:scale-110 ease-in duration-300 hover:bg-gray-200 group'>
                        <AiOutlineProject size={20} className='text-gray-100 group-hover:text-gray-900'/>
                    </a>
                    {/* <a href="#main" className='rounded-full shadow-lg bg-gray-800 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsPerson size={20} className='text-gray-100'/>
                    </a> */}
                    <a href="#contact" className='rounded-full bg-gray-800 dark:bg-gray-700   m-2 p-4 cursor-pointer shadow-gray-900 drop-shadow-lg hover:border-gray-900 hover:scale-110 ease-in duration-300 hover:bg-gray-200 d group'>
                        <AiOutlineMail size={20} className='text-gray-100 group-hover:text-gray-900'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidenav