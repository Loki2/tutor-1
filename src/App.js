import React from 'react';
import './css/App.css';
import './css/Props.css';
import './css/uifont.css';
import Rightbar from './components/rightbar/Rightbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './container/home/Home';



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
