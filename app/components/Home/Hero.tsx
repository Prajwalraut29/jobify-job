import Image from 'next/image'
import React from 'react'
import HeroImg from '@/public/images/hero.svg'
const Hero = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] '>
            <div className='w-[100%] h-[60vh] flex flex-col items-center justify-between '>
                <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]'>
                    {/* contenet*/}
                    <div>
                        <h1 className='text-[28px] sm:text-[35px] lg:text-[45px] xl:text-[60px] text-[#05264e] leading-[3rem] lg:leading-[4rem] font-extrabold'>
                            The <span className='text-blue-500'> Easiest Way </span> <br />To Get Your New Job
                        </h1>
                        <p className='text-sm text-slate-500 text-[16px] md:text-[18px] mt-[1rem]'>Each Month, more than 4 million job seeers turn to website in thier search for work, making over 140,000 applications every single day </p>
                    </div>

                    <div className='hidden lg:block'>
                        <Image src={HeroImg} alt='hero' width={700} height={400} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero