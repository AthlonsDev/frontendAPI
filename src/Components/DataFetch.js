import DisplayData from './DisplayData';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

export default function DataFetch() {

    console.log("Display function called");
    const [Items, setItems] = useState([])
    const url = "http://localhost:5000/displaydata"

    useEffect(() =>{
        axios.get(url).then(response =>{setItems(response.data)}
    )
        .catch(err=>{console.log("Error retrieving data")
    })
    }, [])
    return (
        <div>
            <DisplayData Item={Items}></DisplayData>
        </div>
    )
}