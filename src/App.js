import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Navbar from './component/Navbar';
import Mens from "./component/Mens";
import Womens from "./component/Womens";
import Kids from "./component/Kids";
import MensDetails from './component/MensDetails';
import WomensDetails from './component/WomensDetails';
import KidsDetails from './component/KidsDetails';
import Login from "./component/Login";
import Register from "./component/Register";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout"


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/mens' element = {<Mens/>}/>
        <Route path='/womens' element = {<Womens/>}/>
        <Route path='/kids' element = {<Kids/>}/>
        <Route path="/mens/:id" element = {<MensDetails/>}/>
        <Route path="/womens/:id" element = {<WomensDetails/>}/>
        <Route path="/kids/:id" element = {<KidsDetails/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/checkout' element = {<Checkout/>}/>

        
      </Routes>
      
    </>
  )
}

export default App;
