import axios from "axios";
import { useEffect, useState } from "react";

function DashA() {
  // create variable 1-> store "count" 2 -> set value of count to count
  const [countCustomer, setCountCustomer] = useState(0);

  const [totalbooking, setTotalBooking] = useState(0);

  useEffect(()=>{
    axios.get('http://localhost:8083/api/customer/count')
    .then((response)=>{
      setCountCustomer(response.data);
    });
  })

  useEffect(()=>{
    axios.get( 'http://localhost:8083/api/booking/count')
    .then((response)=>{
      setTotalBooking(response.data)
    });
  })


 return(
<div class="container">
  <div class="row">
    <div class="col-md-3">
      <div class="card-counter primary">
        <i class="fa fa-code-fork"></i>
        <span class="count-numbers">{countCustomer}</span>
        <span class="count-name"> Total customer</span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card-counter danger">
        <i class="fa fa-ticket"></i>
        <span class="count-numbers">{totalbooking}</span>
        <span class="count-name"> Total booking</span>
      </div>
    </div>
    </div>
    </div>

    );

}
export default DashA;