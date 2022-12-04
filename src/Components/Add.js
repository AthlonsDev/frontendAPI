import React, {useState} from 'react';
import axios from 'axios';

export default function Book_Form() {
    let url= "http://localhost:5000/"
    const [state, setState] = useState(
    {
        _id: "",
        Player_Name: "",
        Matches: 0,
        Inns: 0,
        Runs: 0,
        HS: 0,
        Ave: 0,
    }
)

const handleChange = (e) => {
    const value = e.target.value
    setState({
        ...state,
        [e.target.name]: value
    })
}

const OnSubmit = (e) => {
    e.preventDefault();
    const data={
    _id: "334896431578987231265822", 
    Player_Name:'Player Hardcoded_1',
    Matches:100,
    Inns: 100,
    Runs: 100,
    HS: 100,
    Ave: 100
    
    // author:state.author,
    // Topic:state.Topic,
    // formate:state.formate
    }
    axios.post(url+"addplayer", data)
        .then(res => console.log(res.data));

    
}
return (
    <div style={{marginTop: 10}}>
    <h3>Add Player</h3>
    <form onSubmit={OnSubmit} method="Post">
    <div className="form-group">
    <label>Player Name: </label>
    <input className="form-control"
    type="text" name="booktitle"
    value={state.booktitle}
    onChange={handleChange}/>
    </div>
    <div className="form-group">
    <label>Matches: </label>
    <input className="form-control"
    name="author"value={state.Matches}
    onChange={handleChange}/>
    </div>
    <div className="form-group">
    <label>Inns: </label>
    <input className="form-control"
    name="author"value={state.Inns}
    onChange={handleChange}/>
    </div>
    <div className="form-group">
    <label>Runs: </label>
    <input className="form-control"
    name="author"value={state.Runs}
    onChange={handleChange}/>
    </div>
    <div className="form-group">
    <label>Ave: </label>
    <input className="form-control"
    name="author"value={state.Ave}
    onChange={handleChange}/>
    </div>
    <div className="form-group" style={{marginTop: 25}}>
    <center>
    <input type="submit" value="Add this Player"
    className="btn btn-primary" />
    </center>
    </div>

    </form>

    </div>
 );

}