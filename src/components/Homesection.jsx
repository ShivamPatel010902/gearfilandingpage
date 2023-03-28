import React from 'react'

export default function
    () {
    return (
        <>
            <div className="waveWrapper waveAnimation -z-10">
                <div className="waveWrapperInner bgTop">
                    <div
                        className="wave waveTop"
                        style={{
                            backgroundImage:
                                'url("http://front-end-noobs.com/jecko/img/wave-top.png")'
                        }}
                    />
                </div>
                <div className="waveWrapperInner bgMiddle">
                    <div
                        className="wave waveMiddle"
                        style={{
                            backgroundImage:
                                'url("http://front-end-noobs.com/jecko/img/wave-mid.png")'
                        }}
                    />
                </div>
                <div className="waveWrapperInner bgBottom">
                    <div
                        className="wave waveBottom"
                        style={{
                            backgroundImage:
                                'url("http://front-end-noobs.com/jecko/img/wave-bot.png")'
                        }}
                    />
                </div>
            </div>

            <section className="w-full">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 mb-20">
                    <div className="xl:pt-24 xl:pb-24 pt-20 pb-20 place-self-center items-center lg:col-span-4">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                            Building digital <br />
                            products &amp; brands.
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            This free and open-source landing page template was built using the
                            utility classes from{" "}
                            <a href="https://tailwindcss.com" className="hover:underline">
                                Tailwind CSS
                            </a>{" "}
                            and based on the components from the{" "}
                            <a
                                href="https://flowbite.com/docs/getting-started/introduction/"
                                className="hover:underline"
                            >
                                Flowbite Library
                            </a>{" "}
                            and the{" "}
                            <a href="https://flowbite.com/blocks/" className="hover:underline">
                                Blocks System
                            </a>
                            .
                        </p>
                        <div className="space-y-4 sm:flex sm:space-y-0 space-x-4">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-center text-gray-900 border-2 border-black sm:w-auto bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                Discord
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 border-2 border-black sm:w-auto focus:outline-none bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:col-span-8 lg:flex justify-end">
                        <div className='xl:bg-gray-200 lg:flex flex-col justify-center items-center w-4/6 xl:rounded-full xl:border-2 xl:border-black'>
                            <div className='w-96 h-4/6 bg-gray-100 mt-10 border-2 border-black'>
                                <img src="" className='h-96 w-96' alt="" />
                            </div>
                            <div className='w-96 h-1/6 bg-gray-100 mt-3 border-2 border-black'>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
