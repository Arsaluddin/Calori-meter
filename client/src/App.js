import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import './App.css';
import React from "react";
import Navbar from "../src/components/Navbar";
import AddFood from "./components/AddFood/Addfood.js";
import EditFood from "./components/EditFood";
import DisplayFood from "./components/DisplayFoodlist";
import AddUser from "./components/AddUser";


function App  ()  {
  return (
      <>
      <React.Fragment>
        <Router>
          <Navbar/>
          <br/>
          <Routes>
            <Route path="/" element={<DisplayFood/>} />
            <Route path="/edit/:id" element={<EditFood/>} />
            <Route path="/create" element={<AddFood/>} />
            <Route path="/users" element={<AddUser/>} />
          </Routes>  
        </Router>   
      </React.Fragment>      

      </>
  );
}

export default App;
