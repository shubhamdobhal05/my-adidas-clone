import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { storeData } from "../redux/actions/actions";
import "./style.css"


const Kids = () => {

    //get the data
    const dispatch = useDispatch();

    useEffect(() => {
         fetch("https://ad-json-server.herokuapp.com/kids")
         .then((res) => res.json())
        
         .then((res) => dispatch(storeData(res)))
         .catch((err) => console.log(err))


     }, []);


     //read the data we have fetched
     const data = useSelector((state) => state.data)

     console.log(data);


    
    
    


    return (
        <div className="container">
            {data.map(data => (
                <div className="product" key={data.id}>
                    <img className="img" src={data.img} alt={data.title}/>
                    <p>{data.price}</p>
                    <p>{data.title}</p>
                </div>
            ))}
        </div>
    )
}


export default Kids;