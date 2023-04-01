import React from 'react'
import WaveAnimation from './WaveAnimation'

export default function
    () {
    return (

        <>
            <WaveAnimation />
            <section className="w-full">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 mb-20">
                    <div className="xl:pt-10 xl:pb-10 pt-20 pb-20 place-self-center items-center lg:col-span-12">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                        Gear Up <br/>
                            Your NFT <br />
                            Purchase
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Open Source protocols for NFT Financing{" "}
                            <a href="https://tailwindcss.com" className="hover:underline">
                                
                            </a>{" "}
                            {" "}
                            <a
                                href="https://flowbite.com/docs/getting-started/introduction/"
                                className="hover:underline"
                            >
                                
                            </a>{" "}
                            {" "}
                            <a href="https://flowbite.com/blocks/" className="hover:underline">
                               
                            </a>
                            .
                        </p>
                        <div className="space-y-4 sm:flex sm:space-y-0 space-x-4">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 text-lg font-extrabold text-center text-gray-900 border-2 border-black sm:w-auto bg-green-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                Discord
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 mb-2 mr-2 text-lg font-extrabold text-gray-900 border-2 border-black sm:w-auto focus:outline-none bg-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Docs
                            </a>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
