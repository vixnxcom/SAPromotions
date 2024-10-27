import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Navbar from '../Navbar'

const Pages = () => {
  return (
    <>
    
<Router>
            
<div className='w-full top-0 '>
  <Navbar />
</div>

   <Routes>
   <Route exact path ='/' element={<Home />} />  
   </Routes>

</Router>
    </>
  )
}

export default Pages