import React from 'react'
import '../Components/Navbar.css'
import { useContext } from 'react'
import { Images } from '../App'


function Cs() {

let {url}=useContext(Images);

  return (
    <>
<div className='main-div'>
    
        <div className="card">
  <img src={url.img4} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Programming</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary"></a>
  </div>
  </ div>

<div className="card" >
  <img src={url.img5} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Artificial Intelligence</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary"></a>
  </div>
  </div>


<div className="card" >
  <img src={url.img6} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Web development</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary"></a>
  </div>
    </div>
    </div>
    </>
  )
}

export default Cs