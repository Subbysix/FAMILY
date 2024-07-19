import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import { Route, Router, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Booking from './component/Customer/Booking';
import ViewBooking from './component/Customer/ViewBooking';
import ChangeAccont from './component/Customer/ChangeAccont';
import DashAdmin from './component/Admin/DashAdmin';
import DashA from './component/Admin/DashA';
import BookingList from './component/Admin/BookingList';
import ChangeInfo from './component/Admin/ChangeInfo';
import { CustomerList } from './component/Admin/CustomerList';
import UpdateBooking from './component/Admin/UpdateBooking';
import AddBooking from './component/Admin/AddBooking';
import AddCustomer from'./component/Admin/AddCustomer';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/dash' element={<Dashboard/>} >
          <Route index element={<Booking/>} />
          <Route path='booking' element={<Booking/>} />
          <Route path='view-booking' element={<ViewBooking/>} />
          <Route path='change' element={<ChangeAccont/>}/>
        </Route>

      <Route path='/admin-dash' element={<DashAdmin/>}>
        <Route index element={<DashA/>} />
      <Route path='admin' element={<DashA/>}/>
      <Route path='booking-List' element={<BookingList/>}/>
      <Route path='change-info' element={<ChangeInfo/>}/>
      <Route path='customer-list' element={<CustomerList/>} />
      <Route path='booking_update' element={<UpdateBooking/>}/>
      <Route path='booking_update/:id' element={<UpdateBooking/>}/>
      <Route path='booking_add' element={<AddBooking/>}/>
      <Route path='booking_add/:id' element={<AddBooking/>}/>
       <Route path='add_customer' element={<AddCustomer/>}/> 

      </Route>
       

      </Routes>
  );
}

export default App;
