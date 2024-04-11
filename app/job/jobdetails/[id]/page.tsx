import ApplyButton from "@/app/components/Helper/ApplyButton";
import JobCard from "@/app/components/Helper/JobCard";
import JobData from "@/data";
import Link from "next/link";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
    const singleJob = JobData.find((job) => job.id.toString() == params.id);
    const session = await getServerSession(authOptions);
    const firstFourJob = JobData.slice(0, 4);
    return (
        <div className="mt-20 mb-12">
            <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
                <div className="flex-[0.7]">
                    <JobCard job={singleJob!} />
                </div>
                {session && <ApplyButton />}
                s   {!session && (
                    <Link
                        href="/signup"
                        className="px-8 py-3 bg-emerald-600 rounded-lg text-white"
                    >
                        <button>Sign Up To Apply </button>
                    </Link>
                )}
            </div>
            <div className="mt-16 w-[80%] mx-auto">
                <h1 className="text-[20px]  font-semibold">Job Description</h1>
                <p className="mt-4 text-black text-opacity-70">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, ex quam
                    accusantium corrupti aliquid similique tenetur, amet blanditiis
                    nesciunt odio illum eius necessitatibus voluptate officiis deleniti.
                    Dicta, placeat aut maxime perspiciatis tempora vitae ratione! Incidunt
                    minima amet perspiciatis ab accusamus voluptatum, est minus ratione
                    sequi vel. Amet cumque consequatur perferendis!
                </p>

                <h1 className="text-[20px]  font-semibold mt-5">
                    Key Responsibilities{" "}
                </h1>
                <p className="mt-4 text-black text-opacity-70">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, ex quam
                    accusantium corrupti aliquid similique tenetur, amet blanditiis
                    nesciunt odio illum eius necessitatibus voluptate officiis deleniti.
                    Dicta, placeat aut maxime perspiciatis tempora vitae ratione! Incidunt
                    minima amet perspiciatis ab accusamus voluptatum, est minus ratione
                    sequi vel. Amet cumque consequatur perferendis!
                </p>

                <h1 className="text-[20px]  font-semibold mt-5">Skill</h1>
                <ul>
                    <li className="mt-4 text-black text-opacity-70" >React js</li>
                    <li className="mt-4 text-black text-opacity-70" >Angular js </li>
                    <li className="mt-4 text-black text-opacity-70" >Javascript </li>
                    <li className="mt-4 text-black text-opacity-70" >Mongo Db </li>
                    <li className="mt-4 text-black text-opacity-70" >Node js </li>
                </ul>
                <h1 className="text-[20px]  font-semibold mt-5">Related Jobs </h1>
                <div className='mt-4'>
                    {
                        JobData.map((job) => {
                            return <Link href={`/job/jobdetails/${job.id}`} key={job.id}>
                                <JobCard job={job} />
                            </Link>
                        })
                    }

                </div>
            </div>

        </div>
    );
};

export default page;
