import React from 'react'
import WorkItem from './WorkItem';

const data = [
    {
        year: "2022-2025",
        title: "College Student",
        duration: "2 Year",
        details: 
        "Pursuing BCA from Vivekananda Institute of Professional Studies Technocal Campus, Currently in my 2 semester and learning perfection and professionalism.",
    },
    {
        year: "2022",
        title: "Internshala Student Partner",
        duration: "1 Month",
        details: 
        "Doing Internship in Internshala as an Intern, from this internship is enhanced and developed leadership, team work skills within me. It was a great experince doing so.",
    },
];

const Work = () => {
  return (
    <div id="work" className='max-w-[1040px] mx-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-gray-100 pb-4 px-4 border-b-gray-800 dark:border-b-gray-200 border-b-2 mb-8 mx-auto w-fit'>Timeline</h1>
        {data.map((item, idx) => (
            <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details}
            />
        ))}
    </div>
  )
}

export default Work