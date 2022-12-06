import "bootstrap/dist/css/bootstrap.min.css"
import Player_Form from './Components/Add'
import Player_Update from './Components/Update'
import Display_Data from './Components/DataFetch'
import Delete from './Components/Delete'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

// fetch('http://localhost:3001/')
// .then( res => {
//   if (res.ok) {
//     console.log("Data fetched successfully")
//   } else {
//     console.log("Fetch failed")
//   }
// })

// fetch('http://localhost:5000/addplayer', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     Player_Name: 'Player_1'
//   })
// }).then(res => {
//   return res.json()
// }).then(data => console.log(data))
//   .catch(err => console.log('Error: ' + err.message))


function App() {
  return (
    <Router>
    <div className="container">
      <center><h2> Player Records</h2></center>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <Link to="/" className="navbar-brand"><h4>Add a Player</h4></Link>
        <Link to="/Display" className="navbar-brand"><h4>Show All Players</h4></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Player_Form/>}></Route>
        <Route path="/edit/:id" element={<Player_Update/>}></Route>
        <Route path="/Display" element={<Display_Data/>}></Route>
        <Route path="/delete/:id" element={<Delete/>}></Route>      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
