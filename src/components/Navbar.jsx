import React from 'react'
import { useState } from 'react'
import { FaAlignJustify } from "react-icons/fa";

export default function Navbar() {
    const [openmenu, setOpenmenu] = useState(false)


    return (
        <header className="fixed w-full z-10">
            <nav className=" bg-gray-200 border-gray-200 py-2.5">
                <div className="flex items-center justify-between max-w-screen-xl px-4 py-3 mx-auto">
                    <div>
                        <button onClick={() => setOpenmenu(!openmenu)} className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100  lg:border-0 font-extrabold lg:p-0 lg:hidden"><FaAlignJustify size={25} /></button>
                        <ul className={openmenu ? "lg:flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0" : "lg:flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 hidden"} >
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 font-extrabold lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Gearif</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="ml-3 text-black font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 border-2 border-black "
                        >
                            Open App
                        </a>
                    </div>
                </div>
            </nav>
        </header>

    )
}
