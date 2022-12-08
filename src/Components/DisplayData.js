import {Link} from 'react-router-dom';




    export default function DisplayData(props) {
        const Players = props.data
        // console.log("Player: " + Players)
        return (
            <div>
                <h3>Player List</h3>
                <table className='table table-striped' class='table table-hover'>
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Matches</th>
                            <th>Inns</th>
                            <th>Runs</th>
                            <th>HS</th>
                            <th>Ave</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ShowData Players={Players}></ShowData>
                    </tbody>
                </table>
            </div>
        )

    }

    const ShowData = (props) => {
    
        const data = props.Players
        // console.log("Showdata called " + data);
        if (data.length>0) {
            return (data.map((players, index) => { 
                // console.log("Players " + players.Player_Name)
                return (
                // console.log("Players " + players.Player_Name)
                <tr>
                    <td>{players.Player_Name}</td>
                    <td>{players.Matches}</td>
                    <td>{players.Inns}</td>
                    <td>{players.Runs}</td>
                    <td>{players.HS}</td>
                    <td>{players.Ave}</td>
                    <td><Link to={'/edit/' + players._id}>Edit</Link></td>
                    <td><Link to={'/Delete/' + players._id}>Delete</Link></td>
                </tr>
            )
        })
        )
        } else {
            return (<h1>No Data Returned</h1>)
        }
    }
    