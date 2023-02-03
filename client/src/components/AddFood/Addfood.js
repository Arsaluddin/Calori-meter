import React from "react";
import './Addfood.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useRef } from 'react';


const Addfood = () => {

    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [calories, setCaloies] = useState("");
    const [date, setDate] = useState(new Date());
    const [users,setUsers] = useState([]);
    const userInputRef = useRef("userInput");



    return (
        <>
            <div className="container">
                <div className="image">
                    <img  src="https://user-images.githubusercontent.com/37651620/142764215-78f5b75f-4871-451e-9a4d-dd77cc667fc5.png" alt="" height={100} width={100} ></img>
                </div>
                <div className="form">
                   <form typeof="submit" >
                     
                     <div className="user-name">
                      <label>🤵user Name</label>
                      <select></select>
                     </div>
                     <div className="foof-info">
                      <label>🥗 food info</label>
                      <input type="text"></input>
                     </div> 
                     <div className="calories">
                        <label>🔥 calories</label>
                        <input type="text"></input>
                     </div> 
                     <div className="Date">
                        <label>Date: </label>
                        <div>
                            <DatePicker></DatePicker>
                        </div>
                        <div>
                          <input type="submit">
                            
                          </input>
                        </div>
                     </div>

                   </form>
                </div>
                <div className="date">

                </div>
            </div>
        </>
    )
}

export default Addfood;