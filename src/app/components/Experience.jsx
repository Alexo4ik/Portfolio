import React from 'react';

import Image from 'next/image';
import htmlicon from 'public/htmlicon.png';
import cssicon from 'public/cssicon.png';
import jsicon from 'public/jsicon.png';
import nodeicon from 'public/nodeicon.png';
import reacticon from 'public/reacticon.png';
import reduxicon from 'public/reduxicon.png';
import figmaicon from 'public/figmaicon.webp';
import canvaicon from 'public/canvaicon.png';
import tailwindicon from 'public/tailwindicon.png';
import githubicon from 'public/githubicon.png';
import jqueryicon from 'public/jqueryicon.png';
import bootstrapicon from 'public/bootstrapicon.png';
import saasicon from 'public/saasicon.png';
import apiicon from 'public/apiicon.png';
import nextjsicon from 'public/nextjsicon.webp';

const Experience = () => {

    const techs = [
    {
        id: 1,
        src: htmlicon,
        title:'HTML',
        style: 'shadow-orange-700'
    },
    {
        id: 2,
        src: cssicon,
        title:'CSS',
        style: 'shadow-blue-500'
    },
    {
        id: 3,
        src: jsicon,
        title:'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        id: 4,
        src: nodeicon,
        title:'Node.js',
        style: 'shadow-green-600'
    },
    {
        id: 5,
        src: reacticon,
        title:'React',
        style: 'shadow-blue-400'
    },
    {
        id: 6,
        src: reduxicon,
        title:'Redux',
        style: 'shadow-purple-500'
    },
    {
        id: 7,
        src: tailwindicon,
        title:'Tailwind',
        style: 'shadow-blue-600'
    },
    {
        id: 8,
        src: githubicon,
        title: 'Github',
        style: 'shadow-gray-500'
    },
    {
        id: 9,
        src: figmaicon,
        title: 'Figma',
        style: 'shadow-pink-600'
    },
    {
        id: 10,
        src: canvaicon,
        title: 'Canva',
        style: 'shadow-blue-700'
    },
    {
        id: 11,
        src: jqueryicon,
        title: 'Jquery',
        style: 'shadow-blue-400'
    },
    {
        id: 12,
        src: bootstrapicon,
        title: 'Bootstrap',
        style: 'shadow-blue-700'
    },
    {
        id: 13,
        src: saasicon,
        title:'SAAS',
        style: 'shadow-teal-500'
    },
    {
        id: 14,
        src: apiicon,
        title:'API',
        style: 'shadow-blue-300'
    },
    {
        id: 15,
        src: nextjsicon,
        title:'Next.js',
        style: 'shadow-blue-400'
    },
    ]

    return (
    <div name='experience' 
        className='w-full h-full my-11'
        >
        <div className=' mx-auto p-4 flex flex-col 
        justify-center w-full h-full dark:text-white'>
        <div>
        <p className='text-4xl font-bold border-b-4
        border-gray-500 p-2 inline'>
        Experience
        </p>
        <p className='py-6'>
        There are the thechnologies I've worked with.</p>
    </div>

    <div className='w-full gap-16 grid grid-cols-2 sm:grid-cols-5
    text-center py-8 sm:px-0'>
        {
        techs.map(({id, src, title, style}) => (
        <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg w-20 h-20 ${style}`}>
        <Image src={src} alt='' className='w-20 mx-auto'/>
        <p className='mt-4'>{title}</p>
        </div>
        ))
        }
    </div> 
    </div>
</div>
    )
}

export default Experience;