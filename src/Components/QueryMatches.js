import DisplayData from './DisplayData';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

export default function DataFetch() {
    const [Matches, setMatches] = useState(0)
    const [HS, setHS] = useState(0)
    const [source, setSource] = useState("")
    const [Items, setItems] = useState([])
    let params = useParams()


    // modifies query change with input
    const handleChange = (e) => {
        const newValue = e.target.value
        // console.log(newValue)
        setSource(e.target.name)
        console.log(source)
        
        if(source === 'Matches') {
            setMatches(newValue)
            // console.log('Matches: ' + Matches)
        }
        if (source === 'HS') {
            setHS(newValue)
            // console.log('HS ' + HS)
        }
        // console.log("newquery: " + query)
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
     if(source === 'Matches') {
        axios.get(url + Matches, {
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
     }
     else {
        axios.get(url + HS, {
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
     }

    }, [Matches, HS])

    // console.log("Items Parsed: " + Items)
    return (
        <div style={{marginTop: 10}}>
        <h3>Query For Matches: </h3>
        <form>
                <div className='from-group'>
                    <label>Matches</label>
                    <input type="text" className='from-control' name="Matches" 
                    value={Matches} onChange={handleChange}></input>
                    <label>HS</label>
                    <input type="text" className='from-control' name="HS" 
                    value={HS} onChange={handleChange}></input>
                </div>
                
        </form>
        <div>
            <DisplayData data={Items}></DisplayData>
        </div>
        </div>
    )
}