import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar";
import AddFood from "./components/AddFood";
import EditFood from "./components/EditFood";
import DisplayFood from "./components/DisplayFoodlist";
import AddUser from "./components/AddUser";


function App() {
  return (
      <>

        <Router>
          <Navbar/>

          <Routes>
            <Route path="/" element={<DisplayFood/>} />
            <Route path="/edit/:id" element={<EditFood/>} />
            <Route path="/create" element={<AddFood/>} />
            <Route path="/user" element={<AddUser/>} />
          </Routes>  
        </Router>       

      </>
  );
}

export default App;
