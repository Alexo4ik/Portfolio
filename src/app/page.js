"use client"
import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import { MdEmail } from 'react-icons/md'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub,} from 'react-icons/ai';
import {IoLogoWhatsapp} from 'react-icons/io'
import Image from "next/legacy/image";
import avatar from 'public/sticker.webp';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Portfolioslider from './components/Portfolioslider';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return ( 
    <div className={darkMode ? 'dark' : ''} >
      <Head>
        <title>Oleksandr Dobrianskyi Portfolio</title>
        <meta name='description' content='Generated by Oleksandr Dobrianskyi'></meta>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
  
    <main className='bg-white px-10 md-px-20 lg:px-40 dark:bg-gray-900'>
      <section className= 'min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons dark:text-white'></h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} 
              className='cursor-pointer text-2xl hover:scale-125 duration-500 dark:text-white' />
            </li>
            <li>
              <button className='hover:scale-110 duration-300'>
              <a 
                className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 ' 
                href='/resume.docx' download={true}
                >
                Resume
              </a>
              </button>
            </li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl '>Oleksandr Dobrianskyi</h2>
          <h3 className='text-2xl py-2 md-text-3xl dark:text-white'>Junior Frontend Developer.</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md-text-xl max-w-lg mx-auto dark:text-white'>
          Freelancer providing service for programming and design content needs.<br></br>
          Join me down and let's get cracking!
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <a className='hover:scale-150 duration-500 hover:text-teal-500 ' 
          href='https://github.com/Alexo4ik' target='blank'><AiFillGithub /></a>
          <a className='hover:scale-150 duration-500 hover:text-teal-500 ' 
          href='https://www.linkedin.com/mwlite/in/oleksandr-dobrianskyi-23530ba9' target='blank'><AiFillLinkedin /></a>
          <a className='hover:scale-150 duration-500 hover:text-teal-500 ' 
          href=' https://wa.me/<+380636775566>' target='blank'><IoLogoWhatsapp /></a>
          <a className='hover:scale-150 duration-500 hover:text-teal-500 ' 
          href='mailto:dobrianskyialex@gmail.com' target='blank'><MdEmail /></a>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 
        rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <Image src={avatar} layout="fill" objectFit="cover"/>
        </div>
      </section>
      <Experience />
      <Certificates />
      <Portfolioslider />
      <Contact /> 
      </main>
    </div>
  );
}