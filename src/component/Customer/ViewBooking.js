function ViewBooking(){
    return(
        <><h2>Booking List</h2><table>
            <tr>
                <th>Booking ID</th>
                <th>Booking Name</th>
                <th>Booking Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Alfreds Futterkiste</td>
                <td>Hotel</td>
                <td>2022-01-01</td>
                <td>2022-01-05</td>
                <td>
                    <button style={{backgroundColor: 'green'}}>Edit</button>
                    <button style={{backgroundColor: 'red'}}>Delete</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Centro comercial Moctezuma</td>
                <td>Flight</td>
                <td>2022-01-10</td>
                <td>2022-01-15</td>
                <td>
                    <button style={{backgroundColor: 'green'}}>Edit</button>
                    <button style={{backgroundColor: 'red'}}>Delete</button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Ernst Handel</td>
                <td>Car Rental</td>
                <td>2022-01-20</td>
                <td>2022-01-25</td>
                <td>
                    <button style={{backgroundColor: 'green'}}>Edit</button>
                    <button style={{backgroundColor: 'red'}}>Delete</button>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>Island Trading</td>
                <td>Hotel</td>
                <td>2022-02-01</td>
                <td>2022-02-05</td>
                <td>
                    <button style={{backgroundColor: 'green'}}>Edit</button>
                    <button style={{backgroundColor: 'red'}}>Delete</button>
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>Laughing Bacchus Winecellars</td>
                <td>Flight</td>
                <td>2022-02-10</td>
                <td>2022-02-15</td>
                <td>
                    <button style={{backgroundColor: 'green'}}>Edit</button>
                    <button style={{backgroundColor: 'red'}}>Delete</button>
                </td>
            </tr>
            <tr>
                <td>6</td>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Car Rental</td>
                <td>2022-02-20</td>
                <td>2022-02-25</td>
                <td>
                    <button style={{backgroundColor: 'green'}}>Edit</button>
                    <button style={{backgroundColor: 'red'}}>Delete</button>
                </td>
            </tr>
        </table></>
    );
}

export default ViewBooking;