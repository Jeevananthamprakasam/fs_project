import Home from './components/home.js'
import Login from './components/login.js'
import Fertilizer from './components/fertilizer.js'
import Myfarm from './components/myfarm.js'
import Pesticide from './components/pesticide.js'
import NavigationBar from './components/navbar.js'
import Office from './components/office.js'
import Sugges from './components/sugges.js'
import Add from './components/addnew.js'
import Contact from './components/contact.js'
import { Routes, Route } from "react-router-dom"
function User() {
  return (
    <div className="App">  
      <NavigationBar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/fertilizer" element={ <Fertilizer/> } />
        <Route path="/myfarm" element={ <Myfarm/> } /> 
        <Route path="pesticide" element={ <Pesticide/> } />
        <Route path="office" element={ <Office/> } />
        <Route path="sugges" element={ <Sugges/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="/add" element={ <Add/> } />
      </Routes>
    </div>
  );
}

export default User;