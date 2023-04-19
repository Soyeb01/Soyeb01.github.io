import React from 'react'
import EmailPana from '../assets/Emails-pana.png'

const Contact = () => {
  return (
    <div id="contact" className='max-w-[1040px] m-auto md:pl-20 p-4 py-10'>
        <h1 className='py-4 text-4xl font-bold text-center text-gray-900 dark:text-gray-100 w-fit mx-auto px-4 pb-4 border-b-2 border-b-gray-800 dark:border-b-gray-200'>Contact</h1>
        <div className='flex md:w-[100%] justify-between'>
            <img src={EmailPana} alt="Tag" className='hidden md:inline-block md:w-[50%] object-contain'/>
            <form action="https://getform.io/f/33510049-c095-47b3-a95f-618fdc1565fb" method='POST' encType='mutipart/form-data' className='md:w-[50%] w-[100%]'>            
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase font-semibold dark:text-gray-200 text-sm py-2'>Name</label>
                        <input required className='border-2 rounded-lg p-3 border-gray-300' type="text" name="name"/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase font-semibold dark:text-gray-200 text-sm py-2'>Phone Number</label>
                        <input required className='border-2 rounded-lg p-3 border-gray-300' maxLength="10" type="text" name="number" />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase font-semibold dark:text-gray-200 text-sm py-2'>Email</label>
                    <input required className='border-2 rounded-lg p-3 border-gray-300' type="email" name="email"/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase font-semibold dark:text-gray-200 text-sm py-2'>Subject</label>
                    <input required className='border-2 rounded-lg p-3 border-gray-300' type="text" name="subject"/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase font-semibold dark:text-gray-200 text-sm py-2' >Message</label>
                    <textarea required className='border-2 rounded-lg p-3 border-gray-300' name="message" cols="30" rows="10"></textarea>
                </div>
                
                <button type='submit' className='bg-gray-900 font-semibold dark:bg-gray-200 text-gray-100 dark:text-gray-800 mt-4 w-full p-4 rounded-lg hover:bg-gray-100 hover:text-gray-900 hover:border-2 hover:border-gray-700'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
