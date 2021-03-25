import React from "react";
import SenateCommitteeCard from "./SenateCommitteeCard";

function SenateCommittee({ committees }) {
  console.log(committees);
  return (
    <div className="container-fluid padding">
      <h1> Senate committees</h1>
      <div className="row padding">
        {committees.map((committee) => {
          //   console.log(committee);
          return (
            <SenateCommitteeCard key={committee.id} committee={committee} />
          );
        })}
      </div>
    </div>
  );
}

export default SenateCommittee;
