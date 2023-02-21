import React,{ useEffect,useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";



const Delayed = ({children,waitbefore=6000}) => {
    const [isShown,setIsShown] = useState(false); 

    // useEffect(() => {
    //     // setTimeout(() => {
    //         setIsShown(true);
    //     // },waitbefore)
    // },[]);

    return isShown ? children : null;
}


const Caloriechart = () => {

    const [chartData,setchartData] = useState({});
    
    const getData = async () => {
        let foodCal = [];
        let caloriesCal = [];
        await axios
            .get("http://localhost:5000/calorie/")
            .then((res) => {
                console.log(res);
                for(let dataobj of res.data){
                    foodCal.push(dataobj.description);
                    caloriesCal.push((parseInt(dataobj.caloriesCal)));
                    console.log("foodcal,caloriescal",foodCal,caloriesCal);
                }
                setchartData({
                    labels: foodCal,
                    datasets: [
                      {
                        label: "Cal",
                        data: caloriesCal,
                        backgroundColor: [
                          "#f42f42",
                          "#5ab950",
                          "#fe812a",
                          "#ffc748",
                          "#6b71c7",
                          "#8661d1",
                          "#8a2cba",
                        ],
                      },
                    ],
                  });
            })
            .catch((err) => {
                console.log(err);
            }); 
    }

    useEffect(() => {
        getData();
    },[]);

    return (
        <>
           <div className="App">
               <h4>Food Analytics</h4>
               <h5> Calorie Intake per each Food</h5>
               <div>
                  <Delayed>
                    <Bar
                       data={chartData}
                       options={{
                        responsive: true,
                        title: {
                          text: "Calorie Per Food ",
                          fontSize: 20,
                          fontColor: "#212529",
                        },
                        scales: {
                          yAxes: [
                            {
                              ticks: {
                                autoSkip: true,
                                maxTicksLimit: 10,
                                beginAtZero: true,
                              },
                              gridLines: {
                                // display: true,
                              },
                            },
                          ],
                          xAxes: [
                            {
                              gridLines: {
                                display: true,
                              },
                            },
                          ],
                        },
                      }}
                    />
                  </Delayed>
               </div>
           </div>
        </>
    )
}

export default Caloriechart;
