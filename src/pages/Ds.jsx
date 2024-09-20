import React from 'react'
import '../Components/Navbar.css'
import { useContext } from 'react'
import { Images } from '../App'

function Ds() {

  let {url}=useContext(Images);

  return (
    <>
<div className='main-div'>
    
   <div className="card">
  <img src={url.img7} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Data scientist</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </ div>

<div className="card" >
  <img src={url.img8} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Data engineer</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>


<div className="card" >
  <img src={url.img9} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Data Mining</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
    </div>
    </div>
    </>
  )
}

export default Ds