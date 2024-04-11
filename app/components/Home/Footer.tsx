import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-[#111111]'>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10'>
                <div>
                    <h1 className='text-[24px] text-white mb-[1rem] font-bold uppercase'>
                        Jobify
                    </h1>
                    <p className='text-[14px] text-white text-opacity-70'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, voluptas?</p>
                    <div className='mt-[1.5rem] flex items-center space-x-3'>
                        <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col'>
                            <FaFacebook className='text-white' />
                        </div>
                        <div className='w-[2.4rem] h-[2.4rem] text-text-600 rounded-full flex items-center justify-center flex-col'>
                            <FaTwitter className='text-white' />
                        </div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-green-600 rounded-full flex items-center justify-center flex-col'>
                            <FaWhatsapp className='text-white' />
                        </div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-pink-600 rounded-full flex items-center justify-center flex-col'>
                            <FaInstagram className='text-white' />
                        </div>
                    </div>
                </div>



                <div>
                    <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>About Us </h1>
                    <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>
                        job
                    </p>

                    <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>
                        Privacy
                    </p>

                    <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>
                        Poilcy
                    </p>

                    <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>
                        Application
                    </p>

                    <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>
                        Candidates
                    </p>
                </div>

                <div>
                    <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'> Quick Link </h1>
                    <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>
                        All Jobs
                    </p>

                    <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>
                        Job details
                    </p>

                    <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>
                        How to apply
                    </p>

                    <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>
                        resume
                    </p>

                    <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>
                        candidates
                    </p>
                </div>


                <div>
                    <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'> Get In Touch  </h1>
                    <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>
                        +91 2394032423
                    </p>

                    <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>
                        example@gmail.com
                    </p>

                    <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>
                        India
                    </p>
                </div>
            </div>

        </div >
    )
}

export default Footer