import React from 'react'
import Heading from '../Hoc/Heading'
import JobData from '@/data'
import Link from 'next/link'
import JobCard from '../Helper/JobCard'

const FeaturedJobs = () => {
    return (
        <div className='pt-20 pb-12'>
            <Heading mainHeading='Featured Jobs' subHeading='know your worth and find the job that qualify your life ' />
            <div className='mt-12 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
                {
                    JobData.map((job) => {
                        return (
                            <Link href={`/job/jobdetails/${job.id}`} key={job.id}>
                                <JobCard job={job} />
                            </Link>
                        )
                    })
                }
            </div>
            <div>
                <Link href='/job/alljobs'>
                    <div className='text-center mt-[3rem]'>
                        <button className='px-6 py-[1rem] text-[14px] sm:text-[18px] sm:px-8 bg-purple-600 font-semibold text-white rounded-lg hover:bg-purple-800 transition-all duration-300'>View All Post </button>

                    </div>
                </Link>

            </div>
        </div>
    )
}

export default FeaturedJobs