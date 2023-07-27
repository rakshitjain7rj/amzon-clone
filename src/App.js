import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router , Route , Routes}
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase'
function App() {

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
    })
  },[])
  return (
    //BEM
     <Router>
    <div className="app">
      
      <Routes >
        <Route path='/login' element={<><Login/></>}></Route>
        <Route path="/checkout" element={<>
        
          
          <Header />
          <Checkout/>
          </>}>
          
        </Route>
        <Route path="/" element={<>
         <Header />
          <Home /></>}>
         
        </Route>
    </Routes>
      
    </div>
    </Router>
  );
}

export default App;
