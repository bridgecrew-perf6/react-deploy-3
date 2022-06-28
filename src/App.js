import React from 'react';
import profileImage from './img/puffles2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>My React App</h1>
     <h2>Author: Thapani Sawaengsri</h2>
     <img src={profileImage} alt="puffles"/>
    </div>
  );
}

export default App;
