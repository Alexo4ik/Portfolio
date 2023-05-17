import React from "react";

const Contact = () => {
    return (
        <div name='contact' 
        className="w-full h-screen p-4"
        >
        <div className="text-md py-6 leading-8 text-gray-80 dark:text-white">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500 dark:text-white">
                Contact
                </p>
                <p className="py-6 dark:text-white">
                Submit the form below to get in touch with me</p>
            </div>
            </div>
            <div className="flex justify-center items-center">
                <form action={`https://getform.io/f/${process.env.EMAIL_ACCESS_KEY}`}
                method="POST"
                className=" flex flex-col w-full md:w-1/2">
                <input type="text"
                name="name" 
                placeholder="Enter your name" 
                className=" p-2 bg-transparent 
                border-2 rounded-md focus:outline-none 
                dark:text-white"
                />
                <input type="text" name="email" 
                placeholder="Enter your email" 
                className=" my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none 
                dark:text-white"
                />
                <textarea name="message" 
                rows="10" placeholder="Enter your message"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                >
                </textarea>
                <button className="bg-gradient-to-b from-cyan-500 to-teal-500 px-6 py-3 my-8 mx-auto 
                flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
                </form>
            </div>
            </div>  
    )
}

export default Contact;