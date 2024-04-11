"use client"
import React from 'react'
import Image from 'next/image'
import ImageUrl from '@/public/images/chair.jpg'
import { signIn } from 'next-auth/react'
const Signup = () => {
    return (
        <div className='overflow-hidden h-[84vh] flex flex-col items-center justify-center'>
            <Image src={ImageUrl} alt='image' width={400} height={200} />
            <button
                onClick={() => { signIn('google', { callbackUrl: process.env.NEXT_PUBLIC_URL }) }}
                className='px-12 mt-[2rem] py-3 text-[14px] sm:text-[16px] sm:px-6 bg-purple-600 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300'>Sign Up Now </button>
        </div>

    )
}

export default Signup
