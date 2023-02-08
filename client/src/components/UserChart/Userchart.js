import React,{useEffect,useState} from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";

const Delayed = ({children, waitBefore=4500}) => {
    const [isShown,setIsShown] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsShown(true);
        },waitBefore);
    },[waitBefore]);

    return isShown ? children : null;
}


const userchart = () => {

    const [chartData,setchartData] = useState({});

    const getData = async () => {
        let username = [];
        let calories = [];
        await axios
            .get("http://localhost:5000/calorie/")
            .then((res) => {
                console.log(res);
                for(const dataobj of res.data){
                    username.push(dataobj.username);
                    calories.push(parseInt(dataobj.calories));
                    console.log(username,calories);
                }
                setchartData({
                    labels: username,
                    datasets: [
                      {
                        label: "Calories",
                        data: calories,
                        backgroundColor: [
                          "#f42f42",
                          "#5ab950",
                          "#fe812a",
                          "#ffc748",
                          "#6b71c7",
                          "#8661d1",
                          "#8a2cba",
                        ],
                        borderColor: [
                          "#f42f42",
                          "#5ab950",
                          "#fe812a",
                          "#ffc748",
                          "#6b71c7",
                          "#8661d1",
                          "#8a2cba",
                        ],
                        borderWidth: 2,
                      },
                    ],
                  });
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(username,calories);    
    }

    useEffect(() => {
        getData();
    },[]);
    
    return (
        <>
           <div className="App"> 
               <div>
                <h5>Calorie per User</h5>
                <Delayed>
                    <Pie
                      data={chartData}
                    />
                </Delayed>
               </div>
           </div>
        </>
    )
}

export default userchart;