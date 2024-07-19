import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const BookingList = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate hook

    useEffect(() => {
        axios.get( 'http://localhost:8083/api/booking/all')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error); // Set error state if request fails
                console.error('Error fetching bookings:', error);
            });
    }, []);

    const handleEdit = (bookingId) => {
        // Implement navigation or edit logic here
        console.log(`Editing booking with ID: ${bookingId}`);
        // Example navigation using useNavigate
        navigate(`/admin-dash/booking_update/${bookingId}`); // Navigate to edit page with bookingId
    };

    const handleDelete = (bookingId) => {
        axios.delete(`http://localhost:8083/api/booking/delete/${bookingId}`)
            .then(() => {
                // Remove deleted booking from state
                setData(data.filter((item) => item.bookingId !== bookingId));
            })
            .catch((error) => {
                console.error('Error deleting booking:', error);
                // Handle error if necessary
            });
    };
    const handleAddBooking = () => {
        navigate('/admin-dash/booking_add');
    };

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    return (
        <>
        
            <h1>Booking List</h1>
            <button className="add-patient" onClick={handleAddBooking}>Add Booking</button>
            <table>
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Booking Name</th>
                        <th>Booking Type</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.bookingId}>
                            <td>{item.bookingId}</td>
                            <td>{item.bookingName}</td>
                            <td>{item.bookingType}</td>
                            <td>{item.startdate}</td>
                            <td>{item.enddate}</td>
                            <td>
                                <button style={{ backgroundColor: 'green' }} onClick={() => handleEdit(item.bookingId)}>Edit</button>
                                <button style={{ backgroundColor: 'red' }} onClick={() => handleDelete(item.bookingId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default BookingList;
