import { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/textForm'
import './App.css'

function App() {
  return (
    <>
     <Navbar title='TextUtils'/>
     <TextForm />
    </>
  )
}

export default App
