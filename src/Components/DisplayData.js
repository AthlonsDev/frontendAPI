import {Link} from 'react-router-dom';


const ShowData = (props) => {
    
    const data = props.TBooks
    if (data.length>0) {
        return (data.map((items, index) => { return (
            <tr>
                <td>{items.Player_Name}</td>
                <td>{items.Matches}</td>
                <td>{items.Inns}</td>
                <td>{items.Runs}</td>
                <td>{items.HS}</td>
                <td>{items.Ave}</td>
                <td><Link to={'/edit/' + items._id}></Link></td>
                <td><Link to={'/Delete/' + items._id}></Link></td>
            </tr>
        )
    })
    )
    } else {
        return (<h1>No Data Returned</h1>)
    }
    }

    export default function DisplayData(props) {
        const Players = props.items
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
                        <ShowData TBooks={Players}></ShowData>
                    </tbody>
                </table>
            </div>
        )

    }
    