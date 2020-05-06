/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './css/App.css';
import './css/Props.css';
import './css/uifont.css';
import Rightbar from './components/rightbar/Rightbar';
import Sidebar from './components/sidebar/Sidebar';
//import Home from './container/home/Home';
//import Courses from './container/course/Course';
import Course_Detail from './container/course/Course_Detail';
//import User_profile from './container/users/User_profile';



function App() {
  return (
        <div className="App flex">
            <Sidebar /> 
            <div className="app-content">
            {/* <Home /> */}
            {/* <Courses /> */}
            <Course_Detail />
            {/* <Category /> */}
            {/* <Product /> */}
            {/* <User /> */}
            {/* <User_profile /> */}
            </div>
          <Rightbar />
        </div>
  );
}

export default App;
