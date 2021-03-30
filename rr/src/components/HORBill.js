import React, { useState } from "react";
import HORBillCard from "./HORBillCard";

function HORBill({ bills }) {
  const [searchQuery, setSearchQuery] = useState("");
  //   console.log(bills);
  const searchedBills = bills.filter((bill) =>
    // console.log("topppppp", bill.subject[0])
    bill.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log("midddd", searchedBills);
  return (
    <div className="container-fluid padding">
      <div className="row welcome text-center">
        <div className="col-12">
          <h1> Bills</h1>
          <a
            className="twitter-timeline"
            href="https://twitter.com/lscohio?ref_src=twsrc%5Etfw"
          >
            <img src="https://pbs.twimg.com/profile_images/1253725624788606981/lNguoQpR.jpg" />
            <br></br>
            Tweets by lscohio
          </a>
          <br></br>

          <br></br>
          <div className="searchbar">
            <label htmlFor="search">Search Bills By Subject: </label>
            <input
              type="text"
              // value={search}
              id="search"
              placeholder=""
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
      <div className="row padding">
        {searchedBills.map((bill) => {
          // console.log(bill);
          // const newSub = bill.subject;
          // console.log(newSub);
          // const jsxSub = newSub.slice(1, -1);
          // console.log(jsxSub);
          // const newerSub = newSub.replace("", "");
          // console.log(newerSub[0]);
          // const newestSub = jsxSub.replace("", "");
          // console.log(newestSub[0]);
          // const splat = newerSub.split(", ");
          // console.log(splat[0]);
          // const jsxsplat = newestSub.split(", ");
          // console.log(jsxsplat[0]);
          return (
            <HORBillCard
              key={bill.id}
              bill={bill}
              // bill={bills.filter((bill) =>
              //   bill.name.toLowerCase().includes(searchQuery.toLowerCase()
            />
          );
        })}
      </div>
    </div>
  );
}

export default HORBill;
