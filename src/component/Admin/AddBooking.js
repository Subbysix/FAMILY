import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBookingForm = () => {
  const navigate = useNavigate();

  const [bookingName, setBookingName] = useState('');
  const [bookingType, setBookingType] = useState('');
  const [startdate, setStartDate] = useState('');
  const [enddate, setEndDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBooking = {
      bookingName,
      bookingType,
      startdate,
      enddate,
    };

    axios.post('http://localhost:8083/api/booking/add', newBooking)
      .then((response) => {
        console.log('Booking added successfully:', response.data);
        alert('Booking added successfully!');
        navigate('/admin-dash/booking-List'); // Navigate to another page after successful add
      })
      .catch((error) => {
        console.error('Error adding booking:', error);
        alert('Error adding booking!');
      });
  };

  return (
    <div className="booking-form">
      <h1>Add Booking</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookingName">Booking Name:</label>
          <input type="text" id="bookingName" name="bookingName" required value={bookingName} onChange={(e) => setBookingName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="bookingType">Booking Type:</label>
          <input type="text" id="bookingType" name="bookingType" required value={bookingType} onChange={(e) => setBookingType(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="startdate">Start Date:</label>
          <input type="date" id="startdate" name="startdate" required value={startdate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="enddate">End Date:</label>
          <input type="date" id="enddate" name="enddate" required value={enddate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <button type="submit">Add Booking</button>
      </form>
    </div>
  );
};

export default AddBookingForm;
