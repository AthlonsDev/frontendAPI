import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';



const RecordUpdate = (props) => {
  // url might be updated with routing hence let 
  let url = 'http://localhost:3001'
  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    topic: "",
    pubyear: 1990
  })
}

const HandleClick = (e) => {
  const [state, setState] = useState
  const value = e.target.value;
  setState({
    ...state,
    [e.target.value]: value
  })
  let url = 'http://localhost:3000'

  console.log('Function called')
  axios.get(url)
    .then(res=> {
      console.log('data received')
      console.log(res.data)
    })
}

function App() {
  return (
    <div className="App-main">
      <div className="navBar">
        <h1>Title</h1>
      </div>
      <div className="leftColumn">
        List of Data
        <button onClick={HandleClick}>Click</button>
        <table className="list">
            
        </table>
        <div className="detailView">
          <h1>Main View</h1>
        </div>
      </div>

    </div>
  );
}

export default App;
