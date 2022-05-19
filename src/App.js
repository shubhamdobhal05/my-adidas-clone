import Home from './component/Home';
import Navbar from './component/Navbar';
import Mens from "./component/Mens";
import Womens from "./component/Womens";
import Kids from "./component/Kids";


import { Routes, Route } from "react-router-dom";
import KidsDetails from './component/KidsDetails';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/mens' element = {<Mens/>}/>
        <Route path='/womens' element = {<Womens/>}/>
        <Route path='/kids' element = {<Kids/>}/>
        <Route path="/kids/:id" element = {<KidsDetails/>}/>

        
      </Routes>
      
    </>
  )
}

export default App;
