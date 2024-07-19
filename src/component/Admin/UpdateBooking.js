import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BookingListContext = createContext();

const BookingListProvider = ({ children }) => {
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8083/api/booking')
            .then(response => {
                setBookingList(response.data);
            })
            .catch(error => {
                console.error('Error fetching booking list:', error);
            });
    }, []);

    return (
        <BookingListContext.Provider value={{ bookingList, setBookingList }}>
            {children}
        </BookingListContext.Provider>
    );
};

const BookingUpdateForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setBookingList } = useContext(BookingListContext);

    const initialBookingState = {
        bookingName: '',
        bookingType: '',
        startdate: '',
        enddate: ''
    };

    const [booking, setBooking] = useState(initialBookingState);

    useEffect(() => {
        if (id) {
            fetchBookingData(id);
        } else {
            setBooking(initialBookingState); // Reset form fields if adding new booking
        }
    }, [id]);

    const fetchBookingData = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8083/api/booking/${id}`);
            setBooking(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching booking data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBooking(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8083/api/booking/${id}`, booking)
            .then(response => {
                // Update booking list after successful update
                axios.get('http://localhost:8083/api/booking')
                    .then(response => {
                        setBookingList(response.data);
                    })
                    .catch(error => {
                        console.error('Error fetching updated booking list:', error);
                    });

                navigate('/admin-dash/booking-list'); // navigate to booking list after update
            })
            .catch(error => {
                console.error('Error updating booking:', error);
            });
    };

    return (
        <div className="booking-form-container">
            <h2>Update Booking</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="bookingName">Booking Name:</label>
                    <input
                        type="text"
                        id="bookingName"
                        name="bookingName"
                        value={booking.bookingName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bookingType">Booking Type:</label>
                    <input
                        type="text"
                        id="bookingType"
                        name="bookingType"
                        value={booking.bookingType}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startdate">Start Date:</label>
                    <input
                        type="date"
                        id="startdate"
                        name="startdate"
                        value={booking.startdate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="enddate">End Date:</label>
                    <input
                        type="date"
                        id="enddate"
                        name="enddate"
                        value={booking.enddate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="booking-group-update">
                    <button type="submit" className="btn btn-success">Update</button>
                    <button type="button" className="btn btn-danger" onClick={() => navigate('/admin-dash/booking-list')}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

const BookingList = () => {
    const { bookingList } = useContext(BookingListContext);

   
};

const App = () => {
    return (
        <BookingListProvider>
            <BookingUpdateForm />
            <BookingList />
        </BookingListProvider>
    );
};

export default App;