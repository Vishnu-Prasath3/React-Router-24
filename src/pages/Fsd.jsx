import React from 'react'
import '../Components/Navbar.css'
import { useContext } from 'react'
import { Images } from '../App'


function Fsd() {
let {url}=useContext(Images)

  return (
    <>
<div className='main-div'>

  <div className="card">
  <img src={url.img10} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">MERN stack</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </ div>


<div className="card" >
  <img src={url.img11} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Java full stack</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>


<div className="card" >
  <img src={url.img12} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">python Full stack</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
    </div>
    </div>
    </>
  )
}

export default Fsd