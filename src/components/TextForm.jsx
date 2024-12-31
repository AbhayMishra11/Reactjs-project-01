import React from 'react'
import { useState } from 'react'

const textForm = () => {
const [change, setchange] = useState('')


const handleChange=(e)=>{
    setchange(e.target.value)
}

const ChangeToUpperCase=()=>{
  setchange(change.toUpperCase())
}

    return (
        <>
            <div className="max-w-2xl mx-auto bg-slate-600 px-6 py-28 mt-4 flex justify-center gap-4 flex-col">
            <h1 className='text-center text-[#f6f6f6] font-bold mb-28 text-4xl'>Welcome To Text Utils</h1>
                <label htmlFor="textData" className=' text-white'>Enter Your Text Below</label>
                <textarea onChange={handleChange} type="text" id="textData" aria-label="disabled input" className="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={change} rows={8}  placeholder='Enter Your Text Here'></textarea>
                <button onClick={ChangeToUpperCase} className="self-center btn btn-primary bg-slate-100 text-black rounded-full w-fit px-4 py-4">Convert to UpperCase</button>
            </div>
        </>
    )
}

export default textForm
