import { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import About from './components/About'
import './App.css'
import { Context } from './components/Context'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [handle, sethandle] = useState(false)
  const [Mode, setMode] = useState({
    backgroundColor: '#f6f6f6',
    color: 'black',
    placeholderColor: 'black'
  })

  return (
    <>
      < Context.Provider value={{ Mode, setMode, sethandle, handle }}>
        {/* <Router> */}
          <div style={Mode}>
            <Navbar title='TextUtils' />
            <TextForm/>
            {/* <div>
              <Routes>
                <Route exact path="/" element={<TextForm />} />
                <Route exact path="/about" element={<About />} />
              </Routes>
            </div> */}
          </div>
        {/* </Router> */}
      </Context.Provider>
    </>
  )
}

export default App
