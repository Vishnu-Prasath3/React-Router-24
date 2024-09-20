import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { createContext } from 'react'
import NavBar from './Components/NavBar';




export const Images=createContext();

function App() {
   
let url={
  img1:"https://thumbs.dreamstime.com/b/career-development-chart-hand-drawing-blackboard-56251425.jpg",
  img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvWVsrGLZ7DfDlSwt14UhZBX-RUo1n75JWQ&s",
  img3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQ4cNja6qDlmt6grHUrqWi0QXsfsG-iiqIA&s",
  img4:"https://www.park.edu/wp-content/uploads/2022/09/source-g0d609dba2_1920.jpg",
  img5:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApVv2baGsCsW3O-KeaWxJEEsMdyNnAsdUYQ&s",
  img6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DgqqBLXm-1vrvZaRYr1yj1OtZcE4Y7laaA&s",
  img7:"https://miro.medium.com/v2/resize:fit:730/0*POjH5vv_7t8s8loG",
  img8:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjky626H1VJQMZkbqnckkfuMI7cWifJcu1Mw&s",
  img9:"https://www.gyansetu.in/wp-content/uploads/2024/02/FUqHEVVUsAAbZB0-1024x580-1.jpg",
  img10:"data:image/png;base64,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",
  img11:"https://www.keycdn.com/img/support/full-stack-development.png",
  img12:"https://www.thinknexttraining.com/images/Full-Stack-Development-Course-in-Chandigargh-mob-min.jpg",
  img13:"data:image/jpeg;base64,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",
  img14:"data:image/jpeg;base64,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",
  img15:"https://www.shutterstock.com/image-photo/analyst-uses-computer-dashboard-data-600nw-2285412737.jpg"
  
}
  


  return (

<>
    <BrowserRouter>
       <Images.Provider value={{url}}>
         <NavBar></NavBar>
         </Images.Provider>
         </BrowserRouter>
    </>
  )
}

export default App
