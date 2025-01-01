import { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import './App.css'
import { Context } from './components/Context'


function App() {
const [Mode, setMode] = useState({
    backgroundColor: 'white',
    color: 'black',
    placeholderColor: 'black'
})

  return (
    <>
   < Context.Provider value={{Mode,setMode}}>
     <Navbar title='TextUtils'/>
     <TextForm />
     <About/>
     </Context.Provider>
    </>
  )
}

export default App
