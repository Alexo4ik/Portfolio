import React from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from 'react-icons/rx'
import astrosite from 'public/astrosite.jpg';
import gptbot from 'public/gptbot.jpg';
import astrobot from 'public/astrobot.jpg';
import siteicon2 from 'public/siteicon2.jpg';
import marvelicon from 'public/marvelicon.jpg';


const Portfolioslider = () => {

    const slides = [astrosite, siteicon2, gptbot, astrobot, marvelicon];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

return (
    <section>
    <div>
            <h3 className='text-4xl font-bold border-b-4
        border-gray-500 p-2 inline dark:text-white'>Portfolio</h3>
            <p className='text-md py-6 leading-8 text-gray-80 dark:text-white'>
            Since the beginning of my journey as a freelancer, I have done remote 
            work for many customers and collaborated with talanted people to create digital products 
            for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
            You can see some of my projects as landing page, site for restaurant. <br></br>
            Telegram bot for business to collect information from customers to save time and money.<br></br>
            Telegram GPT bot wihch can receive audio msg, convert it to the text and send the answer. Your own "OpenIA" but in your messanger. 
            I use it every day.
            </p>
        </div>
    <div className=" flex flex-col max-w-[1000px] h-[768px] w-full m-auto p-16 relative group">
        <div className="w-full h-full rounded-2xl bg-center bg-no-repeat duration-500" style={{backgroundImage: `url(${slides[currentIndex].src})`}}></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 cursor-pointer bg-black/70 text-white'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className="flex top-4 justify-center py-2">
            {slides.map(( slide, slideIndex ) => (
                <div key={slide} onClick={() => goToSlide(slideIndex)}
                className="text-3xl cursor-pointer">
                    <RxDotFilled />
                </div>
            ))}
        </div>
    </div>
    </section>
); 
}

export default Portfolioslider;