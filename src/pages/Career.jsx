import React from 'react'
import '../Components/Navbar.css'
import { useContext } from 'react'
import { Images } from '../App'





function Career() {
  let {url}=useContext(Images)  

  return (
    <>
    <div className='main-div'>
    

        <div className="card">
  <img src={url.img1} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Basics</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
  </ div>
  

<div className="card" >
  <img src={url.img2} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">skill</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
  </div>


<div className="card" >
  <img src={url.img3} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">skill+technical</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
    </div>
    </div>
    </>
  )
}

export default Career