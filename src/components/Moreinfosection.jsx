import React from 'react'

export default function Moreinfosection() {
    return (
        <>
            <div className='flex md:flex-row flex-col p-10 bg-gray-100'>
                <div className='md:w-1/2 w-full md:h-auto flex justify-center'>
                    <img src="/assets/img/logo.jpeg" className='h-96 w-96 border-2 border-black' alt="" />
                </div>
                <div className='md:w-1/2 w-full flex flex-col md:m-3 mt-2'>
                    <div className='h-3/4 p-3 text-start mt-5'>
                       <ul className='list-decimal'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam sequi eum dicta consequatur mollitia perferendis placeat? Placeat, ut aperiam.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae officia sit, distinctio earum autem quisquam totam iste neque quas!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae officia sit, distinctio earum autem quisquam totam iste neque quas!</li>
                       </ul>
                    </div>
                    <div className='md:h-1/4 h-20'>
                        <div className='h-3/4 p-2 flex flex-row'>
                            <button className="ml-3 text-black font-medium text-lg px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 w-1/2 bg-green-300">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
