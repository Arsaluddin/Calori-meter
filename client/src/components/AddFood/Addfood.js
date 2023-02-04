import React from "react";
import './Addfood.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useRef ,useEffect} from 'react';
import axios from "axios";


const Addfood = () => {

    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [calories, setCalories] = useState("");
    const [date, setDate] = useState(new Date());
    const [users,setUsers] = useState([]);
    const userInputRef = useRef("userInput");


    useEffect(() => {
      
      axios
      .get("http://localhost:5000/users/")
      .then((res) => {
          if(res.data.length > 0){
            setUsers(res.data.map((user) => user.username));
            setUsername(res.data[0].username);
          }
      })
      .catch((error) => {
        console.log(error);
      });

    }, [])
    


    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleCalories = (e) => {
        setCalories(e.target.value);
    }

    const handleDate = (e) => {
        setDate(date);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const meal = {
            username,
            description,
            calories,
            date,
        };

        console.log(meal);

        axios
        .post("http://localhost:5000/calorie/add", meal)
        .then((res) => console.log(res.date));

        window.location = "/";

    }


    return (
        <>
            <div className="container">
                <div className="image">
                    <img  src="https://user-images.githubusercontent.com/37651620/142764215-78f5b75f-4871-451e-9a4d-dd77cc667fc5.png" alt="img" height={100} width={100} ></img>
                </div>
                {/* <div className="form"> */}
                   <form className="form" typeof="submit" onSubmit={handleSubmit} >
                     
                     <div className="user-name">
                      <label>🤵user Name</label>
                      <select
                        ref={userInputRef}
                        required
                        value={username}
                        onChange={handleUsername}
                      >

                       {users.map((user)=>{
                           return (
                            <option key={user} value={user}>
                                {user}
                            </option>
                           )
                       })}

                      </select>
                     </div>
                     <div className="food-info">
                      <label>🥗 food info</label>
                      <input type="text" value={description} onChange={handleDescription}></input>
                     </div> 
                     <div className="calories">
                        <label>🔥 calories</label>
                        <input type="text" value={calories} onChange={handleCalories}></input>
                     </div> 
                     <div className="Date" style={{textAlign: "centre"}}>
                        <div>
                        <label style={{textAlign: "centre"}}>Date: </label>
                        <div>
                            <DatePicker onChange={handleDate}></DatePicker>
                        </div>
                        </div>
                        <div>
                        <input type="submit">
                            
                        </input>
                        </div>
                     </div>

                   </form>
                {/* </div> */}
               
            </div>
        </>
    )
}

export default Addfood;