import React from 'react'
import Hero from './Hero'
import JobCategory from './JobCategory'
import FeaturedJobs from './FeaturedJobs'
import Footer from './Footer'

const Front = () => {
    return (
        <div>
            <Hero />
            <JobCategory />
            <FeaturedJobs />
            <Footer />
        </div>
    )
}

export default Front
