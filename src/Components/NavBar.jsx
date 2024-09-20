import React from 'react'
import './Navbar.css'
import {Link,Routes,Route } from 'react-router-dom'
import All from '../pages/All'
import Career from '../pages/Career'
import Cs from '../pages/Cs'
import Ds from '../pages/Ds'
import Fsd from '../pages/Fsd'
export default function NavBar() {
  return (
    <>
       <div className='navbar'>
    <ul>
           <li><Link to="/"> home</Link></li>
           <li><Link to="career">career</Link></li>
           <li><Link to="Cs">computer science</Link></li>
           <li><Link to="Ds">Data science</Link></li>
           <li><Link to="fsd">full stack development</Link></li>
    </ul>
       </div>

   
<Routes>
<Route path="/" element={<All />} />        
<Route path='career' element={<Career />} />  
<Route path='Cs' element={<Cs />} />
<Route path='Ds' element={<Ds />} />  
<Route path='fsd' element={<Fsd />} /> 
</Routes>

</>     
  )
}