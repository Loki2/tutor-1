import React from 'react';
import './css/App.css';
import './css/Props.css';
import './css/uifont.css';
//import Header from './screens/Header';
import Sidebar from './screens/Sidebar';
import Home from './screens/Home';


function App() {
  return (
        <div className="App flex">
            <Sidebar /> 
            <div className="app-content">
            <Home />
            </div>
        </div>
  );
}

export default App;
