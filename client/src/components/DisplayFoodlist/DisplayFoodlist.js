import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Caloriechart from "../CalorieChart/Caloriechart";
import Userchart from "../UserChart/Userchart";


const FoodTrack = (props) => {
    <tr>
        <td>
           <Link to={"/edit/"+props.meal._id} />
           <img
             src="https://user-images.githubusercontent.com/37651620/142769270-6128d45e-3650-4b66-bc0b-a76e3991fa1f.png" height={40}
           />
           {" "}
           <a
             onClick={() => {
                props.deleteMeal(props.meal._id);
                window.location.reload(false);
             }}
           >
            <img
               src="https://user-images.githubusercontent.com/37651620/142769328-23d55107-8bed-4fa0-92b8-cca7df931083.png" height={40}
            />
           </a>
        </td>
        <td>{props.meal.username}</td>
        <td>{props.meal.description}</td>
        <td>{props.meal.calories}</td>
        <td>{props.meal.date.substring(0,10)}</td>
    </tr>
}


const DisplayFood = () => {
    const [foods,setFoods] = useState([]);


    const mealList = () => {
      return foods && foods.map((currentmeal) => {
          return (
              <FoodTrack
               meal={currentmeal}
               deleteMeal={deleteMeal}
               key={currentmeal._id}
              />
          );
      });
  };

    // useEffect(async() => {
    //    await axios
    //        .get("http://localhost:5000/calorie/")
    //        .then((res) => {
    //         setFoods(res.data);
    //        })
    //        .catch((err) => {
    //            console.log(err);
    //        });
    // },[]);

    const deleteMeal = (id) => {
        axios
           .delete("http://localhost:5000/calorie/" + id).then((res) => {
                console.log(res.data);
           });
           setFoods(foods && foods.filter((el) => el._id !==id));
    }

    

    return (
        <>
           <div className="container">
              <div className="card-body">
                <h3>Calorie Journal</h3>
                <table className="table">
                  <thead className="thead">
                    <tr>
                        <th>Edit/Delete</th>
                        <th>👨‍✈️Username</th>
                        <th>💌Description</th>
                        <th>🔥Calories</th>
                        <th>📑Date</th>
                    </tr>
                  </thead>
                  <tbody>{mealList()}</tbody>
                </table>
              </div>
           </div>
           <div className="container">
             <div >
                <Userchart/>
                <Caloriechart/>
             </div>
           </div>
        </>
    )
}

export default DisplayFood;