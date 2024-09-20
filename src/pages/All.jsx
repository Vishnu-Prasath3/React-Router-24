import React from 'react'
import '../Components/Navbar.css'
import { useContext } from 'react'
import { Images } from '../App'

export default function All() {

  let {url}=useContext(Images);

    return(<>
<div className='main-div'>
    
  <div className="card">
  <img src={url.img13} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary"></a>
  </div>
  </ div>

<div className="card" >
  <img src={url.img15} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary"></a>
  </div>
  </div>


<div className="card" >
   <img src={url.img14} className="card-img-top" alt="..."></img>
   <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary"></a>
  </div>
    </div>
    </div>
    </>
  )
}
