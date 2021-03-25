import React from "react";
import HORCommitteeCard from "./HORCommitteeCard";

function HORCommittee({ committees }) {
  console.log(committees);
  return (
    <div className="container-fluid padding">
      <h1> HOR committees</h1>
      <div className="row padding">
        {committees.map((committee) => {
          //   console.log(committee);
          return <HORCommitteeCard key={committee.id} committee={committee} />;
        })}
      </div>
    </div>
  );
}

export default HORCommittee;
