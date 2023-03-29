import React from 'react'

export default function Moreinfosection() {
    return (
        <>
            <div className='flex md:flex-row flex-col p-10 bg-gray-100'>
                <div className='md:w-1/2 w-full md:h-auto flex justify-center'>
                      <img src="/assets/img/logo.jpeg" className='h-96 w-96 border-2 border-black' alt="" />
                </div>
                <div className='md:w-1/2 w-full flex flex-col md:m-3 mt-2'>
                    <div className='h-2/4 md:block hidden'>

                    </div>
                    <div className='md:h-2/4 h-40'>
                        <div className='h-1/2 p-2 flex flex-row'>
                            <button className="ml-3 text-black font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 w-1/2 bg-gray-200 "></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
