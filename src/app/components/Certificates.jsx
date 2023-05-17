import React from "react";
import Image from "next/image";
import jsdata from 'public/jsdata.png';
import react from 'public/react.jpg';
import reswebdesign from 'public/reswebdesign.jpg';
import angular from 'public/angular.jpg';
import js from 'public/js.png';

const Certificates = () => {
    return (
        <section>
        <div>
        <h3 className='text-4xl font-bold border-b-4
        border-gray-500 p-2 inline dark:text-white'>Certification</h3>
        <p className='text-md py-6 leading-8 text-gray-80 dark:text-white'>
        I never stop learning.
        </p>
        <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
        You can see below some of my completed courses.
        </p>
      </div>
      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap '>
        <div className='basis-1/7 flex-1 hover:scale-125 duration-500'>
          <Image src={js}
          alt=""
          className='rounded-lg'
          width={100}
          height={100}
          layout='responsive'/>
        </div>
        <div className='basis-1/7 flex-1 hover:scale-125 duration-500'>
          <Image src={reswebdesign}
          alt=""
          className='rounded-lg'
          width={100}
          height={100}
          layout='responsive'/>
        </div>
        <div className='basis-1/7 flex-1 hover:scale-125 duration-500'>
          <Image src={jsdata}
          alt=""
          className='rounded-lg'
          width={100}
          height={100}
          layout='responsive'/>
        </div>
        <div className='basis-1/7 flex-1 hover:scale-125 duration-500'>
          <Image src={react}
          alt=""
          className='rounded-lg'
          width={100}
          height={100}
          layout='responsive'/>
        </div>
        <div className='basis-1/7 flex-1 hover:scale-125 duration-500'>
          <Image src={angular}
          alt=""
          className='rounded-lg'
          width={100}
          height={100}
          layout='responsive'/>
        </div>
      </div> 
      </section>
    )
}

export default Certificates;