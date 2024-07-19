import Dashboard from "../Dashboard";

function Booking() {
  return (
    <>
      <div class="container">
        <h2>Booking Form</h2>
        <form>
          <div className="row">
            <div className="col-8">
              <h4>Booking Name</h4>
              <input type="text" placeholder="Business name" />
            </div>

            <div className="col-8">
              <h4>Booking Type</h4>
              <input type="text" placeholder="Business type" />
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <h4>Start Date </h4>
              <input type="date" />
            </div>

            <div className="col-8">
              <h4>End Date</h4>
              <input type="date" />
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <h4>Description</h4>
              <input type="text" />
            </div>

            <div className="col-8">
                <h4>Upload Document </h4>
              <input type="file" />
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <br />
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Booking;
