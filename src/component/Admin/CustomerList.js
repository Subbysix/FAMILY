import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const CustomerList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8083/api/customer/all')
      .then((response) => {
        setData(response.data);
      })
  }, []);

  const handleDelete = (customerId) => {
    axios.delete(`http://localhost:8083/api/customer/delete/${customerId}`)
      .then(() => {
        // Remove deleted booking from state
        setData(data.filter((item) => item.customerId !== customerId));
      })
      .catch((error) => {
        console.error('Error deleting customer:', error);
        // Handle error if necessary
      });
  };

  return (
    <>
      <div className="container">
        <h2>Customer List</h2>
        <table>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.customerId}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td>
                  <button style={{ backgroundColor: 'green' }}>Edit</button>
                  <button style={{ backgroundColor: 'red' }} onClick={() => handleDelete(item.customerId)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  )
}