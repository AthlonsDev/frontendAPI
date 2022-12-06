import React, {useState} from 'react';
import axios from 'axios';

export default function Book_Form() {
    let url= "http://localhost:5000/"
    const [state, setState] = useState(
    {
        Player_Name: "",
        Matches: 0,
        Inns: 0,
        Runs: 0,
        HS: 0,
        Ave: 0,
    }
)

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
    e.preventDefault();
    const playerData={
    Player_Name: state.Player_Name,
    Matches: state.Matches,
    Inns: state.Inns,
    Runs: state.Runs,
    HS: state.HS,
    Ave: state.Ave,
    }

    axios.post(url+"addplayer", playerData)
        .then(res => console.log(res.data));

}
return (
    <div style={{marginTop: 10}}>
    <h3>Add Player</h3>
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
 );

}