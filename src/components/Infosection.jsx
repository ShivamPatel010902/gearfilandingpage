import React from 'react'

export default function Infosection() {
    return (
        <>
            <section className="bg-white w-full mb-20">
                <div className='m-10 bg-gray-200 border-2 border-black p-10 h-1/4'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi non, eligendi vitae assumenda rem, adipisci nesciunt, harum est dicta illo iure possimus! Nemo, et alias. Facere obcaecati maxime beatae molestiae!</p>
                    <p>Loreuos doloremque fugit, in ex magnam pariatur quae cupiditate impedit hic illo rem ipsa quisquam dolore, exercitationem inventore veniam vitae!</p>
                </div>
                <div className='flex md:flex-row flex-col p-10 md:h-96'>
                    <div className='md:w-1/2 w-full bg-gray-200  border-2 border-black md:h-auto h-96'>

                    </div>
                    <div className='md:w-1/2 w-full flex flex-col md:m-3 mt-2'>
                        <div className='h-2/4 md:block hidden'>

                        </div>
                        <div className='md:h-2/4 h-40'>
                            <div className='h-1/2 p-2 flex flex-row'>
                                <button className="ml-3 text-black font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 w-1/2 bg-gray-200 "></button>
                                <button className="ml-3 text-black font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 w-1/2 bg-gray-200 "></button>
                            </div>
                            <div className='h-1/2 p-2 flex flex-row'>
                                <button className="ml-3 text-black font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 w-1/4 bg-gray-200 "></button>
                                <button className="ml-3 text-black font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 w-1/2 bg-gray-200 "></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
