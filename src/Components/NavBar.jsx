import React from 'react'
import './Navbar.css'
import {Link,Routes,Route } from 'react-router-dom'
import All from '../pages/All'
import Career from '../pages/Career'
import Cs from '../pages/Cs'
import Ds from '../pages/Ds'
import Fsd from '../pages/Fsd'
function NavBar() {
  return (
    <>
    <div className='navbar'>
    <ul>
  <li><Link> home</Link></li>
  <li><Link>career</Link></li>
        <li><Link>computer science</Link></li>
        <li>Data science</li>
        <li>full stack development</li>
        <li>data science</li>
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

export default NavBar