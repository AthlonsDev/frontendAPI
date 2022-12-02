import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

export default function UpdateForm(props) {
 const [state, setState] = useState({
    _id: "",
    Player_Name: "",
    Matches: 0,
    Inns: 0,
    Runs: 0,
    HS: 0,
    Ave: 0,
 })

 let url = "http://localhost:5000/"
 let params = useParams()

 const handleChange = (e) => {
    const value = e.target.value
    setState({ 
        ...state,
        [e.target.value]: value
    })
 }

 useEffect(() => {
    axios.get(url+"Display"+params.id)
    .then(res => {
        console.log("update " +res.data)
        setState(res.data)
    })
    .catch(err => {
        console.log("Error getting data")
    })
 }, [])

 const OnSubmit = (e) => {
    e.preventDefault()
    const playerData={
        Player_Name: state.Player_Name,
        Matches: state.Matches,
        Inns: state.Inns,
        Runs: state.Runs,
        HS: state.HS,
        Ave: state.Ave,
    }
    axios.post(url+"updateplayer" + params.id, playerData)
    .then(res => console.log(res.data))

    }

    return (
        <div>

        </div>
    )
}

