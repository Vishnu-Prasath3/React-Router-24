import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { createContext } from 'react'
import NavBar from './components/NavBar';

export const Images=createContext();


function App() {
 
let url={
  img1:"",
  img2:"",
  img3:"",
  img4:"",
  img5:"",
  img6:"",
  img7:"",
  img8:"",
  img9:"",
  img10:"",
  img11:"",
  img12:"",
  img13:"",
  img14:""
}
  


  return (

<>
    <BrowserRouter>
       <Images.Provider value={url}>
         <NavBar></NavBar>
         </Images.Provider>
         </BrowserRouter>
    </>
  )
}

export default App
