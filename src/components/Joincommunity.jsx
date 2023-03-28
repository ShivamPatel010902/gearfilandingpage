import React from 'react'
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Joincommunity() {
    return (
        <div className='w-full bg-white'>
            <div className='bg-gray-100 md:m-20 m-5 p-10'>
                <div className='text-center'>
                    <h1 className=' text-2xl font-bold'>Join the community</h1>
               
                    <p className=' text-lg font-normal'>
                    Learn more about GEAR, chat with the team, others in the community, and have your say in shaping the future of decentralized finance.
                    </p>
                </div>
                <div className='flex flex-row flex-wrap sm:justify-between justify-center p-10'>
                    <div className='m-4 p-5 hover:bg-gray-200 flex flex-col justify-center items-center'>
                        <FaDiscord size={30} />
                        <p className=' font-serif font-semibold text-lg'>Discord</p>
                    </div>
                    <div className='m-4 p-5 hover:bg-gray-200 flex flex-col justify-center items-center'>
                        <FaTwitter size={30} />
                        <p className=' font-serif font-semibold text-lg'>Twitter</p>
                    </div>
                    <div className='m-4 p-5 hover:bg-gray-200 flex flex-col justify-center items-center'>
                        <FaLinkedin size={30} />
                        <p className=' font-serif font-semibold text-lg'>LinkedIn</p>
                    </div>
                    <div className='m-4 p-5 hover:bg-gray-200 flex flex-col justify-center items-center'>
                        <FaInstagram size={30} />
                        <p className=' font-serif font-semibold text-lg'>Instagram</p>
                    </div>
                    <div className='m-4 p-5 hover:bg-gray-200 flex flex-col justify-center items-center'>
                        <FaGithub size={30} />
                        <p className=' font-serif font-semibold text-lg'>Github</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
