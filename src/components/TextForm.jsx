import React, { useEffect, useState } from 'react';
import { Context } from './Context';
import { useContext } from 'react';

const TextForm = () => {
const context=useContext(Context)

    const [change, setChange] = useState('');
    const [getData, setGetData] = useState([]);
    const [message, setMessage] = useState('');

    const setData = () => {
        if (change === '') {
            setMessage('Please enter some text');
        } else {
            let storedValues = JSON.parse(localStorage.getItem('data')) || [];
            storedValues.push(change);
            localStorage.setItem('data', JSON.stringify(storedValues));
            setMessage('Text saved successfully!');
            getItems();
            setChange('');
        }
    };

    const getItems = () => {
        const data = JSON.parse(localStorage.getItem('data')) || [];
        setGetData(data);
    };

    useEffect(() => {
        getItems();
    }, []);

    const handleChange = (e) => {
        setChange(e.target.value);
        setMessage('');
    };

    const ChangeToUpperCase = () => {
        setChange(change.toUpperCase());
    };

    const ChangeToLowerCase = () => {
        setChange(change.toLowerCase());
    };

    const ChangeReset = () => {
        setChange('');
    };

    return (
        <>
            <div className="container my-3 mx-auto" style={context.Mode}>
                <div className="max-w-2xl mx-auto mt-4 flex justify-center gap-4 flex-col">
                    <h1 className='text-center font-bold mb-11 text-4xl'>Welcome To Text Utils</h1>
                    <label htmlFor="textData" className=''>Enter Your Text Below</label>
                    <textarea  style={context.Mode}
                        onChange={handleChange} 
                        type="text" 
                        id="textData" 
                        aria-label="disabled input" 
                        className="mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-text dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        value={change} 
                        rows={8} 
                        placeholder='Enter Your Text Here'
                    ></textarea>
                    <div className="btns flex gap-4 justify-start" style={context.Mode}>
                        <button onClick={ChangeToUpperCase} className="btn btn-primary bg-[#333] text-white rounded-xl w-fit px-4 py-2">Convert to UpperCase</button>
                        <button onClick={ChangeToLowerCase} className="btn btn-primary bg-[#333] text-white rounded-xl w-fit px-4 py-2">Convert to LowerCase</button>
                        <button onClick={ChangeReset} className="btn btn-primary bg-[#333] text-white rounded-xl w-fit px-4 py-2">Reset</button>
                        <button onClick={setData} className="btn btn-primary bg-[#333] text-white rounded-xl w-fit px-4 py-2">Save</button>
                    </div>
                    {message && <p className='text-green-500'>{message}</p>}
                </div>
            </div>
            <div className="container my-6 mx-[28vw] flex flex-col gap-4 w-fit" style={context.Mode}>
                <h1 className='text-xl font-bold'>Your Text Summary</h1>
                <p className='text-lg'>You have {change.length} characters and {change.split(' ').filter(Boolean).length} words.</p>
                <p className='text-lg'>On average, you need {(change.split(' ').filter(Boolean).length * 0.0032).toFixed(2)} minutes to read {change.split(' ').filter(Boolean).length} words.</p>
                <h2 className="text-lg font-bold">Saved Texts</h2>
                {getData.length > 0 ? (
                    getData.map((data, index) => (
                        <p key={index} className='text-lg'>{data}</p>
                    ))
                ) : (
                    <p className='text-lg'>No texts saved.</p>
                )}
            </div>
        </>
    );
};

export default TextForm;