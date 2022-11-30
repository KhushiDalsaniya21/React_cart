import React from "react";
import "./CardContainer.css";

function CardContainer(props) {
  return (
    <>
      {/* <div className="Cardcontainer">
        <div className="card1">
          <img
            src={props.image}
            className="card-img-top"
            alt="..."
            height="400px"
          />
          <div className="card-body">
            <p class="card-text">{props.name}</p>
          </div>
        </div>
      </div> */}
      <div className="col-2">
        <div class="card bg-dark text-white">
          <img src={props.image} class="card-img" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title">{props.name}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardContainer;
