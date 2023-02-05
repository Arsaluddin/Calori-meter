import { useState,useRef,useEffect } from "react";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


const EditFood = (props) => {
    const [username,setUsername] = useState("");
    const [description,setDescription] = useState("");
    const [calories,setCalories] = useState("");
    const [date,setDate] = useState(new Date());
    const [users,setUsers] = useState([]);
    const userInputRef = useRef("userInput");

    
    useEffect(() => {

       axios
           .get("http://localhost:5000/calorie/" + props.match.params.id)
           .then((res) => {
                setUsername(res.data.username);
                setCalories(res.data.calories);
                setDescription(res.data.description);
                setDate(new Date(res.data.date));
           })
           .catch((err) => {
              console.log(err);
           });

         axios
             .get("http://localhost:5000/users/")
             .then((res) => {
                if(res.data.length > 0){
                    setUsers(res.data.map((user) => user.username));
                    setUsername(res.data[0].username);
                }
             })
             .catch((err) => {
                console.log(err);
             })  

    },[props.match.params.id])


    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleCalories = (e) => {
        setCalories(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleDate = (date) => {
        setDate(date);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const food = {
            username,
            description,
            calories,
            date,
        };

        console.log(food);

        axios
            .post("http://localhost:5000/calorie/update",food)
            .then((res)=>console.log(res.data));

            window.location="/";
    }

    return (
        <>
           <div className="container">
              <div className="image">
                <img src="https://user-images.githubusercontent.com/37651620/142764215-78f5b75f-4871-451e-9a4d-dd77cc667fc5.png" height={150}></img>
              </div>
              <form typeof="submit" onSubmit={handleSubmit}>
                 <div className="username">
                    <label>👨‍🎓 Username</label>
                    <select 
                    ref={userInputRef} 
                    value={username} 
                    onChange={handleUsername}>
                        {users.map((user) => {
                            return(
                                <option key={user} value={user}>
                                  {user}
                                </option>
                            )
                        })}
                    </select>
                 </div>
                 <div className="food-info">
                    <label>🥗 Food Info</label>
                    <input 
                    type="text" 
                    value={description} 
                    onChange={handleDescription}></input>
                 </div>
                 <div className="calories">
                    <lable> 💪 calorie</lable>
                    <input 
                    type="text"
                    value={calories} 
                    onChange={handleCalories}></input>
                 </div>
              </form>
              <div className="date">
                <label>Date: </label>
                <div>
                    <DatePicker selected={date} onChange={handleDate}></DatePicker>
                </div>
              </div>
           </div>
        </>
    )
}

export default EditFood;