import DisplayData from './DisplayData';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

export default function DataFetch() {
    const [query, setQuery] = useState()
    const [Items, setItems] = useState([])
    var url = "http://localhost:5000/Display"

    useEffect(() =>{
        console.log("useEffect called");
        axios.get(url).then(res =>{
            // console.log("Display: " + res.data)
            setItems(res.data)
        }
    )
        .catch(err=>{console.log("Error retrieving data")
    })
    DisplayData(Items)
    }, [])

    // console.log("Items Parsed: " + Items)
    return (
        <div>
            <DisplayData data={Items}></DisplayData>
        </div>
    )
}