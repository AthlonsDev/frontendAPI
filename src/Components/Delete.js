import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

import DisplayData from './DisplayData';

export default function DeletePlayer(props) {
    const [state, setState] = useState([])
    let params = useParams()
    let url = "http://localhost:5000/"
    useEffect(() => {
        console.log("id: " + params.id)
        axios.post("http://localhost:5000/deleteplayer/" + params.id)
        .then(res =>{
            axios.get(url + "Display")
            .then(res => {

                console.log("Data received")
                setState(res.data)

            })
            .catch(err => {
                console.log(err + "Error retrieveing data")
            })
        .catch(err => { console.log("error deleteing data") });
        })
    }, [params.id])  

    return (
        <div>
            <DisplayData data={state}></DisplayData>
        </div>
    )
}