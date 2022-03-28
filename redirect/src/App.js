import React, { useEffect } from "react";
import './App.css';
import 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";


function App() {
  useEffect(() => {
    window.location.href = "https://etherfund12.herokuapp.com/";
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
