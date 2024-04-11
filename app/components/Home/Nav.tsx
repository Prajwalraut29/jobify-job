import React from 'react'
import Logo from '@/public/images/logo (3).png'
import Link from 'next/link'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import User from '../Helper/User'
const Nav = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);

    return (
        <div>
            <div className='h-[13vh] flex items-center justify-center overflow-hidden shadow-md'>
                <div className='w-[90%] md:w-[80%] md:h-[100%] mx-auto flex items-center justify-between'>
                    <div className='w-[150px] h-[150px] md:w-[250px] md:h-[250px]'>
                        <Link href='/'>
                            <Image src={Logo} alt='logo' height={250} width={250} className='w-[100%] h-[100%]' />
                        </Link>
                    </div>

                    <div className='flex items-center space-x-4'>
                        {!session && < Link href='/signup'>
                            <button className='px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 bg-blue-600 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300'>Sign up</button>
                        </Link>
                        }
                        {
                            session && <User session={session} />
                        }

                        {
                            session && (
                                <button className='px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 bg-orange-600 font-semibold text-white rounded-lg hover:bg-orange-800 transition-all duration-300'>Post a Job</button>
                            )
                        }
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Nav
