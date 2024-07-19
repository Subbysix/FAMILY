import { Link, Outlet } from "react-router-dom";

function DashAdmin() {
  return (
    <>
      <div className="header">
        <h1>ONLINE BOOKING ADVERTISEMENT ON NEWSPAPER</h1>
      </div>
      <div className="navigation">
  <header>
  <nav>
    <h3>Admin Navigation</h3>
    <ul>
      <li><Link to='admin'>Dashboard</Link></li>
      <li><Link to='change-info'>Change Info</Link></li>
      <li><Link to='booking-List'>Booking List</Link></li>
      <li><Link to='customer-list'>Customer List</Link></li>
      <li><Link to='/'>logout</Link></li>
    </ul>
  </nav>
</header>

      </div> 
      <div className="main">
            <Outlet/>
        </div>

      {/* <div className="footer">
          <h4> onlinebookingonnewspaper@2024</h4>
      </div> */}
    </>
  );
}

export default DashAdmin;
