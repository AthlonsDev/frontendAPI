import DisplayData from './DisplayData';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

export default function DataFetch() {
    const [query, setQuery] = useState(0)
    const [source, setSource] = useState("")
    const [Items, setItems] = useState([])
    let params = useParams()


    // modifies query change with input
    const handleChange = (e) => {
        const newValue = e.target.value
        // console.log(newValue)
        setQuery(newValue)
        setSource(e.target.name)
        console.log("newquery: " + query)
     }
     let url = ""
     if(source === "Matches") {
        url = 'http://localhost:5000/DisplayMatches/'
     }
     else {
        url = 'http://localhost:5000/DisplayHS/'
     }

     useEffect(() =>{
     console.log("useEffect called");
     axios.get(url + query, {
        // params: {
        //   Matches: query
        // }
      }).then(res =>{
         // console.log("Display: " + res.data)
         setItems(res.data)
     }
    )
     .catch(err=>{console.log("Error retrieving data")
    })
    DisplayData(Items)
    }, [query])

     const OnSubmit = (e) => {
        setQuery(e.target.value)
    }

    // console.log("Items Parsed: " + Items)
    return (
        <div style={{marginTop: 10}}>
        <h3>Query For Matches: </h3>
        <form>
                <div className='from-group'>
                    <label>Matches</label>
                    <input type="text" className='from-control' name="Matches" 
                    value={query} onChange={handleChange}></input>
                    <label>HS</label>
                    <input type="text" className='from-control' name="HS" 
                    value={query} onChange={handleChange}></input>
                </div>
                
        </form>
        <div>
            <DisplayData data={Items}></DisplayData>
        </div>
        </div>
    )
}