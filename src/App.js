import Home from './component/Home';
import Navbar from './component/Navbar';
import Mens from "./component/Mens";
import Womens from "./component/Womens";
import Kids from "./component/Kids";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/mens' element = {<Mens/>}/>
        <Route path='/womens' element = {<Womens/>}/>
        <Route path='/kids' element = {<Kids/>}/>
        
      </Routes>
      
    </>
  )
}

export default App;
