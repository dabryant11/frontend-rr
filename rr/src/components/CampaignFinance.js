import React from "react";
import money from "./money.png"; // with import

function CampaignFinance({ finances }) {
  const followDaMoney = finances.map((finance) => {
    return (
      <div>
        <h2>{finance.name}</h2>
        <h2>{finance.district}</h2>
        <h2>{finance.num_of_donors} Donors</h2>
        <h2>${finance.total_contribtuions}</h2>
        <br></br>
        <br></br>
      </div>
    );
  });
  return (
    <div>
      <h1> $$$$$$$</h1>
      <img src={money} />
      {followDaMoney}
    </div>
  );
}

export default CampaignFinance;
