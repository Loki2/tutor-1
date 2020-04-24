import React from 'react';
import './css/App.css';
import './css/Props.css';
import './css/uifont.css';
//import Header from './screens/Header';
// import Sidebar from './screens/Sidebar';
// import Rightbar from './screens/Rightbar';
//import Home from './screens/Home';
// import Courses from './screens/Courses';
import Rightbar from './components/rightbar/Rightbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './container/home/Home';
//import Category from './screens/Category';
//import Product from './screens/Product';
//import User from './screens/User';



function App() {
  return (
        <div className="App flex">
            <Sidebar /> 
            <div className="app-content">
            <Home />
            {/* <Courses /> */}
            {/* <Category /> */}
            {/* <Product /> */}
            {/* <User /> */}
            </div>
          <Rightbar />
        </div>
  );
}

export default App;
