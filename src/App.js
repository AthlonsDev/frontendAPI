 import "bootstrap/dist/css/bootstrap.min.css"
import Player_Form from './Components/Add'
import Player_Update from './Components/Update'
import Display_Data from './Components/DataFetch'
import Query_Matches from './Components/QueryMatches'
import Delete from './Components/Delete'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

function App() {
  return (
    <Router>
    <div className="container">
      <center><h2> Player Records</h2></center>
      <nav className="navbar bg-secondary">
        <Link to="/" className="navbar-brand  text-white"><h4>Add a Player</h4></Link>
        <Link to="/Display" className="navbar-brand  text-white" ><h4>Show All Players</h4></Link>
        <Link to="/QueryMatches" className="navbar-brand  text-white"><h4>Query Matches</h4></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Player_Form/>}></Route>
        <Route path="/edit/:id" element={<Player_Update/>}></Route>
        <Route path="/Display" element={<Display_Data/>}></Route>
        <Route path="/delete/:id" element={<Delete/>}></Route>      
        <Route path="/QueryMatches" element={<Query_Matches/>}></Route> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
