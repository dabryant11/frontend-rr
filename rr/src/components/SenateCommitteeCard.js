import React, { useState } from "react";

function SenateCommitteeCard({ committee, id }) {
  return (
    <div className="col-md-4">
      <div className="card">
        {/* <img
          className="card-img-top"
          src={committee.image}
          // style={{ width: "50px", height: "auto" }}
        /> */}
        <div className="card-body">
          {/* <h1>
            {committee.first_name} {committee.first_name}{" "}
          </h1> */}
          <h1>{committee.name}</h1>
          {/* <h4 className="card-title">District: {committee.district}</h4> */}
          <h3>Chair: {committee.chair}</h3>
          <h5>Vice Chair: {committee.vice_chair}</h5>
          <h7>Ranking Member: {committee.ranking_member}</h7>
          <br></br>

          <br></br>
          {/* {isFavorite ? (
            <button
              value={committee.id}
              onClick={toggleFav}
              className="btn btn-outline-secondary"
            >
              ★
            </button>
          ) : (
            <button onClick={toggleFav} className="btn btn-outline-secondary">
              ☆
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default SenateCommitteeCard;
