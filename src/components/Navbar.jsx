import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from './Context'
// import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const context = useContext(Context)
    const [switchMode, setswitchMode] = useState('Light Mode')
    const handleToggle = () => {
        if (context.handle) {
            context.sethandle(false)
            setswitchMode('Dark Mode')
            context.setMode({
                backgroundColor: '#f6f6f6',
                color: 'black',
                placeholderColor: 'black'
            })
        } else {
            context.sethandle(true)
            setswitchMode('Light Mode')
            context.setMode({
                backgroundColor: 'black',
                color: 'white',
                placeholderColor: '#f6f6f6'
            })
        }
    }
    return (
        <nav className={`dark:bg-gray-900 dark:border-gray-700bg-white border-gray-200`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className={`self-center text-2xl font-semibold text-white whitespace-nowrap`} >{props.title}</span>
                </a>
                <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-white`}>
                        <li>
                            <a href="#" className={`block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:hover:text-white dark:text-white dark:bg-blue-600 md:dark:bg-transparent`} aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}>Services</a>
                        </li>
                        {/* <li>
                            <a href="/about" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:hover:text-white dark:text-white md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent`}>About</a>
                        </li> */}
                        <li>
                        <label htmlFor='toggle' class="inline-flex items-center mb-5 gap-1 cursor-pointer"  >
                                <input id='toggle'  onClick={handleToggle} type="checkbox" value="" class="sr-only peer"/>
                                <div  class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-3 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                </div>
                                <span >{context.handle ? "Dark Mode":"Light Mode" }</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
