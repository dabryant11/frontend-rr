import React from "react";
import HORBillCard from "./HORBillCard";

function HORBill({ bills }) {
  //   console.log(bills);
  return (
    <div className="container-fluid padding">
      <h1> Bills</h1>
      <div className="row padding">
        {bills.map((bill) => {
          //   console.log(bill);
          return <HORBillCard key={bill.id} bill={bill} />;
        })}
      </div>
    </div>
  );
}

export default HORBill;
