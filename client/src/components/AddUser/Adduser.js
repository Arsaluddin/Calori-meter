import React from "react";
import { useState } from "react";
import axios from "axios";


const Adduser = () => {

    const [username,setUsername] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

const handleSubmit = (e) => {
      e.preventFefault();
      const user = {
        username,
      };
      console.log(user);
      axios
      .post("http://localhost:5000/users/",user)
      .then((res) => console.log(res.data));
      setUsername("");
      
}


    return (
        <>
           <div className="container">
               <div className="image">
                  <img src="https://user-images.githubusercontent.com/37651620/142767072-ff777861-7ee9-4355-b48e-a624e8de085b.png" height={150} alt="logo"/>
               </div>
               <form typeof="Submit" onSubmit={handleSubmit}>
                   <label> 👨‍✈️ Username</label>
                   <input type="text" value={username} onChange={handleUsername}></input>
               </form>
           </div>
        </>
    )
}

export default Adduser;