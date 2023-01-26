import {BrowserRouter , Routes , Route} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import AddFood from "./components/AddFood/Addfood.js";
import EditFood from "./components/EditFood";
import DisplayFood from "./components/DisplayFoodlist";
import AddUser from "./components/AddUser";


const App = () => {
  return (
      <>
        <BrowserRouter>
          <Navbar/>
          <br/>
          <Routes>
            <Route path="/" element={<DisplayFood/>} />
            <Route path="/edit/:id" element={<EditFood/>} />
            <Route path="/create" element={<AddFood/>} />
            <Route path="/user" element={<AddUser/>} />
          </Routes>  
        </BrowserRouter>       

      </>
  );
}

export default App;
