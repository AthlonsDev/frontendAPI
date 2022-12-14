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
    const newValue = e.target.value
    // console.log(newValue)
    setState({
        ...state, 
        [e.target.name]: e.target.value
    });
    console.log("newState: " + state)
 }


 const OnSubmit = (e) => {
    console.log(state.Player_Name)
    e.preventDefault()
    const playerData={
        Player_Name: state.Player_Name,
        Matches: state.Matches,
        Inns: state.Inns,
        Runs: state.Runs,
        HS: state.HS,
        Ave: state.Ave,
    }
    console.log(playerData);
    axios.post(url+"updateplayer/" + params.id, playerData)
        .then(res => console.log(res.data))

    }

    useEffect(() => {
        // console.log(params.id)
             axios.get("http://localhost:5000/getplayer/"+params.id).then(res =>{
                // console.log("Display: " + res.data)
                setState(res.data)
            }
        )
            .catch(err=>{console.log("Error retrieving data")
        })
        
        }, [])

    return (
        <div style={{marginTop: 10}}>
            <h3>Update Player By ID: {params.id}</h3>
            <form onSubmit={OnSubmit} method="Post">
    <div className="form-group">
    <label>Player Name: </label>
    <input className="form-control"
    type="text" name="Player_Name" value={state.Player_Name} onChange={handleChange}/>
    </div>
    <div className="form-group">
    <label>Matches: </label>
    <input className="form-control" name="Matches"value={state.Matches} onChange={handleChange}/>
    </div>
    <div className="form-group">
    <label>Inns: </label>
    <input className="form-control" name="Inns"value={state.Inns} onChange={handleChange}/>
    </div>
    <div className="form-group">
    <label>Runs: </label>
    <input className="form-control" name="Runs"value={state.Runs} onChange={handleChange}/>
    </div>
    <div className="form-group">
    <label>Ave: </label>
    <input className="form-control" name="Ave"value={state.Ave} onChange={handleChange}/>
    </div>
    <div className="form-group" style={{marginTop: 25}}>
    <center>
    <input type="submit" value="Add this Player"
    className="btn btn-primary" />
    </center>
    </div>

    </form>
        </div>
    )
}

