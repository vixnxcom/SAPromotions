import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Navbar from '../Navbar'
import Works from '../about/Works'
import Plan from '../payment/Plan'

const Pages = () => {
  return (
    <>
    
<Router>
            
<div className='w-full top-0  '>
  <Navbar />
</div>

   <Routes>
   <Route exact path ='/' element={<Home />} />  
   <Route exact path ='/about' element={<Works />} />  
   <Route exact path ='/payments' element={<Plan />} />  
   </Routes>

</Router>
    </>
  )
}

export default Pages