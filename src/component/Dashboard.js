import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="header">
        <h1>ONLINE BOOKING ADVERTISEMENT ON NEWSPAPER</h1>
      </div>
      <div className="navigation">
  <header>
  <nav>
    <h3>Customer Navigation</h3>
    <ul>
      <li><Link to='booking'>Bookings </Link></li>
      <li><Link to='view-booking' >View Booking</Link></li>
      <li><Link to='change'>Change Account</Link></li>
      <li><Link to='/'>logout</Link></li>
    </ul>
  </nav>
</header>

      </div> 
      <div className="main">
            <Outlet/>
        </div>

      <div className="footer">
          <h4> onlinebookingonnewspaper@2024</h4>
      </div>
    </>
  );
}

export default Dashboard;
