import React from 'react'
import { BsGear, BsGearWideConnected } from "react-icons/bs";

export default function Governance() {
    return (
        <>
            <div className='w-full flex justify-center mb-20 bg-gray-100 p-5'>
                <div className='flex flex-col lg:w-1/2 w-3/4 justify-center'>
                    <div className='flex flex-row  justify-center'>
                        <h1 className=' text-2xl font-bold'>GEAR DAO</h1>
                    </div>
                    <div className='flex md:flex-row flex-col w-full justify-between pt-10 md:m-10 m-0'>
                        <div className='md:w-1/4 flex justify-center items-center'>
                        <img className='md:w-full w-1/2' src="https://static.thenounproject.com/png/3095094-200.png" alt="" />
                        </div>
                        <div className='md:w-1/2 w-full text-center'>
                            <h1 className=' font-bold text-3xl'>Why we started?</h1>
                            <p className=' font-normal text-lg'>We wanted to take a decentralized approach in building our protocols. We believe in <b>building in public</b> and <b>building with public</b>.</p>
                            <a href="#" className=' text-blue-400 text-xl pt-3'>Read our Docs</a>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col w-full justify-between pt-10 md:m-10 m-0'>
                        <div className='md:w-1/4 flex justify-center'>
                        <img className='md:w-full w-1/2' src="https://static.thenounproject.com/png/3095094-200.png" alt="" />
                        </div>
                        <div className='md:w-1/2 w-full text-center'>
                            <h1 className=' font-bold text-3xl'>Where are we now?</h1>
                            <p className=' font-normal text-lg'>We have built a <b>Buy Now Pay Later</b> protocol for NFTs. We are building a community and looking for degens to <b>contribute</b> to our project</p>
                            <a href="#" className=' text-blue-400 text-xl pt-3'>Join our Discord</a>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col w-full justify-between pt-10 md:m-10 m-0'>
                        <div className='md:w-1/4 flex justify-center'>
                            <img className='md:w-full w-1/2' src="https://static.thenounproject.com/png/3095094-200.png" alt="" />
                        </div>
                        <div className='md:w-1/2 w-full text-center'>
                            <h1 className=' font-bold text-3xl'>Where are we headed?</h1>
                            <p className=' font-normal text-lg'>We are set to build the <b>strongest community</b> in the NFT ecosystem and build protocols which will accelerate <b>NFT adoption</b>. </p>
                            <a href="#" className=' text-blue-400 text-xl pt-3'>Support us on Twitter</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
