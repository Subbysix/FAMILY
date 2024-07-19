import React, { useState } from 'react';

const AddCustomer = () => {
  const [customerId, setCustomerId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [customers, setCustomers] = useState([]); // Add a state array to store customers

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = { customerId, name, email, address, phone };
    setCustomers([...customers, newCustomer]); // Add the new customer to the array
    console.log('Add customer:', newCustomer);
    // Reset the input fields
    setCustomerId('');
    setName('');
    setEmail('');
    setAddress('');
    setPhone('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Customer ID:
          <input type="number" value={customerId} onChange={(event) => setCustomerId(event.target.value)} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <br />
        <button type="submit">Add Customer</button>
      </form>
      <h2>Customer List:</h2>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>
            {customer.name} ({customer.customerId}) - {customer.email} - {customer.address} - {customer.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddCustomer;